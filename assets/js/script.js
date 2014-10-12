//<!--Rohan Likhite -->
$(document).ready(function() {
    //Array of strings to be randomized - Bingo Square text
    var theList = ["POV Legs","Latte Art","#OOTD","ALCOHOL","Throwback","Black and White","Fitness","POV Driving","Food","Quote","Pets","Selfie","Texts","The Crew","Cars","#JobLove","PlaneWing","Concert","Starbucks","Tattoo","#NoFilter","Feet","#TakeMeBack","City Skyline"];
    theList.sort(function() {
        return 0.5 - Math.random();
    });
    for (var i = 0; i<25; i++) {
//ID's of table cells are #sq1, #sq2, etc.
      
    
        $("#sq"+(i+1)).append(theList[i]);
          //newImage = "url(http://i.imgur.com/LsEqAim.jpg)";
        //newImage = "url('bg1.jpg')";
        //newImage = 'url(./FoodImages/fruit' + i.toString() + '.jpg)';
        //document.getElementById('sq'+(i+1)).style.backgroundImage = newImage;
    }
    $('td').click(function() {
        $(this).toggleClass('ui');
        if ($(this).data('value') == 1) {
            $(this).data('value', 0);
        } else {
            $(this).data('value', 1);
        }
        //Check for bingo
        var row1 = ($('#sq1').data('value')+$('#sq2').data('value')+$('#sq3').data('value')+$('#sq4').data('value')+$('#sq5').data('value'));
        var row2 = ($('#sq6').data('value')+$('#sq7').data('value')+$('#sq8').data('value')+$('#sq9').data('value')+$('#sq10').data('value'));
        var row3 = ($('#sq11').data('value')+$('#sq12').data('value')+$('#free').data('value')+$('#sq13').data('value')+$('#sq14').data('value'));
        var row4 = ($('#sq15').data('value')+$('#sq16').data('value')+$('#sq17').data('value')+$('#sq18').data('value')+$('#sq19').data('value'));
        var row5 = ($('#sq20').data('value')+$('#sq21').data('value')+$('#sq22').data('value')+$('#sq23').data('value')+$('#sq24').data('value'));

        var col1 = ($('#sq1').data('value')+$('#sq6').data('value')+$('#sq11').data('value')+$('#sq15').data('value')+$('#sq20').data('value'));
        var col2 = ($('#sq2').data('value')+$('#sq7').data('value')+$('#sq12').data('value')+$('#sq16').data('value')+$('#sq21').data('value'));
        var col3 = ($('#sq3').data('value')+$('#sq8').data('value')+$('#free').data('value')+$('#sq17').data('value')+$('#sq22').data('value'));
        var col4 = ($('#sq4').data('value')+$('#sq9').data('value')+$('#sq13').data('value')+$('#sq18').data('value')+$('#sq23').data('value'));
        var col5 = ($('#sq5').data('value')+$('#sq10').data('value')+$('#sq14').data('value')+$('#sq19').data('value')+$('#sq24').data('value'));

        var diag1 = ($('#sq1').data('value')+$('#sq7').data('value')+$('#free').data('value')+$('#sq18').data('value')+$('#sq24').data('value'));
        var diag2 = ($('#sq5').data('value')+$('#sq9').data('value')+$('#free').data('value')+$('#sq16').data('value')+$('#sq20').data('value'));

        if (row1 == 5 || row2 == 5 || row3 == 5 || row4 == 5 || row5 == 5 || col1 == 5 || col2 == 5 || col3 == 5  || col4 == 5  || col5 == 5 || diag1 == 5 || diag2 == 5) {
            $('#winner').slideDown('fast');
        }
    });
});