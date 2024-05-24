const slider = document.querySelector(".slider")
const price = document.querySelectorAll(".price")

function toggle() {
    slider.classList.toggle("active")

    if(slider.classList.contains("active")) {
        for(let i = 0; i < price.length; i++) {
            price[i].innerHTML = Math.round(price[i].innerHTML * 100) / 10
        }
    } else {
        for(let i = 0; i < price.length; i++) {
            price[i].innerHTML = Math.round((price[i].innerHTML) * 10) /100
        }
    }
    
    
}