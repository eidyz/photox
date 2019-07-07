<template>
  <div class="v-menu fill-space">
    <a-row>
      <a-col :span="24">
        Brightness
        <a-slider :defaultValue="50" :tooltipVisible="false" @afterChange="changeBrightness" v-model="brightness"/>
      </a-col>
      <a-col :span="24">
        Contrast
        <a-slider :defaultValue="50" :tooltipVisible="false" />
      </a-col>
      <a-col :span="24">
        Saturation
        <a-slider :defaultValue="50" :tooltipVisible="false" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brightness: 50,
      contranst: 50,
      saturation: 50,
    };
  },
  methods: {
    changeBrightness() {
      this.$store.commit('CHANGE_BRIGHTNESS', this.brightness);
    },
  },
};
</script>


<style lang="scss" scoped>
.v-menu {
  background-color: #282a36;
  padding: 10px;
}
</style>
