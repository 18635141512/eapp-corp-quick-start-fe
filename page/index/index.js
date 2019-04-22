
var app = getApp();
console.log('app',app.globalData) // 获取 globalData

//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
//替换成开发者后台设置的安全域名
let domain = "http://localhost:8080";
let url = domain + '/login';

Page({
    data:{
        corpId: 'ding48ca7709bde250f135c2f4657eb6378f',
        authCode:'',
        userId:'',
        userName:'',
        hideList: true,
    },
    loginSystem() {
        dd.showLoading();
        dd.getAuthCode({
            success:(res)=>{
                this.setData({
                    authCode:res.authCode
                })
                //dd.alert({content: "step1"});
                dd.httpRequest({
                    url: url,
                    method: 'POST',
                    data: {
                        authCode: res.authCode
                    },
                    dataType: 'json',
                    success: (res) => {
                        // dd.alert({content: "step2"});
                        console.log('success----',res)
                        let userId = res.data.result.userId;
                        let userName = res.data.result.userName;
                        this.setData({
                            userId:userId,
                            userName:userName,
                            hideList:false
                        })
                    },
                    fail: (res) => {
                        console.log("httpRequestFail---",res)
                       dd.alert({content: JSON.stringify(res)});
                    },
                    complete: (res) => {
                        dd.hideLoading();
                    }
                    
                });
            },
            fail: (err)=>{
                // dd.alert({content: "step3"});
                dd.alert({
                    content: JSON.stringify(err)
                })
            }
        })

    },
    onLoad(){

        let _this = this;

        this.setData({
            corpId: app.globalData.corpId
        })
        
        //dd.alert({content: "step1"});    
    },
    onTitleClick() {
    dd.alert({content:"标题被点击了"});
  },
    changeName(e){
      this.setData({
        name:'ShanXi'
      })
    },
    hiddenchangeName(e){
      this.setData({
        name:''
      })
    },
    togooo(){
     // dd.alert({content:"进来没"});
      dd.navigateTo({url:'../demo/demo'});
    }
})