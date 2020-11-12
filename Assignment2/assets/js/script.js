// var images = [
//     "1.jpg",
//     "2.jpg",
//     "3.jpg",
//     "4.jpg",
//     "5.jpg",
//     "6.jpg",
//     "7.jpg",
//     "8.jpg",
//     "9.jpg",
// ]

// ---------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    console.log("JS is connected!");
    //loadImages();
});

// ---------------------W+H Display on the top--------------------------------------
widthHeight = () => {
    document.getElementById("widthheight").innerHTML = ("W: " + window.innerWidth + " --- H: " + window.innerHeight);
};

window.onresize = widthHeight;
window.onload = widthHeight;



// --------------------IMG DISPLAY--------------------------------------------------

// loadImages = () => {

//     let imageNumber = 0;

//     //1. Get the columns from the DOM
//     let columns = document.getElementsByClassName("items");
//     console.log(columns.length);


//     //2. Load the images
//     for (let i = 0; i < images.length; i++) {

//         // In this case we're creating the image tag with and ID and class
//         let newImg = document.createElement("img");
//         newImg.className = "images";
//         newImg.id = i;
//         newImg.src = "./assets/img/" + images[i];

//         //Now we need to add the images to the DOM    
//         columns[imageNumber].appendChild(newImg);
//         imageNumber++;

//         /*The array of images is bigger than the array of columns,
//         so when we get to the end the next image should start to count 
//         from zero
//         */
//         if (imageNumber > columns.length - 1) {
//             imageNumber = 0;
//         }


//         /*5. When I click each image, I want to trigger the function popUp
//             and assign a value to the image that correspond with the image
//         that I'm clicking */

//         newImg.addEventListener("click", (tempvalue) => {
//             popUp(tempvalue.target.id);
//             imgSwitch = tempvalue.target.id;
//         });
//     }

//     for (var i = 0, g; g = columns[i]; i++)
//         g.οnlοad = function() { if (this.width > 50) { this.width = 50 } else { if (this.height > 50) this.height = 50 } }
//     console.log("IMAGE SIZE CHANGED!")

// }