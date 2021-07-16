/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // onClick => show or hide Menu
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== ACTIVE ITEM ====================*/
// Query all <section> that have 'id' attribute
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {

    // method pageYOffset return a number...
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionHeight = section.offsetHeight; // return height of element
        const sectionTop = section.offsetTop; // return a number...

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-item')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-item')
        }

    })
}
window.addEventListener('scroll', scrollActive)
