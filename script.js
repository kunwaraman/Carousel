const images =[
    'https://images.unsplash.com/photo-1682685797366-715d29e33f9d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.istockphoto.com/id/1387159408/photo/ev-charging-station.jpg?s=2048x2048&w=is&k=20&c=PcADZ4Jxh0C1j-R8cfTayn-yaSojHu76jesfXtIY_Kk=',
    'https://images.unsplash.com/photo-1609776286098-86b0ed4a16d2?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.istockphoto.com/id/1478503691/photo/woman-inserting-charging-cable-in-smartphone-when-lying-in-bed.jpg?s=612x612&w=is&k=20&c=v9isb8AXdscUPxExxAvDnaVLuGov40UbdrYivwgcsa4=',
    'https://media.istockphoto.com/id/1470868881/photo/a-girl-who-has-fun-playing-with-her-mobile-phone.jpg?s=612x612&w=is&k=20&c=EEIF6h1P_nsMlPaSYJJy0uBtplC0CPu0__lEAjAyyhE='


];

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

const containerWidth = 80;
const flexContainerWidth = n*containerWidth;
flexContainer.style.width = flexContainerWidth;

for(let i = 0; i<n; i++){
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexContainer.appendChild(newImg);
}
 // want to click perform
let curPosition = 0;
leftButton.addEventListener('click',() => {
    if(curPosition > 0){
        curPosition--;
        showImg();
    } else {
        curPosition = n-1;
    }
    showImg();
})
rightButton.addEventListener('click',() => {
    if(curPosition<n-1){
        curPosition++;
        showImg();
    } else {
        curPosition= 0;
    }
    showImg();
})

function showImg() {
    const transalteXDistance = -curPosition*containerWidth;
    flexContainer.style.transform = `translateX(${transalteXDistance}vw)`
}




