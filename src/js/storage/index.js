/**
 * Saves a value in local storage under a specified key.
 *
 * This function serializes the provided value into JSON format and stores it in the browser's local storage.
 *
 * @param {string} key - The key under which the value will be stored in local storage.
 * @param {any} value - The value to be stored, which will be converted to a JSON string.
 * @returns {void}
 *
 * @example
 * const user = { name: 'John', age: 30 };
 * save('userProfile', user);
 */

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Loads a value from local storage by its key.
 *
 * This function retrieves the value associated with the given key from local storage,
 * parses it from JSON format, and returns the parsed value. If the value does not exist or parsing fails, it returns null.
 *
 * @param {string} key - The key used to retrieve the value from local storage.
 * @returns {any|null} The parsed value from local storage, or null if the key does not exist or parsing fails.
 *
 * @example
 * const user = load('userProfile');
 * if (user) {
 *   console.log(user.name);
 * } else {
 *   console.log('No user found');
 * }
 */

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
