import React from 'react'
import { useState } from 'react';
import ModalNav from './ModalNav'

export default function Header() {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')

  function cleaning() {
    setValue('')
    setValue2('')
    setValue3('')
    setValue4('')
  }
  return (
    <div>
        <header>
        <div className='wrapper'>
          <div className='container'>
            <div className='banner'>
              <a href='#'><img className='header-logo' src='/img/Blogo.svg' /></a>
              <div className='header-text'>
              <h1 className='text'>Первая платформа для геймеров с маленьким пингом!</h1>
              <p className='text2'>Пройди регистрацию, скачай лаунчер и комфортно играй в лучшие сетевые игры без пинга на PC и Android! </p>
              </div>
              <img className='spider' src='./img/spider.svg' />
            </div>
            </div>
        </div>
        <div className='about'>
          <div className='container'>
                <button className='header-signup' onClick={() => setModalActive(true)}>Регистрация</button>
                <div className='aviable'>
                    <p className='text-avi'>Доступно:</p>
                </div>
                <div className='icons'>
                    <a href='https://drive.google.com/file/d/1MZcAT2AGHweDY-7sDxuMBPwsgdA11uUg/view?usp=share_link' target='blank'><img className='windows' src='/img/icon-windows.svg'/></a>
                    <a href='https://drive.google.com/file/d/1YpYbfoyuGK4mls7aZgLcVolUuNs4vFIf/view?usp=share_link' target='blank'><img className='android' src='/img/icon-android.svg'/></a>
                </div>
            </div>
        </div>
        <ModalNav active={modalActive} setActive={setModalActive}>
        <h1 className="up">Регистрация</h1>
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
    </header>
    </div>
  )
}
