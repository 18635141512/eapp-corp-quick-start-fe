import lifecycle from '/util/lifecycle'

Page({
  ...lifecycle,
  data:{
    pageName:'biz/index',
    pageInfo:{
      pageId:0,
    },
    curIndex:0,
    arr:{
      onItemTap:'onGridItemTap',
      list:[{
        icon:'/image/home_001.png',
        title:'提交培训纪要',
        entitle:'培训纪要',
        page:'/page/home/home',
      },{
        icon:'/image/home_002.png',
        title:'查看培训纪要',
        entitle:'培训纪要',
        page:'/page/home/home',
      }]
    },
  },
  onGridItemTap(e){
    const page = this.data.arr.list[e.currentTarget.dataset.index].page;
    dd.navigateTo({url:page});
  }
})