/** Maps common GitHub languages to a colour for visual flair. */
export const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Rust: '#dea584',
  Go: '#00ADD8',
  Shell: '#89e051',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Ruby: '#701516',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  JSON: '#292929',
  Vim: '#199f4b',
  Lua: '#000080',
}

export function getLangColor(lang: string | null): string {
  if (!lang) return '#8b949e'
  return LANG_COLORS[lang] ?? '#8b949e'
}

export interface LanguageStat {
  language: string
  count: number
  color: string
}

export function computeLanguageStats(repos: { language: string | null }[]): LanguageStat[] {
  const map = new Map<string, number>()
  for (const repo of repos) {
    const lang = repo.language ?? 'Other'
    map.set(lang, (map.get(lang) ?? 0) + 1)
  }
  const entries = Array.from(map.entries()).sort((a, b) => b[1] - a[1])
  return entries.map(([language, count]) => ({
    language,
    count,
    color: LANG_COLORS[language] ?? '#8b949e',
  }))
}
