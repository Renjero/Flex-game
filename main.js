let grid = document.getElementById('grid')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')

// let square = document.createElement('div')


let count = 0
const insertBox =()=>{
    if(grid.children.length < 30){
      let square = document.createElement('div')
    square.className = "bg-yellow-600"
    square.innerText = count
    grid.appendChild(square)
    //
    console.log(grid.children.length + " <- length no of child  ->coun"  + count)
    count = count+1
    }
    else{
  showPopup("NO more space left for box"); // Function call 
    }
}
btn1.addEventListener("click", insertBox)
  

const remove =() => {
    // assiment one by ekills removee from 1st
      if (grid.children.length > 0) {
    grid.removeChild(grid.firstElementChild)
  
     // reset blue index
        currentIndex = 0;

        console.log(grid.children.length + "no of child got remove. ->coun" + count)
      }
else{
   showPopup("No more Box left to be deleted")
        return;
    }
}
btn2.addEventListener("click", remove)


let currentIndex = 0;
const changeColor = () => {
    if (currentIndex < grid.children.length) {
 grid.children[currentIndex].style.backgroundColor = "blue";
   currentIndex++;
 //
     console.log(grid.children.length) 
         console.log("chaged blue")
    } else {
        showPopup("All boxes are blue!");
    }
};
btn3.addEventListener("click", changeColor);

let changeColorAll = () =>{
    if(grid.children.length===0){
        showPopup("No box left")
    }

    for(let i=0; i<grid.children.length; i++){
         grid.children[i].style.backgroundColor = "purple";
        }

        currentIndex = 0;

        
 if (grid.lastElementChild.style.backgroundColor === "purple") {
        showPopup("Last box is purple"); 
         return
    }

}
btn4.addEventListener("click", changeColorAll)


const deleteAll = () => {
    console.log("delete all");

    for(let i = grid.children.length - 1; i >= 0; i--){
        grid.removeChild(grid.children[i]);
    }

    currentIndex = 0;
    count = 0;
}
btn5.addEventListener("click", deleteAll);


// simple approches to dlete 
// const deleteAll = () => {
//     grid.innerHTML = "";
//     currentIndex = 0;
//     count = 0;
// }




// code popuup by ai  showPopup
function showPopup(message) {
    const popup = document.createElement("div");

    popup.className =
        "fixed inset-0 flex items-center justify-center bg-black/40";

    popup.innerHTML = `
        <div class="bg-white p-6 rounded-xl shadow-xl text-center w-72">
            <h2 class="text-xl font-bold text-red-600 mb-2"> Sorry </h2>
            <p class="mb-4">${message}</p>
            <button class="bg-green-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg">
                OK
            </button>
        </div>
    `;

    document.body.appendChild(popup);

    popup.querySelector("button").onclick = () => popup.remove();
}




// let currentIndex = 0;
// const changeColor = () => {
//     grid.children[currentIndex].classList.replace("bg-yellow-600", "bg-blue-600");
//     currentIndex++;
//     console.log(currentIndex);
// };
// btn3.addEventListener("click", changeColor);
// let currentIndex = 0;
// const changeColor = () => {
//     if (currentIndex < grid.children.length) {
//         grid.children[currentIndex].classList.replace(
//             "bg-yellow-600",
//             "bg-blue-600"
//         );
//         currentIndex++;
//     } else {
//         showPopup("All boxes are blue!");
//     }
// };

