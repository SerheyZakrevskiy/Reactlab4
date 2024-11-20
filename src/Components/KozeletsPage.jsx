import React from "react";
import "./KozeletsPage.css";
import logo from "../img/logo.svg";
import build from "../img/build.jpg";

function KozeletsPage() {
  return (
    <div className="kozelets-container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Головна</a>
            </li>
            <li>
              <a href="#about">Про нас</a>
            </li>
            <li>
              <a href="#services">Послуги</a>
            </li>
            <li>
              <a href="#contact">Контакти</a>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Садиба</h1>
      <div className="header-details">
        <p>Kozelets, Kozelets' district, Chernihiv region</p>
        <p>Show on map. GPS (the building): N 50°9008197', E 31°1255031"</p>
      </div>
      <img src={build} alt="Historic House in Kozelets" />

      <div className="description">
        <p>
          Релікт, який в Україні зберігся одиничні (якщо зберігся взагалі) -
          лам'янка дерев'яної садибної архітектури періоду бароко, дійшла до нас
          з XVIII ст. Асамблі включає дерев'яні попільникал головний будинок і
          флігель, а також муровану комору. Фото Оленін Кушніцької, правельн
          2005 р.
        </p>
      </div>

      <div className="article">
        <h2>About the building</h2>
        <p>
          Про цю садибу я писала у своїй статті "Життя як диво" ("Міжнародний
          туризм", 2005, №6(66), с.92-96) про славнозвісне містечко Козелець і
          його околиці. Наводжу цей фрагмент:
        </p>
        <p>
          "Покорціна" і особливості національного характеру з перехрестя в
          центрі Козельця звертаємо за дороговказом на Даівку. Вулиця веде нас
          на східну околицю Козельця, де, праворуч від дороги, розташована
          садиба "Покорціна", що походить з XVIII ст...
        </p>
      </div>
    </div>
  );
}

export default KozeletsPage;
