<template>
  <div class="scan">
    <div id="bcid">
    </div>
    <footer>
      <button @click="startRecognize"><i class="iconfont">&#xe610;</i><span>扫码开锁</span></button>
    </footer>
  </div>
</template>

<script>
  let scan = null;

  export default {
    data() {
      return {
        codeUrl: '',
      }
    },
    methods: {
      //创建扫描控件
      startRecognize() {
        let that = this;
        if (!window.plus) return;
        scan = new plus.barcode.Barcode('bcid');
        scan.onmarked = onmarked;
        function onmarked(type, result, file) {
          switch (type) {
            case plus.barcode.QR:
              type = 'QR';
              break;
            case plus.barcode.EAN13:
              type = 'EAN13';
              break;
            case plus.barcode.EAN8:
              type = 'EAN8';
              break;
            default:
              type = '其它' + type;
              break;
          }
          result = result.replace(/\n/g, '');
          that.codeUrl = result;
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../../assets/scss/icon.scss";
  .scan {
    height: 100%;
    #bcid {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom:5rem;
      text-align: center;
      color: #fff;
      background: #ccc;
      z-index: -100;
    }
    footer {
      position: absolute;
      left: 20%;
      bottom: .5rem;
      height: 1rem;
      line-height: 1rem;
      z-index: 2;
      background: #000;
      width: 60%;
      display: flex;
      display:-webkit-box;
      display: -webkit-flex;
      align-items: centrr;
      justify-content: center;

      button{
        background: none;
        border: none;
        i{
          color: #fff;
          line-height: 1rem;
          float: left;
          margin-right: .2rem;
        }
        span{
          color: #fff;
          line-height: 1rem;
        }
      }
    }
  }
</style>
