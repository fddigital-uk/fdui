import navigation from "../../02-molecules/navigation/navigation";
import searchControl from '../../02-molecules/search/search';
import dropMenu from "../../02-molecules/drop-menu/drop-menu";

const header = function (header) {
  const headerContent = header.querySelector('.header__content');
  const searchButton = header.querySelector('.header__search-button');
  const searchComponent = headerContent.querySelector('.search');

  const onCloseSearch = () => {
    headerContent.classList.remove('header__content--search');
    searchComponent.setAttribute('aria-hidden', "false");
  }

  const onOpenSearch = () => {
    headerContent.classList.add('header__content--search');
    searchComponent.setAttribute('aria-hidden', "false");
  }

  const init = () => {
    if (searchButton) {
      searchButton.addEventListener('click', onOpenSearch);
    }

    searchControl(
        searchComponent,
        onCloseSearch
    );

    dropMenu(header.querySelector('.header__account-drop'))
    navigation(headerContent.querySelector('.nav'));
  }

  init();
};

export default header;
