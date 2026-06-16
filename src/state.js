export const state = {
  session: null,
  activeTab: 'words',
  courses: [],
  words: [],
  reviews: [],
  filters: {
    courseId: 'all',
    mastery: 'all',
    search: ''
  },
  editingWordId: null,
  message: null,
  practice: null
}

export function setMessage(text, type = 'info') {
  state.message = { text, type }
}

export function clearMessage() {
  state.message = null
}
