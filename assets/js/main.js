// Checking off specific To-dos through clicking

$("ul").on("click", "li", function() {

  $(this).toggleClass("done");

});

//Click on X to delete todo

$("ul").on("click", "span", function () {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {

  if(event.which === 13) {
    //grabbing new todo text from input
    var toDoText = $(this).val();
    $(this).val("");
    //create new LI and add to UL
    $("ul").append("<li><span><i class='fa fa-trash fa-lg '></i></span> " + toDoText + "</li>")
  }

});

$(".fa-plus").click(function() {

   $("input[type=text]").fadeToggle();

});






