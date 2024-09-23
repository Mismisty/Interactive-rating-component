const mainCard = document.getElementById('main-card');
const rateNumbers = document.querySelectorAll('.rate');
const submit = document.getElementById('submit');

const rating = document.getElementById('rating');
const thankYouCard = document.getElementById('thank-you-card');

submit.addEventListener('click', () => {
    thankYouCard.style.display = 'block';
    mainCard.style.display = 'none';

    setTimeout(() =>{
        thankYouCard.style.display = 'none';
        mainCard.style.display = 'block';
        rating.innerHTML = '';

        rateNumbers.forEach(rate => rate.classList.remove('active'));
    }, 3000);
})

rateNumbers.forEach((rate) => {
    rate.addEventListener('click', ()=> {
        //console.log(rate.innerHTML);
        rating.innerHTML = rate.innerHTML;
        rate.classList.add('active');
    });
    
});


rateNumbers.addEventListener('click', (event) => {
    const clickedButton = event.target;
    clickedButton.style.backgroundColor = 'white';
})


