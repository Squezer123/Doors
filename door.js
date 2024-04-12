class Door{
    constructor(area, postedImage){
        this.area = area;
        this.postedImage = postedImage;
        this.postigImageAdjustment();
        this.AreaEventListener();
    }
    postigImageAdjustment() {
        this.postedImage.onchange = () => {
            let selectedImage = postedImage.files[0];
            if (selectedImage) {
                let reader = new FileReader();
                reader.onload = function (event) {
                    area.style.backgroundImage = `url(${event.target.result})`;
                    area.style.backgroundSize = 'cover';
                    area.style.backgroundPosition = 'center';
                };
                reader.readAsDataURL(selectedImage);
            }
          }; 
    }

    showMarkerArea(target) {
        const markerArea = new markerjs2.MarkerArea(target);
        markerArea.availableMarkerTypes = ["FrameMarker"];
        markerArea.addEventListener(
          "render",
          (event) => {target.src = event.dataUrl
            let rect = document.getElementsByTagName('rect')[0];
            let offsets = rect.getBoundingClientRect();
            let x = Math.floor(offsets.left);
            let y = Math.floor(offsets.top);
            console.log('x i y',x,y)
            let width = Math.floor(rect.width.animVal.value);
            let height = Math.floor(rect.height.animVal.value);
            let door = document.createElement('img');
            door.classList.add('doorImg');
            door.src = './cc10a801-3aa9-4cb3-8bc2-3d42f09a9573.jpg';
            door.width = width;
            door.height = height;
            door.style.top = `${y}px`;
            door.style.left = `${x}px`;
            console.log(door.style.top);
            document.body.appendChild(door);
            console.log(x,y);
          }
          
        );  
        markerArea.show();
        document.getElementsByTagName("a")[0].style.display = 'none';
      }

      AreaEventListener(){
        const sampleImage = area;
        sampleImage.addEventListener("click", () => {
        this.showMarkerArea(sampleImage);})
      }
    
}
