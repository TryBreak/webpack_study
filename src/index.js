import _ from 'lodash';
import './style.css';
import icon from './icon.jpg';
import $ from 'jquery';

console.log( icon )


$("body").append($("<div class='hello'> <div/>"));

var img = $("<img>");
img.attr("src", icon);

$(".hello").html(_.join(['hello', 'webpack'], " ")).append(img);