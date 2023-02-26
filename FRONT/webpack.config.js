//aqui va la configuracion de webpack para crear el proyecto de forma personalizada

const path = require('path'); // esto nos permite saber donde vamos a trabajar o donde esta ubicado el proyecto, ya sea en mi compu o en otra o cuando se esta inicializando en un servidor
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js', //  el punto de entrada de nuestra app
    output: { //donde va a vivir el proyecto una vez que este preparado
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // nombre del empaquetado que se va a crear
        publicPath:'/',
    },
    mode: 'development',
    resolve: { //extensiones que voy a utilizar
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons//'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@products': path.resolve(__dirname, 'src/assets/products/'),
            '@baseImage': path.resolve(__dirname, '../src/')
        }
    },
    module: { // aqui voy a colocar  las reglas que vamos a crear con nuestros loaders y plugins
        rules: [
            {
                test: /\.(js|jsx)$/, // aqui ya sabe que va a entender todos los archivos que sean js o jsx para trabajar 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|jpg|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],

devServer:{
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
    historyApiFallback: true,
}
  
}
