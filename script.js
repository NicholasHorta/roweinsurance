
// Navbar - Media Query 650px

$('.medquery-button').click(function () {
    $('ul').toggleClass('activate')
})




function menuChange(e) {
    const navOnScroll = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navOnScroll.classList.add('nav-scroll-transition')

    } else {
        navOnScroll.classList.remove('nav-scroll-transition')
    }
}

document.addEventListener('scroll', menuChange)

// @Note 1@


// #Note 1#