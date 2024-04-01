const tabList = document.querySelector('.faq__tabs');
const tabItems = tabList.querySelectorAll('.faq__label');
const faqButtons = tabList.querySelectorAll('.faq__button');

faqButtons.forEach((element, index) => {
  element.addEventListener('click', () => {
    tabItems[index].click();
  });
});

tabList.addEventListener('click', (evt) => {
  for (let i = 0; i <= faqButtons.length - 1; i++) {
    faqButtons[i].classList.remove('faq__button--active');
  }
  evt.target.classList.add('faq__button--active');
});
