//Manipulando DOM

// Obtendo referência para o elemento de exibição do resultado
const display = document.getElementById('display');

// Função para adicionar um número ou operador ao campo de exibição
function appendNumber(number) {
  display.value += number; // Concatena o número ao valor atual do campo de exibição
}

// Função para adicionar um operador ao campo de exibição
function appendOperator(operator) {
  display.value += operator; // Concatena o operador ao valor atual do campo de exibição
}

// Variável para controlar a adição do parêntese de abertura e fechamento
let openParenthesis = true;

// Função para adicionar um operador ao campo de entrada
function appendOperator(operator) {
  if (operator === '()') {
    if (openParenthesis) {
      display.value += '(';
      openParenthesis = false;
    } else {
      display.value += ')';
      openParenthesis = true;
    }
  } else {
    display.value += operator;
  }
}

// Função para adicionar um operador ao campo de entrada
function appendOperator(operator) {
    if (operator === '()') {
      // Código para adicionar parênteses
      // ...
    } else if (operator === '%') {
      const currentValue = display.value;
      const percentage = parseFloat(currentValue) / 100; // Calcula a porcentagem do número atual
      display.value = percentage; // Exibe o resultado da porcentagem no campo de exibição
    } else {
      display.value += operator;
    }
}

// Função para limpar o campo de exibição
function clearDisplay() {
  display.value = ''; // Define o valor do campo de exibição como vazio
}

// Função para realizar o cálculo da expressão matemática
function calculate() {
    try {
      const result = eval(display.value); // Avalia a expressão matemática e obtém o resultado
  
      if (Number.isFinite(result)) {
        display.value = result.toFixed(2); // Exibe o resultado com duas casas decimais
      } else {
        display.value = 'Erro';
      }
    } catch (error) {
      display.value = 'Erro'; // Em caso de erro, exibe "Erro" no campo de exibição
    }
}
  
// Função para apagar o último caractere do campo de entrada
function deleteLastCharacter() {
    const currentValue = display.value; // Obtém o valor atual do campo de entrada
    display.value = currentValue.substring(0, currentValue.length - 1); // Remove o último caractere
}
  