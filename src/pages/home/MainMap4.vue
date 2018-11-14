<template>
<div class="baidu_map_page">
  <div class="bm_view" id="allmap" @click="findBike" ref="allmap" v-shoW="isShowSelectBike"></div>
   <!--   <div class="select_bike_page" v-show="isShowSelectBike" >
       <p><span>从哪里来:</span><input type="text" v-model="from_msg"></p>
       <p><span>到哪里去:</span><input type="text" v-model="to_msg"></p>
     </div> -->
</div>


</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      map: null,
      isShowSelectBike:false
    };
  },
  mounted() {
    this.map = new BMap.Map("allmap");
    this.init(this.map);
    this.getBikes();
    // 修复移动端百度地图点击事件
    this.map.addEventListener("touchstart", e => {
      let element = e.domEvent.srcElement;
      element.click();
    });
  },
  methods: {
    init: map => {
      console.log("map init", map, navigator.geolocation ? true : false);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            let point = new BMap.Point(
              position.coords.longitude,
              position.coords.latitude
            );
            // alert(position.coords.longitude);
            // alert(position.coords.latitude);
            let convertor = new BMap.Convertor();
            let pointArr = [];
            pointArr.push(point);
            convertor.translate(pointArr, 1, 5, data => {
              if (data.status === 0) {
                let convertPoint = data.points[0];
                console.log("translate", convertPoint);
                console.log(convertPoint);
                map.centerAndZoom(convertPoint, 17);
                map.enableScrollWheelZoom(true);
                let marker = new BMap.Marker(convertPoint); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                map.panTo(convertPoint);
              }
            });
          },
          error => {
            console.log(error);
          },
          { timeout: 30000, enableHighAccuracy: false, maximumAge: 75000 }
        );
      } else {
        console.log("not support");
      }
    },
    getBikes() {
      axios
        .get("api/bike")
        .then(res => {
          res = res.data;
          console.log(res);
          for (let i = 0; i < res.length; i++) {
            console.log(res[i].longitude);
            let point = new BMap.Point(res[i].longitude, res[i].latitude);
            let opts = {
              position: point, // 指定文本标注所在的地理位置
              offset: new BMap.Size(0, 0) //设置文本偏移量
            };
            // 创建文本标注对象
            let label = new BMap.Label(
              "<span ><i class='iconfont' data-flag='bike' style='color:#fff'>&#xe732;</i></span>",
              opts
            );
            label.setStyle({
              fontSize: "10px",
              borderRadius: "50%",
              fontFamily: "iconfont!important",
              background: "red",
              width: "32px",
              height: "32px"
            });
            this.map.addOverlay(label);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    findBike(e) {
      let flag = e.target.dataset && e.target.dataset.flag;
      if (e.target.nodeName === "I" && flag === "bike") {
      //this.isShowSelectBike=true
      }
    },
    touchStart(e) {}
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/icon.scss";
.baidu_map_page {
  .bm_view {
    width: 100%;
    height: 16.57rem;
  }
/*   .select_bike_page {
    position: absolute;
    top: 2rem;
  } */
}
</style>