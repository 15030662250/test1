
    $.ajax({
        url: " http://59.111.92.205:13002/api/innovation/notice/list",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
          type: "1",
        }),
        success: function (res) {
          console.log(res);
          $("#content1").html(res.rows[0].describe);
          $("#time1").html(res.rows[0].createTime);
          $("#title1").html(res.rows[0].title);
          $("#img1").attr("src", res.rows[0].coverUrl);
        },
        error: function (err) {
          console.log(err);
        },
      });
      $.ajax({
        url: " http://59.111.92.205:13002/api/innovation/notice/list",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
          type: "2",
        }),
        success: function (res) {
          console.log(res);
          // $("#title2").html(res.rows[0].title);
          $("#content2").html(res.rows[0].describe);
          $("#time2").html(res.rows[0].createTime);
          $("#title2").html(res.rows[0].title);
          $("#img2").attr("src", res.rows[0].coverUrl);
          console.log(res.rows[0].coverUrl);
        },
        error: function (err) {
          console.log(err);
        },
      });
      $.ajax({
        url: " http://59.111.92.205:13002/api/innovation/notice/list",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
          type: "3",
        }),
        success: function (res) {
          console.log(res);
          $("#content3").html(res.rows[0].describe);
          $("#time3").html(res.rows[0].createTime);
          $("#title3").html(res.rows[0].title);
          $("#img3").attr("src", res.rows[0].coverUrl);
          console.log(res.rows[0].coverUrl);
        },
        error: function (err) {
          console.log(err);
        },
      });