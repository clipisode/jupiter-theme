function hideCont() {
  const cont = document.querySelector("#cont");
  const nsh = document.querySelector("#nameScreenHeading");

  if (cont) cont.style.display = "none";
  if (nsh) nsh.style.display = null;
}

function showCont() {
  const cont = document.querySelector("#cont");
  const nsh = document.querySelector("#nameScreenHeading");

  if (cont) cont.style.display = null;
  if (nsh) nsh.style.display = "none";
}

setInterval(() => {
  const heading = document.querySelector("#nameScreenHeading")


  if (heading) {
    const uploadingText = heading.innerHTML;

    if (uploadingText === "Hit save to finish") {
      hideCont();
      return;
    }

    if (uploadingText.startsWith("Uploading")) {
      const val = parseInt(uploadingText.split(" ")[1].split("%")[0])
      var $circle = document.querySelector('#svg #bar');
      
      if (isNaN(val)) {
        hideCont();
        return;
        val = 100;
      }
      else {
        showCont();
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
}, 200)