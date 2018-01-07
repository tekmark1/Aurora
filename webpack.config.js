var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "app/src");
var APP_DIR = path.resolve(__dirname, "app");

var config = {
  entry: SRC_DIR + "/index.js",
  output: {
  	path: DIST_DIR + "/app",
  	filename: "bundle.js",
  	publicPath: "/app/"
  },
  module: {
  	loaders: [
  		{
  			test: /\.js?/,
  			include: APP_DIR,
  			loader: "babel-loader",
  			query: {
  				presets: ["react", "env", "stage-2"]
  			}
  		},
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=25000'
      }
  	]
  }
};

module.exports = config;