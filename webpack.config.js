let path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bodule.js',
    path: path.resolve(__dirname, './dist'),//需要是绝对路径，__dirname是当前文件所在的路径
    clean: true,//清理dist之前的打包记录
  },
  mode: 'development',
  devtool: 'inline-source-map',//配置代码出现错位定位到源码的指定位置，方便查找错误代码位置
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
  })],
  devServer: {
    static: './dist'
  }

}