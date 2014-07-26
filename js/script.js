function triangle  (side1, side2, side3)
{
    if( (side1 == side2) && (side2 == side3) )
      {
       return "equilateral";
       }
     else if( (side1 == side2) || (side2 == side3) || (side3 == side1) )
      {
       return "isosceles";
       }
     else 
      {
       return "scalene";
       }

}

$(document).ready(function () {
    $("form#triangle-entry").submit(function (event) {
        event.preventDefault();
        var side1 = parseInt($("input#side1").val());
        var side2 = parseInt($("input#side2").val());
        var side3 = parseInt($("input#side3").val());
        console.log(side1);


        var result = triangle(side1, side2, side3);


        $("#result").show();
        $(".tri").text(result);
        $("input#side1").val("");
        $("input#side2").val("");
        $("input#side3").val("");


    });
});
