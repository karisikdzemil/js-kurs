// function newElement() {
//    let input = document.getElementById('myInput').value
//    let ul = document.querySelector('#myUL')
//    const node = document.createElement("li");
//    const textnode = document.createTextNode(input);
//    node.appendChild(textnode);
//    document.getElementById("myUL").appendChild(node);
//    let nvb = document.createElement("button")
//    nvb.innerText = "X"
//    nvb.onclick = nekafunkcija
//    nvb.style.float='right'
//    nvb.style.background='red'

//    node.appendChild(nvb)
//    console.log(node.innerText)


// }
// function nekafunkcija(el){
//    console.log("dal")
//    node = document.querySelector('li')
//    proba = node.innerText
//    node.remove()

// }


function newElement(){
   let input = document.getElementById('myInput').value
   // let newEl = document.createElement('li')
   // newEl.innerText = input
   let ul = document.getElementById('myUL')
   // ul.appendChild(newEl)
   // newBut = document.createElement('button')
   // newBut.className = "dobri"
   // newBut.innerHTML = 'X'
   // newBut.onclick = newFunc
   // newEl.appendChild(newBut)
   let span = document.getElementById('spanId')
   let newEl = document.createElement.innerHTML = '<span id="spanId"><li>djemsi<button onclick="newFunc(this)" id="proba">klikni</button></li></span>' 
   ul.appendChild(newEl)
   ul.innerText = best


}
function newFunc() {
   let newBut = document.querySelector('.dobri')
   let newEl = document.querySelector('li')
   // newBu.style.display = "none"      
}





























