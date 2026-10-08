// console.log("hello world")




// let b=document.querySelector('p')
// b.innerHTML="lavdi"
// console.log(b)


// let a= document.querySelector('h1');
// a.innerHTML ="meri gf hai hi nahi"
// a.style.backgroundColor="green"
// console.log(a)


// let h1 = document.querySelector('h1');
// h1.addEventListener('click',()=>{
//     // document.write("fenil")
//     h1.style.backgroundColor='red'
//     h1.innerHTML='chuti u(su thau)'
// })

// let a= document.querySelector('h1')
// a.innerHTML ="raja banaya"
// a.style.fontSize="80px"
// a.addEventListener('click',()=>{
//     console.log("hello")
// })

let button = document.querySelector('button');
let offbutton = document.querySelector('.offbutton');
let box = document.querySelector('p'); // Selects the <p> tag from your HTML

button.addEventListener('click', () => {
    box.style.backgroundColor = "yellow";
    box.style.scale="1"
});

offbutton.addEventListener('click', () => {
    box.style.backgroundColor = "red"; // Fixed the comma to a dot
});