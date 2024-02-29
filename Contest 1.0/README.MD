вариант как делать через стандартный ввод:

function isTriangle(str) {
const [a, b, c] = str
  .toString()
  .split(' ')
  .map((el) => Number(el));

return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a
  ? true
  : false;
}

process.stdin.on('data', (data) => {
  let result = isTriangle(data);
  process.stdout.write(result.toString());
  process.exit();
});