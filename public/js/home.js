// get blog entries
// $.ajax({
//     url: "/scrape",
//     method: "GET",
// }).done(data => {
//     data = [data[0]]
//     console.log(data)
//     renderBlog(data)
// }).error(error => {
//     console.log("Error: posts not found")
// })

// var renderBlog = data => {
//     var payload = ''
//     for (entry in data) {
//         payload +=
//             `
//         <div class="card-content">
//             <div class="card-img">
//                 <img src="https://alzheimers.net${data[entry].img}"/>
//                     <div class="category-container"><span><h4>${data[entry].category}</h4></span></div>
//                         </div>
//                 <div class="card-desc">
//                     <h3>${data[entry].headline}</h3>
//                     <p>${data[entry].excerpt}</p>
//                     <div class="btn-container">
//                         <a href="${data[entry].url}" class="btn-card" target="_blank">Read</a>
//                     </div>
//                 </div> 
//             </div>
//         </div>
//         `
//     }
//     $('.blog-entries').empty()
//     $('.blog-entries').append(payload)
// }

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
            $(".carousel-inner").append(`<div class="carousel-item active"><img class="d-block w-100" src="${data[i].thumbnails.lg}" alt="First slide"><div class="carousel-caption d-none d-md-block"><p class="hover-caption">${data[i].caption}</p></div></div>`)
        } else {
            $(".carousel-inner").append(`<div class="carousel-item"><img class="d-block w-100" src="${data[i].thumbnails.lg}" alt="First slide"><div class="carousel-caption d-none d-md-block"><p class="hover-caption">${data[i].caption}</p></div></div>`)
        }
    }
    // var divHeight = $(".insta-feed").height()
    // console.log(divHeight)
    // $(".map-zone").append(`<div style="width: 100%"><iframe width="100%" height="${divHeight}" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=28661%20Meadow%20Glen%20Way%20W%20%20Escondido%2C%20CA%2092026+(Hilltop%20Country%20Estate)&amp;ie=UTF8&amp;t=h&amp;z=14&amp;iwloc=B&amp;output=embed"
    // frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`)
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