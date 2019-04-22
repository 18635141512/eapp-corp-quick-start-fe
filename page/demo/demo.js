// page.js
Page({
  data: {
    a: {
      b: [1,2,3,4]
    }
  },
  suibian(){
    console.log("111=",getCurrentPages().length);
    let c = getCurrentPages().length;
    //if(c===1){
      dd.navigateTo({url:'../index/index'});
    //}
  },
  onLoad(){
    //this.$spliceData({ 'a.b': [0, 2, 5, 6] })
  },
})