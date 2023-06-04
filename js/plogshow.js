var index = 1;
function slider(){
    index ++ ;
    //判断index是否大于3
    if(index > 3){
        index = 1;
    }
    //获取img对象
    var img = document.getElementById("sliderbox");
    img.src = "./images/picturewall-"+index+".jpg";
}
//2.定义定时器
setInterval(slider,2000);