/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: '**',
        }, ],
    },
}
// next.config.js
module.exports = {
    // ...other configurations
    webpack(config) {
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      });
  
      return config;
    },
  };
  
module.exports = nextConfig