import lifecycle from '/util/lifecycle';

Page({
  ...lifecycle,
  data: {
    pageName: 'biz/index',
    pageInfo: {
      pageId: 0,
    },
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      list: [{
        icon: '/image/biz_list.png',
        title: '客服部',
        entitle: 'Collapse',
        page: '/page/home/list/check-training/check-training-date/check-training-date?type=kf&deptid=112061135',
      },{
        icon: '/image/biz_list.png',
        title: '秩序部',
        entitle: 'Collapse',
        page: '/page/home/list/check-training/check-training-date/check-training-date?type=zx&deptid=112367784',
      },{
        icon: '/image/biz_list.png',
        title: '维修部',
        entitle: 'Collapse',
        page: '/page/home/list/check-training/check-training-date/check-training-date?type=wx&deptid=112941179',
      },{
        icon: '/image/biz_list.png',
        title: '维保修部',
        entitle: 'Collapse',
        page: '/page/home/list/check-training/check-training-date/check-training-date?type=wb&deptid=113085612',
      },{
        icon: '/image/biz_list.png',
        title: '综管部',
        entitle: 'Collapse',
        page: '/page/home/list/check-training/check-training-date/check-training-date?type=zg&deptid=113072820',
      },{
        icon: '/image/biz_list.png',
        title: '环境部',
        entitle: 'Collapse',
        page: '/page/home/list/check-training/check-training-date/check-training-date?type=hj&deptid=113166629',
      }],
    },
  },
  onGridItemTap(e) {
    const page = this.data.arr.list[e.currentTarget.dataset.index].page;
    dd.navigateTo({ url: page });
  },
});
