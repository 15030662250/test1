("#btn2").click(function() {
    $.ajax({

            url: "http://59.111.92.205:13002/api/site/logout",
            type: "get",
            contentType: "application / json",
            xhrFields: {
                withCredentials: true // 要在这里设置 跨域设置cookie
            },
            crossDomain: true,

            success: function(res) {
            }
        })
})