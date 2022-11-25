const transform = require("./transform");
const gitmojiParserOpts = require("@gitmoji/parser-opts");

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
          ...gitmojiParserOpts,
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
          revertPattern: /revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
          revertCorrespondence: [`header`, `hash`],
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
    [
      "@semantic-release/release-notes-generator",
      {
        config: "conventional-changelog-gitmoji-config",
        writerOpts: { transform },
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        message:
          "🔖 chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};
