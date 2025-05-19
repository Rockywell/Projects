var localImages = [
    'Images/blue-lake-star-trails.jpg',
    'Images/dock.jpg',
    'Images/fantasy-sky.jpg',
    'Images/marin-county-mist.jpg',
    'Images/mountain-river.jpg',
    'Images/ripple.jpg',
    'Images/sunrise.jpg',
    'Images/winter-mountains.jpg',


];
var onlineImages = [
    'https://images.hdqwalls.com/wallpapers/the-baltic-sea-4k-t3.jpg',
    'https://images.hdqwalls.com/wallpapers/milford-sound-new-zealand-a0.jpg',
    'https://images.hdqwalls.com/wallpapers/stars-in-new-zealand-5k-ot.jpg',
    'https://images.hdqwalls.com/wallpapers/stormy-sunrise-at-glacier-national-park-8k-iy.jpg',
    'https://images.hdqwalls.com/wallpapers/north-mountain-park-4k-q1.jpg',
    'https://images.hdqwalls.com/wallpapers/lost-lake-milky-way-time-lapse-5k-xr.jpg'
]

function imageSelector(imageUsage = "all") {
    switch (imageUsage) {
        case "local":
            return localImages;
        case "online":
            return onlineImages;
        case "all":
        default:
            return localImages.concat(onlineImages);
    }
}

var backgroundImages = imageSelector("local");
// console.log(backgroundImages);

var selectedImageURL = backgroundImages[Math.floor(Math.random() * (backgroundImages.length))];
// console.log(selectedImageURL); 

window.onload = function () {
    body = document.body;
    // console.log(body.style.backgroundImage);
    // body.dataset.src = selectedImageURL;
    body.style.backgroundImage = `url('${selectedImageURL}')`;

    // 'use strict';
    // // Page is loaded
    // const objects = document.getElementsByTagName('body');
    // Array.from(objects).map((item) => {
    //     // Start loading image
    //     const img = new Image();
    //     img.src = item.dataset.src;
    //     // Once image is loaded replace the src of the HTML element
    //     img.onload = () => {
    //     // item.classList.remove('asyncImage');
    //     // console.log("mh");
    //     // item.classList.add('fade-in');
    //     return item.nodeName === 'IMG' ? 
    //         item.src = item.dataset.src :        
    //         item.style.backgroundImage = `url(${item.dataset.src})`;
    //     };
    // });

}