// get instagram posts
$.ajax({
    url: "/insta",
    method: "GET",
}).done(data => {
    renderPosts(data)
    console.log(data)
}).error(error => {
    console.log("Error: posts not found")
})

var renderPosts = data => {
    for (var i = 0; i < 4; i++) {
        if (i == 0) {
            $(".gallery-preview2").append(`<div class="carousel-item active"><img class="d-block w-100" src="${data[i].thumbnails.lg}" alt="First slide"><div class="carousel-caption d-none d-md-block"><p class="hover-caption">${data[i].caption}</p></div></div>`)
        } else {
            $(".gallery-preview2").append(`<div class="carousel-item"><img class="d-block w-100" src="${data[i].thumbnails.lg}" alt="First slide"><div class="carousel-caption d-none d-md-block"><p class="hover-caption">${data[i].caption}</p></div></div>`)
        }
    }
}

$(document).ready(buttonPopulate)

$(window).resize(buttonPopulate)

function buttonPopulate() {
    var button = $('.change-text')
    button.empty()
    console.log(button.width())
    if (button.width() < 300) {
        button.text('schedule tour')
    }
    else {
        button.text('Click or call to schedule a tour today!')
    }
    button.append('&nbsp;&nbsp;<i class="fa fa-angle-right"></i>')
}

var photoArr = [
    "umbrella",
    "twin-trees",
    "branch",
    "hilltop1",
    "lady-puppy",
    "backyard-house",
    "front-porch",
    "sun-peeking",
    "front-table",
    "front-arch",
    "hanging-flower",
    "back-landscape"
]

for (i in photoArr) {
    if (i == 0) {
        $(".carousel-inner2").append(`<div class="carousel-item active"><img class="home-carousel d-block w-100" src="./img/${photoArr[i]}.jpg" alt="First slide"><div class="carousel-caption d-none d-md-block"><h5><a class="hover-caption home-carousel-caption" href="/gallery">View Photo Gallery</a></h5></div></div>`)
    } else {
        $(".carousel-inner2").append(`<div class="carousel-item"><img class="home-carousel d-block w-100" src="./img/${photoArr[i]}.jpg" alt="First slide"><div class="carousel-caption d-none d-md-block"><h5><a class="hover-caption home-carousel-caption" href="/gallery">View Photo Gallery</a></h5></div></div>`)
    }
}