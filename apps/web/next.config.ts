import { withPayload } from "@payloadcms/next/withPayload";

export default withPayload({
  transpilePackages: ["@zenncore/utils", "@zenncore/icons"],
  serverExternalPackages: [
    "@payloadcms/db-postgres",
    "@payloadcms/drizzle",
    "drizzle-kit",
    "drizzle-orm",
    "postgres",
  ],
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
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
