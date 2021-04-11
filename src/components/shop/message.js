export const CustomerMessage = (articles, totalCost) => {
  const articlesAsString = articles
    .map((item) => `<li>${item.quantity}x ${item.article} (CHF ${item.price.toFixed(2)})</li>`)
    .toString()
    .replace(/,/g, '');

  return `
    Guten Tag & herzlichen Dank für Ihre Bestellung.<br /><br />
    Sie haben folgende Artikel bestellt:<br />
    <ul>${articlesAsString}</ul><br /> <br />
    <b>Total: CHF ${totalCost.toFixed(2)}</b><br /> <br />
    Sämtliche Produktpreise verstehen sich inkl. Verpackungs- und Versandspesen.<br />
    Versand nur gegen Vorauszahlung. Unsere Bankverbindung lautet:<br /><br />
    <b>IBAN: CH55 0900 0000 6050 6507 7</b><br />
    <b>Guggenmusig Pilatusgeister</b><br />
    <b>6000 Luzern</b><br /><br /><br />
    Beste Grüsse,<br>
    Pilatusgeister Luzern`;
};

export const ShopMessage = (articles, totalCost, formData) => {
  const articlesAsString = articles
    .map((item) => `<li>${item.quantity}x ${item.article} (CHF ${item.price.toFixed(2)})</li>`)
    .toString()
    .replace(/,/g, '');

  const phone = formData.phone ? formData.phone : 'unbekannt';

  return `
    Hallo<br /><br />
    Folgende Artikel wurden eben über den PGL Webshop bestellt:
    <ul>${articlesAsString}</ul><br />
    <b>Total: CHF ${totalCost.toFixed(2)}</b><br /><br />
    Die Artikel sollen nach erfolgreichem Zahlungseingang an folgende Adresse geschickt werden:<br /><br />
    <b>${formData.vorname} ${formData.name}</b><br />
    <b>${formData.adresse}</b><br />
    <b>${formData.plz} ${formData.ort}</b><br /><br />
    Telefonnummer: ${phone}`;
};
