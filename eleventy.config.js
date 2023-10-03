module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/styles/");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "site"
    }
  }
};