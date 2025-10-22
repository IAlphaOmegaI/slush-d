import { withPayload } from "@payloadcms/next/withPayload";

export default withPayload({
  transpilePackages: ["@zenncore/utils", "@zenncore/icons"],
  reactStrictMode: false,
  reactCompiler: true,
  experimental: {
    // Enable new caching and pre-rendering behavior
    cacheComponents: true, // will be renamed to cacheComponents in Next.js 16

    // Activate new client-side router improvements
    clientSegmentCache: true,

    // Enable support for `global-not-found`, which allows you to more easily define a global 404 page.
    globalNotFound: true,

    // Keep Payload and database packages on the server
    serverComponentsExternalPackages: [
      "@payloadcms/db-postgres",
      "@payloadcms/drizzle",
      "drizzle-kit",
      "drizzle-orm",
      "postgres",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude esbuild binaries from webpack processing
      config.externals = config.externals || [];
      config.externals.push({
        "@esbuild/darwin-arm64": "commonjs @esbuild/darwin-arm64",
        "@esbuild/darwin-x64": "commonjs @esbuild/darwin-x64",
        "@esbuild/linux-x64": "commonjs @esbuild/linux-x64",
        "@esbuild/linux-arm64": "commonjs @esbuild/linux-arm64",
        esbuild: "commonjs esbuild",
      });
    }
    return config;
  },
});
