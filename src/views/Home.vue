<template>
  <div class="page home d-flex fill-space">
    <a-row class="d-flex flex-1">
      <a-col :span="24" class="d-flex justify-content-around align-items-center">
        <a-upload
          @change="loadFile"
          :showUploadList="false"
          :customRequest="()=>{}"
        >
          <a-button>
            <a-icon type="upload" />Select
          </a-button>
        </a-upload>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Jimp from 'jimp';

export default {
  methods: {
    loadFile(e) {
      const file = e.file.originFileObj;
      const url = URL.createObjectURL(file);

      Jimp.read(url).then(async (image) => {
        this.$store.dispatch('LOAD_IMAGE', image);
        this.$router.push('/processing');
      }).catch((err) => {
        console.log(err);
        this.$message.error('An error occured while trying to load the file');
      });
    },
  },
};
</script>
