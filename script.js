const img = document.querySelector('.img')
const btns = document.querySelectorAll('button[data-color]')
const pictures = {
    white: "./pictures/mbp14-silver-select-202110 1.png",
   gray: "./pictures/mbp14-spacegray-select-202110 1.png"
}

btns.forEach((btn) => {
    btn.onclick = () => {
        img.style.backgroundImage = `url(${pictures[btn.getAttribute('data-color')]})`
        // img.setAttribute('src', pictures[btn.getAttribute('data-color')])
    }
})


const button1 = document.querySelector('.bw');
const button2 = document.querySelector('.bg');

// Обработчик для кнопки 1
button1.addEventListener('click', () => {
    button1.style.backgroundColor = '#CFE7FF'; 
    button2.style.backgroundColor = '#0071E3'; 
});


button2.addEventListener('click', () => {
    button2.style.backgroundColor = '#CFE7FF'; 
    button1.style.backgroundColor = '#0071E3'; 
});


const buttons = document.querySelectorAll('[data-color]');
        const image = document.querySelector('.img');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const color = button.getAttribute('data-color');
                if (color === 'white') {
                    image.src = './pictures/mbp14-silver-select-202110 1.png'; 
                } else if (color === 'grey') {
                    image.src = './pictures/mbp14-spacegray-select-202110 1.png'; 
                }
            });
        });


//         const prices = document.querySelectorAll('.price');

//         const macPriceElement =document.querySelector('mac-price');
//         const totalPriceElement = document.querySelector('.price');
//         const basePrice = 1999;
//         let total = basePrice;

//         textContent = total.toLocaleString();

// prices.forEach(price => {
//     price.addEventListener('click', () => {
//         const priceValue = parseInt(price.getAttribute('.price'), 10); 
//         total = basePrice + priceValue; 
//         macPriceElement.textContent = `$${total.toLocaleString()}`; 
//         totalPriceElement.textContent = total.toLocaleString(); 
//     });
// });


const macPriceElement = document.querySelector('.mac-price');
const totalPriceElement = document.querySelector('total-price');
const basePrice = 1999; // Базовая цена Macbook Pro
let total = basePrice;

totalPriceElement.textContent = total.toLocaleString(); // Устанавливаем начальную общую сумму

// Для каждого элемента с классом price
let index = 0; 
while (true) {
    const priceButton = document.querySelector(`.price:nth-of-type(${index + 1})`);
    if (!priceButton) break; // Прерываем цикл, если кнопка не найдена

    priceButton.addEventListener('click', () => {
        const priceValue = parseInt(priceButton.getAttribute('data-price'), 10); // Получаем значение цены
        total = basePrice + priceValue; // Пересчитываем общую сумму
        macPriceElement.textContent = `$${total.toLocaleString()}`; // Обновляем отображение цены Macbook Pro
        totalPriceElement.textContent = total.toLocaleString(); // Обновляем общую сумму
    });

    index++; // Увеличиваем индекс
}
