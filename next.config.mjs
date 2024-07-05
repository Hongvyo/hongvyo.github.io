import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
//   pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  //   /**
  //    * Set base path. This is the slug of your GitHub repository.
  //    *
  //    * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
  //    */
  //   basePath: "/",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
