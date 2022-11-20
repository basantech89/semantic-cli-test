module.exports = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "next",
    "next-major",
    {
      name: "alpha",
      prerelease: true,
      channel: "alpha",
    },
    {
      name: "beta",
      prerelease: true,
      channel: "beta",
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        parserOpts: {
          headerPattern:
            "/^(?::w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])(w*)(?:(([w$.-* ]*)))?: (.*)$/",
        },
        releaseRules: [
          {
            type: "hotfix",
            release: "patch",
          },
          {
            type: "style",
            release: "patch",
          },
          {
            type: "module",
            release: "minor",
          },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
