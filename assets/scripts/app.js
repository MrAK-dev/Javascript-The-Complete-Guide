const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MOSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let battleLog = [];
let lastLoggedEntry;

function getMaxLifeValues() {
  const enteredValue = prompt('Maximum life for you and the monster.', '100');

  const parsedValue = parseInt(enteredValue);

  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: 'Invalid user input not a number!' };
  }
  return parsedValue;
}

let chosenMaxLife;
try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
  alert('You entered something wrong, default value of 100 was used.');
  throw error;
} finally {
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry = {
    event,
    value,
    finalMonsterHealth: monsterHealth,
    finalPlayersHealth: playerHealth,
  };
  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER';
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        event,
        value,
        target: 'MONSTER',
        finalMonsterHealth: monsterHealth,
        finalPlayersHealth: playerHealth,
      };
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event,
        value,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayersHealth: playerHealth,
      };
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        event,
        value,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayersHealth: playerHealth,
      };
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event,
        value,
        finalMonsterHealth: monsterHealth,
        finalPlayersHealth: playerHealth,
      };
      break;
    default:
      logEntry = {};
  }

  // if (event === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry.target = 'MONSTER';
  // } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry = {
  //     event,
  //     value,
  //     target: 'MONSTER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayersHealth: playerHealth,
  //   };
  // } else if (event === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry = {
  //     event,
  //     value,
  //     target: 'PLAYER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayersHealth: playerHealth,
  //   };
  // } else if (event === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry = {
  //     event,
  //     value,
  //     target: 'PLAYER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayersHealth: playerHealth,
  //   };
  // } else if (event === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event,
  //     value,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayersHealth: playerHealth,
  //   };
  // }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'PLAYER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'MONSTER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'A DRAW',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPLayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler() {
  // for (let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i]);
  // }
  let j = 0;
  // while (j < 3) {
  //   console.log(j);
  //   j++;
  // }
  outerWhile: do {
    console.log('Outer', j);
    innerFor: for (let k = 0; k < 5; k++) {
      if (k === 3) {
        // break outerWhile;
        continue outerWhile; // dangerous! => makes Infinite loop!
      }
      console.log('Inner', k);
    }
    j++;
  } while (j < 3);
  // for (const log of battleLog) {
  //   console.log(log);
  // }
  let i = 0;
  for (const log of battleLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      for (const key in log) {
        console.log(`${key} => ${log[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPLayerHandler);
logBtn.addEventListener('click', printLogHandler);
