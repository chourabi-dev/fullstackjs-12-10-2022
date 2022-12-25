var imgHolderElement = document.getElementById("imgHolder");
var photos = [
    "https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/586/675/740/vaporwave-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/121/393/166/magenta-vaporwave-digital-art-web-wallpaper-preview.jpg"
]
var index = 0;


// set the src attribute !!!


imgHolderElement.setAttribute("src",photos[index])

function  next() {
   index++;
   imgHolderElement.setAttribute("src",photos[index])

}


function prev(){
    index--;
    imgHolderElement.setAttribute("src",photos[index])

}