function appendNumber(number) {
    const screen = document.getElementById('screen');
    screen.value += number;
  }
  
  function clearScreen() {
    document.getElementById('screen').value = '';
  }
  
  function deleteNumber() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
  }
  
  function calculate() {
    const screen = document.getElementById('screen');
    try {
      screen.value = eval(screen.value);
    } catch {
      screen.value = 'Error';
    }
  }
  