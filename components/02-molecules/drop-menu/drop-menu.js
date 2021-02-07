import "./drop-menu.css";

class DropMenu {
  constructor(element) {
    this.item = element;
    this.link = element.children[0];
    this.show = false;
    this.subMenu = element.querySelector('.drop-menu__sub');
    this.setUpEvents();
    this.item.dropMenu = this;
  }

  setUpEvents() {
    this.link.addEventListener('click', this.toggleSubMenu.bind(this));
    this.item.addEventListener('mouseover', this.mouseOver.bind(this));
    this.item.addEventListener('mouseout', this.mouseOut.bind(this));
  }

  mouseOver(event) {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    if (!this.show) {
      this.showSubMenu();
    }
  }

  mouseOut(event) {
    this.timer = setTimeout(this.hideSubMenu.bind(this), 1000);
  }

  toggleSubMenu(event) {
    if (this.show) {
      this.hideSubMenu();
    } else {
      this.showSubMenu();
    }
    event.preventDefault();
  }

  showSubMenu() {
    const allMenus = document.querySelectorAll('.drop-menu');

    allMenus.forEach(menu  => {
      menu.dropMenu.hideSubMenu();
    });

    this.item.classList.add('drop-menu--open');
    this.item.setAttribute('aria-expanded', "true");
    this.show = true;
  }

  hideSubMenu() {
    this.item.classList.remove('drop-menu--open');
    this.item.setAttribute('aria-expanded', "false");
    this.show = false;
  }
}

window.addEventListener('DOMContentLoaded', (e) => {
  const dropMenus = document.querySelectorAll('.drop-menu');

  dropMenus.forEach((el) => {
    new DropMenu(el);
  });
});
