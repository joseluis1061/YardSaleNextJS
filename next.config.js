/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production', 
    disable: false
  },
  reactStrictMode: true,
  images: {
    domains: [
      'api.lorem.space',
      'placeimg.com', 
      'wixmp.com', 
      'romapy'
    ],
  },
})