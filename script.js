const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.innerHTML = isOpen
      ? '<svg class=\"icon-svg\" aria-hidden=\"true\" viewBox=\"0 0 24 24\"><path d=\"M5 5l14 14M19 5 5 19\"/></svg>'
      : '<svg class=\"icon-svg\" aria-hidden=\"true\"><use href=\"#icon-menu\"></use></svg>';
  });
}
