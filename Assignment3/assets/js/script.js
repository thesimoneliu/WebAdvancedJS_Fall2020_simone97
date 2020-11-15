// Vanilla JS validation
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("JS is connected!");
// });
$(() => {
    console.log("JS is connected!");
    loadData();
})

widthHeight = () => {
    document.getElementById("widthheight").innerHTML = "W:" + window.innerWidth + " H:" + window.innerHeighteight;
}
window.onresize = widthHeight;
window.onload = widthHeight;


loadData = () => {

    $.getJSON("assets/data/content.json", (data) => {
        console.log("JSON is loaded!")
        console.log(data);
        getWebsites(data);
        // let dsfs = getWebsites(data);
        // console.log(dsfs);
        //document.getElementsByClassName("websites-list").innerHTML = getWebsites(data);
    })

}

getWebsites = (temp) => {

    let source = $("#my-template").html();
    let template = Handlebars.compile(source);
    let results = template(temp);
    $('.websites-list').append(results);

}