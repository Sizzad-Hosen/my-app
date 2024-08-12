/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all subdomains and paths
        port: '',
        pathname: '**', // Allows all paths
      },
    ],
  },

  // Uncomment the redirects function if you want to use it
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/meals',
        permanent: true, 
      },
    ]
  },
};

export default nextConfig;
