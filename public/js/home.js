// get blog entries
$.ajax({
    url: "/scrape",
    method: "GET",
}).done(data => {
    data = [data[0]]
    console.log(data)
    renderBlog(data)
}).error(error => {
    console.log("Error: posts not found")
})

var renderBlog = data => {
    var payload = ''
    for (entry in data) {
        payload +=
        `
        <div class="card-content">
            <div class="card-img">
                <img src="https://alzheimers.net${data[entry].img}"/>
                    <div class="category-container"><span><h4>${data[entry].category}</h4></span></div>
                        </div>
                <div class="card-desc">
                    <h3>${data[entry].headline}</h3>
                    <p>${data[entry].excerpt}</p>
                    <div class="btn-container">
                        <a href="${data[entry].url}" class="btn-card" target="_blank">Read</a>
                    </div>
                </div> 
            </div>
        </div>
        `
    }
    $('.blog-entries').empty()
    $('.blog-entries').append(payload)

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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

shuffleArray(photoArr)

for (i in photoArr) {
    if (i == 0) {
        $(".carousel-inner").append(`<div class="carousel-item active"><img class="d-block w-100" src="./img/${photoArr[i]}.jpg" alt="First slide"></div>`)
    } else {
        $(".carousel-inner").append(`<div class="carousel-item"><img class="d-block w-100" src="./img/${photoArr[i]}.jpg" alt="First slide"></div>`)
    }
}