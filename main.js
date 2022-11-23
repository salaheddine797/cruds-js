const submit = document.getElementById('submit');
const rates = document.querySelectorAll('.btn');
const thanksContainer = document.querySelector('.thanksContainer');
const ratingContainer = document.querySelector('.container');
const ratingButton = document.getElementById('RateAgain')
const numberRated = document.getElementById('rated');


submit.addEventListener('click', () => {
    thanksContainer.classList.remove('hidden');
    ratingContainer.style.display = "none";
});

ratingButton.addEventListener('click', () => {
    thanksContainer.classList.add('hidden');
    ratingContainer.style.display = "block";
});

rates.forEach(rate => {
    rate.addEventListener('click',()=>{
        numberRated.innerHTML = rate.innerHTML;
    })
});

