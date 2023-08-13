// blog_page2.js
import { createElement, createHeader } from  "../../script/layout"; // Подставьте правильный путь к вашему layout.js

// Получаем ссылку на контейнер, в который будем вставлять созданный контент
const page = document.querySelector('.page');

// Создаем заголовок
const header = createHeader();
page.append(header);

// Создаем элемент h1 с заголовком
const title = createElement('h1', 'title', 'Коммьюніті');
page.append(title);

// Создаем навигационную панель (nav)
const nav = createElement('nav', 'nav');
const navTabInactive = createElement('div', 'nav__tab-inactive', 'База знань');
const navTabActive = createElement('div', 'nav__tab-active', 'Інформація');
nav.appendChild(navTabInactive);
nav.appendChild(navTabActive);
page.appendChild(nav);

// Создаем блок с информацией (article)
const article = createElement('main', 'article');
const articleImage = createElement('div', 'article_img');
const articleImg = createElement('img');
articleImg.src = '/img/community.png';
articleImage.append(articleImg);

const articleBlock = createElement('div', 'article__block');
const articleHeader = createElement('div', 'article__header', 'Що таке база знань?');
const articleBody = createElement('div', 'atricle__body');
articleBody.innerHTML = `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в
                         некоторой предметной области. В самообучающихся системах база знаний также содержит информацию,
                         являющуюся результатом решения предыдущих задач.`;

articleBlock.append(articleHeader);
articleBlock.append(articleBody);

const articleButton = createElement('button', 'article__button', "Перейти до ком'юніті у Телеграм");
articleBlock.append(articleButton);

article.append(articleImage);
article.append(articleBlock);
page.append(article);
