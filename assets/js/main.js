/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader()  {
    const header = document.getElementById ('header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');

}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/

function scrollUp()  {
    const scrollUp = document.getElementById ('scrollUp');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');

}

window.addEventListener('scroll', scrollUp)

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
 tabContents = document.querySelectorAll('[data-content]');

 tabs.forEach((tab) => {
    tab.addEventListener('click',  () =>  {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active')
    });
 });

/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault ();

    if (
        contactName.value === ''||
        contactEmail.value === ''||
        contactSubject.value === ''||
        contactMessage.value === ''
    ){
        errorMessage.textContext = 'Write all the input fields'
    }

    else{}
};


contactForm.addEventListener('submit' , sendEmail);
