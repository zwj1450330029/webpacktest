import { aa } from "./test"
import imgUrl from './assets/online.png'
import img2 from "./assets/商品列表.jpg"
import textSource from './assets/test.txt'
import style from './assets/css/index.css'

import lessStyle from './assets/less/index.less'

document.body.classList.add("hellow");
var imgDom = document.createElement('img');
imgDom.src = imgUrl;
document.body.appendChild(imgDom)

var inlineImgDom = document.createElement("img");
inlineImgDom.src = img2;
inlineImgDom.style.cssText = "width:100px"
document.body.appendChild(inlineImgDom);

var div = document.createElement("div");
div.textContent = textSource;
div.style.cssText = "background:" + "#ccc" + "";
document.body.appendChild(div)

import svgImg from './assets/smart.svg';
var img3 = document.createElement('img');
img3.src = svgImg;
img3.style.cssText = "width:100px"
document.body.appendChild(img3);







console.log('===========aa');
console.log(aa)
aa()