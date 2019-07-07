<template>
  <div id="app" class="fill-space">
    <a-row class="fill-space">
      <a-col :span="4" class="fill-height">
        <v-menu/>
      </a-col>
      <a-col :span="20" class="fill-height">
        <router-view></router-view>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import VMenu from '@/components/VMenu';
export default {
  name: 'evc',
  components: {
    VMenu,
  },
};
</script>

<style lang="scss" scoped>
*{
  user-select: none;
  -webkit-user-drag: none;
  cursor: default;
}

.fill-space{
  width: 100%;
  height: 100%;
}

.fill-height{
  height: 100%;
}

#app{
  background-color: #44475a;
  color: #f8f8f2;
}
</style>

<style lang="less">
@import "~ant-design-vue/dist/antd.less";
@primary-color: #50fa7b;
@white: #f8f8f2;
@black: #000;
</style>


