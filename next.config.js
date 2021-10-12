const withCss = require('@zeit/next-css');
const router = require('next/router');

const configs = {
  distDir: 'dist', // 编译文件的输出目录,默认值为“.next”
  generateTags: true, // 是否每个路由生成Etag，一般使用ngix部署时，会设置为false，热后直接用ngix来做一些缓存策略配置
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // 内容在内存中缓存的时长（ms）
    pageBufferLength: 2, // 同时缓存多杀个页面
  },
  pageExtensions: ['jsx', 'js'], // 在pages目录下哪种后缀的文件会被认为是页面
  // 配置BUILD ID
  generateBuildId: async () => {
    if(process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID;
    }
    // 返回null 使用默认的unique id
    return null;
  },
  // 手动修改webpack config
  webpack(config, options) {
    return config;
  },
  // 修改webpackMiddleware配置
  webpackMiddleware(config, options) {
    return config;
  },
  // 可以在页面上通过 process.env.customKey 获取 value
  env: {
    customKey: 'value',
  },
  /** 下面两个要通过'next/config'来读取 */ 
  // 只有在读取服务端渲染时，才会获取的配置
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET,
  },
  // 在服务端和客户端渲染都可以获取的配置
  publicRuntimeConfig: {
    staticFolder: '/static',
  }
}

if(typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}
// 放入configs
// module.exports = withCss(configs)
module.exports = withCss({
  distDir: 'dist',
})