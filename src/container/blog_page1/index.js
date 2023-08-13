// 0/тут підключаем елементи для веб-стор. з шаблон файлуscript/layout.js
import { createElement,
    createHeader,
 } from "../../script/layout";

const page = document.querySelector ('.page')
// 1. створити константу header
const header = createHeader()
// 2. додати header на сторінку, потім він зїявиться у веб.
page.append(header)

const title = createElement( 'h1', 'title', 'Мій блог')

page.append(title)

// 3. Створюємо блок карток, передаем параметри які потім зручно ітерувати
 const POST_LIST = [
{
    category: [
        {text: 'Важливо', id: 1 },
        {text: 'Нова', id: 2 },
    ],

    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
},
{ category: [
        {text: 'Нова', id:2 },
    ],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
                
    date: '24.01',
    viewed: true,
},
 ]

// 4. функція для створення поста
const createPost = () => {
    // 4.1 створ константу для <main class='post__list'>
    const postList = createElement('main', 'post__list')
// 4.2 робимо ітерацію масива з постами
    POST_LIST.forEach((postData) => {
        // 4.3. Строрюємо константу-контейнер для тега div
        const post = createElement (
            'div',
            //4.4 через postData.viewed перевірка чи проглянутий, 
            // якщо так, то додаємо модифікатор post--viewed
            postData.viewed
            ? 'post button post--viewed'
             // якщо ні, повертаємо post button
            : 'post button',
        )
        // 5. Строрюємо константу-контейнер для тега <div class='post__header'>
        const postHeader = createElement('div','post__header')
       
        // 6. Строрюємо константу-контейнер для тега <div class='post__category-list'>
        const categoryList = createElement('div','post__category-list')
// 7. ітерація по категорім та створення константу-контейнер для тега <span class='post__category post__category{category.id}'>
       postData.category.forEach((category) => {
        const categorySpan = createElement (
            'span',
            // 7.1 Вказуємо модифікатор, тег,текст
            `post__category post__category--${category.id}`,
            category.text,
        )
        // 7.2 дадаємо на сторінку цей categorySpan в categoryList
        categoryList.append(categorySpan)
       }) 
    //    ===============
        //  7.3 Строрюємо константу-контейнер для тега <span class='post__date'> 
const dateSpan = createElement( 'span', 'post__date', postData.date,)

// 7.4 Виводимо  ці теги categoryList, dateSpanна вебстор
postHeader.append(categoryList, dateSpan)
// ======
// 8. Строрюємо константу-контейнер для тега <p class='post__info'>
const infoParagraph = createElement (
    'p',
    'post__info',
    postData.info,
)
// додаємо наш обїєкт до вебстор: postHeader, infoParagraph
post.append(postHeader, infoParagraph)
// ===

// 9.В пост лист 
postList.append(post)
 })
// 9.1 повертаємо рез-т ф-ції, саме він попадає в змінну post 9.2
 return postList
}
// 9.2 результат записуємо в змінну та виводимо нашу верстку на сторінку 
const post = createPost()
page.append(post)