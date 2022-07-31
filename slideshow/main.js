let slideIndex = 1;
showSlides(slideIndex)


// next & prev
function handleClick(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}
function showSlides(index) {
    let i
    let slides = document.querySelectorAll('.slideshow__item');
    let dots = document.querySelectorAll('.dots__dot');
    if (index>slides.length){slideIndex=1}
    if (index<1){slideIndex=slides.length}

    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
        // console.log('display none');
    }
    for(i=0; i<slides.length; i++){
        dots[i].className = dots[i].className.replace(' active', "");
        // console.log('active dot', dots[i]);
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += ' active';

    // generate number
    slides[slideIndex-1].children[0].innerHTML = `${slideIndex} / ${slides.length}`
}