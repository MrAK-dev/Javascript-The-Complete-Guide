const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber} `;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIndentifire,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIndentifire,
    prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);

  console.log(logEntries);
}

function add() {
  const eneteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += parseInt(eneteredNumber, 10);
  createAndWriteOutput('+', initialResult, eneteredNumber);
  writeToLog('ADD', initialResult, eneteredNumber, currentResult);
}

function subtract() {
  const eneteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= parseInt(eneteredNumber, 10);
  createAndWriteOutput('-', initialResult, eneteredNumber);
  writeToLog('SUBTRACT', initialResult, eneteredNumber, currentResult);
}

function multiply() {
  const eneteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= parseInt(eneteredNumber, 10);
  createAndWriteOutput('*', initialResult, eneteredNumber);
  writeToLog('MULTIPLY', initialResult, eneteredNumber, currentResult);
}

function divide() {
  const eneteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= parseInt(eneteredNumber, 10);
  createAndWriteOutput('/', initialResult, eneteredNumber);
  writeToLog('DIVIDE', initialResult, eneteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
