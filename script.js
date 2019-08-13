/* Generation Randomic links to the a selector in index.html
* Referenzas: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
* 
*/

function randomLinks(){
  var random = Math.random(Math.random()*4);
  var links = new Array();
  
  links[0]="http://www.soup.io/";
  links[1]="https://agar.io";
  links[2]="http://filecloud.io/";
  links[3]="https://jovemnerd.com.br";
  links[4]="https://b9.com.br";
  
  window.location=links[myrandom];
}