import _ from 'lodash';
import $ from 'jquery';
import printMe from './print.js';

$("body").append($("<div class='hello'> </div>"));
$(".hello").html(_.join(['hello', 'webpack'], " "));

$("body").append($("<button class='btn'>Click me and check the console!</button>"));

$('.btn').click(printMe);


if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
    })
}











