/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy'],
  },
  // swcMinify: true,
  // env: {
  //   customKey: 'customValue',
  // },
  // // basePath: '/dist', 
  // // Comenta la linea basePath para evitar el error 404
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source : '/hola',
  //       destination: 'https://github.com/joseluis1061', // IMPORTANTE, el link del destino sin / 
  //       permanent: true,                        // ya que nos dira que no puede encontrar la ruta
  //     }
  //   ]
  // }
}
module.exports = nextConfig