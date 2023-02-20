import React from 'react'
import { useState } from "react";
import ModalNav from './ModalNav';
import ModalNavv from './ModalNavv';
import Main from './Main';

export default function HeaderNav() {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [modalActivee, setModalActivee] = useState(false);
  function cleaning() {
    setValue('')
    setValue2('')
    setValue3('')
    setValue4('')
  }
    
  return (
    <div>
          <div className='header-nav'>
      <div className='container'>
          <div className='header'>
              <a href='#'><img className='nav-logo' src='/img/logo-top.svg' /></a>
              <nav className='nav'>
                <ul>
                  <li className='header-item'>
                    <a href='#products'>Наши продукты</a>
                  </li>
                  <li className='header-item'>
                    <a href='#news'>Новости</a>
                  </li>
                  <li className='header-item'>
                    <a href='#socnet'>Соц. Сети</a>
                  </li>
                  <li className='header-item'>
                    <a href='#about-us'>О нас</a>
                  </li>
                  <li className='header-item'>
                    <a href='#'>Поддержка</a>
                  </li>
                </ul>
              </nav>
              <div className='signup'>
                <button className='upNavBut' onClick={() => setModalActive(true)}>Регистрация</button>
              </div>
              <div className='signin'>
                <button className='inNavBut' onClick={() => setModalActivee(true)}>Войти</button>
              </div>
          </div>
      </div>
      </div>

      <ModalNav active={modalActive} setActive={setModalActive}>
        <h1 className="up">Регистрация</h1>
        <p className='consent'>Зарегистрировавшись вы принимаете условия пользования*</p>
        <hr></hr>
        <div className='inputs'>
        <form action="">
          <input value={value} onChange={(e) => setValue(e.target.value)} className="name" placeholder="Ф.И.О" type="text"/>
          <input value={value2} onChange={(e) => setValue2(e.target.value2)} className="nick" placeholder="Никнэйм" type="text"/>
          <p className='infni'>Ник будет отображаться в играх</p>
          <input value={value3} onChange={(e) => setValue3(e.target.value3)} className="email" placeholder="E-Mail" type="email"/>
          <input value={value4} onChange={(e) => setValue4(e.target.value4)} className="pass" placeholder="Пароль" type="text"/>
        </form>
        </div>
        <button className="sumb" onClick={cleaning}>Зарегистрироваться!</button>
      </ModalNav>
      <ModalNavv activee={modalActivee} setActivee={setModalActivee} />
    </div>
  )
}

