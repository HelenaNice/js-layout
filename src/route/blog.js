// blog.js
// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const Test = require('../class/test')

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/blog_page1', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('blog_page1', {
    // вказуємо назву контейнера
    name: 'blog_page1',
    // вказуємо назву компонентів
    component: ['heading'],

    // вказуємо назву сторінки
    title: 'Мій блог',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      test: new Test().test,
    },
  })
  
  // ↑↑ сюди вводимо JSON дані
})
//  router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/blog_page2', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('blog_page2', {
    // вказуємо назву контейнера
    name: 'blog_page2',
    // вказуємо назву компонентів
    component: ['heading'],

    // вказуємо назву сторінки
    title: 'Коммьюніті',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      test: new Test().test,
    },
  })
  
  // ↑↑ сюди вводимо JSON дані
})


// Підключаємо роутер до бек-енду
module.exports = router
