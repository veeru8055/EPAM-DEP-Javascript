(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,t,n){"use strict";n.r(t),n.d(t,"headlines",function(){return a});var a=function(){var e=document.getElementById("myModal");e.getElementsByClassName("modal-header")[0].getElementsByTagName("h2")[0].innerHTML="Top Headlines";var t=e.getElementsByClassName("modal-body")[0],n=document.createElement("h5"),a=document.createElement("span");a.setAttribute("class","grayText"),a.appendChild(document.createTextNode("Posted on ")),n.appendChild(a);var d=new Date;n.appendChild(document.createTextNode(d.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][d.getMonth()]+", "+d.getFullYear())),t.getElementsByTagName("p")[0].innerHTML="",t.getElementsByTagName("p")[0].appendChild(n);var l=document.createElement("ul");t.getElementsByTagName("p")[1].innerHTML="",fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=38bdf22d077e45dcbdd9bbf51d0cf880").then(function(e){return e.json()}).then(function(e){e.articles.forEach(function(e){var t=document.createElement("li");t.appendChild(document.createTextNode(e.title)),l.appendChild(t)})}),t.getElementsByTagName("p")[1].appendChild(l),e.style.display="block"}}]]);