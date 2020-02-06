module.exports = {
  experimental: {
    async rewrites() {
      return [{ source: "/ko/page-2", destination: "/page-2" }];
    }
  }
};
