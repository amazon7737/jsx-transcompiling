// webpack.config.js

const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"), // 어느 환경에서도 경로를 잘 잡을 수 있게 node가 제공하는 path 모듈 사용
    filename: "bundle.js",
  },

  devServer: {
    compress: true, // 압축하라는 옵션을 세팅하는 것으로, 크게 의미없다.
    port: 9999, // 포트번호
  },

  module: {
    rules: [
      {
        test: /\.js$/, // 정규표현식. 자바스크립트 파일만 처리할 수 있게 필요없는 파일들은 지우자. (ex. CSS파일)
        exclude: /node_modules/, // 자바스크립트 파일 중에서 node_modules에 있는 파일은 제외해야지 번들링에 포함되지 않는다.
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "2.3 setup webpack & babel",
      template: "index.html",
    }), // 인스턴스를 만들어줘야 한다.
  ],
};
