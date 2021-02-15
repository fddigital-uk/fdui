import hamburger from "../../01-atoms/hamburger/hamburger";

const menuButton = function (menuButton, onClick) {
  const {clickAndGetState: hamburgerClick} = hamburger(menuButton.querySelector('.hamburger'))
  let open = false;

  menuButton.addEventListener('click', () => {
    open = hamburgerClick();

    if (onClick) {
      onClick(open);
    }
  })
};

export default menuButton;
