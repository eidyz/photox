module.exports = {
  configureWebpack: {
    test: /\.less$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'less-loader',
    ],
  },
};
