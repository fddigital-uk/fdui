const dropMenu = function (dropMenu) {
  const link = dropMenu.children[0];
  const subMenu = dropMenu.querySelector('.drop-menu__sub');
  let show = false;
  let timer = null;

  const init = () => {
    link.addEventListener('click', toggleSubMenu);
    dropMenu.addEventListener('mouseover', mouseOver);
    dropMenu.addEventListener('mouseout', mouseOut);
    dropMenu.dropMenu = {
      hideSubMenu
    };
  };

  const mouseOver = event => {
    if (timer) {
      clearTimeout(timer)
    }
    if (!show) {
      showSubMenu();
    }
  }

  const mouseOut = event => {
    timer = setTimeout(hideSubMenu, 1000);
  }

  const toggleSubMenu = event => {
    if (show) {
      hideSubMenu();
    } else {
      showSubMenu();
    }
    event.preventDefault();
  }

  const showSubMenu = () => {
    const allMenus = document.querySelectorAll('.drop-menu');

    allMenus.forEach(menu => {
      menu.dropMenu.hideSubMenu();
    });

    dropMenu.classList.add('drop-menu--open');
    dropMenu.setAttribute('aria-expanded', "true");
    show = true;
  }

  const hideSubMenu = () => {
    dropMenu.classList.remove('drop-menu--open');
    dropMenu.setAttribute('aria-expanded', "false");
    show = false;
  }

  init();
};

export default dropMenu;
