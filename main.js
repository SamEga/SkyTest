(function() {
  const popup = document.querySelector('.popup');
  const popupWrapper = document.querySelector('.popup-wrapper');
  const wrapper = document.querySelector('.wrapper-blocks');
  const popupContainer = document.querySelector('.popup-container');
  const close = document.querySelector('.close-img');

  function checkElement(e) {
    let arr = e.path;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].className === 'wrapper') {
        return arr[i];
      }
    }
  }

  wrapper.addEventListener('click', function(e) {
    let node = checkElement(e);
    let newNode = node.cloneNode(true);
    popupWrapper.style.visibility = 'visible';
    popupContainer.style.visibility = 'visible';
    popup.appendChild(newNode);
  });

  function closePopup(event) {
    event.stopPropagation();
    popupWrapper.style.visibility = 'hidden';
    popupContainer.style.visibility = 'hidden';
    const childNode = popup.firstChild;
    popup.removeChild(childNode);
  }

  close.addEventListener('click', closePopup);
  popupContainer.addEventListener('click', closePopup);
})();
