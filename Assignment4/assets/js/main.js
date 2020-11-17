//https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search

//https://developer.iconfinder.com/reference/overview-1
//Use icon to make a Poem Generator 



//-------------------------------------------------------------
//Your Code Starts here


$(() => {

    accessEvent();
})

accessEvent = () => {
    $("#button").click(() => {
        loadLyrics();
    })
}

loadLyrics = () => {

    let artist = "Coldplay";

    let song = [
        "Something Just Like This",
        "Viva La Vida",
        "Yellow",
        "Everglow",
        "Hymn for the Weekend",
        "Daddy",
        "Fix You",
        "Gravity",
        "Adventure of a Lifetime",
        "Parachutes"
    ];


    let num = Math.floor(Math.random() * (song.length));
    let songTitle = song[num];

    console.log(num);
    $.getJSON("https://api.lyrics.ovh/v1/" + artist + "/" + songTitle,
        (data) => {
            console.log(data);

            let lyrics = data["lyrics"];

            $("#song").empty();
            $("#poem").empty();

            $("#song").append(songTitle);
            $("#poem").append(lyrics);

        })




}








//-------------------------------------------------------------
//Inclass Sample


//     $(() => {

//         // loadData();
//         attachEvent();

//     })

//     // let inputCity = $("#city").val();

//     attachEvent = () => {
//         $("#search-button").click(() => {
//             loadData($("#city").val());

//             $("#city").val([]);
//         });

//         $("#city").keypress((e) => {
//             if (e.keyCode == 13) {
//                 loadData($("#city").val());
//                 $("#city").val([]);
//             }
//         })
//     }

//     loadData = () => {

//         // let city = "Astoria";

//         let city = $("#city").val();

//         //$.getJSON("url",()={})

//         // $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=70f708ea0ae960d4c869108676d2a8f4",
//         //     (data) => {
//         //         console.log(data);

//         //         let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
//         //         let temp = data.main.temp;
//         //         let weather = data.weather[0].description;
//         //         let cityName = data.name;
//         //         let country = data.sys.country;

//         //         $(".icon").empty();
//         //         $(".weather").empty();
//         //         $(".temp").empty();
//         //         $(".city-name").empty();


//         //         $(".icon").attr("src", icon);
//         //         $(".weather").append(weather);
//         //         // $(".temp").append(Math.floor(temp * 9 / 5 - 459.67) + " °F");
//         //         $(".temp").append(Math.floor(temp - 273.15) + " °C");
//         //         $(".city-name").append(cityName + ", " + country);


//         //     })



//         if (city != "") {

//             $.ajax({

//                 url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=70f708ea0ae960d4c869108676d2a8f4",
//                 type: "GET",
//                 dataType: "json",

//                 success: (data) => {

//                     let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
//                     let temp = data.main.temp;
//                     let weather = data.weather[0].description;
//                     let cityName = data.name;
//                     let country = data.sys.country;

//                     $(".icon").empty();
//                     $(".weather").empty();
//                     $(".temp").empty();
//                     $(".city-name").empty();


//                     $(".icon").attr("src", icon);
//                     $(".weather").append(weather);
//                     // $(".temp").append(Math.floor(temp * 9 / 5 - 459.67) + " °F");
//                     $(".temp").append(Math.floor(temp - 273.15) + " °C");
//                     $(".city-name").append(cityName + ", " + country);

//                     $("#error").empty();
//                 }

//             })


//         } else {

//             $("#error").empty();
//             $("#error").append("City can't be loaded.")


//         }




//     }
// }