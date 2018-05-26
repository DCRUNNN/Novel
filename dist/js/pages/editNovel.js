var vm = new Vue({
    el:'#container',
    data:{
        novelSubjects:['武侠小说','推理小说','爱情小说','反转小说','科幻小说','恐怖小说'],

    },
    methods:{

        saveNovel:function(){

        },

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
        var novel = JSON.parse(this.getCookieValue("novel"));
        console.log(novel)
        $('#novelTitle').val(novel.title);
        $('#novelSubject').val(novel.subject);
        $('#novelContent').val(novel.content);
    }

}) ;
