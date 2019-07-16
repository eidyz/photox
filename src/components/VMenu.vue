
<template>
  <div class="v-menu p-2 fill-space">
    <a-row class="pb-4">
      <a-col :span="12">
        <!-- <a-icon type="arrow-left" /> -->
      </a-col>
      <a-col :span="12" class="text-right">
        <a-icon type="sliders" @click="togglePresets" />
      </a-col>
    </a-row>
    <a-row v-if="presets">
      <a-col :span="24">
        Brightness
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
    <a-row v-if="!presets">
      <a-col v-for="(filter, index) in filterPresets" :key="index" :span="24">
        <div class="filter-preset-wrapper" @click="setFilter(filter)">
          <div class="filter-preset">{{filter.name}}</div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import filters from '../filters';

export default {
  data() {
    return {
      brightness: 50,
      contrast: 50,
      saturation: 50,
      presets: false,
      filterPresets: filters,
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
    setFilter(filter) {
      this.$store.commit('SET_BRIGHTNESS', filter.brightness);
      this.$store.commit('SET_CONTRAST', filter.contrast);
      this.$store.commit('SET_SATURATION', filter.saturation);
    },
    togglePresets() {
      this.presets = !this.presets;
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

.filter-preset-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  margin: 10px 0;
  background-color: rgba(0, 0, 0, 0.5);

  .filter-preset{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
