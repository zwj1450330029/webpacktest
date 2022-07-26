let path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  //关闭 webpack 的性能提示
  performance: {
    hints:false
  },
  entry: './src/index.js',
  output: {
    filename: 'bodule.js',
    path: path.resolve(__dirname, './dist'),//需要是绝对路径，__dirname是当前文件所在的路径
    clean: true,//清理dist之前的打包记录
  },
  // mode: 'development',
  mode: 'production',
  devtool: 'inline-source-map',//配置代码出现错位定位到源码的指定位置，方便查找错误代码位置
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename:'styles/[contenthash].css'
    })
],
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.png$/,//注意这里不要加引号
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]'
        }
      },
      {
        test: /\.jpg$/,//注意这里不要加引号
        type: 'asset/inline',

      },
      {
        test: /\.txt$/,//注意这里不要加引号
        type: 'asset/source',
      },
      {
        test: /\.svg$/,//注意这里不要加引号
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024   //配置图片是打包成inline还是resource
          }
        }

      },
      {
        test: /\.(css|less)$/,//注意这里不要加引号
        // use: ['style-loader', 'css-loader', 'less-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },
  
  optimization:{
    minimizer:[
      new  CssMinimizerPlugin()
    ]
  }

}