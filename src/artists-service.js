 /*class ManService {
    constructor(){
       this.artists = artists;
    }
    getArtists(){
        return this.artists.data;
    }

    addArtist(name,date,site,instagram,information){
        this.artists.data.push({
            //"user_id":++artists.maxID,
            "name":name,
            "date":date,
            "site":site,
            "instagram":instagram,
            "information":information
        })
    }

 }*/
 
/*export function getArtists(){
    return artirsts;
}*/

export let artists = {
    "maxID" : 10,
    "data": [
        {
           // "user_id" : 0,
            "name" : "Юрий Столяров",
            "date": "Sat Aug 13 1978",
            "site": "http://stolyarovyuriy.com/",
            "instagram": "@stolyarovyuriy",
            "information":"Будучи старшеклассником, он увлекся косметологией, визажем и прочей деятельностью в сфере красоты. У Юрия Столярова было достаточное количество клиенток, но сомнение по поводу востребованности профессии в конце 1990-х годов не оставляло его. Юрий Столяров окончил факультет журналистики, но когда ему исполнилось двадцать пять лет, вновь вернулся к работе над совершенным макияжем. В 2007 году Юрий Столяров присоединился к визажистам компании Maybelline New York и начал представлять косметическую марку на российском рынке. В 2011 году Юрий Столяров стал ведущим визажистом Недели моды в Москве. Кроме того, его можно увидеть в кадре программ «Модный приговор» на Первом канале и «Золушка перезагрузка», «Дурнушек.нет», «Перезагрузка» с Ксенией Бородиной на ТНТ. Юрий Столяров помогает участницам телевизионных шоу подчеркнуть все достоинства лица и устраивает мастер-классы"
        },
        {
           // "user_id" : 1,
            "name" : "Мария Вискунова",
            "date": "Sun May 14 1989",
            "site": "https://www.youtube.com/channel/UCFRtJZNybdYw9-a0OTxAbEg",
            "instagram": "@rastushevka",
            "information":"Будучи подростком, Вискунова мечтала стать профессиональной баскетболисткой и посещала специальную секцию. Окончив школу, Вискунова отправилась в Екатеринбург. Девушка хотела освоить специальность психолога и поступила здесь в соответствующий институт. В юной девушке преобладало желание стать профессиональным визажистом, и она решилась. Теперь ей пришлось все начинать сначала. Обучаться искусству макияжа Вискунова решила с помощью видеоуроков на YouTube, однако поначалу у нее не получалось. Правда, целеустремленную Машу уже было не остановить. Она сделала все, что было в ее силах, чтобы достичь хороших результатов, и ей это удалось. Чуть позже Мария получила профильное образование на косметологических курсах. Сейчас она невероятно популярна в истаграмм, она имеет более миллиона подписчиков. В отличие от странички в 'Инстаграме', канал Вискуновой на YouTube пока еще лишь набирает известность."
        },
        {
           // "user_id" : 2,
            "name" : "Владимир Калинчев",
            "date": "Sun Apr 09 1972",
            "site": "http://www.kalinchev.com/",
            "instagram": "@vladimirkalinchev",
            "information":"В 1993 году, когда «было непонятно, чем заняться», выпускник киновидеотехнического колледжа Володя Калинчев пошел на курсы макияжа. С тех пор он успел переехать в Москву, обрасти звездной клиентурой и стать серебряным призером чемпионата Европы среди стилистов."
        }
    ]
};