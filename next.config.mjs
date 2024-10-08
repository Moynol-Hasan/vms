/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'polygon-energy.s3.ap-southeast-1.amazonaws.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'energystata.s3.ap-southeast-1.amazonaws.com',
                pathname: '/**',
            },
        ],
    },
  
    webpack: (config, { isServer }) => {
        // Transpile chart.js for server-side builds (optional, depending on usage)
        if (!isServer) {
            config.resolve.fallback = {
                fs: false, // to handle fs module if used
            };
        }
  
        return config;
    },
  };
  
  export default nextConfig;
  