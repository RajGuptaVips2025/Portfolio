/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This ensures your deployment succeeds even if ESLint throws a serialization error
    ignoreDuringBuilds: true,
  },
  // Add other Next.js config options here if needed
};

export default nextConfig;





// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
