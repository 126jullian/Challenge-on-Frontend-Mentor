const btnHamburger = document.querySelector(`#btnHamburger`);

btnHamburger.addEventListener(`click`, function(){
    console.log(`click hamburger`);

    btnHamburger.classList.toggle('open');
});