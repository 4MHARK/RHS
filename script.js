window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const faqIcon = faq.querySelector('.faq__icon ion-icon');
        if (faqIcon) {
            const icon = faqIcon.getAttribute('name');
            if (icon === 'add-circle-outline') {
                faqIcon.setAttribute('name', 'close-circle-outline');
            } else {
                faqIcon.setAttribute('name', 'add-circle-outline'); // Corrected line
            }
        }
        

    })
})


const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menu>menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none"
})

const closenav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"
}
closeBtn.addEventListener('click',closenav)