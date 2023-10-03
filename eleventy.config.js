module.exports = function(eleventyConfig) {

  const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("src/styles/");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "site"
    }
  }
};