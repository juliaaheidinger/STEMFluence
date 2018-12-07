export function saveToLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function loadFromLocalStorage(name) {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (error) {
    return null
  }
}
