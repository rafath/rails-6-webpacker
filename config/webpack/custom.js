module.exports = {
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      React: 'react',
      ReactDOM: 'react-dom',
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["css-loader", "sass-loader"],
      },
    ],
  }
}
