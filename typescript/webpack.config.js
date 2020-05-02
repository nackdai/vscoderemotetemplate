// https://webpack.js.org/configuration/

const path = require('path');

// __dirname is current directory path as apsolute path
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/app.ts',
    // The top-level output key contains set of options instructing webpack on
    // how and where it should output your bundles, assets and anything else
    // you bundle or load with webpack.
    output: {
        // output path have to be absolute path
        path: outputPath,
        filename: 'bundle.js'
    },
    // These options change how modules are resolved. webpack provides
    // reasonable defaults, but it is possible to change the resolving in
    // detail.
    resolve: {
        // specify file extention to treat as modules
        extensions:['.ts','.js']
    },
    devServer: {
        // Tell the server where to serve content from. This is only necessary
        // if you want to serve static files.
        contentBase: outputPath,
        // Why host is '0.0.0.0'?
        // https://pythonspeed.com/articles/docker-connection-refused/
        host: '0.0.0.0',
        port: 80,
    },
    // These options determine how the different types of modules within a
    // project will be treated.
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,         // files which are treated as modules
                exclude: /node_modules/,    // exclude files in node_modules directory
                loader:'ts-loader'          // specify loader for files which are specified in test
            }
        ]
    },
    // Choose a style of source mapping to enhance the debugging process.
    // A full SourceMap is emitted as a separate file. It adds a reference
    // comment to the bundle so development tools know where to find it.
    devtool: 'source-map'
}
