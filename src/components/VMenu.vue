
<template>
  <div class="v-menu p-2 fill-space">
    <a-row class="pb-4">
      <a-col>
        <a-icon type="left" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        Brightness
        <!-- <a-slider :defaultValue="50"
        :tooltipVisible="false" @afterChange="changeBrightness" v-model="brightness"/>-->
        <a-slider
          :defaultValue="50"
          :tooltipVisible="false"
          @afterChange="changeBrightness"
          v-model="brightness"
        />
      </a-col>
      <a-col :span="24">
        Contrast
        <a-slider
          :defaultValue="50"
          :tooltipVisible="false"
          @afterChange="changeContrast"
          v-model="contrast"
        />
      </a-col>
      <a-col :span="24">
        Saturation
        <a-slider
          :defaultValue="50"
          :tooltipVisible="false"
          @afterChange="changeSaturation"
          v-model="saturation"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brightness: 50,
      contrast: 50,
      saturation: 50,
    };
  },
  methods: {
    changeBrightness() {
      this.$store.commit('SET_BRIGHTNESS', this.brightness);
    },
    changeContrast() {
      this.$store.commit('SET_CONTRAST', this.contrast);
    },
    changeSaturation() {
      this.$store.commit('SET_SATURATION', this.saturation);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-menu {
  color: #f8f8f2;
  background-color: #282a36;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.25);
}
</style>
