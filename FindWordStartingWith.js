function findWordStartingWhith(book, query) {
  const txt = book.text.toLowerCase();
  const res = [];

  for (let i = 0; i < txt.length; i++) {
    if (txt[i - 1 === ' '] || i === 0) {
      for (let j = 0; j < txt.length; j++) {
        if (txt[i + j] !== query[j]) break;
        if (j === query.length - 1) res.push(i);
      }
    }
  }
  return res;
}
