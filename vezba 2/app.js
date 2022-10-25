
function mojaf(){
    let unos = Number(prompt("pogodi random broj"))
    let h1 = document.getElementById("h1")
    let math = Math.random().toFixed(1) * 10
    if(unos === math){
        console.log(true)
    document.getElementById("p").innerText = "bravo"

    }
    h1.innerText = math

}