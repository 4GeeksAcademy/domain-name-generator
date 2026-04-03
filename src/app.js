import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our', 'my', 'your'];
  let adj = ['great', 'big', 'super', 'cool'];
  let noun = ['jogger', 'racoon', 'dev', 'hub'];
  let extensions = ['.com', '.net', '.us', '.io', '.es'];

  console.log("--- Inicio de generación con bucle FOR ---");
  
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let domainNameFor = pronoun[i] + adj[j] + noun[k] + extensions[l];
          console.log("FOR: " + domainNameFor);
        }
      }
    }
  }

  console.log("--- Inicio de generación con bucle FOREACH ---");
  
  pronoun.forEach((p) => {
    adj.forEach((a) => {
      noun.forEach((n) => {
        extensions.forEach((e) => {
          let domainNameForEach = p + a + n + e;
          console.log("FOREACH: " + domainNameForEach);
        });
      });
    });
  });

  console.log("Proceso de generación de dominios finalizado con éxito.");
};