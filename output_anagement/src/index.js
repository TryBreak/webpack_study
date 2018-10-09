import _ from 'lodash';


$("body").append($("<div class='hello'> <div/>"));

$(".hello").html( _.join(['hello', 'webpack'], " ") );




