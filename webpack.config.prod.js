// var webpack = require('./webpack.config.js');
// var path = require("path");
//
// module.exports = {
//   context: __dirname,
//   entry: "./frontend/inspiral.jsx",
//   output: {
//     path: path.join(__dirname, 'app', 'assets', 'javascripts'),
//     filename: "bundle.js"
//   },
//   plugins:[
//    new webpack.DefinePlugin({
//      'process.env':{
//        'NODE_ENV': JSON.stringify('production')
//      }
//    }),
//    new webpack.optimize.UglifyJsPlugin({
//      compress:{
//        warnings: true
//      }
//    })
//  ],
//   module: {
//     loaders: [
//       {
//         test: [/\.jsx?$/, /\.js?$/],
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   },
//   devtool: 'source-maps',
//   resolve: {
//     extensions: ["", ".js", ".jsx" ]
//   }
// };

var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./frontend/inspiral.jsx",
  output: {
    path: "./app/assets/javascripts",
    filename: "bundle.js"
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
