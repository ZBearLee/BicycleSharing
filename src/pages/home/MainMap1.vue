<template>
  <baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view" :scroll-wheel-zoom="true" :enableScrollWheelZoom="true">
    <bm-marker :position="{lng: 115.8329729895, lat: 28.7254715051}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="false" :autoLocation="true"></bm-geolocation>
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
    </bm-marker>
  </baidu-map>
</template>


<script>
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 0
    };
  },
  methods: {
    handler({ BMap, map }) {
      this.center.lng = 115.8329729895; //南昌
      this.center.lat = 28.7254715051;
      this.zoom = 18;
    }
  }
};
</script>

<style style="css">
.bm-view {
  width: 100%;
  height: 16.57rem;
}

.BMap_mask {
  background-color: rgba(250, 250, 250, 0.2);
}
</style>