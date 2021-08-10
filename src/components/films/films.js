import React from 'react';
import NavBar from '../navBar/navBar';
import Content from '../content/content';
import ContentItem from '../content-item/content-item';
import Footer from '../app-menu/app-footer';


const Films = () => {
    return(
        <>
            <NavBar/>
            <Content/>
            <ContentItem rec={filmsRecommended} title={'Рекомендуем Вам'}/>
            <ContentItem rec={newFilms} title={'Недавно в прокате'}/>
            <ContentItem rec={topFilms} title={'Топ фильмов'}/>
            <ContentItem rec={reductions} title={'Выбор редакции'}/>
            <Footer footer={footer}/>
        </>
    )
}

export default Films;


const filmsRecommended = [
    {img:'https://sun9-23.userapi.com/impg/wKhVByAuJMiuVcyT5xfid5zBN7tjJOka80pYig/FNOUyJCtOeI.jpg?size=300x150&quality=96&sign=04d7472e82b64f602a34849fe1e3c8be&type=album'},
    {img:'https://sun4-12.userapi.com/impg/bqhPh5m4cVj1H2xpgqTqhQ_Zmq16UXhuUv-l7w/SjnOLGqMAtE.jpg?size=300x150&quality=96&sign=aef7f83f2bdd90c6655c0a2af81634cb&type=album'},
    {img:'https://sun9-87.userapi.com/impg/Sx0CjfLkbmOzltGxNLNo0RTZdXfyvahNcOU6Dg/5vhrbt0Uiyo.jpg?size=300x150&quality=96&sign=81bf33b822d58f147572596b52965feb&type=album'},
    {img:'https://sun4-12.userapi.com/impg/_jjmUF647cMUAnBS2uWGY210Uw9BqQa4WT6-jQ/0Ssb-4sN7K0.jpg?size=300x150&quality=96&sign=eec6050888b770cf049c80bccdd74c54&type=album'},
    {img:'https://sun9-15.userapi.com/impg/-9XH_LcmG9gP87tnRdYsWjzpVpeYSbV0CXuO3A/eDgkME7qD7Q.jpg?size=300x150&quality=96&sign=a7ea9f0d10e4f546e8ee1f3409952ce5&type=album'}
];

const newFilms = [
    {img:'https://sun9-81.userapi.com/impg/P1Gg2wqzoEGL2hoikfpT8HHxbK2Muztbg9qmzQ/A_mYCFxkeso.jpg?size=300x150&quality=96&sign=0bc625e9482e868ab4acc48464fd446e&type=album'},
    {img:'https://sun9-37.userapi.com/impg/MVcJcIFIIx9DT08zp7Akt0kQz32YK3KlxwIrcg/dfy5HyJwF54.jpg?size=300x150&quality=96&sign=c3f528ee805defdac640cb1312a9b75a&type=album'},
    {img:'https://sun9-53.userapi.com/impg/aTLOJDCYUR6URzsqhy4Yw7BB3nIlAnG4oxEg0Q/bXXzLi-AHS4.jpg?size=300x150&quality=96&sign=e4a17b4ca94d97691dd8ce838cb5bd27&type=album'},
    {img:'https://sun9-15.userapi.com/impg/-9XH_LcmG9gP87tnRdYsWjzpVpeYSbV0CXuO3A/eDgkME7qD7Q.jpg?size=300x150&quality=96&sign=a7ea9f0d10e4f546e8ee1f3409952ce5&type=album'},
    {img:'https://sun9-83.userapi.com/impg/T_t9UOBbN3q3a9H2fAOXg6B95qltXDjHeZ9CpQ/-AMcrLiyAWw.jpg?size=300x150&quality=96&sign=af7fdfd983cd4fe6624d78d92923d460&type=album'}
];

const topFilms = [
  {img:'https://sun9-62.userapi.com/impg/podrL0irCGhNclE6ItNpq4Ya-M5RzbSIsmPWDA/VOTKqrOw3Ec.jpg?size=300x150&quality=96&sign=7bc98a8d5c8fb9116a07f3d711b417a6&type=album'},
  {img:'https://sun9-49.userapi.com/impg/wmNrMqFyHS_tH9gQCnEqUsg6KE_DFCAQBx6PmQ/Ja5PFTPD4TA.jpg?size=300x150&quality=96&sign=9b7e690e6205efbda8a6124ce560e109&type=album'},
  {img:'https://sun9-80.userapi.com/impg/hQYKKPSlpy5SrLcrkD8RUqjSuoYEfU1oFaZT6w/nJ-M5cnfza0.jpg?size=300x150&quality=96&sign=5209b71bf8e78a8446f5de35a95e8059&type=album'},
  {img:'https://sun9-16.userapi.com/impg/vacQsfNM6poZ8KnefA1jopMWqnG0uymMSzbdBA/pT9uugmcpmo.jpg?size=300x150&quality=96&sign=2f87c4ceaecc453f6a129dd02db2a19b&type=album'},
  {img:'https://sun9-63.userapi.com/impg/KRAor3MiQ2Nw6A9G18BDGsOueGB-d1EpMze0Jg/gTwu4CrXDEA.jpg?size=300x150&quality=96&sign=e6a0179a20400076e5637f2ab2723fc9&type=album'},
];

const reductions = [
  {img:'https://sun9-4.userapi.com/impg/CT6RMAvtqyrePb4hKVIqHktHPXVyabhzthfIVA/mY4aPMkdmY0.jpg?size=300x150&quality=96&sign=0ab04119de960d1f2129f5825a740187&type=album'},
  {img:'https://sun9-40.userapi.com/impg/UNQMWzZ42Bl7-zyCzvu4QNTuvDTiP5TM7Jk2qw/KuSRnGchfFQ.jpg?size=300x150&quality=96&sign=bd4f578b879ac9790945a6065004718b&type=album'},
  {img:'https://sun9-76.userapi.com/impg/GCOj3_HX_QQBp3aJWP2fz3-LZBwLsQs_kQIhSw/ZInlh1MMLwM.jpg?size=300x150&quality=96&sign=029280ac6419ceeeacb4218d58b0688c&type=album'},
  {img:'https://sun9-79.userapi.com/impg/V6EGT52G-NZElKbBRULSkjIHRTcxbEukfkUysA/PZOuwz1Y_JI.jpg?size=300x150&quality=96&sign=332aeaebbdde47b08d2baff11ae41148&type=album'},
  {img:'https://sun9-77.userapi.com/impg/55mLXXQvbWg-l9MWYu-yV3edIGxaYKRQ0fz-eA/3hBTyHMOIBE.jpg?size=300x150&quality=96&sign=cdeef38fe2afaf57c81d9af5ac339267&type=album'},
];

const footer = [
    {point1:'Распространенные вопросы',point2:'Для инвесторов', point3:'Конфиденциальность', point4:'Проверка скорости'},
    {point1:'Центр поддержки',point2:'Вакансии', point3:'Настройки файлов cooki', point4:'Юридические уведомления'},
    {point1:'Аккаунт',point2:'Способы просмотра', point3:'Корпоративная информация', point4:'Только на Z'},
    {point1:'Медиацентр',point2:'Правила использования', point3:'Свяжитесь с нами'}
];

// filmsRecommended.map((item, i) => {
//     console.log(item.img)
// })
