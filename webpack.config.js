const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/public/src/index.js'),
    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: 'bundle.js',
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-react"]
                    }
                }    
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },

        ]
    }
}