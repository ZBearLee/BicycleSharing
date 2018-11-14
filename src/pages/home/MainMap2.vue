<template>
<div class="bm_view" id="allmap">
</div>
</template>
<script>
export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.map = new BMap.Map("allmap");
    this.init(this.map);
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
            var convertor = new BMap.Convertor();
            var pointArr = [];
            pointArr.push(point);
            convertor.translate(pointArr, 1, 5, data => {
              if (data.status === 0) {
                let convertPoint = data.points[0];
                console.log('translate', convertPoint)
                console.log(convertPoint);
                map.centerAndZoom(convertPoint, 15);
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
          {timeout: 30000, enableHighAccuracy: false, maximumAge: 75000}
        );
      } else {
        console.log("not support");
      }
    }
  }
};
</script>

<style style="css">
.bm_view {
  width: 100%;
  height: 16.57rem;
}
</style>