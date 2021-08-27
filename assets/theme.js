setInterval(() => {
  const heading = document.querySelector("#nameScreenHeading")


  if (heading) {
    const uploadingText = heading.innerHTML;

    if (uploadingText.startsWith("Uploading")) {
      const pct = parseInt(uploadingText.split(" ")[1].split("%")[0])
      // const pct = cont.dataset.pct;

      console.log({ pct })
    }
  }
}, 1000)