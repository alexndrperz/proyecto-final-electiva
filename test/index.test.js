const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Página Hola Mundo', () => {
  let document;

  beforeAll(() => {
    const htmlPath = path.join(__dirname, '..', 'src','index.html');
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('Debe contener un título con "¡Hola Mundo!"', () => {
    const h1 = document.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe('¡Hola Mundo!');
  });
});
