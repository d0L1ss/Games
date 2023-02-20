import React from 'react';
import "./Rust.css"

const Mine = ({activeeeee, setActiveeeee, childrennnnn}) => {
    return (
        <div className={activeeeee ? "modalllll activeeeee" : "modalllll"} onClick={() => setActiveeeee(false)}>
            <div className={activeeeee ? "modal-conttttt activeeeee" : "modal-conttttt"} onClick={e => e.stopPropagation()}>
                {childrennnnn}
                <h1 className="oglavv">Новый Ивент на Rust “Король Горы”</h1>
              <p className="datee">16 Января 2023</p>
              <p className="opiss">Новый ивент в Rust “Король Игры” - в нем вы должны показать, кто настоящий король на сервере. Заберитесь на самую высокую точку на карте(на любую гору) и оставайтесь на ней до самого конца.</p>
              <p className="opisanie">Вы можете строиться там, но не можете находиться в зоне действия своего шкафа. Побеждает игрок, который к концу ивента будет выше, чем остальные игроки.</p>
            </div>
        </div>
    );
};

export default Mine;