import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our', 'my', 'your'];
  let adj = ['great', 'big', 'super', 'cool'];
  let noun = ['jogger', 'racoon', 'dev', 'hub'];
  let extensions = ['.com', '.net', '.us', '.io', '.es'];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extensions.length; e++) {
          
          let domainName = pronoun[p] + adj[a] + noun[n] + extensions[e];
          console.log(domainName);
        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};