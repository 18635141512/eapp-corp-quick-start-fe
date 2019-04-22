import lifecycle from '/util/lifecycle'

Page({
  data:{
      corpId: 'ding48ca7709bde250f135c2f4657eb6378f',
      authCode:'',
      receiveUserName:'',
      receiveCid:'',
      thumbimg:'/image/add-user.png'
    },
    getLingDaoList(e) {
      dd.showLoading();
      dd.getAuthCode({
            success:(res)=>{
                // this.setData({
                //     authCode:res.authCode
                // })
                dd.httpRequest({
                    //url: 'http://192.168.0.116:8080/train/getdepartmentuseridlist',
                    url: 'http://www.phzc88.cn:8080/train/getdepartmentuseridlist',
                    method: 'POST',
                    data: {
                        authCode: res.authCode
                    },
                    dataType: 'json',
                    success: (res) => {
                        console.log('httpRequestSuccess----',res)
                        var result = JSON.parse(res.data.result);
                        var userIds = result.userIds;
                        // dd.chooseUserFromList({
                        //     title: '纪要接收人', //标题
                        //    users: userIds,//一组员工userid['manager350','046432601336427791']
                        //    //users: ['046432601336427791'],
                        //     isShowCompanyName: true,   //true|false，默认为 false
                        //     disabledUsers: [], //不能选的人
                        //     success:(res)=>{
                        //       let name = res[0].name;
                        //       let userIdd = res[0].userId;
                        //       this.setData({
                        //           receiveUserName:name,
                        //           receiveUserid:userId
                        //       });
                        //     },
                        //     fail:function(err){}
                        // });
                        dd.chooseChatForNormalMsg({
                            isConfirm: true, //是否弹出确认窗口，默认为true
                            success: res => {
                                console.log("chooseChatForNormalMsgSuccess...",res)
                                let title = res.title;
                                let cid = res.cid;
                                this.setData({
                                  receiveUserName:title,
                                  receiveCid:cid
                                })
                                // 该cid和服务端开发文档-普通会话消息接口配合使用，而且只能使用一次，之后将失效
                                /*{
                                    cid: 'xxxx',
                                    title:'xxx'
                                }*/
                            },
                            fail: err =>{
                                dd.alert({
                                    content:JSON.stringify(err)
                                })
                            }
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
    //提交按钮
    onSubmit(e) {
      console.log("e:",e)
      var date = {};
       date = `${JSON.stringify(e.detail.value)}`;
       var value = e.detail.value;
      console.log("1=",value.person);
     
    // dd.alert({
    //   content: `数据：${JSON.stringify(e.detail.value)}`,
    // });
    dd.httpRequest({
                    url: 'http://192.168.0.116:8080/login',
                    method: 'POST',
                    data: {
                        date: date,
                        authCode: "2"
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
})