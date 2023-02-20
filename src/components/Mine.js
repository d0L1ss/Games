import React from 'react';
import "./Mine.css"

const Mine = ({activeeee, setActiveeee, childrennnn}) => {
    return (
        <div className={activeeee ? "modallll activeeee" : "modallll"} onClick={() => setActiveeee(false)}>
            <div className={activeeee ? "modal-contttt activeeee" : "modal-contttt"} onClick={e => e.stopPropagation()}>
                {childrennnn}
                <h1 className="oglav1">Mine, Minecraft Fest 2023</h1>
              <p className="date1">07 Октября 2023</p>
              <p className="opis1">Minecraft Festival 2023 — это поток объявлений Minecraft 2023 года, он состоялся 7 октября 2023 года. Он изменил название потоков с Minecraft Live на Minecraft Festival.</p>
              <p className="opis3"> В нем было объявлено о многих функциях, которые появятся в следующем году, и намеке на будущее Minecraft. Mojang также анонсировала следующие 3 крупных обновления для Minecraft. В этом году впервые было проведено два голосования.</p>
            </div>
        </div>
    );
};

export default Mine;