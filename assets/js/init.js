import dropMenu from "../../components/02-molecules/drop-menu/drop-menu";
import navigation from "../../components/02-molecules/navigation/navigation";
import header from "../../components/03-organisms/header/header";


const initializers = {
  'drop-menu': () => {
    dropMenu(document.querySelector('.drop-menu'));
  },
  'navigation': () => {
    navigation(document.querySelector('.nav'));
  },
  'header': () => {
    header(document.querySelector('.header'));
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const initComp = document.querySelector('[data-comp]');

  if (initComp && initComp.dataset.comp in initializers) {
    initializers[initComp.dataset.comp]();
  }
});

