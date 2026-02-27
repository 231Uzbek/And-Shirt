let count = 0;
const cartCountDisplay = document.getElementById('cart-count');

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCountDisplay.innerText = count; // Обновляем цифру в меню
        alert('Товар добавлен!');
    });
});
