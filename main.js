let grid = document.getElementById('grid')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

// let square = document.createElement('div')


let count = 0
const insertBox =()=>{
    if(grid.children.length < 30){
      let square = document.createElement('div')
    square.className = "bg-yellow-600"
    square.innerText = count
    grid.appendChild(square)
    console.log(grid.children.length)
    count = count+1
    }
    else{
  showPopup("NO more space left for box"); // Function call 
    }
}
btn1.addEventListener("click", insertBox)
  

const remove =() => {
    // assiment one by ekills removee from 1st
    grid.removeChild(grid.firstElementChild)
       if (currentIndex > 0) {
            currentIndex--;
        }
if (grid.children.length === 0) {
   showPopup("No more Box left to be deleted")
        return;
    }

}

// const remove = () => {
//     if (grid.children.length > 0) {
//         grid.removeChild(grid.firstElementChild);
//         count--;

//         // Adjust currentIndex after removal
//         if (currentIndex > 0) {
//             currentIndex--;
//         }
//     } else {
//         showPopup("No boxes to remove!");
//     }
// };




btn2.addEventListener("click", remove)

// let currentIndex = 0;
// const changeColor = () => {
//     grid.children[currentIndex].classList.replace("bg-yellow-600", "bg-blue-600");
//     currentIndex++;
//     console.log(currentIndex);
// };
// btn3.addEventListener("click", changeColor);
let currentIndex = 0;
const changeColor = () => {
    if (currentIndex < grid.children.length) {
        grid.children[currentIndex].classList.replace(
            "bg-yellow-600",
            "bg-blue-600"
        );
        currentIndex++;
    } else {
        showPopup("All boxes are blue!");
    }
};
btn3.addEventListener("click", changeColor);





// code popuup by ai 
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