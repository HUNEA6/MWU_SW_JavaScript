var count = 0;

while(true){
    var ans;
    ans = parseInt(prompt("1+1=?"));
    if(ans != 2) {
        console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
        continue;
    }
    
    ans = parseInt(prompt("7+3=?"));
    if(ans != 10){
        console.log((++count) + "번 틀렀습니다. 다시 도전하세요.");
        continue;
    }

    ans = parseInt(prompt("9+7=?"));
    if(ans != 16){
        console.log((++count) + "번 틀렀습니다. 다시 도전하세요.");
        continue;
    }
    break;

   //continue를 만나면 다시 반복문의 끝으로 와서 다시 반복할지 안할지를 정한다.

}   
 
//break를 해주면 switch와 비슷하게 while문 밖으로 빠져나갈 수 있다.

console.log("정답입니다.");
