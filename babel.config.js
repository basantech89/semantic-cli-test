const config = (api) => {
  const isTest = api.env("test");

  return {
    ignore: ["dist"],
    presets: [
      [
        "@babel/preset-env",
        {
          modules: "commonjs",
          targets: {
            node: "current",
          },
        },
      ],
      "@babel/preset-typescript",
    ],
  };
};

module.exports = config;
