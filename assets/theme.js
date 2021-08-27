setInterval(() => {
  const cont = document.querySelector("#cont")

  if (cont) {
    const pct = cont.dataset.pct;

    console.log({pct})
  }
}, 1000)