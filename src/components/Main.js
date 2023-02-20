import React from "react";
import { useState } from "react";
import Watch from "./Watch";
import Mine from "./Mine";
import Rust from "./Rust"
import NewsModal from "./NewsModal"

export default function Main() {
  const [modalActiveee, setModalActiveee] = useState(false);
  const [modalActiveeee, setModalActiveeee] = useState(false);
  const [modalActiveeeee, setModalActiveeeee] = useState(false);
  const [modalActiveeeeee, setModalActiveeeeee] = useState(false);
  return (
    <div>
      <main>
        <div className="main">
          <div className="content">
            <div className="left">
              <img className="games-left" src="./img/games-left.png" />
            </div>
            <div className="textt1">
              <h1 className="main-h1">Вместе развиваем игровую индустрию!</h1>
              <p className="main-p">
                Наша цель – создавать лучшие решения для комфортной игры с
                друзьями и другими игроками!
              </p>
            </div>
            <div className="right">
              <img className="games-right" src="./img/games-right.svg" />
            </div>
          </div>
          <div className="products-content" id="products">
            <p className="products-p">Наши продукты</p>
            <h1 className="products-h1">Играйте на любимой платформе</h1>
            <p className="products-p2">
              Исследуй наши лучшие продукты и компьютерные игры для классного
              времяпровождения!
            </p>
          </div>
          <div className="launcher">
            <a href="https://drive.google.com/file/d/1MZcAT2AGHweDY-7sDxuMBPwsgdA11uUg/view?usp=share_link" target="_blank"><img className="pc-launch" src="./img/pc-launch.svg" /></a>
            <a href="https://drive.google.com/file/d/1YpYbfoyuGK4mls7aZgLcVolUuNs4vFIf/view?usp=share_link" target="_blank"><img className="android-launch" src="./img/android-launch.svg" /></a>
          </div>
          <img className="serv" src="./img/serv-games.svg" />
          <img className="popular" src="./img/popular-games.svg" />
          <img className="voice" src="./img/voice.svg" />
        </div>
        <div className="info">
          <ul>
            <li className="info-item">2000+ регистраций</li>
            <li className="info-item">35+ видеоигр</li>
            <li className="info-item">20мс задержка</li>
            <li className="info-item">Android и PC платформы</li>
          </ul>
        </div>
        <div className="news" id="news">
          <h1 className="news-h1">Новости и мероприятия</h1>
        </div>
        <div className="news-cont">
          <div className="watchdogs" onClick={() => setModalActiveee(true)}>
            <div className="watchdogs-img">
              <img className="watchdogs-i" src="./img/watchdogs.png" />
            </div>
            <div className="first-text">
              <p className="watch-p">Игра дня</p>
              <h1 className="watch-h1">Watchdogs: новый релиз</h1>
              <p className="watch-p2">27 Января 2023</p>
            </div>
          </div>
          <Watch activeee={modalActiveee} setActiveee={setModalActiveee} />
          <div className="minecraft" onClick={() => setModalActiveeee(true)}>
            <div className="minecraft-img">
              <img className="minecraft-i" src="./img/minecraft.png" />
            </div>
            <div className="second-text">
              <p className="mine-p">Мероприятия</p>
              <h1 className="mine-h1">“Mine, Minecraft Fest 2023”</h1>
              <p className="mine-p2">07 Октября 2022</p>
            </div>
          </div>
          <Mine activeeee={modalActiveeee} setActiveeee={setModalActiveeee}/>
          <div className="rust" onClick={() => setModalActiveeeee(true)}>
            <div className="rust-img">
              <img className="rust-i" src="./img/rust.png" />
            </div>
            <div className="third-text">
              <p className="rust-p">Новости</p>
              <h1 className="rust-h1">Новый Ивент на Rust “Король Горы”</h1>
              <p className="rust-p2">16 Января 2023</p>
            </div>
          </div>
          <Rust activeeeee={modalActiveeeee} setActiveeeee={setModalActiveeeee}/>
        </div>
        <div className="all-but" onClick={() => setModalActiveeeeee(true)}>
          <button className="all-news">Все новости</button>
        </div>
        <NewsModal activeeeeee={modalActiveeeeee} setActiveeeeee={setModalActiveeeeee}/>
        <div className="soc-net" id="socnet">
          <p className="soc-p">Социальные сети</p>
          <h1 className="soc-h1">Будь в курсе всего!</h1>
          <p className="soc-p2">Новости Unite Gaming в социальных сетях</p>
        </div>
        <div className="soc-cross">
          <div className="inst-cross">
            <img className="inst-logo" src="./img/instagram.svg" />
            <h1 className="inst-h1">Наш Instagram</h1>
            <img className="inst-pre" src="./img/inst-pre.svg" />
            <a href="https://instagram.com/d0l1ssxx?igshid=NTdlMDg3MTY=" target="_blank"><h1 className="inst-to">Перейти &#62;</h1></a>
          </div>
          <div className="tg-cross">
            <img className="tg-logo" src="./img/telegram.svg" />
            <h1 className="tg-h1">Наш Telegram канал</h1>
            <a href="https://t.me/d0l1ssxx" target="_blank"><h1 className="tg-to">Перейти &#62;</h1></a>
          </div>
        </div>
        <div className="about">
          <p className="us-p" id="about-us">О нас</p>
          <h1 className="us-h1">Немного о нас и нашем лаунчере</h1>
        </div>
        <div className="us-cont">
        <div className="le">
              <img className="kubiki-left" src="./img/kubiki-L.png" />
            </div>
            <div className="us-text">
            <h1 className="us-h2">Игры Без Пинга!</h1>
            <p className="us-p2">Unite Launcher - подключает вас к единой локальной сети, и даёт возможность играть с друзьями с низким пингом в любой игре, в Шутерах, Выживании, Стратегии и много всего другого! А самое главное - В любой точке мира!</p>
            <a href="https://drive.google.com/file/d/1MZcAT2AGHweDY-7sDxuMBPwsgdA11uUg/view?usp=share_link" target="_blank"><h1 className="us-h3">Скачать &#62;</h1></a>
            </div>
            <div className="ri">
              <img className="kubiki-right" src="./img/kubiki-R.png" />
            </div>
          </div>
          <div className="us-cont2">
        <div className="le">
              <img className="kubiki-game-L" src="./img/kubgame-L.png" />
            </div>            
            <div className="ri">
              <img className="kubiki-game-R" src="./img/kubgame-R.png" />
            </div>
            <div className="us-tt" id="ustt">
            <h1 className="us-hh">Играй на серверах Unite Gaming!</h1>
            <p className="us-pp">Можно подключиться к играм на наших серверах и проводить весело время с десятками других игроков и конечно же с друзьями!</p>
            <a href="https://unite-gaming.com/games_library/" target="_blank"><h1 className="us-hhh">Перейти к играм &#62;</h1></a>
            </div>
          </div>
      </main>
    </div>
  );
}
