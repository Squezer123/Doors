let area = document.querySelector('.area');
let postedImage = document.getElementById('postedImage');
let maState;
let body = document.querySelector('body');

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
        let rect = document.getElementsByTagName('rect')[0];
        let offsets = rect.getBoundingClientRect();
        let x = Math.floor(offsets.x);
        let y = Math.floor(offsets.y);
        let width = Math.floor(rect.width.animVal.value);
        let height = Math.floor(rect.height.animVal.value);
        console.log(width,height)
        let door = document.createElement('img');
        door.src = 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNjM2LWltYWdlLTAxLXJtNTAzXzMtbDBqOXFrNnEucG5n.png';
        door.width = width;
        door.height = height;
        door.top = x;
        door.left = y;
        area.appendChild(door);
        console.log(x,y);
      }
      
    );
    markerArea.show();
    document.getElementsByTagName("a")[0].style.display = 'none';
  }
  
  const sampleImage = area;
  sampleImage.addEventListener("click", () => {
  showMarkerArea(sampleImage);
  
});



