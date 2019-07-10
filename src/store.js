import Vue from 'vue';
import Vuex from 'vuex';
import Jimp from 'jimp';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    image: undefined,
    jimpInstance: undefined,
    filters: {
      brightness: 50,
      contrast: 50,
      saturation: 50,
    },
  },
  getters: {
    image(state) {
      return state.image;
    },
    filters(state) {
      return state.filters;
    },
    jimpInstance(state) {
      return state.jimpInstance;
    },
  },
  mutations: {
    SET_IMAGE(state, image) {
      state.image = image;
    },
    SET_JIMP(state, jimpInstance) {
      state.jimpInstance = jimpInstance;
    },
    SET_BRIGHTNESS(state, brightness) {
      state.filters.brightness = brightness;
    },
    SET_CONTRAST(state, contrast) {
      state.filters.contrast = contrast;
    },
    SET_SATURATION(state, saturation) {
      state.filters.saturation = saturation;
    },
  },
  actions: {
    async LOAD_IMAGE({ commit }, jimpInstance) {
      commit('SET_JIMP', Jimp);
      Jimp.read(jimpInstance).then(async (image) => {
        const mime = image.getMIME();
        const output = await image.getBase64Async(mime);
        commit('SET_IMAGE', output);
      });
    },
  },
});
