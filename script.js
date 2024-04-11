let area = document.querySelector('.area');
let postedImage = document.getElementById('postedImage');
let maState;

let createDiv = () => {
  let acceptButton = document.querySelectorAll('.__markerjs2__0_toolbar_button')[4];
  console.log(acceptButton);
  acceptButton.addEventListener('click', () => {
    let rect = document.getElementsByTagName('rect')[0];
    if(rect){
      console.log(rect);
    }else
    window.alert("Nie zaznaczyłeś prostokąta")
  })
  
}

postedImage.onchange = () => {
    area.src = URL.createObjectURL(postedImage.files[0]);
    console.log(postedImage.files[0]);
};

function showMarkerArea(target) {
    const markerArea = new markerjs2.MarkerArea(target);
    markerArea.availableMarkerTypes = ["FrameMarker"];
    markerArea.addEventListener(
      "render",
      (event) => {target.src = event.dataUrl
        maState = event.state;
        console.log(event);
        let rect = document.getElementsByTagName('rect')[0];
      }
      
    );
    markerArea.show();
    document.getElementsByTagName("a")[0].style.display = 'none';
  }
  
  const sampleImage = area;
  sampleImage.addEventListener("click", () => {
  showMarkerArea(sampleImage);
  createDiv();
  
});



