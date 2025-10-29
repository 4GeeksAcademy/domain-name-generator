import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ['the', 'my', 'your', 'their'];
  let adj = ['great', 'big', 'crazy', 'lazy'];
  let noun = ['wizard', 'ninja', 'pirate'];
  let domainNames = ['.com','.net','.org','.dev'];

  let domainElement = document.querySelector("#domain")

  domainElement.innerHTML = createDomain(pronoun, adj, noun, domainNames);

};



function createDomain (pronouns, adjectives, nouns, domains){
  let html = '';
  pronouns.forEach( p => {
    adjectives.forEach( a => {
      nouns.forEach ( n => {
        domains.forEach ( d => {
           console.log(`${p}${a}${n}${d}`);
           html +=  `<li>${p}${a}${n}${d}</li>`
           
        })
      })
    })
  })
  return `<ul> ${html}</ul>`;
}