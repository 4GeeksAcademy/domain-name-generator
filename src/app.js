import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'my'];
  let adj = ['cool', 'fast'];
  let noun = ['puedes', 'lotus', 'folio', 'focus'];
  let domainNames = ['.es', '.us', '.io', '.com', '.net'];

  let domainElement = document.querySelector("#domain");
  domainElement.innerHTML = createDomain(pronoun, adj, noun, domainNames);
};

function createDomain (pronouns, adjectives, nouns, domains){
  let html = '';

  pronouns.forEach(p => {
    adjectives.forEach(a => {
      nouns.forEach(n => {
        const base = `${p}${a}${n}`;

        domains.forEach(d => {
          const tld = d.slice(1);

          if (base.endsWith(tld)) {
            const hacked = base.slice(0, base.length - tld.length) + d;
            html += `<li>${hacked}</li>`;
          } else {
            const normal = base + d;
            html += `<li>${normal}</li>`;
          }
        });

      });
    });
  });

  return `<ul>${html}</ul>`;
}

