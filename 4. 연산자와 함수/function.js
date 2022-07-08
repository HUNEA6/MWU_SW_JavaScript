function 함수이름(파라미터1, 파라미터2){
	/*
		실행될 코드
	*/
	return 반환값;
}

function return_test() {
    return;
    console.log("실행안되는 코드 : 이유는 return이 선언되어서 함수가 종료됐기 때문");
}

function print(message) {
    console.log("print function in");
    console.log(message);
    console.log("print function out");
}

function sum(arg1, arg2) {
    var result = arg1 + arg2;
    return result;
}