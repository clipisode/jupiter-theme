setInterval(() => {
  const heading = document.querySelector("#nameScreenHeading")


  if (heading) {
    const uploadingText = heading.innerHTML;

    if (uploadingText.startsWith("Uploading")) {
      const val = parseInt(uploadingText.split(" ")[1].split("%")[0])
      // const pct = cont.dataset.pct;

      // console.log({ pct })

      // var val = parseInt($(this).val());
      var $circle = document.querySelector('#svg #bar');
      
      if (isNaN(val)) {
        val = 100;
      }
      else {
        var r = $circle.getAttribute('r');
        var c = Math.PI * (r * 2);
      
        if (val < 0) { val = 0; }
        if (val > 100) { val = 100; }
        
        var pct = ((100 - val) / 100) * c;
       
        $circle.style.strokeDashoffset = pct;
        // $circle.css({ strokeDashoffset: pct});
        
        document.querySelector("#cont").setAttribute("data-pct", val);// $('#cont').attr('data-pct',val);
      }
    }
  }
}, 1000)