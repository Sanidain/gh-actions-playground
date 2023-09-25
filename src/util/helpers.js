const camelToScreamingSnake = (camel) => {
  let snake = '';

  for (let i = 0; i < camel.length; i++) {
    char = camel.charAt(i);

    if (isUpperCase(char)) {
      snake = `${snake}_${char}`;
    } else {
      snake = `${snake}${char.toUpperCase()}`;
    }
  }

  return snake;
};

const isUpperCase = (char) => char === char.toUpperCase();

export default camelToScreamingSnake;
