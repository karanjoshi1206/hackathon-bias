let ham = document.getElementById("ham")
let bar = document.getElementById("bar")

function toggle() {
    list.classList.toggle("active")
    bar.classList.toggle("fa-times")
}


AOS.init();

const accordian = document.getElementsByClassName("contentbx");
for (i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function () {
        this.classList.toggle("accordian_active")
    })
}