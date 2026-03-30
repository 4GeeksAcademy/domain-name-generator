import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our', 'my', 'your'];
  let adj = ['great', 'big', 'super', 'cool'];
  let noun = ['jogger', 'racoon', 'dev', 'hub'];
  let extensions = ['.com', '.net', '.us', '.io', '.es'];

  pronoun.forEach((p) => {
    adj.forEach((a) => {
      noun.forEach((n) => {
        extensions.forEach((e) => {
          
          let domainName = p + a + n + e;
          
          console.log(domainName);
        });
      });
    });
  });

  console.log("Generación de dominios con forEach completada con éxito.");
};