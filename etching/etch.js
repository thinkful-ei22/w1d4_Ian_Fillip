// Add Event Listeners here:
  
// function hover(){
//   $('.cell').hover(event => {
//     $(event.currentTarget).addClass('active');
//   })
// }

function hover2(){
  $('.grid').on('mouseover', '.cell', event => {
    console.log($(this),$(event.currentTarget));
    $(event.currentTarget).addClass('active');
  })
}

function clear(){
  $('button').click(event => {
    createAndPlaceRows(8)
  })
}

// When DOM is ready:
$(() => {
  createAndPlaceRows(8);
  hover2();
  clear();


  // Bind your event listeners here:
});







// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<div class="cell">&nbsp;</div>';
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}

function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}

function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}
