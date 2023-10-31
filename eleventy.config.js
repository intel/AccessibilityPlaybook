const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("src/styles/");
  eleventyConfig.addPassthroughCopy("src/scripts/*");
  eleventyConfig.addPassthroughCopy("src/images/*");
  // Return your Object options:
  return {
    pathPrefix: "/AccessibilityPlaybook-fs/",
    dir: {
      input: "src",
      output: "site"
    }
  }
};