$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/notice/detail",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify({
        "id": localStorage.aa
    }),
    success: function(res) {
        console.log(res);
        $("#p1").html(res.data.content)
        $("#h11").html(res.data.title)
        $("#time").html(res.data.updateTime)
    },
    error: function(error) {
        console.log(error);
    }
})