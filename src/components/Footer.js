import React from 'react'
import { useState } from 'react';
import ModalNav from './ModalNav';

export default function Footer() {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')

  function cleaning() {
    setValue('')
    setValue2('')
    setValue3('')
    setValue4('')
  }

  return (
    <footer>
      <div className="footer-text">
        <h1 className="footer-h1">Как начать играть на платформе?</h1>
        <p className="footer-p">
          Пройди регистрацию, получи индивидуальный ключ и начни играть с нами!
        </p>
      </div>
      <div className="signupF">
        <button className="upFootBut" onClick={() => setModalActive(true)}>Регистрация</button>
      </div>
      <div className="foot-cross">
        <div className="glav-foot">
          <h1 className="glav-foot-h1">Главная</h1>
          <ul className="all-foot">
            <li className="glav-footer-item">
              <a href="#">Партнёры</a>
            </li>
            <li className="glav-footer-item">
              <a href="#">Донат</a>
            </li>
            <li className="glav-footer-item">
              <a href="#">Сообщество</a>
            </li>
            <li className="glav-footer-item">
              <a href="#">Поддержка</a>
            </li>
            <li className="glav-footer-item">
              <a href="#">Рекламодателям</a>
            </li>
          </ul>
        </div>
        <div className="prod-foot">
          <h1 className="prod-foot-h1">Наши Продукты</h1>
          <ul className="ProAll-foot">
            <li className="prod-footer-item">
              <a href="https://drive.google.com/file/d/1MZcAT2AGHweDY-7sDxuMBPwsgdA11uUg/view?usp=share_link" target="_blank">Launcher для PC</a>
            </li>
            <li className="prod-footer-item">
              <a href="https://drive.google.com/file/d/1YpYbfoyuGK4mls7aZgLcVolUuNs4vFIf/view?usp=share_link" target="_blank">Launcher для Android</a>
            </li>
            <li className="prod-footer-item">
              <a href="https://www.teamspeak.com/ru/downloads/" target="_blank">TeamSpeak для PC</a>
            </li>
            <li className="prod-footer-item">
              <a href="https://www.mumble.info/downloads/#android-third-party" target="_blank">Mumble для Android</a>
            </li>
            <li className="prod-footer-item">
              <a href="#">Покупка Игр</a>
            </li>
          </ul>
        </div>
        <div className="games-foot">
          <h1 className="games-foot-h1">Игры</h1>
          <ul className="gamesAll-foot">
            <li className="games-footer-item">
              <a href="#ustt">Серверные Игры</a>
            </li>
            <li className="games-footer-item">
              <a href="#ustt">Сетевые Игры</a>
            </li>
            <li className="games-footer-item">
              <a href="#">Одиночные Игры</a>
            </li>
            <li className="games-footer-item">
              <a href="#">Программы Для Игр</a>
            </li>
            <li className="games-footer-item">
              <a href="#">Игры на Android</a>
            </li>
          </ul>
        </div>
        <div className="usComp-foot">
          <h1 className="usComp-foot-h1">О Компании</h1>
          <ul className="usCompAll-foot">
            <li className="usComp-footer-item">
              <a href="#about-us">О Нас</a>
            </li>
            <li className="usComp-footer-item">
              <a href="#socnet">Команда</a>
            </li>
            <li className="usComp-footer-item">
              <a href="#">Культура</a>
            </li>
            <li className="usComp-footer-item">
              <a href="#news">Новости</a>
            </li>
            <li className="usComp-footer-item">
              <a href="#">Карьера</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hr">
        <img className="hrr" src="./img/hr.png" />
      </div>
      <div className="logo-foot">
        <a href="#">
          <img className="end-footer-logoo" src="./img/logo-foot.svg" />
        </a>
      </div>
      <div className="end-foot">
        <ul className="endAll-foot">
          <li className="end-footer-item">
            <a href="#">Terms</a>
          </li>
          <li className="end-footer-item">
            <a href="#">Privacy</a>
          </li>
          <li className="end-footer-item">
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
      <div className="prod">
        <ul className="prodAll">
          <li className="end-footer-prod">
            <a href="https://tiktok.com/@d0l1s" target="_blank">
              <img className="tiktok-footer-item" src="./img/tiktok.svg" />
            </a>
          </li>
          <li className="end-footer-prod">
            <a
              href="https://instagram.com/d0l1ssxx?igshid=NTdlMDg3MTY="
              target="_blank"
            >
              <img className="inst-footer-item" src="./img/instus.svg" />
            </a>
          </li>
          <li className="end-footer-prod">
            <a href="https://t.me/d0l1ssxx" target="_blank">
              <img className="tg-footer-item" src="./img/telegramus.svg" />
            </a>
          </li>
        </ul>
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
      </div>
    </footer>
  );
}
