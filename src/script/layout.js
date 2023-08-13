// layout.js
// код для створення одного елемента с аргументами тєг та текст, який записуємо в elem.innerHTML
export const createElement = (tag, className, text) => {
    const elem = document.createElement(tag)

    if (className) {
        elem.className = className
    }

    if (text) {
        elem.innerHTML = text
    }

    return elem
}

const HEADER_BUTTON_LIST = [
    {
        width: 24,
        height: 24,
        src: '/svg/header__back.svg',
    },
    {
        width: 24,
        height: 24,
        src: '/img/header__avatar.png',
    }
]
// для заголовка header'з класом 'header
export const createHeader = () => {
    const header = createElement('header', 'header')
// ітеруєм стилі для кнопок
HEADER_BUTTON_LIST.forEach((params) => {
    // створити кнопку для картинки
    const button = createElement ('button', 'button')
    const img = createElement('img')

    console.log(Object.entries(params))
    // для створеня масиву з ключ-значенями нашого обїєкта HEADER_BUTTON_LIST
    Object.entries(params).forEach(([key, value]) =>{
       img.setAttribute(key, value); 
        // img[key] = value
    })
    button.append(img)

    header.append(button)
})
return header
}