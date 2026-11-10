import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // o portfólio agora é servido na raiz; links antigos para /portfolio continuam funcionando
  async redirects() {
    return [{ source: "/portfolio", destination: "/", permanent: true }];
  },
};

export default nextConfig;
