import _ from 'lodash';
import $ from 'jquery';

$("body").append($("<div class='hello'> <div/>"));

$(".hello").html( _.join(['hello', 'webpack'], " ") );




