import trainingdatee from '../../../template/check-training-date-template/check-training-date-template';

Page({
  ...trainingdatee,
  data: {
    
  },
  onLoad(query){
    console.log("query.type=",query.type);
    console.log("query.type=",query.deptid);
    dd.httpRequest({
        url: "http://www.phzc88.cn:8080/filedetails/getDataFromDeptId",
        method: 'POST',
        data: {
            deptid: query.deptid
        },
        dataType: 'json',
        success: (res) => {
            console.log('success----',res);
            var deptname = "无";
            if(query.type=="kf"){
                  deptname = "客服部门";
            }else if(query.type=="zx"){
                  deptname = "秩序部门";
            }else if(query.type=="wx"){
                  deptname = "维修部门";
            }else if(query.type=="wb"){
                  deptname = "维保修部门";
            }else if(query.type=="zg"){
                  deptname = "综管部门";
            }else if(query.type=="hj"){
                  deptname = "环境部门";
            }
             this.setData({
                trainingdateData:{
                onItemTap: 'handleListItemTap',
                header: deptname,
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
  handleListItemTap(e) {
    var deptid = e.currentTarget.dataset.deptid;//获取部门id header
    var date = e.currentTarget.dataset.date;
    var deptname = this.data.trainingdateData.header;
    dd.navigateTo({ url: "/page/home/list/check-training/check-training-date/training-date-file/training-date-file?deptid="+deptid+"&date="+date+"&deptname="+deptname });
    // dd.showToast({
    //   content: `第${e.currentTarget.dataset.index}个Item`,
    //   success: (res) => {
    //       dd.alert({content:"jinlaile"});
    //   },
    // });
  }
})