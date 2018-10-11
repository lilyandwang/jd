var aItem = document.querySelectorAll(".banner2 li");
var oLeft = document.querySelector(".middlebtn-left");
var oRight = document.querySelector(".middlebtn-right");
var oUl = document.querySelector(".banner2").children[0];
var nowIndex = 0; // 当前显示的下标;

// 自增自减 都有头;
oRight.onclick = function(){
    if(nowIndex == aItem.length - 1){
        oUl.className = "";
        oUl.style.marginLeft = 0;
        nowIndex = 0;
    }else{
        nowIndex ++;
    }
    // console.log(nowIndex);
    oUl.className = "animate";
    oUl.style.marginLeft = -800 * nowIndex + "px";
}
oLeft.onclick = function(){
    if(nowIndex ==0){
        oUl.className = "";
        oUl.style.marginLeft =800+"px";
        nowIndex = aItem.length - 1;
    }else{
        nowIndex --;
    }
    // console.log(nowIndex);
    oUl.className = "animate";
    oUl.style.marginLeft = 800 * nowIndex + "px";
}