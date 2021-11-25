const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    entry: ['./styles/_core/scss/core.scss'],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './styles/rds.css',
            chunkFilename: './styles/[id].css',
        }),
        new CompressionPlugin({
            test: /\.(js|css|map)(\?.*)?$/i,
            algorithm: 'gzip',
        }),
    ],
}
