# 1. 동기와 비동기 이해하기

## 1.1 API 서버에서 상품 목록 가져오기

- fetch 함수 사용

```js
fetch("API 주소")
  .then(response => response.json())
  .then(data => console.log(data));
```

- Promise

  - 비동기 작업이 완료, 실패했을 때를 처리하기 위한 객체
  - 자바스크립트 내장 객체로서 "대기", "이행", "거부"의 상태로 표현할 수 있다.

- fetch 함수가 반환하는 값은 Promise 인스턴스이다.
- Promise 인스턴스에서 사용할 수 있는 메서드는 then, catch, finally가 있다.
- 그 중에 then 메서드는 Promise의 상태가 "이행", "거부" 상태가 되었을 때 실행된다.
- 즉, 비동기 작업이 처리되었을 때 실행된다.
- 이 때 then 메서드 또한 Promise 인스턴스를 반환하기 때문에 .then(...).then(...) 형식으로 함수를 연결해서 사용할 수 있다.
