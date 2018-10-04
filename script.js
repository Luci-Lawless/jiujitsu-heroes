// Menu
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// Back to top Button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Toggle definitions
$(document).ready(function(){
    $("#jjjp").hide();
    $("#bjjp").hide();
    $("#jjj").click(function(){
        $("#jjjp").slideToggle("slow");
    });
    $("#bjj").click(function(){
        $("#bjjp").slideToggle("slow");
    });
});
