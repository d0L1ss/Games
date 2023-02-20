import React from 'react';
import "./Watch.css"

const Watch = ({activeee, setActiveee, childrennn}) => {
    return (
        <div className={activeee ? "modalll activeee" : "modalll"} onClick={() => setActiveee(false)}>
            <div className={activeee ? "modal-conttt activeee" : "modal-conttt"} onClick={e => e.stopPropagation()}>
                {childrennn}
                <h1 className="oglav">Watchdogs: новый релиз</h1>
              <p className="date">27 Января 2023</p>
              <p className="opis">Спустя один год и три месяца, прошедших с момента официального релиза экшена Watch Dogs: Legion, компания Ubisoft довольно неожиданно сообщила о прекращении развития игры, назвав обновление 5.6 последним выпущенным для нее крупным апдейтом.</p>
              <p className="opis2">Тем не менее согласно письму, опубликованному разработчиками на официальном сайте проекта, вслед за окончанием срока действия шкалы наград “Мятежники”, запланированным на 22 января, все же начнется пятый сезон - “Полоски”, но уже после пользователи могут не рассчитывать на новый контент.</p>
            </div>
        </div>
    );
};

export default Watch;