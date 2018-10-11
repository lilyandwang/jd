// 光标移上改变背景图片
var box1 = Array.from(document.getElementsByTagName("div"))[4];
var box2 = Array.from(document.getElementsByTagName("div"))[5];
var box1p = document.querySelector(".box1p");
var box2p = document.querySelector(".box2p");
// console.log(Array.from(box1))

//点击和改变内容的时候改变背景
box1.onclick = function(){
    box1p.style.backgroundPosition = '0 -48px';
}
box1.onchange = function(){
    box1p.style.backgroundPosition = '0 0';
}
box2.onclick = function(){
    box2p.style.backgroundPosition = '-48px -48px';
}
box2.onchange = function(){
    box2p.style.backgroundPosition = '-48px 0';
}

var box4 = Array.from(document.getElementsByTagName("a"))[1];
var box1Input = box1.children[1];
var box2Input = box2.children[1];
// console.log(box4,box1Input,box2Input)
//登录提交信息
box4.onclick = function(){
    var url = "http://localhost/phpnow/jd/php/login.php";
    ajaxPost(url,`username=${box1Input.value}&password=${box2Input.value}`)
    .then(function(res){
       window.open("http://localhost/phpnow/jd/index.html");
    })
}