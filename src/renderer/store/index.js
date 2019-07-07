import Vue from 'vue';
import Vuex from 'vuex';

// import { createPersistedState, createSharedMutations } from 'vuex-electron';

// import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    brightness: 50,
    contranst: 50,
    saturation: 50,
  },
  mutations: {
    CHANGE_BRIGHTNESS(state, brightness) {
      state.brightness = brightness;
    },
  },
  getters: {
    brightness(state) {
      return state.brightness;
    },
  },
  plugins: [
    // createPersistedState(),
    // createSharedMutations(),
  ],
  strict: process.env.NODE_ENV !== 'production',
});
