console.log("your index.js file is loaded");



//targeting "work page"
//on click of the hamburger image, a drop down will appear that
//has my nav items displayed in a box with a different image replacing the hamburger menu (x image )
//create a drop down which would be in a div box containing the 4 nav elements
//create div in my html 

$(document).ready(function(){
    $(".hover").hover(function(){
        $(this).css("color", "#030158");
    }, 
    function(){
        $(this).css("color", "#FFFFFF");
    });
});


/*
$(".navIteam") .on("mouseenter", function(){
        $(.navIteam).css("color", "rgba(3, 1, 88, 1)");
});
*/

/*$(".navIteam").hover(
    function(){
        $(this).append( $("<span></span>"));
    }, function(){
        $(this).find("span").last().remove();
    });

*/

/*
<div class="dropdown">
    <ul class="phoneNav">
        <li>Home</li>
        <li>About Me</li>
        <li>Work</li>
        <li>Resume</li>
        <button>Get In Touch</button>
    </ul>
</div>
*/

$(".hamburger").on("click", function(){
    console.log("was clicked")
    $(".hamburger").toggleClass("active");
    if ($(".hamburger").hasClass("active")) {
      $(".dropdown").css("height", "40vh");
      $(".dropdown").css("opacity","1");
    }
    else {
      $(".dropdown").css('height', "0vh");
      $(".dropdown").css("opacity","0");
    }
  });