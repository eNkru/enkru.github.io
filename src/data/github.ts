export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  homepage: string | null
  fork: boolean
  created_at: string
  updated_at: string
  pushed_at: string
  topics: string[]
}

export const GITHUB_USERNAME = 'enkru'

/** Static fallback data used when the GitHub API is unavailable. */
export const STATIC_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'ember-material-table',
    full_name: 'enkru/ember-material-table',
    html_url: 'https://github.com/enkru/ember-material-table',
    description: 'Material Design Table for Ember.js — a powerful, customizable data table component',
    language: 'JavaScript',
    stargazers_count: 42,
    forks_count: 18,
    homepage: 'https://enkru.github.io/ember-material-table',
    fork: false,
    created_at: '2017-01-15T00:00:00Z',
    updated_at: '2024-03-10T00:00:00Z',
    pushed_at: '2024-03-10T00:00:00Z',
    topics: ['ember', 'material-design', 'table', 'component'],
  },
  {
    id: 2,
    name: 'screentime',
    full_name: 'enkru/screentime',
    html_url: 'https://github.com/enkru/screentime',
    description: 'Track and visualise your screen time patterns across devices',
    language: 'TypeScript',
    stargazers_count: 12,
    forks_count: 3,
    homepage: null,
    fork: false,
    created_at: '2020-06-01T00:00:00Z',
    updated_at: '2024-01-20T00:00:00Z',
    pushed_at: '2024-01-20T00:00:00Z',
    topics: ['typescript', 'productivity', 'tracking'],
  },
  {
    id: 3,
    name: 'enkru.github.io',
    full_name: 'enkru/enkru.github.io',
    html_url: 'https://github.com/enkru/enkru.github.io',
    description: 'Personal portfolio website — built with React, Tailwind CSS & Framer Motion',
    language: 'TypeScript',
    stargazers_count: 5,
    forks_count: 1,
    homepage: 'https://enkru.github.io',
    fork: false,
    created_at: '2023-08-01T00:00:00Z',
    updated_at: '2026-04-20T00:00:00Z',
    pushed_at: '2026-04-20T00:00:00Z',
    topics: ['react', 'tailwindcss', 'portfolio', 'framer-motion'],
  },
  {
    id: 4,
    name: 'dotfiles',
    full_name: 'enkru/dotfiles',
    html_url: 'https://github.com/enkru/dotfiles',
    description: 'Personal dotfiles for macOS development environment setup',
    language: 'Shell',
    stargazers_count: 3,
    forks_count: 0,
    homepage: null,
    fork: false,
    created_at: '2019-03-15T00:00:00Z',
    updated_at: '2025-11-05T00:00:00Z',
    pushed_at: '2025-11-05T00:00:00Z',
    topics: ['dotfiles', 'macos', 'zsh'],
  },
  {
    id: 5,
    name: 'vscode-snippets',
    full_name: 'enkru/vscode-snippets',
    html_url: 'https://github.com/enkru/vscode-snippets',
    description: 'Custom VS Code snippets for React, TypeScript & Ember development',
    language: 'JSON',
    stargazers_count: 7,
    forks_count: 2,
    homepage: null,
    fork: false,
    created_at: '2021-04-10T00:00:00Z',
    updated_at: '2024-08-15T00:00:00Z',
    pushed_at: '2024-08-15T00:00:00Z',
    topics: ['vscode', 'snippets', 'react', 'typescript'],
  },
  {
    id: 6,
    name: 'react-hooks-toolkit',
    full_name: 'enkru/react-hooks-toolkit',
    html_url: 'https://github.com/enkru/react-hooks-toolkit',
    description: 'Collection of useful custom React hooks for everyday development',
    language: 'TypeScript',
    stargazers_count: 15,
    forks_count: 4,
    homepage: null,
    fork: false,
    created_at: '2022-02-01T00:00:00Z',
    updated_at: '2025-06-01T00:00:00Z',
    pushed_at: '2025-06-01T00:00:00Z',
    topics: ['react', 'hooks', 'typescript', 'utility'],
  },
]
