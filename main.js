const age = document.querySelector('.Age');
const submitBtn = document.querySelector('.submit');
const result = document.querySelector('.result');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const bornYear = 2020 - age.value;
    result.value = bornYear;
    setTimeout(() => age.value = '', 2555);
    setTimeout(() => result.value = '', 2455);
});
const ageborn = document.querySelector('.Ageborn');
const submitBtn2 = document.querySelector('.submit2');
const resultAge = document.querySelector('.age');
submitBtn2.addEventListener('click', (event2) => {
    event2.preventDefault();
    const bornYeartwo = 2020 - ageborn.value;
    resultAge.value = bornYeartwo;
    setTimeout(() => ageborn.value = '', 2555);
    setTimeout(() => resultAge.value = '', 2455);
});