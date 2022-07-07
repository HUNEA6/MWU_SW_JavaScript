var height = prompt("키를 입력해 주세요");
console.log(height, typeof(height));

// parseInt = 입력받은 문자열에서 정수 부분을 추출하여 정수를 변수로 저장할 수 있다.
var height_int = parseInt(height);
console.log(height_int, typeof(height_int));

// parseFloat = 입력받은 문자열에서 실수 부분까지 추출하여 정수를 변수로 저장할 수 있다.
var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));

// parseInt, parseFloat는 문자열의 앞에서부터 Number를 인식하기 때문에 앞에 문자가 나오면 NaN이 출력되니까 주의
