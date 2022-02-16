module.exports = {
    devServer: {
        host: "localhost"
    },
    filenameHashing: false,
    runtimeCompiler: false,
    publicPath: 'dist',
    outputDir: "dist",
    pages: {
        common: {
            entry: "src/common.js",
            chunks: ["chunk-vendors", "common"]
        },
        main: {
            entry: "src/main.js",
            chunks: ["chunk-vendors", "obs"]
        },
    }
};

