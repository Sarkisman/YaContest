/*B. Треугольник
Ограничение времени	1 секунда
Ограничение памяти	64Mb
Ввод	стандартный ввод или input.txt
Вывод	стандартный вывод или output.txt
Даны три натуральных числа. Возможно ли построить треугольник с такими сторонами. Если это возможно, выведите строку YES, иначе выведите строку NO.

Треугольник — это три точки, не лежащие на одной прямой.

Формат ввода
Вводятся три натуральных числа.

Формат вывода
Выведите ответ на задачу.

Пример 1
Ввод	Вывод
3
4
5

YES
Пример 2
Ввод	Вывод
3
5
4


YES
Пример 3
Ввод	Вывод
4
5
3 */


// вариант с записью в файл
const fs = require('fs');

function isTriangle(str) {
  const [a, b, c] = str.trim().split('\n').map(el => Number(el));

  return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a
    ? "YES"
    : "NO";
}

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const result = isTriangle(data);
  fs.writeFile('output.txt', result.toString(), err => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
