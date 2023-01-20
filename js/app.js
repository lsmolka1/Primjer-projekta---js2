$(document).foundation();

$('#pilic').click(function(){
    $('#pilic').attr("src","slike/a.jpg");
    return false;
});

$('#OMS').mouseenter(function(){
    $('#OMS').css("font-style", "italic");
    return false;
});

$('#razina2').click(function(){
    $('#nulta').html("Nulta")
    return false;
});

$('#b').click(function(){
    $('#b').css("border", "5px dashed red");
    return false;
});

$('#d').click(function(){
    $('#d').hide();
    return false;
});

$('#f').mouseenter(function(){
    $('#f').css("background-color", "red");
    return false;
});

$('#f').mouseleave(function(){
    $('#f').css("background-color", "rgb(0, 140, 255)");
    return false;
});

$('#e').dblclick(function(){
    $('#c').html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    return false;
});



$('#h').click(function(){
    $('#oms').prop("checked", "true");
    return false;
});

$("#i").keydown(function(){
    $("#i").css("background-color", "red");
    return false
});

$("#i").keyup(function(){
    $("#i").css("background-color", "rgb(0, 140, 255)");
    return false
});

$('#j').click(function(){
    $('#j').animate({left: '250px'});
    return false;
});

$("#k").mouseenter(function(){
    alert(":)");
    return false
  });

$("#l").dblclick(function(){
    $("#m").delay("fast").fadeOut();
    $("#n").delay("2000").fadeOut();
    return false
});

var x = 0;
$(window).resize(function(){
    $("span").text(x += 1);
    return false
  });

$("#prvi").click(function(){
    $("#neki").slideUp();
    return false
});

$("#drugi").click(function(){
    $("#neki").slideDown();
    return false
});

//https://api.jquery.com/ - stranica koju sam koristila

$("#r").mousedown(function(){
    alert("Bravo!");
    return false
});

$("#s").mouseup(function(){
    alert("Tako je!");
    return false
});

$("#t").click(function(){
    $("#oblikovanje").fadeTo(1000, 0.4);
    return false
});

$("#t").click(function(){
    $("#mreznih").fadeTo(1000, 0.4);
    return false
});

$("#t").click(function(){
    $("#stranica").fadeTo(1000, 0.4);
    return false
});





