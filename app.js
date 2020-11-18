const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click',()=>{
    const newColor = randColor();
    document.body.style.backgroundColor = newColor;  //assigning it to the random color
    h1.innerText = newColor;
});

const randColor = () =>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    if(r < 50 ){
        h1.style.color = 'white';
    } 

    return `rgb(${r}, ${g},${b})`;

}

