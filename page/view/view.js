Page({
  data:{
    message:'Hello Word!',
    
    items: [1, 2, 3, 4, 5, 6, 7],
    view:'APP',
    staffA: {firstName: 'san', lastName: 'zhang'},
    staffB: {firstName: 'si', lastName: 'li'},
    staffC: {firstName: 'wu', lastName: 'wang'},
    count:1,
    name:'张磊',
    id:0,
    condition:false,
    a:1,
    b:2,
    c:3,
     name: 'dingtalk'
  },
  add(e){
    this.setData({
      count:this.data.count+1
    })
  }

})