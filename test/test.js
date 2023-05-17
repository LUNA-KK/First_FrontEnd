function upper(strings, ...values) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
      result += strings[i];
      if (i < values.length) {
        result += String(values[i]).toUpperCase();
      }
    }
    return result;
  }
  
  const name = 'John';
  const age = 30;
  console.log(upper`이름: ${name}, 나이: ${age}세`);
  // 출력: 이름: JOHN, 나이: 30세