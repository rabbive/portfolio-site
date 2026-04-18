function safeYear(isoString) {
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) {
    return String(new Date().getUTCFullYear());
  }
  return String(d.getUTCFullYear());
}

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function mapRepoToProject(repo) {
  const language = repo.language ? [repo.language] : [];
  const topics = Array.isArray(repo.topics) ? repo.topics.slice(0, 3) : [];
  const technologies = [...new Set([...language, ...topics])];

  return {
    title: repo.name,
    slug: slugify(repo.name),
    description: repo.description || "Project details available on GitHub.",
    year: safeYear(repo.updated_at),
    technologies,
    highlights: [
      `GitHub stars: ${repo.stargazers_count ?? 0}`,
      `Forks: ${repo.forks_count ?? 0}`,
      `Last updated: ${safeYear(repo.updated_at)}`,
    ],
    github: repo.html_url,
  };
}

export function mapGithubSnapshot({ profile, repos, repoLimit = 6 }) {
  const projects = repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    .slice(0, repoLimit)
    .map(mapRepoToProject);

  return {
    generatedAt: new Date().toISOString(),
    profile: {
      login: profile.login,
      name: profile.name || profile.login,
      bio:
        profile.bio ||
        "CS student at VIT Chennai building with ML, distributed systems, and applied cryptography.",
      avatarUrl: profile.avatar_url,
      githubUrl: profile.html_url,
    },
    projects,
  };
}
