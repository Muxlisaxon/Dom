// let list = document.querySelector(".list-group")
// let btn = document.querySelector(".btn")
// btn.onclick = () => {
//     if(!list.classList.contains("active")){
//         list.classList.add("active")
//     }else{
//         list.classList.remove("active")
//     }
// } 


let time = document.querySelector("h3")
let start = document.querySelector(".btn-primary")

start.onclick = () => {
    let i = 0
    setInterval(() => {
        time.innerHTML = i;
        let a =1
        i += a
    }, 1000);
    i++
}



let time1 = document.querySelector("h3")
let Reset = document.querySelector(".btn-secondary")
Reset.onclick = () => {
    let i = 0
    setTimeout(() => {
        clearInterval()
        time.innerHTML = 0;
    }, 1000)
}

let time2 = document.querySelector("h3")
let stop = document.querySelector(".btn-danger")
stop.onclick = () => {
    time = "0"
}