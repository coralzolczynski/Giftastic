
$(document).ready(function () {
  var characters = ["Bilbo baggins", "Thorin Oakenshield", "Smaug", "Thranduil", "Bard the Bowman", "Sauron"];
  const allowCORS = 'https://cors-anywhere.herokuapp.com/'

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

  $(document).on("click", "#add-char", function (event) {
    event.preventDefault();
    // grabs the input from the textbox
    var movie = $("#char-input").val().trim();
    //input textbox is then added to array
    characters.push(movie);
    renderButtons();
  });

  renderButtons();

  $(document).on("click", ".char", function () {
    var characters = $(this).attr("data-name");
    var queryURL =  allowCORS + "https://api.giphy.com/v1/gifs/search?q=" +
      characters + "&api_key=Xuxi7trULn8Rpgvd2QYdbXh6gb4qC653&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var charImage = $("<img>");
          charImage.attr("src", results[i].images.fixed_height.url);
          charImage.attr('data-still', results[i].images.fixed_height_still.url);
          charImage.attr('data-animate', results[i].images.fixed_height.url);
          charImage.attr('data-state', "still");
          gifDiv.prepend(p);
          gifDiv.prepend(charImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });

  $("#gifs-appear-here").on("click", function () {
    var state = $(this).attr("data-state");
    if (state === 'still') {
      $(this).attr('src', $(this).attr('data-animate'));
      $(this).attr('data-state', 'animate');
    } else {
      $(this).attr('src', $(this).attr('data-still'));
      $(this).attr('data-state', 'still');
    }
  });

})

