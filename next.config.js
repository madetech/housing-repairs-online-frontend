const path = require('path')

module.exports =  {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/report-repair',
        destination: '/report-repair/priority-list',
        permanent: true,
      },
    ]
  },

  images: {
    loader: 'default'
  },
};
