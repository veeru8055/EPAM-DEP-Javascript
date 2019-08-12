const  HtmlWebpackPlugin  =  require('html-webpack-plugin')
const  UglifyJSPlugin  =  require('uglifyjs-webpack-plugin'); 

const config = {
    entry: './script/index.js',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins:  [
        new  HtmlWebpackPlugin({
            template:   './index.html',
            filename:   'index.html',
            hash:  true
        })
    ],
    optimization:  {
        minimizer:  [
            new  UglifyJSPlugin({
                uglifyOptions:  {
                    compress:  {
                        drop_console:  true,
                    }
                }
            })
        ]
    } 
};

module.exports = config;