// const withPWA = require("next-pwa");

// const isProd = process.env.NODE_ENV === "production";

// const nextConfig = {
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: !isProd,
//   },
// };

module.exports = {
  dest: 'public',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: false, // Set this to 'false' to disable base64 encoding (recommended for larger files)
          name: '[name].[ext]',
          outputPath: 'static/sounds/', // Customize the output path as needed
          publicPath: '/_next/static/sounds/', // Customize the public path as needed
        },
      },
    });

    return config;
  },
};
