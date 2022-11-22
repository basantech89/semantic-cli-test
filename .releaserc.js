const gitmojiParserOpts = require("@gitmoji/parser-opts");
const { parserOpts } = require("conventional-changelog-angular");

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
        parserOpts: { ...parserOpts, ...gitmojiParserOpts },
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
