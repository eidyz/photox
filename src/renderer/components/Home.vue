<template>
  <div class="page home">
    <a-row>
      <a-col :span="24" class="fill-height">
        <div class="image-wrapper">
          <img ref="img" :src="image || originalImage" />
          <a-spin v-if="loading" class="image-loading" />
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24" class="fill-height">
        <div class="image-wrapper">
          <a-button type="primary" @click="filter">Click</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Jimp from 'jimp';
/* eslint-disable */
Number.prototype.map = function(in_min, in_max, out_min, out_max) {
  return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export default {
  computed: {
    brightness() {
      return this.$store.getters.brightness;
    }
  },
  watch: {
    brightness(val) {
      this.changeBrightness(val.map(0, 100, -1, 1));
    }
  },
  data() {
    return {
      originalImage: require("@/assets/image/space.jpg"),
      image: null,
      loading: false
    };
  },
  methods: {
    changeBrightness(val) {
      this.loading = true;
      Jimp.read(this.originalImage)
        .then(async image => {
          image.brightness(val);
          const mime = image.getMIME();
          this.image = await image.getBase64Async(mime);
          this.loading = false;
        })
        .catch(err => {
          this.$message.info("An error occured");
        });
    },
    filter() {
      this.loading = true;
      Jimp.read(this.originalImage)
        .then(async image => {
          image.color([
            { apply: "hue", params: [-90] },
            { apply: "lighten", params: [50] },
            { apply: "xor", params: ["#06D"] }
          ]);
          const mime = image.getMIME();
          this.image = await image.getBase64Async(mime);
          this.loading = false;
        })
        .catch(err => {
          this.$message.info("An error occured");
        });
    }
  }
};
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100%;
  padding: 10px;
}

.image-wrapper {
  position: relative;
  text-align: center;

  .image-loading {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
}
</style>
