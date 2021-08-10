import React from 'react';
import Main from '../app-main/app-main';
import Menu from '../app-menu/app-menu';
import MenuBlock from '../app-menu/app-menu-block';
import Films from '../films/films';
import Footer from '../app-menu/app-footer';
import Service from '../../service/service';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

const Enter = () => {
    return (
        <div className="main-unit">
            <Main/>
            <Menu menu={data}/>
            <MenuBlock info={info}/>
            <Footer footer={footer}/>
        </div>
    )
}

const App = () => {
    return (
        <Router>
            <Route path='/enter' component={Enter}/>
            <Route path='/films' component={Films}/>
            <Redirect from='/' to='/enter'/>
        </Router>
    )
}



const data = [
    {title:'Смотреть на телевизоре.', info:'Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.',content:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'},
    {title:'Загружайте сериалы для просмотра офлайн.', info:'Сохраняйте видео в избранном, и у вас всегда будет, что посмотреть.',content:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'},
    {title:'Смотрите где угодно.', info:'Смотрите фильмы и сериалы на телефоне, планшете, ноутбуке и телевизоре без ограничений и без дополнительной платы.',content:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'},
    {title:'Создавайте профили для детей.', info:'Подарите детям мир приключений с их любимыми героями. Он создан специально для них и уже доступен с вашей подпиской.',content:'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd'}
];

const info = [
    {question:'Что из себя представляет Z?', answer:'Вы можете смотреть сколько угодно и когда угодно без рекламы по фиксированной низкой цене за месяц. Вы всегда сможете найти что-нибудь новое — новые фильмы и сериалы добавляются каждую неделю!', id:'0'},
    {question:'Сколько стоит Z?', answer:'Z — это стриминговый сервис, позволяющий смотреть разнообразные удостоенные наград фильмы, сериалы, аниме, документальные фильмы и многое другое на тысячах устройств с подключением к интернету.', id:'1'},
    {question:'Где смотреть?', answer:'Смотрите Z на смартфоне, планшете, Smart TV, ноутбуке или телеприставке за единую фиксированную ежемесячную плату. Стоимость планов составляет от 10 ₽ до 59 ₽ в месяц. Никаких лишних расходов и обязательств.', id:'2'},
    {question:'Как отменить подписку?', answer:'Z — гибкий сервис. Никаких запутанных контрактов и обязательств. Вы можете легко отменить подписку на сайте в два клика. Никакой платы за отмену не взимается, открыть или закрыть аккаунт можно когда угодно.', id:'3'},
    {question:'Что можно посмотреть на z?', answer:'Z предлагает огромную библиотеку полнометражных фильмов, документальных фильмов, сериалов, аниме, удостоенного наград оригинального контента Z и многое другое. Смотрите сколько угодно и когда угодно.', id:'4'}
];

const footer = [
    {point1:'Распространенные вопросы',point2:'Для инвесторов', point3:'Конфиденциальность', point4:'Проверка скорости'},
    {point1:'Центр поддержки',point2:'Вакансии', point3:'Настройки файлов cooki', point4:'Юридические уведомления'},
    {point1:'Аккаунт',point2:'Способы просмотра', point3:'Корпоративная информация', point4:'Только на Z'},
    {point1:'Медиацентр',point2:'Правила использования', point3:'Свяжитесь с нами'}
];

export default App;
