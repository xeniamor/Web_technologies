let temp = +prompt("Введите температуру в градусах Цельсия");
alert(`Цельсий: ${temp}\nФаренгейт: ${Math.floor(((9 / 5) * temp + 32) * 100) /100 }`);