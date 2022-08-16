const link = document.querySelector('.arrow');
const profile = document.querySelector('.profile')
const linkBox = document.querySelector('.social-links');

link.addEventListener('click', () => {
    // linkBox.style.display = 'block'
    linkBox.classList.toggle('social-links')
    // profile.style.display = 'none'
})