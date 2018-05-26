var vm = new Vue({
    el:'#container',
    data:{
        novelSubjects:['武侠小说','推理小说','爱情小说','反转小说','科幻小说','恐怖小说'],
        dappAddress:'n1gWbChQ3qq6sLc1V6Cn5Vwy65RnB5nU8cp',
        loveNovel:{
            title : '',
            subject:'爱情小说',
            content:'',
            info:'一篇关于爱情的小说，快来加入创作吧！',
            time : 0,
            creatorAddress : '',
            authors : [],
            numOfAgree : 0,
            numOfDiss : 0,
            agreedUsers : [],
            disagreedUsers : []
        },
        reverseNovel:{
            title : '',
            subject:'反转小说',
            content:'',
            info:'一篇反转题材的小说，快来加入创作吧！',
            time : 0,
            creatorAddress : '',
            authors : [],
            numOfAgree : 0,
            numOfDiss : 0,
            agreedUsers : [],
            disagreedUsers : []
        },
        horrorNovel:{
            title : '',
            subject:'恐怖小说',
            content:'',
            info:'一篇恐怖题材的小说，快来加入创作吧！',
            time : 0,
            creatorAddress : '',
            authors : [],
            numOfAgree : 0,
            numOfDiss : 0,
            agreedUsers : [],
            disagreedUsers : []
        },
        inferentialNovel:{
            title : '',
            subject:'推理小说',
            content:'',
            info:'一篇推理题材的小说，快来加入创作吧！',
            time : 0,
            creatorAddress : '',
            authors : [],
            numOfAgree : 0,
            numOfDiss : 0,
            agreedUsers : [],
            disagreedUsers : []
        },
        kungFuNovel:{
            title : '',
            subject:'武侠小说',
            content:'',
            info:'一篇武侠题材的小说，快来加入创作吧！',
            time : 0,
            creatorAddress : '',
            authors : [],
            numOfAgree : 0,
            numOfDiss : 0,
            agreedUsers : [],
            disagreedUsers : []
        },
        scienceNovel:{
            title : '',
            subject:'科幻小说',
            content:'',
            info:'一篇科幻题材的小说，快来加入创作吧！',
            time : 0,
            creatorAddress : '',
            authors : [],
            numOfAgree : 0,
            numOfDiss : 0,
            agreedUsers : [],
            disagreedUsers : []
        },


    },
    methods:{

        joinNovel:function (novel) {
            if(novel.title==""){
                alert("该主题下还没有小说哦，请联系管理员创建！");
                return;
            }
            this.setCookie("novel",JSON.stringify(novel),1);
            window.location.href="editNovel.html"
        },

        joinNovelModal:function () {
            window.location.href="editNovel.html"
        },

        showNovelInfo:function (novel){
            if(novel.title==""){
                alert("该主题下还没有小说哦，请联系管理员创建！");
                return;
            }
            $('#novelName').val(novel.title);
            $('#novelSubject').val(novel.subject);
            $('#novelAuthor').val(novel.authors);
            $('#novelContent').val(novel.content);
            document.getElementById("numOfAgree").innerText = novel.numOfAgree;
            document.getElementById("numOfDiss").innerText = novel.numOfDiss;

            this.setCookie("novel",JSON.stringify(novel),1);

            $("#showNovelInfoModal").modal('show');
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

        setLoveNovelData:function (item) {
            this.loveNovel.title = item.title;
            this.loveNovel.content=item.content;
            this.loveNovel.time=item.time;
            this.loveNovel.creatorAddress=item.creatorAddress;
            this.loveNovel.authors = item.authors;
            this.loveNovel.numOfAgree = item.numOfAgree;
            this.loveNovel.numOfDiss =item.numOfDiss;
            this.loveNovel.agreedUsers = item.agreedUsers;
            this.loveNovel.disagreedUsers = item.disagreedUsers
        },

        setReverseNovelData:function(item){
            this.reverseNovel.title = item.title;
            this.reverseNovel.content=item.content;
            this.reverseNovel.time=item.time;
            this.reverseNovel.creatorAddress=item.creatorAddress;
            this.reverseNovel.authors = item.authors;
            this.reverseNovel.numOfAgree = item.numOfAgree;
            this.reverseNovel.numOfDiss =item.numOfDiss;
            this.reverseNovel.agreedUsers = item.agreedUsers;
            this.reverseNovel.disagreedUsers = item.disagreedUsers
        },

        setHorrorNovelData:function(item){
            this.horrorNovel.title = item.title;
            this.horrorNovel.content=item.content;
            this.horrorNovel.time=item.time;
            this.horrorNovel.creatorAddress=item.creatorAddress;
            this.horrorNovel.authors = item.authors;
            this.horrorNovel.numOfAgree = item.numOfAgree;
            this.horrorNovel.numOfDiss =item.numOfDiss;
            this.horrorNovel.agreedUsers = item.agreedUsers;
            this.horrorNovel.disagreedUsers = item.disagreedUsers
        },
        setInferentialNovelData:function(item){
            this.inferentialNovel.title = item.title;
            this.inferentialNovel.content=item.content;
            this.inferentialNovel.time=item.time;
            this.inferentialNovel.creatorAddress=item.creatorAddress;
            this.inferentialNovel.authors = item.authors;
            this.inferentialNovel.numOfAgree = item.numOfAgree;
            this.inferentialNovel.numOfDiss =item.numOfDiss;
            this.inferentialNovel.agreedUsers = item.agreedUsers;
            this.inferentialNovel.disagreedUsers = item.disagreedUsers
        },
        setKungFuNovelData:function(item){
            this.kungFuNovel.title = item.title;
            this.kungFuNovel.content=item.content;
            this.kungFuNovel.time=item.time;
            this.kungFuNovel.creatorAddress=item.creatorAddress;
            this.kungFuNovel.authors = item.authors;
            this.kungFuNovel.numOfAgree = item.numOfAgree;
            this.kungFuNovel.numOfDiss =item.numOfDiss;
            this.kungFuNovel.agreedUsers = item.agreedUsers;
            this.kungFuNovel.disagreedUsers = item.disagreedUsers
        },
        setScienceNovelData:function(item){
            this.scienceNovel.title = item.title;
            this.scienceNovel.content=item.content;
            this.scienceNovel.time=item.time;
            this.scienceNovel.creatorAddress=item.creatorAddress;
            this.scienceNovel.authors = item.authors;
            this.scienceNovel.numOfAgree = item.numOfAgree;
            this.scienceNovel.numOfDiss =item.numOfDiss;
            this.scienceNovel.agreedUsers = item.agreedUsers;
            this.scienceNovel.disagreedUsers = item.disagreedUsers
        },

    },

    mounted(){
        const self = this;
        var from = Account.NewAccount().getAddressString();
        var value = "0";
        var nonce = "0"
        var gas_price = "1000000"
        var gas_limit = "2000000"
        var callFunction = "getNovels";
        // var callArgs = "[\"" + "爱情小说" + "\"]"; //in the form of ["args"]
        var contract = {
            "function": callFunction,
            // "args": callArgs
        }

        neb.api.call(from,this.dappAddress,value,nonce,gas_price,gas_limit,contract).then(function (resp) {
            var result = JSON.parse(resp.result);
            if (!result) {
                throw new Error("访问小说出错" + resp);
            }

            console.log(result)

            for(var i=0;i<result.length;i++){
                var item=result[i];
                if(item.subject=="爱情小说"){
                    self.setLoveNovelData(item);
                }else if(item.subject=="反转小说"){
                    self.setReverseNovelData(item)
                }else if(item.subject=="恐怖小说"){
                    self.setHorrorNovelData(item)
                }else if(item.subject=="推理小说"){
                    self.setInferentialNovelData(item)
                }else if(item.subject=="武侠小说"){
                    self.setKungFuNovelData(item)
                }else if(item.subject=="科幻小说"){
                    self.setScienceNovelData(item)
                }
            }
        }).catch(function (err) {
            //cbSearch(err)
            console.log("error:" + err.message)
        })

    }

}) ;
