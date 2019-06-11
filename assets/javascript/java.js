var characters = ["Gandalf", "Bilbo baggins", "Thorin Oakenshield", "Smaug", "Thranduil", "Elrond", "Sauron"];

function alertCharacterName() { 

}

  // Function for displaying character data
function renderButtons() {

    // Deleting the characters prior to adding new characters
    $("#buttons-view").empty();

    // Looping through the array of characters
    for (var i = 0; i < characters.length; i++) {

      var a = $("<button>");
      // Adding a class
      a.addClass("char");
      // Added a data-attribute
      a.attr("data-name", characters[i]);
      // Provided the initial button text
      a.text(characters[i]);
      // Added the button to the HTML
      $("#buttons-view").append(a);
    }
}

$("#add-char").on("click", function(event) {
    event.preventDefault();

    // grabs the input from the textbox
    var movie = $("#char-input").val().trim();

    //input textbox is then added to array
    characters.push(movie);

    renderButtons();
});

$(document).on("click", ".movie", alertCharacterName);

renderButtons();












// $("button").on("click", function() {
//     var topic = $(this).attr("data-topic");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       topic + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       .then(function(response) {
//         var results = response.data;

//         for (var i = 0; i < results.length; i++) {
//           var gifDiv = $("<div>");

//           var rating = results[i].rating;

//           var p = $("<p>").text("Rating: " + rating);

//           var topicImage = $("<img>");
//           topicImage.attr("src", results[i].images.fixed_height.url);

//           gifDiv.prepend(p);
//           gifDiv.prepend(topicImage);

//           $("#gifs-appear-here").prepend(gifDiv);
//         }
//       });
//   });


//   $(".gif").on("click", function() {
//     var state = $(this).attr("data-state");
//     if (state === 'still') {
//         $(this).attr('src', $(this).attr('data-animate'));
//         $(this).attr('data-state', 'animate');
//       } else {
//         $(this).attr('src', $(this).attr('data-still'));
//         $(this).attr('data-state', 'still');
//       }
//     });