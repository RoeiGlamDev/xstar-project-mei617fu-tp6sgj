

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your actual image domain
  },
  webpack(config) {

    return config;
  },
  // Additional optimizations for modern design
  optimizeFonts: true,
  experimental: {
    modern: true
}
};

export default nextConfig;