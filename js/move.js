function move(dom,json,callback){
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        var flag = 0;
        for(var attr in json){
            flag ++;
            var iNow = parseInt(getStyle(dom,attr));
            var speed  = (json[attr] - iNow) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(iNow == json[attr]){
                delete json[attr];
            }
            dom.style[attr] = iNow + speed + "px";
        }
        if(flag == 0){
            clearInterval(dom.timer);
            if(callback){
               callback();
            }
        }
    },50)
}

function getStyle(dom,attr){
    if(getComputedStyle){
        return getComputedStyle(dom)[attr];
    }else{
        return dom.currentStyle[attr];
    }
}