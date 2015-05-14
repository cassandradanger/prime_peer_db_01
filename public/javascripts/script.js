/**
 * Created by casie on 5/12/15.
 */

console.log("script.js is loading");

$.ajax({
    method: "get",
    url: "/assignment",
    success: function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            var name = response[i].name;
            var score = response[i].score;
            var id = response[i]._id;
            $('.info').append("<div class = 'list'>Name: " + name + "<br/>Score: " + score + "<br/>ID: " + id + "<br/><button class='remove' value= '" + id + "' style='margin:15px 0px 10px 0px'>REMOVE</button><hr></div>");
            console.log("it works!!");
        }
    }
});

$(document).ready(function(){
    $('.info').on('click', '.remove', function(){
        var val = $(this).attr('value');
        $(this).parent().remove();
        console.log(val);
        console.log(this);
        $.ajax({
            method: "delete",
            url: "/assignment/" + val
        });
    });
});
