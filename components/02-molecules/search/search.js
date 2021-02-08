const searchControl = function(container, onCancel) {
  const cancelButton = container.querySelector('.search__cancel');

  const init = () => {
    cancelButton.addEventListener('click', onCancel);
  }

  init();
};

export default searchControl;
