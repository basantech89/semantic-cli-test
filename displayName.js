const typeMap = {
  feat: {
    emoji: "✨",
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
    emoji: "🎫",
    label: "Chores",
  },
  ci: {
    emoji: "🔧",
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
    emoji: "⚡",
    label: "Performance Improvements",
  },
  refactor: {
    emoji: "♻",
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
};

const getDisplayName = (type) => {
  if (type in typeMap) {
    const item = typeMap[type];
    const { emoji } = item;
    return `${emoji} ${item["label"]}`;
  }

  return type;
};

module.exports = getDisplayName;
