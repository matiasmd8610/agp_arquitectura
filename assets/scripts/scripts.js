AOS.init();

//Sticky header
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//SCROLL INDICATOR
window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop;
    let maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let totalScrolled = scrollPosition * 100 / maxHeight;

    document.querySelector("#scroll-indicator span").style.width = totalScrolled + '%';
    if (scrollPosition > 5) {
        document.querySelector("#scroll-indicator").style.backgroundColor = "rgba(21, 63, 89, 0.75)";
    } else {
        document.querySelector("#scroll-indicator").style.backgroundColor = "transparent";
    }
});

//Update copy automatically
document.querySelector('.year-copy').innerText = new Date().getFullYear();