import { Component } from '../component';

import style from './user-list.css';
import template from './user-list.html';
import {createTemplate} from '../htmlCssService';
var design = createTemplate(template, style);
let dependencies = {};


export class UserList extends Component {
    static get userService() {
        return dependencies.userService;
    }

    static set userService(dependency) {
        dependencies.userService = dependency;
    }

    get users() {
        return Array.from(this.shadowRoot.querySelectorAll('ta-user'));
    }

    get pagination() {
        return this.shadowRoot.querySelector('ta-pagination');
    }

    get list() {
        return this.shadowRoot.getElementById('list');
    }

    get currentPage() {
        return +this.getAttribute('current-page');
    }

    set currentPage(value) {
        value ? this.setAttribute('current-page', value) : this.removeAttribute('current-page');
    }

    get offset() {
        return (this.currentPage - 1) * this.records;
    }


    constructor() {
        super();
        this.attachTemplate(design);
        this.records = 20;
        this.currentPage = 1;
        this.addShadowEventListener('ta-user', 'click', this.select);
        this.addShadowEventListener('ta-pagination', 'change', this.changePage);
    }

    connectedCallback() {
        this.renderList();
    }

    changePage(event) {
        this.currentPage = event.detail.page;
        this.renderList();
        this.selectedUser = null;
        this.dispatchEvent(new Event('userSelected', {bubbles: true, composed: true}));
    }

    select(event, user) {
        this.users.map(user => user.classList.remove('selected'));
        user.classList.add('selected');
        this.selectedUser = user;
        this.dispatchEvent(new Event('userSelected', {bubbles: true, composed: true}));
        
    }

    emptyList() {
        while (this.list.hasChildNodes()) {
            this.list.removeChild(this.list.lastChild);
        }
    }

    renderList() {
        this.emptyList();

        UserList.userService.getUsers(this.offset, this.records).then(response => {
            this.pagination.totalRecords = response['recordsTotal'];
            this.pagination.recordsPerPage = this.records;
            this.pagination.currentPage = this.currentPage;
            
            response.data.map(userData => {
                const User = customElements.get('ta-user');
                const user = new User();

                user.id = userData['user_id'];
                user.name = userData['user_name'];
                user.custom = userData['user_custom'];
                user.balance = userData['balance'];
                user.email = userData['email'];
                user.registerDate = new Date(userData['register_date']);
                user.walletAmount = userData['wallet_amount'];
                user.walletCurrency = userData['wallet_currency'];
                user.enabled = userData['enabled'];

                this.list.appendChild(user);
                
            });
        });

        

    }
}