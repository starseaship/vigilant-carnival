export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export function escapeAttr(value) {
  return escapeHtml(value).replaceAll('`', '&#096;')
}

export function parseTags(value) {
  if (!value) return []
  return String(value).split(',').map(tag => tag.trim()).filter(Boolean)
}

export function normaliseTags(tags) {
  if (!tags) return []
  if (Array.isArray(tags)) return tags.filter(Boolean)
  if (typeof tags === 'string') return parseTags(tags)
  return []
}

export function getMastery(word) {
  if (!word) return 0
  const value = Number(word.mastery_level)
  if (Number.isFinite(value) && value >= 0 && value <= 3) return value
  if (word.status === 'mastered') return 3
  if (word.status === 'uncertain') return 1
  return 0
}

export function clampMastery(value) {
  if (!Number.isFinite(value)) return 0
  return Math.min(Math.max(Math.round(value), 0), 3)
}

export function shuffle(items) {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
