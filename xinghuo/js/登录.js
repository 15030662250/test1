/*登录状态切换*/

$(".one").click(function () {
    $(this).addClass("xuanzhong").siblings().removeClass("xuanzhong");
})
$(".loginBynumber").click(function() {
    $(".secondLogin").hide();
    $(".firstLogin").show();
})
$(".loginByphone").click(function() {
    $(".secondLogin").show();
    $(".firstLogin").hide();
})

var btnn = document.getElementById("btnn");
var timer = null;
btnn.onclick = function() {
    var time = 60;
    timer = setInterval(function() {
        time--;
        btnn.innerHTML = time + "后再次获取";
        if (time == 0) {
            clearInterval(timer);
            btnn.innerHTML = "获取验证码"
            btnn.disabled = false;
        }

    }, 1000)
    this.disabled = true;
}

$("#btn1").click(function(){
    var userName=$("#zhanghao").val();
    var usermima = $("#mima").val();
    $.ajax({
    url:"http://59.111.92.205:13002/api/login",
    type:"post",
    data:{
        "username": userName,
        "password": usermima,
         "rememberMe": true,
    },
    success:function(res){
        
    }
    })

})
