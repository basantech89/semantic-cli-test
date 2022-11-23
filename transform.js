const typeMap = {
  feat: {
    emoji: "🎉",
    label: "Features",
  },
  fix: {
    emoji: "🐛",
    label: "Bug Fixes",
  },
  build: {
    emoji: "👷",
    label: "Build System",
  },
  chore: {
    emoji: "🚚",
    label: "Chores",
  },
  ci: {
    emoji: "💚",
    label: "Continuous Integration",
  },
  docs: {
    emoji: "📝",
    label: "Documentation",
  },
  test: {
    emoji: "✅",
    label: "Tests",
  },
  perf: {
    emoji: "🚀",
    label: "Performance Improvements",
  },
  refactor: {
    emoji: "♻️",
    label: "Code Refactoring",
  },
  revert: {
    emoji: "⏪",
    label: "Reverts",
  },
  style: {
    emoji: "💄",
    label: "Styles",
  },
  module: {
    emoji: "✨",
    label: "Modules",
  },
  hotfix: {
    emoji: "🚑",
    label: "Hotfixes",
  },
  wip: {
    emoji: "🚧",
    label: "WIP",
  },
  security: {
    emoji: "🔒",
    label: "Security Fixes",
  },
};

const getDisplayName = (type) => {
  if (type in typeMap) {
    const item = typeMap[type];
    const { emoji } = item;
    return `${emoji} ${item["label"]}`;
  }

  return type;
};

const transform = (commit, context) => {
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
      commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
        issues.push(issue);
        return `[#${issue}](${url}${issue})`;
      });
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
};

module.exports = transform;
