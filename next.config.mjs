/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

   redirects:async() =>{
      return [
        {
          source: '/about',
          destination: '/meals',
          permanent: true,
        },
      ]
    }
  