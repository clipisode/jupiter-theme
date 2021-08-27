var observer = new MutationObserver(
  function (mutations) {
    console.log(mutations);
  }
);

observer.observe(document.querySelector('body'), { childList: true });


setInterval(() => {
  const cont = document.querySelector("#cont")

  if (cont) {
    const pct = cont.dataset.pct;

    console.log({pct})
  }
}, 1000)