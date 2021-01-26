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

AOS.init();


$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 40) {
            $(".nav").css("background", "#070606");
        }

        else {
            $(".nav").css("background", "black");
        }
    })
})


// function theme() {
//     let home = document.getElementById("home")
//     let nav = document.getElementById('nav')
//     let content = document.getElementById("content")
//     let rules = document.getElementById('rules')
//     let more = document.querySelector(".more_content")
//     let timeline = document.getElementById('timeline')
//     let faq = document.getElementById('faq')
//     let faq_heading = document.getElementById('faq_heading')
//     let contact = document.getElementById('contact')
//     let main_title = document.querySelectorAll(".main_title")
//     let imp = document.querySelector(".imp")
//     let lines = document.querySelectorAll(".line")
//     home.classList.toggle("theme")
//     nav.classList.toggle('theme')
//     content.classList.toggle('theme')
//     rules.classList.toggle("theme")
//     more.classList.toggle('theme')
//     timeline.classList.toggle("theme")
//     faq.classList.toggle("theme")
//     faq_heading.classList.toggle("theme")
//     lines.forEach((line) => {
//         line.classList.toggle("theme")
//     })
//     imp.forEach((imps) => {
//         imps.classList.toggle("theme")
//     })
//     imp.classList.toggle("theme")
//     main_title.forEach((title) => {
//         title.classList.toggle("theme")
//     })

// }

$(document).ready(function () {
    $(".secondary_list_items").click(function () {
        const value = $(this).attr('data-filter');
        if (value == "All") {
            $('.topic').show('1000');
        }
        else {
            $('.topic').not('.' + value).hide("1000")
            $('.topic').filter('.' + value).show("1000")

        }
    })
})