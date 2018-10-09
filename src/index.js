import _ from 'lodash';
import './style.css';
import icon from './icon.jpg';

function component() {
    var element = document.createElement("div");

    element.innerHTML = _.join(['hello','webpack'], " ");
    //添加类名
    element.classList.add('hello');
    //添加图片
    var myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);
    //返回插入
    return element;
}
document.body.appendChild( component() )











