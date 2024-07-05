import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  console.log("useMDXComponents", components);
  return {
    h1: ({ children }) => {
      console.log(children);
      return <h1 style={{ fontSize: "100px" }}>{children}</h1>;
    },

    ...components,
  };
}
