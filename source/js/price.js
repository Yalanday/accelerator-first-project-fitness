const priceTabList = document.querySelector('.price__durations-list');
const priceTabsButtons = priceTabList.querySelectorAll('.price__duration-button');
const tabItems = priceTabList.querySelectorAll('.price__duration-label');

priceTabsButtons.forEach((element, index) => {
  element.addEventListener('click', () => {
    tabItems[index].click();
  });
});

priceTabList.addEventListener('click', (evt) => {
  for (let i = 0; i <= priceTabsButtons.length - 1; i++) {
    priceTabsButtons[i].classList.remove('price__duration-button--active');
  }
  evt.target.classList.add('price__duration-button--active');
});
