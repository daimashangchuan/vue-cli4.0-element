/**
 * 全局的配置文件
 */
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  // 例如，部署在子域名下 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  publicPath: "/",

  // 打包生成的路径
  outputDir: "build",

  // 打包完build目录下放置静态文件的地方
  assetsDir: "",

  // 指定生成的 html 的输出路径
  indexPath: "index.html",

  // 包含了 hash 的名字
  filenameHashing: true,

  // 打包时候关闭productionSourceMap
  productionSourceMap: process.env.NODE_ENV == "prod" ? false : true,

  // 是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
  lintOnSave: false,

  configureWebpack: (config) => {
    // 生产环境相关配置
    if (process.env.NODE_ENV == "prod") {
      // 代码压缩
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            //生产环境自动删除console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ["console.log"],
            },
          },
          sourceMap: false,
          parallel: true,
        })
      );
    }

    // 公共代码抽离
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "all",
            test: /node_modules/,
            name: "vendor",
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100,
          },
          common: {
            chunks: "all",
            test: /[\\/]src[\\/]js[\\/]/,
            name: "common",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60,
          },
          styles: {
            name: "styles",
            test: /\.(sa|sc|c)ss$/,
            chunks: "all",
            enforce: true,
          },
          runtimeChunk: {
            name: "manifest",
          },
        },
      },
    };
  },

  //服务器请求相关的配置
  devServer: {
    // open: true, // 启动服务后是否打开浏览器
    // host: '0.0.0.0',
    port: 9686, //端口号
    // https: true, //是否开启协议名,如果开启会发出警告
    // hotOnly: false, //热模块更新的一种东西,webpack中自动有过配置,但如果我们下载一些新的模块可以更好的给我更新一些配置
    proxy: {
      //配置跨域
      "/Api": {
        //配置跨域的名字
        target:
          process.env.NODE_ENV == "prod"
            ? process.env.VUE_APP_PROD
            : process.env.VUE_APP_DEV, //跨域的地址
        ws: true,
        changOrigin: true, //是否跨域
        pathRewrite: {
          //当前的名字
          "^/api": "/",
        },
      },
    },
  },

  // 存放第三方的插件
  pluginOptions: {
    // 引入全局的公共的 less 样式
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/style/common.less")],
    },
    // 可以通过 less 文件覆盖（文件路径为绝对路径）
    less: {
      modifyVars: {
        hack: `true; @import "${[
          path.resolve(__dirname, "./src/assets/style/vantUi.less"),
        ]}";`,
      },
    },
  },
};
