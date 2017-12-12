/* Independent Practice

Making a favorites list: event delegation


Refactor the code below.

The difference will be: use event delegation so that you only have
to set one event listener for all the items once, when the
code first runs, and you don't have to add any others whenever
someone adds an item.

Bonus: When the user mouses over each item, the item should turn grey. Don't use CSS hovering for this.

Bonus 2: Add another link, after each item, that allows you to delete the item.

*/

function addToList($list, thing) {

// 1. Comment out the following three lines of code, then below them 
//    write a single statement to replace them, using chaining.
// Start of code to replace
//  const $thingLi = $('<li>');
//  $thingLi.html(thing);
//  $thingLi.addClass('fav-thing');
// End of code to replace

// Add refactored statement here:
  const $thingLi = $('<li>').html(thing).addClass('fav-thing');


  addCrossOffLink($thingLi);
  $list.append($thingLi);
}

function addCrossOffLink($li) {

// 2. Comment out the following three lines of code, then below them 
//    write a single statement to replace them, using chaining.
// Start of code to replace
//  const $crossOffLink = $('<span>');
//  $crossOffLink.html(' cross off');
//  $crossOffLink.addClass('cross-off');
// End of code to replace

// Add refactored statement here:
  const $crossOffLink = $('<span>').html(' cross off').addClass('cross-off');


// 3. Comment out the following three lines of code, then below them
//    write a single statement to replace them, using implicit iteration.
// Start of code to replace
  $li.each(function() {
    $(this).append($crossOffLink);
  });
// End of code to replace

// Add refactored statement here:
  $li.append($crossOffLink);


// 4a. Comment out the following four lines of code, then follow the instructions in 4b below
//     to create a new event listener that executes the same two statements using event delegation.

// Start of code to replace
//  $crossOffLink.on('click', function(event) {
//    $li.addClass('crossed-off');
//    $crossOffLink.html('');
//  });
// End of code to replace
}

$(document).ready(function() {
  const $thingList = $('#fav-list');
  const $things = $('.fav-thing');
  const $button = $('#new-thing-button');
  const $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    addCrossOffLink($(li));
  });

  $button.on('click', function(event) {
    event.preventDefault();
    const newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });

// 4b. Add new event listener code using event delegation below.
//     When a user clicks a child element of the list with the class value
//     'cross-off', execute a function that 
//        - creates a variable that stores a reference to the parent element of 
//          the clicked element 
//          (Hint: check out the jQuery parent() method and the 'this' keyword)
//        - adds the class 'crossed-off' to the item selected in the previous step
//        - sets the HTML content of the clicked element to an empty string
  $thingList.on('click', '.cross-off', function(event) {
    const $thingItem = $(this).parent();
    $thingItem.addClass('crossed-off');
    $(this).html('');
  });

});
