const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: ['./styles/_core/scss/core.scss'],
    mode: 'development',
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
    ],
}
