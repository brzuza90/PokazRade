const advices = ['mój procesor tego nie ogarnia', 'musisz to jeszcze przemyśleć', 'tak zrób to!']
const addBtn = document.getElementById('add');
const cleanBtn = document.getElementById('clean');
const showAdviceBtn = document.getElementById('showAdvice');
const showOptionsBtn = document.getElementById('showOptions');
const input = document.querySelector('#addValue');

addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const newAdvice = input.value;
    if (input.value.length) {
        advices.push(newAdvice);
        alert(`dodana została możliwość: ${newAdvice}`)
        input.value = "";
        console.log(advices);
    }
})
cleanBtn.addEventListener('click', function (e) {
    e.preventDefault();
    advices.length = 0;
    document.querySelector('h1').textContent = "";
})
showAdviceBtn.addEventListener('click', () => {
    const index = Math.floor(Math.random() * advices.length);
    document.querySelector('h1').textContent = advices[index];
    console.log(index);

})
showOptionsBtn.addEventListener('click', () => {
    alert(advices.join(' - - - '));
})