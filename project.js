let url = `https://script.google.com/macros/s/AKfycbwUJRQF4zC0HQF5L2HauF1wh_Jn4SJtagdt3mqGRjLWg6fmq28/exec?sheetName=Hackathon`;
async function searchdata() {
    const res = await fetch(url)
    const data = await res.json();
    console.log(data)
    displaydata(data)
}
function displaydata(data) {
    main_data = [];

    for (let i = 0; i < data.length; i++) {
        main_data += `<div id="content" class="content ${data[i].topic.toUpperCase()} ">
    <div class="top">
        <h1  class="title">${data[i].topic.toUpperCase()}</h1>
        <h2 class="Author">${data[i].author}<span class="date">Nov 5, 2020</span></h1>
            <div class="icons">
                <a href="https://www.linkedin.com/in/karan-joshi-5397591a7/"><i class="fab fa-linkedin"
                        aria-hidden="true"></i></a>
                <a href="${data[i].githubLink}"><i class="fab fa-github" aria-hidden="true"></i></a>
                <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                <a href="https://github.com/karanjoshi1206/mausam
            "><i class="fa fa-link" aria-hidden="true"></i></a>
            </div>
    </div>
    <div class="description">
        <p>${data[i].description}
        <div class="projimg"><img src="/images/hackathon.jpg" alt=""></div>



        </p>
    </div>

</div> `
        let container = document.querySelector(".proj_container")
        container.innerHTML = `${main_data}`
    }
}

searchdata();

let dis = document.getElementById("searchbutton").addEventListener("click", () => {
    datasearch = document.getElementById("search").value;
    let value = datasearch.toUpperCase();
    // console.log(value)
    if (value == "") {
        $('.content').show('1000');
    }
    else {
        $('.content').not('.' + value).hide("1000")
        $('.content').filter('.' + value).show("1000")

    }
})
let ham = document.getElementById("ham")
let bar = document.getElementById("bar")

function toggle() {
    list.classList.toggle("active")
    bar.classList.toggle("fa-times")
}
