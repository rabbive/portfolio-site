import test from "node:test";
import assert from "node:assert/strict";
import { mapGithubSnapshot } from "../scripts/github-sync-lib.mjs";

test("maps profile and top non-fork repos sorted by pushed_at desc", () => {
  const profile = {
    login: "rabbive",
    name: "Ashwanth Kumaravel",
    bio: "Builder",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/rabbive",
  };

  const repos = [
    {
      name: "old-fork",
      fork: true,
      pushed_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
      description: "should be ignored",
      html_url: "https://github.com/rabbive/old-fork",
      language: "TypeScript",
      stargazers_count: 5,
      forks_count: 1,
      topics: ["nextjs"],
    },
    {
      name: "newest-repo",
      fork: false,
      pushed_at: "2026-04-10T00:00:00Z",
      updated_at: "2026-04-10T00:00:00Z",
      description: "Newest project",
      html_url: "https://github.com/rabbive/newest-repo",
      language: "Python",
      stargazers_count: 10,
      forks_count: 2,
      topics: ["ml", "security"],
    },
    {
      name: "older-repo",
      fork: false,
      pushed_at: "2025-01-10T00:00:00Z",
      updated_at: "2025-01-10T00:00:00Z",
      description: null,
      html_url: "https://github.com/rabbive/older-repo",
      language: null,
      stargazers_count: 0,
      forks_count: 0,
      topics: [],
    },
  ];

  const snapshot = mapGithubSnapshot({ profile, repos, repoLimit: 6 });

  assert.equal(snapshot.profile.name, "Ashwanth Kumaravel");
  assert.equal(snapshot.profile.githubUrl, "https://github.com/rabbive");
  assert.equal(snapshot.projects.length, 2);
  assert.equal(snapshot.projects[0].title, "newest-repo");
  assert.equal(snapshot.projects[1].title, "older-repo");
  assert.ok(snapshot.projects[1].description.length > 0);
});

test("limits project count", () => {
  const profile = {
    login: "rabbive",
    name: null,
    bio: null,
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/rabbive",
  };

  const repos = Array.from({ length: 10 }, (_, i) => ({
    name: `repo-${i}`,
    fork: false,
    pushed_at: `2026-04-${String(28 - i).padStart(2, "0")}T00:00:00Z`,
    updated_at: `2026-04-${String(28 - i).padStart(2, "0")}T00:00:00Z`,
    description: `desc-${i}`,
    html_url: `https://github.com/rabbive/repo-${i}`,
    language: "TypeScript",
    stargazers_count: i,
    forks_count: 0,
    topics: [],
  }));

  const snapshot = mapGithubSnapshot({ profile, repos, repoLimit: 6 });
  assert.equal(snapshot.projects.length, 6);
  assert.equal(snapshot.profile.name, "rabbive");
});
