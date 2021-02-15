const hamburger = function (hamburger, callback) {
  let open = false;

  const init = () => {
    hamburger.addEventListener('click', onClick);
  };

  const onClick = () => {
    if (open) {
      hamburger.classList.remove('open')
      hamburger.classList.add('closed')
    } else {
      hamburger.classList.remove('closed')
      hamburger.classList.add('open')
    }

    open = !open;

    if(callback) {
      callback();
    }

    return open;
  };

  init()

  return {
    clickAndGetState: onClick
  }
};

export default hamburger;
