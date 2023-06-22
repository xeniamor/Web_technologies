function greeting() {
   let name = prompt('Как вас зовут?');
   message = `Привет, ${name}!`;
   alert(message);
}
greeting();
console.log(message);