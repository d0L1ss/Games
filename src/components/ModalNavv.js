import React from 'react';
import './ModalNavv.css'
import { useState } from "react";

const ModalNavv = ({activee, setActivee, childrene}) => {
    const [value5, setValue5] = useState('')
    const [value6, setValue6] = useState('')
    
    function cleaningg() {
        setValue5('')
        setValue6('')
      }
    return (
        <div className={activee ? "modall activee" : "modall"} onClick={() => setActivee(false)}>
            <div className={activee ? "modall-contt activee" : "modall-contt"} onClick={e => e.stopPropagation()}>
                {childrene}
                <h1 className="upp">Войти</h1>
        <hr></hr>
        <div className='inputt'>
        <form action="">
          <input value={value5} onChange={(e) => setValue5(e.target.value5)} className="general" placeholder="Никнэйм, E-Mail" type="text"/>
          <input value={value6} onChange={(e) => setValue6(e.target.value6)} className="password" placeholder="Пароль" type="text"/>
        </form>
        </div>
        <button className="sumbb" onClick={cleaningg}>Войти!</button>
            </div>
        </div>
    );
};

export default ModalNavv;