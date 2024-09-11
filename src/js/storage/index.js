export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

export function remove(key) {
  localStorage.removeItem(key);
}
