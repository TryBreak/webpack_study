const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const rules = [{
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader'
    ]
}, {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader'
    ]
}, {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
        'file-loader'
    ]
}, {
    test: /\.(csv|tsv)$/,
    use: [
        'csv-loader'
    ]
}, {
    test: /\.xml$/,
    use: [
        'xml-loader'
    ]
}];

module.exports = {
    mode: 'development',

    entry: {
        app: './src/index.js',
    },

    devtool: 'inline-source-map',

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    devServer: {
        contentBase: './dist',
        hot: true,
    },

    module: {
        rules,
    }

};

