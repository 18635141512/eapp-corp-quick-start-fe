import trainingdatee from '../../../../template/training-date-file-template/training-date-file-template';

Page({
  ...trainingdatee,
  data: {

  },
  onLoad(query){
    console.log("training-date-file-query",query);
    dd.httpRequest({
        //url: "http://192.168.0.116:8080/filedetails/getFileList",
        url: "http://www.phzc88.cn:8080/filedetails/getFileList",
        method: 'POST',
        data: {
            deptid: query.deptid,
            date:query.date
        },
        dataType: 'json',
        success: (res) => {
            console.log('FileonLoadsuccess----',res);
             this.setData({
                trainingdateData:{
                onItemTap: 'lookFile',
                header: query.deptname+","+query.date,
                data: res.data.result
              }
           });

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
  lookFile(e){
      console.log("ee=>",e);

      dd.previewFileInDingTalk({
          corpId:"ding48ca7709bde250f135c2f4657eb6378f",
          spaceId:e.currentTarget.dataset.spaceId,
          fileId:e.currentTarget.dataset.fileId,
          fileName:e.currentTarget.dataset.fileName,
          fileSize:e.currentTarget.dataset.fileSize,
          fileType:e.currentTarget.dataset.fileType,
      })
      
    },
  handleListItemTap(e) {

    dd.showToast({
      content: `第${e.currentTarget.dataset.index}个Item`,
      success: (res) => {
          dd.alert({content:"jinlaile"});
      },
    });
  }
})