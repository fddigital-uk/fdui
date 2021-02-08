import navigation from "../../02-molecules/navigation/navigation";
import searchControl from '../../02-molecules/search/search';

const header = function (header) {
  let headerContent = header.querySelector('.header__content');

  const onCloseSearch = () => {
    headerContent.classList.remove('header__content--search');
  }

  const init = () => {
    const search = header.getElementsByClassName('header__search-button');

    if (search.length) {
      search[0].addEventListener('click', (e) => {
        headerContent.classList.add('header__content--search');
      });
    }

    searchControl(
        headerContent.querySelector('.search'),
        onCloseSearch
    );

    navigation(headerContent.querySelector('.nav'));
  }

  init();
};

export default header;
