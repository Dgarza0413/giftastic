
var gifArray = ["sad", "happy", "angry", "calm"]

function generateGif() {
    var limitValue = 15
    var searchValue = $(this).attr("data-name")
    var APIkey = "VUJHlGFynk0yIcm8xpEqb22Pm5fjxMWO"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchValue + "&api_key=" + APIkey + "&limit=" + limitValue

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            var gif = $("<img>")
            var gifBox = $("<div>")
            var metaBox = $("<div>")
            var rating = $("<p>")
            var title = $("<p>")

            gif.attr("src", response.data[i].images.fixed_height_still.url)
            gif.attr("data-still", response.data[i].images.fixed_height_still.url)
            gif.attr("data-animate", response.data[i].images.fixed_height.url)
            gif.attr("data-state", "still")
            gif.addClass("gif")

            gifBox.addClass("gif-images")
            metaBox.addClass("meta-box")

            title.html(response.data[i].title)
            rating.html(response.data[i].rating)

            $(".giphy-box").prepend(gifBox)

            metaBox.prepend(rating)
            metaBox.prepend(title)

            gifBox.prepend(gif)
            gifBox.prepend(metaBox)
        }

        $("img").on("click", function () {
            if ($(this).attr("data-state") === "still") {
                $(this).attr("src", $(this).attr("data-animate"))
                $(this).attr("data-state", 'animate')
            } else {
                $(this).attr("src", $(this).attr("data-still"))
                $(this).attr("data-state", 'still')
            }
        })
        console.log(response.data)
    });
}

function generateButtons() {
    $(".giphy-button").empty()
    //this gifarray is need to push any search value turned into a button
    //a function for loop to generate all buttons
    for (var i = 0; i < gifArray.length; i++) {
        var button = $("<button>");
        // add attributes with gifArray indexes
        button.addClass("gif-search")
        button.attr("data-name", gifArray[i])
        button.text(gifArray[i])
        $(".giphy-button").append(button)
    }
}

//lets use the search bar to input and push values into the gif Array
//change the syntax of the on click function
$("#submit").on("click", function (event) {
    event.preventDefault();
    var gifSearch = $(".search-gif").val().trim();
    console.log(gifSearch)
    gifArray.push(gifSearch)
    generateButtons()
})

$(document).on("click", ".gif-search", generateGif);
generateButtons()