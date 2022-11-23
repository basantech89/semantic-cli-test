const { getDisplayName } = require("./displayName");

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
        config: "conventional-changelog-gitmoji-config",
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
        writerOpts: {
          transform: (commit, context) => {
            let discard = true;
            const issues = [];

            commit.notes.forEach((note) => {
              note.title = "BREAKING CHANGES";
              discard = false;
            });

            const displayTypes = [
              "build",
              "ci",
              "docs",
              "feat",
              "fix",
              "perf",
              "refactor",
              "revert",
              "style",
              "test",
              "chore",
              "wip",
              "module",
              "hotfix",
            ];

            if (!displayTypes.includes(commit.type) && discard) return;

            commit.type = getDisplayName(commit.type);

            if (commit.scope === "*") {
              commit.scope = "";
            }

            if (typeof commit.hash === "string") {
              commit.shortHash = commit.hash.substring(0, 7);
            }

            if (typeof commit.subject === "string") {
              let url = context.repository
                ? `${context.host}/${context.owner}/${context.repository}`
                : context.repoUrl;
              if (url) {
                url = `${url}/issues/`;
                // Issue URLs.
                commit.subject = commit.subject.replace(
                  /#([0-9]+)/g,
                  (_, issue) => {
                    issues.push(issue);
                    return `[#${issue}](${url}${issue})`;
                  }
                );
              }
              if (context.host) {
                // User URLs.
                commit.subject = commit.subject.replace(
                  /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
                  (_, username) => {
                    if (username.includes("/")) {
                      return `@${username}`;
                    }

                    return `[@${username}](${context.host}/${username})`;
                  }
                );
              }
            }

            // remove references that already appear in the subject
            commit.references = commit.references.filter((reference) => {
              if (issues.indexOf(reference.issue) === -1) {
                return true;
              }

              return false;
            });

            return commit;
          },
        },
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
