/** 
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean menores que cierto número `filter`
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 * @example
 * filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */
export function filterNumbersGreaterThan(numbers, filter) {
  return numbers.filter(n => n < filter);
}

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak"
 * @param {string} text
 * @returns {String} - El texto convertido a "Hacker Speak"
 * @example
 * toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ck3r n0w"
 */
export function toHackerSpeak(text) {
  const replacements = { a: "4", e: "3", i: "1", o: "0", s: "5" };
  return text.replace(/[aeios]/gi, letra =>
    replacements[letra.toLowerCase()] ?? letra
  );
}

/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 * @param {string} file - El nombre del archivo
 * @returns {String} - La extensión del archivo
 * @example
 * getFileExtension("imagen.jpg") // returns "jpg"
 */
export function getFileExtension(file) {
  const parts = file.split(".");
  return parts.length > 1 ? parts.pop() : "";
}

/**
 * @name flatArray
 * @description Aplana un array 2D en un array 1D
 * @param {[][]} arr - Array 2D
 * @returns {[]} - Array 1D
 * @example
 * flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 4, 3, 10, 2, 5]
 */
export function flatArray(arr) {
  return arr.flat();
}

/**
 * @name removeDuplicates
 * @description Elimina duplicados de un array
 * @param {[]} arr - Array con duplicados
 * @returns {[]} - Array sin duplicados
 * @example
 * removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 * @example
 * countLetter("a", "javascript") // returns 2
 */
export function countLetter(letter, text) {
  return text.split("").filter(l => l.toLowerCase() === letter.toLowerCase()).length;
}

/**
 * @name removeWords
 * @description Elimina de un texto las palabras que aparezcan en un array dado
 * @param {string} str - Texto a recortar
 * @param {string[]} words - Palabras a eliminar
 * @returns {string} - Texto resultante sin esas palabras
 * @example
 * removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */
export function removeWords(str, words) {
  const pattern = new RegExp("\\b(" + words.join("|") + ")\\b", "gi");
  return str.replace(pattern, "").replace(/\s{2,}/g, " ").trim();
}
