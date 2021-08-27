var observer = new MutationObserver(
  function (mutations) {
    console.log(mutations);
  }
);

observer.observe(document.querySelector('body'), { childList: true });