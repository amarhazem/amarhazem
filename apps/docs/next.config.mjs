import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true,
  search: true,
});

export default withNextra({
  allowedDevOrigins: ["docs.amarhazem.localtest.me"],
  output: "standalone",
  reactStrictMode: true,
});
