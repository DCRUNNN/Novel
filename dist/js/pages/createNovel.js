var vm = new Vue({
    el:'#container',
    data:{
        novelSubjects:['武侠小说','推理小说','爱情小说','反转小说','科幻小说','恐怖小说'],

    },
    methods:{

        // addNovel:function () {
        //     var title = $('#novelTit
        // le').val();
        //     if(title==""){
        //         alert("标题不能为空！")
        //         return;
        //     }
        //     var subject = $('#novelSubject').val();
        //     var content = $('#novelContent').val();
        //
        //     var dappContactAddress = "n1yhoSUxQFkaAeDcMM4HwB7bx2EHQzmDxb2";
        //     var nebulas = require("nebulas"),
        //         Account = nebulas.Account,
        //         neb = new nebulas.Neb();
        //     neb.setRequest(new nebulas.HttpRequest("https://testnet.nebulas.io"))
        //
        //     var NebPay = require("nebpay");     //https://github.com/nebulasio/nebPay
        //     var nebPay = new NebPay();
        //     var serialNumber
        //
        //     var to = dappContactAddress;
        //     var value = "0";
        //     var callFunction = "createNovel";
        //     var callArgs = "[\"" + title + "\",\"" + subject + "\",\"" + content + "\"]";
        //     console.log(callArgs);
        // },

        setCookie:function (cname,cvalue,exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        },
        getCookieValue:function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        },

        deleteCookie:function (cname) {
            this.setCookie(cname,"",-1);
            window.location.href="../pages/index.html"
        },
    },

    mounted(){
        window.postMessage({
            "target": "contentscript",
            "data": {},
            "method": "getAccount",
        }, "*");
        window.addEventListener('message', function (e) {
            if (e.data && e.data.data) {
                if (e.data.data.account) {//这就是当前钱包中的地址
                    var account = e.data.data.account;
                    if(account!='n1QVFUAEEE8Nz3TsCe2TtcW53ZVrR5Qb9af' && account!='n1Ft17PTSw7YjaQULBiKyBeMguZCcECqHek'){
                        alert("不好意思，只有管理员才可以新建小说，您可以去参与小说创作！");
                        window.location.href='index.html';
                    }
                }
            }
        });
    }

}) ;
