(function () {
  const videos = document.querySelectorAll('.video__iframe');
  videos.forEach((video) => {
    video.addEventListener('click', function () {
      const iframe = document.createElement('iframe');
      const iframeUrl = 'https://www.youtube.com/embed/9TZXsZItgdw?si=VFkFBN7VULiRVdno&autoplay=1';

      iframe.setAttribute('src', iframeUrl);
      if (this.getAttribute('title')) {
        iframe.setAttribute('title', this.getAttribute('title'));
      }
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.position = 'absolute';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      this.replaceWith(iframe);
    });
  });
})();

const videoButton = document.querySelector('.video__button');
const videoButtonWrapper = document.querySelector('.video__button-wrapper');

videoButton.addEventListener('mouseover', () => {
  videoButtonWrapper.style.borderColor = 'rgba(16, 38, 84, 0.6)';
});

videoButton.addEventListener('mouseout', () => {
  videoButtonWrapper.style.borderColor = 'rgba(237, 2, 51, 0.2)';
});

videoButton.addEventListener('focus', () => {
  videoButtonWrapper.style.borderColor = '#102654';
});

videoButton.addEventListener('blur', () => {
  videoButtonWrapper.style.borderColor = 'rgba(237, 2, 51, 0.2)';
});
