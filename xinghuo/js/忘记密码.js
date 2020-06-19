$("btn1").click(function(){
    var phonenumber=$("#phonenumber").val();
    var password=$("#password").val();
    var code=$("#code").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/findPwd",
        type: "post",
        contentType: "application/json",
        data:JSON.stringify({
            "phonenumber": phonenumber,
            "password": password,
            "code": code,
        }),
        success:function(res){
            console.log(res);
        },
        error:function(err){
            console.log(err);
        }
    })
})
$("#btn2").click(function() {
    var phonenumber = $("#phonenumber").val();
    $.ajax({

        url: "http://59.111.92.205:13002/api/sendCode?mobile=" + phonenumber,
        type: "get",
        contentType: "application/json",
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error)
        }
    })
})