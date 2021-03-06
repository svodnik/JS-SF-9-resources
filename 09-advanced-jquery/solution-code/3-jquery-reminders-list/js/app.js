/* Independent Practice

Building a customizable reminders list with jQuery

The HTML document contains an empty unordered list.
It also contains a text input box and a Create button.
Write jQuery to enable users to add elements to the reminders list.
*/

// STEP 1
// Create a variable that contains a reference to the submit button element (which has the id value new-thing-button).
// HINT: Remember to use $ at the start of the variable name to indicate that it contains a jQuery object.


// STEP 2
// Create a variable that contains a reference to the empty list element (which has the id value to-do-list).


// STEP 3
// Create a variable that contains a reference to the text box element (which has the id value new-thing).


// STEP 4
// Create an event listener for the click event on the button.
// Use the variable you created in Step 1 to reference the button element.


// STEP 5
// Within the event listener, add statements that do the following:
// - Prevent the button's default click behavior from occurring
// - Create a variable that contains the value of the text box
// - Create a variable that contains a new list item element
// - Specify the value of the text box as the text content of the new list item element
// - Append the new list item element to the to do list, using the reference you created in Step 2.
// - Reset the value in the text box (Hint: the value when the page loads is an empty string)


// STEP 6
// Save your changes, open index.html in your browser, then test your app.

$(document).ready(function() {
  const $button = $('#newThingButton');
  const $thingList = $('#surveyList');
  const $newThingInput = $('#newThing');

  $button.on('click', function(event) {
    event.preventDefault(); 
    const newThing = $newThingInput.val();
    const $newThingLi = $('<li>');
    $newThingLi.text(newThing); 
    $thingList.append($newThingLi);
    $newThingInput.val('');
  });
});

// BONUS:
// Use jQuery to add a "complete task" link at the end of each to-do item when it is added to the list.
// When clicked, the link should cross out the current item 
// (HINT: add the 'completed' class to the list, which sets the text-decoration property to line-through)


/* function addCompleteLinks($li) {
  const $completedLink = $('<span>').html(' complete task').addClass('complete-task');
  // $lis is a collection, and the following command
  // acts on each instance in the collection
  $li.append($completedLink);

  $('.complete-task').on('click', function(event) {
    // We don't need `event.preventDefault()` here
    // because there is no weird default action
    // when clicking on a `span` element.
    $(this).parent().addClass('completed');
  });
}

$(document).ready(function() {
  const $button = $('#newThingButton');
  const $thingList = $('#surveyList');
  const $newThingInput = $('#newThing');

  $button.on('click', function(event) {
    event.preventDefault(); 
    const newThing = $newThingInput.val();
    const $newThingLi = $('<li>');
    $newThingLi.text(newThing); 
    $thingList.append($newThingLi);
    addCompleteLinks($newThingLi);
    $newThingInput.val('');
  });
}); */
