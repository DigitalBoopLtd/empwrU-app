/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Disable type checking during build since this is primarily a JavaScript project
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during build  
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

