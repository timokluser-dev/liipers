module.exports = {
  devServer: {
    // local zebra api proxy
    proxy: {
      '^/api/v2': {
        target: 'https://zebra.liip.ch/',
        changeOrigin: true,
      },
    },
    // dev cors
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
