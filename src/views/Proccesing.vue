<template>
  <div class="page home d-flex flex-column fill-space">
    <a-row class="d-flex flex-1">
      <a-col :span="4">
        <v-menu></v-menu>
      </a-col>
      <a-col :span="20" class="d-flex justify-content-around align-items-center bg-dots">
        <div class="d-flex justify-content-around align-items-center image-wrapper">
          <img :src="image" class="image-wrapper__image" />
          <a-spin v-if="loading" class="image-wrapper__loader" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Jimp from 'jimp';
import VMenu from '@/components/VMenu.vue';
import { mapNumber } from '@/util';

export default {
  components: { VMenu },
  computed: {
    image() {
      return this.$store.getters.image;
    },
    brightness() {
      return this.$store.getters.brightness;
    },
    contrast() {
      return this.$store.getters.contrast;
    },
    saturation() {
      return this.$store.getters.saturation;
    },
    filters() {
      const { brightness, contrast, saturation } = this;
      return {
        brightness,
        contrast,
        saturation,
      };
    },
    jimpInstance() {
      return this.$store.getters.jimpInstance;
    },
  },
  watch: {
    filters(val) {
      console.log(val);
      this.filterImage();
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    filterImage() {
      this.loading = true;
      Jimp.read(this.jimpInstance)
        .then(async (image) => {
          const mime = image.getMIME();
          image.brightness(mapNumber(this.filters.brightness));
          image.contrast(mapNumber(this.filters.contrast));
          image.color([
            {
              apply: 'saturate',
              params: [
                mapNumber(this.filters.saturation, {
                  outMin: -100,
                  outMax: 100,
                }),
              ],
            },
          ]);
          const output = await image.getBase64Async(mime);
          this.$store.commit('SET_IMAGE', output);
        })
        .catch((err) => {
          console.log(err);
          this.$message.error('An error occured');
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 70%;
  max-height: 70%;

  .image-wrapper__image {
    max-width: 100%;
    max-width: 100%;
    object-fit: contain;
  }

  .image-wrapper__loader {
    position: absolute;
    bottom: -10%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

.bg-dots {
  background-image: radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px);
  background-size: 40px 40px;
  background-repeat: repeat;
}
</style>
