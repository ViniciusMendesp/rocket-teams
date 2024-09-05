module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./"],
          alias: {
            "@assets": "./assets",
            "@components": "./components",
            "@routes": "./routes",
            "@screens": "./screens",
            "@storage": "./storage",
            "@theme": "./theme",
            "@utils": "./utils",
          },
        },
      ],
    ],
  };
};
