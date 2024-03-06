// Раунд плей-офф между двумя командами состоит из двух матчей. Каждая команда проводит по одному матчу «дома» и «в гостях».
// Выигрывает команда, забившая большее число мячей. Если же число забитых мячей совпадает, выигрывает команда, забившая
// больше мячей «в гостях». Если и это число мячей совпадает, матч переходит в дополнительный тайм или серию пенальти.

// Вам дан счёт первого матча, а также счёт текущей игры (которая ещё не завершилась). Помогите комментатору сообщить,
// сколько голов необходимо забить первой команде, чтобы победить, не переводя игру в дополнительное время.

// Формат ввода
// В первой строке записан счёт первого мачта в формате G1:G2, где G1 — число мячей, забитых первой командой,
// а G2 — число мячей, забитых второй командой.
// Во второй строке записан счёт второго (текущего) матча в аналогичном формате. Все числа в записи счёта не превышают 5.
// В третьей строке записано число 1, если первую игру первая команда провела «дома», или 2, если «в гостях».

// Формат вывода
// Выведите единственное целое число — необходимое количество мячей.

// Пример 1
// Ввод	     Вывод
// 0:0         1
// 0:0
// 1

// Пример 2
// Ввод	     Вывод
// 0:2         5
// 0:3
// 1

// Пример 3
// Ввод	     Вывод
// 0:2         6
// 0:3
// 2

const fs = require('fs');

function calculateGoalsToWin(input) {
  const [firstMatchScore, secondMatchScore, firstMatchLocation] =
    input.split('\n');
  const [firstMatchHomeGoals, firstMatchAwayGoals] = firstMatchScore
    .split(':')
    .map(Number);
  const [secondMatchHomeGoals, secondMatchAwayGoals] = secondMatchScore
    .split(':')
    .map(Number);

  let homeGoalsTeam1 = 0;
  let awayGoalsTeam1 = 0;
  let homeGoalsTeam2 = 0;
  let awayGoalsTeam2 = 0;

  if (firstMatchLocation === '1') {
    homeGoalsTeam1 = firstMatchHomeGoals;
    awayGoalsTeam1 = secondMatchHomeGoals;
    homeGoalsTeam2 = firstMatchAwayGoals;
    awayGoalsTeam2 = secondMatchAwayGoals;
  } else {
    homeGoalsTeam1 = secondMatchHomeGoals;
    awayGoalsTeam1 = firstMatchHomeGoals;
    homeGoalsTeam2 = firstMatchAwayGoals;
    awayGoalsTeam2 = secondMatchAwayGoals;
  }

  let goalsToWin = 0;

  const totalGoalsTeam1 = homeGoalsTeam1 + awayGoalsTeam1;
  const totalGoalsTeam2 = homeGoalsTeam2 + awayGoalsTeam2;
  if (totalGoalsTeam1 > totalGoalsTeam2) {
    return 0;
  } else if (totalGoalsTeam1 === totalGoalsTeam2) {
    if (awayGoalsTeam1 >= awayGoalsTeam2) {
      goalsToWin = 1;
    } else if (awayGoalsTeam1 < awayGoalsTeam2) {
      goalsToWin = totalGoalsTeam2 - totalGoalsTeam1 + 1;
    }
  } else if (totalGoalsTeam1 < totalGoalsTeam2) {
    if (awayGoalsTeam1 >= awayGoalsTeam2) {
      goalsToWin = totalGoalsTeam2 - totalGoalsTeam1;
    } else if (awayGoalsTeam1 < awayGoalsTeam2) {
      if (firstMatchLocation === '1') {
        goalsToWin = totalGoalsTeam2 - totalGoalsTeam1;
      } else {
        goalsToWin = totalGoalsTeam2 - totalGoalsTeam1+1;
      }
    }
  }
  return goalsToWin;
}

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const result = calculateGoalsToWin(data);
  fs.writeFile('output.txt', result.toString(), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
