const config = {
    verbose: true,
    rootDir: "./__tests__", 
    testEnvironment: "jsdom",
    transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\\/]+$"],
    coveragePathIgnorePatterns: ["src/components/index.ts"],
  };
  
  module.exports = config;