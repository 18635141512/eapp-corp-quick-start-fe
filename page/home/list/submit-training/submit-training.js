import lifecycle from '/util/lifecycle'

Page({
  data:{
      corpId: 'ding48ca7709bde250f135c2f4657eb6378f',
      authCode:'',
      receiveUserName:'',
      receiveCid:'',
      thumbimg:'/image/add-user.png',
      resssrsdatamap:{},
      // filedata:[{}]
      // filedata:[{
      //   corpId:"ding48ca7709bde250f135c2f4657eb6378f",
      //     spaceId:"1528606607",
      //     fileId:"5673277609",
      //     fileName:"20190423测试用(1).docx",
      //     fileSize:10372,
      //     fileType:"docx"
      // },{
      //   corpId:"ding48ca7709bde250f135c2f4657eb6378f",
      //     spaceId:"1528606607",
      //     fileId:"5673277609",
      //     fileName:"20190423测试用(2).docx",
      //     fileSize:10372,
      //     fileType:"docx"
      // },{
      //   corpId:"ding48ca7709bde250f135c2f4657eb6378f",
      //     spaceId:"1528606607",
      //     fileId:"5673277609",
      //     fileName:"20190423测试用(3).docx",
      //     fileSize:10372,
      //     fileType:"docx"
      // }]
    },
    lookFile(e){
      dd.previewFileInDingTalk({
          corpId:"ding48ca7709bde250f135c2f4657eb6378f",
          spaceId:e.currentTarget.dataset.spaceId,
          fileId:e.currentTarget.dataset.fileId,
          fileName:e.currentTarget.dataset.fileName,
          fileSize:e.currentTarget.dataset.fileSize,
          fileType:e.currentTarget.dataset.fileType,
      })
      
    },
     //上传照片
    monthUploadFile(e){
      dd.showLoading();
      dd.getAuthCode({
        success:(res1)=>{
              //获取企业下的自定义空间id
              dd.httpRequest({
                    url: 'http://www.phzc88.cn:8080/cspace/getcustomspace',
                     data:{
                        authCode:res1.authCode
                     },
                    method: 'POST',
                    dataType: 'json',
                    success: (res2) => {
                      var data = res2.data;
                      var success = data.success;
                      var result = data.result;
                      console.log("result=",rsdata);
                      var rsdata = {};
                      rsdata = JSON.parse(result);
                      
                      console.log("rsdata=",rsdata);
                      var spaceid = rsdata.spaceid;
                      //获取免登授权码
                      dd.getAuthCode({
                          success:(res3)=>{
                            dd.httpRequest({
                                url: 'http://www.phzc88.cn:8080/cspace/grantcustomspace',
                                data:{
                                    authCode:res3.authCode
                                },
                                method: 'POST',
                                dataType: 'json',
                                success: (res4) => {
                                  console.log("grantcustomspaceSuccess",res4);
                                  dd.uploadAttachmentToDingTalk({
                                      image:{multiple:true,compress:false,max:9,spaceId: spaceid},
                                      types:["photo","camera"],//PC端仅支持["photo","file","space"]
                                      success: (res4) => {
                                        
                                            var resssdata = res4.data;
                                            var ressssuccess = resssdata.success;
                                            var resssresult = resssdata.result;
                                            console.log("resssresult=",resssresult);
                                            var resssrsdata = {};
                                           // resssrsdata = JSON.parse(resssresult);
                                           resssrsdata = resssresult;
                                            console.log("uploadAttachmentToDingTalkSuccess1",res4);
                                              this.setData({
                                                filedata:res4.data,
                                                  resssrsdatamap:resssrsdata
                                              })
                                          
                                      },
                                      fail: (err4) =>{
                                        dd.hideLoading();
                                        console.log("spaceid33=",spaceid)
                                          console.log("uploadAttachmentToDingTalkError1",err4);
                                      }
                                  });
                                },
                                fail: (res4) => {
                                  dd.hideLoading();
                                  dd.alert({content: 'grantcustomspaceFail'});
                                  console.log("grantcustomspaceFail");
                                },
                                complete: (res4) => {
                                  dd.hideLoading();
                                  console.log("grantcustomspaceComplete");
                                }
                            });    
                          },
                          fail: (err)=>{
                            dd.hideLoading();
                              console.log("getAuthCodeError",err);
                          }
                      });//dd.getAuthCode -END
                  
                    },
                    fail: (res2) => {
                      dd.hideLoading();
                      console.log("getcustomspaceFail");
                    },
                    complete: (res2) => {
                      dd.hideLoading();
                      console.log("getcustomspaceComplete");
                    }
                });
          },
          fail: (err)=>{
            dd.hideLoading();
              console.log("getAuthCodeError",err);
          }
      });//dd.getAuthCode -END
      
    },
    //上传附件
    monthUploadFile(e){
      dd.showLoading();
      dd.getAuthCode({
        success:(re1)=>{
              //获取企业下的自定义空间id
              dd.httpRequest({
                    url: 'http://www.phzc88.cn:8080/cspace/getcustomspace',
                     data:{
                        authCode:re1.authCode
                     },
                    method: 'POST',
                    dataType: 'json',
                    success: (res) => {
                      var data = res.data;
                      var success = data.success;
                      var result = data.result;
                      console.log("result=",rsdata);
                      var rsdata = {};
                      rsdata = JSON.parse(result);
                      
                      console.log("rsdata=",rsdata);
                      var spaceid = rsdata.spaceid;
                      //获取免登授权码
                      dd.getAuthCode({
                          success:(ress)=>{
                            dd.httpRequest({
                                url: 'http://www.phzc88.cn:8080/cspace/grantcustomspace',
                                data:{
                                    authCode:ress.authCode
                                },
                                method: 'POST',
                                dataType: 'json',
                                success: (resss) => {
                                  console.log("grantcustomspaceSuccess",resss);
                                  dd.uploadAttachmentToDingTalk({
                                      image:{multiple:true,compress:false,max:9,spaceId: spaceid},
                                      space:{spaceId:spaceid,isCopy:1 , max:6},
                                      file: {spaceId:spaceid,max:6},
                                      types:["photo","camera","file","space"],//PC端仅支持["photo","file","space"]
                                      success: (res4) => {
                                        
                                            var resssdata = resss.data;
                                            var ressssuccess = resssdata.success;
                                            var resssresult = resssdata.result;
                                            console.log("resssresult=",resssresult);
                                            var resssrsdata = {};
                                           // resssrsdata = JSON.parse(resssresult);
                                           resssrsdata = resssresult;
                                            console.log("uploadAttachmentToDingTalkSuccess1",res4);
                                              this.setData({
                                                filedata:res4.data,
                                                  resssrsdatamap:resssrsdata
                                              })
                                          
                                      },
                                      fail: (err4) =>{
                                        dd.hideLoading();
                                        console.log("spaceid33=",spaceid)
                                          console.log("uploadAttachmentToDingTalkError1",err4);
                                      }
                                  });
                                },
                                fail: (resss) => {
                                  dd.hideLoading();
                                  dd.alert({content: 'grantcustomspaceFail'});
                                  console.log("grantcustomspaceFail");
                                },
                                complete: (resss) => {
                                  dd.hideLoading();
                                  console.log("grantcustomspaceComplete");
                                }
                            });    
                          },
                          fail: (err)=>{
                            dd.hideLoading();
                              console.log("getAuthCodeError",err);
                          }
                      });//dd.getAuthCode -END
                  
                    },
                    fail: (res) => {
                      dd.hideLoading();
                      console.log("getcustomspaceFail");
                    },
                    complete: (res) => {
                      dd.hideLoading();
                      console.log("getcustomspaceComplete");
                    }
                });
          },
          fail: (err)=>{
            dd.hideLoading();
              console.log("getAuthCodeError",err);
          }
      });//dd.getAuthCode -END
      
    },
    //选择接收人
    getLingDaoList(e) {
      dd.showLoading();
      //发送普通消息
      dd.chooseChatForNormalMsg({
          isConfirm: true, //是否弹出确认窗口，默认为true
          success: res => {
              console.log("chooseChatForNormalMsgSuccess...",res)
              let title = res.title;
              let cid = res.cid;
              this.setData({
                receiveUserName:title,
                receiveCid:cid
              });
              // 该cid和服务端开发文档-普通会话消息接口配合使用，而且只能使用一次，之后将失效
              dd.hideLoading();
          },
          fail: err =>{
              dd.alert({
                  content:JSON.stringify(err)
              });
              dd.hideLoading();
          },
          complete: (res) => {
                dd.hideLoading();
            }
        });//dd.chooseChatForNormalMsg -END-
      
    },
    //提交按钮 发送普通消息
    onSubmit(e) {
      console.log("e:",e)
      var date = {};
      date = `${JSON.stringify(e.detail.value)}`;
      var value = e.detail.value;
      console.log("value.person",value.person);
    console.log("this.data.filedata",this.data.filedata);
     console.log("this.data.resssrsdatamap",this.data.resssrsdatamap);
      dd.getAuthCode({
            success:(res)=>{
                this.setData({
                    authCode:res.authCode,
                });
                console.log("this.authCode",res.authCode);
                dd.httpRequest({
                    url: 'http://www.phzc88.cn:8080/train/sendalltoconversation',
                    method: 'POST',
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    data: {
                        authCode: res.authCode,
                        receiveCid:value.receiveCid,//会话cid
                        person:value.person,
                        filedata:JSON.stringify(this.data.filedata),
                        resssrsdatamap:JSON.stringify(this.data.resssrsdatamap)
                    },
                    dataType: 'json',
                    
                    success: (res) => {
                      
                        console.log('onSubmitsuccess----',res);
                       
                    },
                    fail: (res) => {
                        console.log("onSubmitFail---",res)
                        dd.alert({content: JSON.stringify(res)});
                    },
                    complete: (res) => {
                        dd.hideLoading();
                    }
                });//dd.httpRequest -END
               
            },
            fail: (err)=>{
                dd.alert({
                    content: JSON.stringify(err)
                })
            }
        });//dd.getAuthCode -END
      
    },
  
})