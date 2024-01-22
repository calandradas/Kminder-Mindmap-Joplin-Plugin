const cssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const miniCssExtractPlugin = require('mini-css-extract-plugin');

exportedConfigs.push({
    module: {
        rules: [
          {
            test: /.css$/,
            use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
        ],
    },
    optimization: {
      minimizer: [new cssMinimizerPlugin()],
    },
    plugins: [new miniCssExtractPlugin()],
  });
//console.info(chalk.cyan());
