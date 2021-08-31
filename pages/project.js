let url = `https://script.google.com/macros/s/AKfycbwUJRQF4zC0HQF5L2HauF1wh_Jn4SJtagdt3mqGRjLWg6fmq28/exec?sheetName=Hackathon`;
async function searchdata() {
    const res = await fetch(url)
    const data = await res.json();
    console.log(data)
    displaydata(data)
    displaytabledata(data)


}
function displaydata(data) {
    main_data = [];
    for (let i = 0; i < data.length; i++) {
        main_data += `<div id="content" class="content ${data[i].topic.toUpperCase()} ">
    <div id="${data[i].topic}" class="top">
        <h1  class="title">${data[i].topic.toUpperCase()}</h1>
        <h2 class="Author">${data[i].author}<span class="date">${data[i].submission}</span></h1>
            <div class="icons">
            
                <a href="${data[i].githubLink}"><i class="fab fa-github" aria-hidden="true"></i></a>
                <a href="${data[i].projectLink}
            "><i class="fa fa-link" aria-hidden="true"></i></a>
            </div>
    </div>
    <div class="description">
        <p>${data[i].description}
        <div class="projimg">${data[i].videoLink}
        </div>



        </p>
    </div>

</div> `
        let container = document.querySelector(".proj_container")
        container.innerHTML = `${main_data}`
    }
    let remove = document.getElementById("remove")
    remove.style.display = "none";
}
function displaytabledata(data) {
    table_data = [];

    for (let i = 0; i < data.length; i++) {
        table_data += ` <tr>
        <td>${data[i].topic}</td>
        <td>${data[i].author}</td>
        <td><a href="#${data[i].topic}">View Project</a></td>
    </tr>`
        let table_body = document.querySelector("#table_body")
        table_body.innerHTML = `${table_data}`
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
