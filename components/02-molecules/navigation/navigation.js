import dropMenu from '../../02-molecules/drop-menu/drop-menu';

export default function(container) {
  const menus = container.querySelectorAll('.nav__item');

  menus.forEach(item => {
    dropMenu(item);
  })
};
