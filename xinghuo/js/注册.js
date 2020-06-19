/*注册成功*/


$("#btnn").click(function(){
    var loginName=$("#loginName").val();
    var userName=$("#userName").val();
    var psssword=$("#password").val();
    var idNumber = $("#idNumber").val();
    var email = $("#email").val();
    var school = $("#school").val();
    var profession = $("#profession").val();
    var grade = $("#grade").val();
    var phonenumber = $("#phonenumber").val();
    var code = $("#code").val();
$.ajax({
url: "http://59.111.92.205:13002/api/register",
type:"post",
data:JSON.stringify({
    loginName: loginName,
    userName: userName,
    email: email,
    phonenumber: phonenumber,
    password: password,
    code: code,
    idNumber: idNumber,
    school: school,
    profession: profession,
    grade: grade,
}),
success:function(res){
    console.log(res);
},
error: function (err) {},
})
})
/*获取验证码*/
$("#btn1").click(function () {
    //   手机号
    var phonenumber = $("#phonenumber").val();
    $.ajax({
      url: "http://59.111.92.205:13002/api/sendCode?mobile=" + phonenumber,
      type: "get",
      contentType: "application/json",
  
      success: function (res) {
        console.log(res);
      },
      error: function (err) {},
    });
  });
 
    