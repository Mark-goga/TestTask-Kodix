export default function parsedItemName(item) {
  const idAndArticle = item.Name.split('.');

  idAndArticle.shift();
  if (idAndArticle[0] && /^\d+#\d+$/.test(idAndArticle[0])) {
    idAndArticle.shift();
  }
  return idAndArticle.join(' ').trim();
}