import dropMenu from "../../components/02-molecules/drop-menu/drop-menu";
import navigation from "../../components/02-molecules/navigation/navigation";
import header from "../../components/03-organisms/header/header";
import hamburger from "../../components/01-atoms/hamburger/hamburger";
import menuButton from "../../components/02-molecules/menu-button/menu-button";


const initializers = {
  'drop-menu': () => dropMenu(document.querySelector('.drop-menu')),
  'navigation': () => navigation(document.querySelector('.nav')),
  'header': () => header(document.querySelector('.header')),
  'hamburger': () => hamburger(document.querySelector('.hamburger')),
  'menu-button': () => menuButton(document.querySelector('.menu-button'), (status) => console.log(`Clicked and open status is ${status}`))
}

window.addEventListener('DOMContentLoaded', () => {
  const initComp = document.querySelector('[data-comp]');

  if (initComp && initComp.dataset.comp in initializers) {
    initializers[initComp.dataset.comp]();
  }
});

