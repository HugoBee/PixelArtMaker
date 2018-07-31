// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {
  //declare variables
  const color = $("#colorPicker");
  const gridHeight = $("#heightinput");
  const gridWidth = $("#widthinput");
  const grid = $("#pixelCanvas");
  const sizePicker = $("#sizePicker");

  //Creates event listener for user's        submission
  sizePicker.submit(function(event) {
    event.preventDefault(); //prevent page                                 from refreshing
    grid.children().remove(); //reset table
    let h = gridHeight.val();
    let w = gridWidth.val();
    makeGrid(h, w);
  });
  function makeGrid(h, w) {
    for (let i = 1; i <= h; i++) {
      grid.append("<tr></tr>");
      let j = 1;
      while (j <= w) {
        $("tr")
          .last()
          .append("<td></td>");
        j++;
      }
    }
  }
  //color cells on click and drag
  grid.on("mousedown mouseover", "td", function(event) {
      if (event.buttons === 1) {
      let chosenColor = color.val();
      $(this).css("background-color", chosenColor);
    }
  });
  //clears picture button
  let clear = $("#clear");
  clear.on("click", function() {
    $("td").removeAttr("style");
  });
})
