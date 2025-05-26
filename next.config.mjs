/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, //add this
  distDir: "build", //add this
  output: "standalone", //add this
};

export default nextConfig;
