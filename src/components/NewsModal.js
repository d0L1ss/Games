import React from 'react';
import "./NewsModal.css"

const NewsModal = ({activeeeeee, setActiveeeeee, childrennnnnn}) => {
    return (
        <div className={activeeeeee ? "modallllll activeeeeee" : "modallllll"} onClick={() => setActiveeeeee(false)}>
            <div className={activeeeeee ? "modal-contttttt activeeeeee" : "modal-contttttt"} onClick={e => e.stopPropagation()}>
                {childrennnnnn}
                
                <h1 className="oglavnew">Все новости</h1>
                <img src='/img/watchnew.png' className='watchik' />
                <img src='/img/minenew.png' className='minek' />
                <img src='/img/more.svg' className='strelka'/>
                <img src='/img/rustnew.png' className='rustek' />
                
            </div>
        </div>
    );
};

export default NewsModal;