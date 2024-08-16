document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const userLang = navigator.language || navigator.userLanguage;
    // const preferredLanguage = userLang.startsWith('pl') ? 'pl' : 'en-GB';

    // console.log("Preferred Language: ", preferredLanguage);
    
    document.querySelectorAll('[lang]').forEach(el => {
        // Polish banned for now
        if (el.getAttribute('lang') === 'en-GB') {
            el.style.display = '';
        } else {
            // el.style.display = 'none';
    console.log("dupa: ");
        }
    });
});
