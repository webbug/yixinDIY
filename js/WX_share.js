 
wxtitle = "我不是有故事的人，我只是选择做不一样的自己。";
wxdesc = "我不是有故事的人，我只是选择做不一样的自己。";
wxlink = "http://wx.fractalist.com.cn/yixin/h5/index.html";
wximgUrl = "http://wx.fractalist.com.cn/yixin/images/share/fenxiang.jpg";

    window.addEventListener('load', onloadFun, false);
    function onloadFun() {
        $.ajax({
            async: false,
            url: 'http://wx.fractalist.com.cn/yixin/GetWXJsApiByAjax.aspx?urlStr=' + encodeURIComponent(window.location.href),
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'callback',
            timeout: 5000,
            beforeSend: function () {
            },
            success: function (json) {
                wx.config({
                    debug: false,
                    appId: json["appId"],
                    timestamp: json["timestamp"],
                    nonceStr: json["nonceStr"],
                    signature: json["signature"],
                    jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage'
                    ]
                });

                wx.ready(function () {
                    wx.onMenuShareAppMessage({
                        title: wxtitle,
                        desc: wxdesc,
                        link: wxlink,
                        imgUrl: wximgUrl,
                        trigger: function (res) {

                        },
                        success: function (res) {
                            share("好友");
                            // alert("分享成功"); 分享给好友
                        },
                        cancel: function (res) {
                            // alert("cancel");
                        },
                        fail: function (res) {

                        }
                    });

                    wx.onMenuShareTimeline({
                        title: wxtitle,
                        link: wxlink,
                        desc: wxdesc,
                        imgUrl: wximgUrl,
                        trigger: function (res) {

                        },
                        success: function (res) {
                            share("朋友圈");
                            // alert("ok"); 分享到朋友圈
                        },
                        cancel: function (res) {
                            // alert("cancel");
                        },
                        fail: function (res) {
                            // alert("fail");
                        }
                    });
                });
            },
            complete: function (XMLHttpRequest, textStatus) {

            },
            error: function (xhr) {
                // alert(xhr.errMsg);
            }
        });
    }

    //微信分享重新请求
    //wxtitle = "我不是有故事的人，我只是选择做不一样的自己。";
    //wxdesc = "我不是有故事的人，我只是选择做不一样的自己。";
    //wxlink = "http://wx.fractalist.com.cn/yixin/h5/index.html";
    //wximgUrl = "http://wx.fractalist.com.cn/yixin/images/share/fenxiang.jpg";

    function wx_share(wxtitle, wxdesc, wxlink, wximgUrl) {
        onloadFun();
    }

