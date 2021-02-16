import header from '../../components/03-organisms/header/header';

const setUpVerticalHeight = () => {
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  window.addEventListener('resize', setVH);

  setTimeout(() => {
    setVH();
  }, 500);
};

window.addEventListener('DOMContentLoaded', () => {
  header(document.querySelector('.header'));
  setUpVerticalHeight();
});

