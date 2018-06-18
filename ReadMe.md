
# MV*

MV*
Model 과 View
이 둘은 명확한 편. 데이터를 가지고 있고, 화면을 구성한다

M, V의 중간자.

M,V 이 둘의 관계는 느슨하게 만들 필요 있음.

전통적인 MVC의 C는 입력장치 역할,

M,V의 관계를 더 느슨하게 만들어주는 것이 presenter 라고 일컫음. (MVP)

우리가 집중할 중재자
M,V 역할을 명확하게 분리해서 각각 해야할일에 집중하도록 한다.

M,V 가 많이지면 서로 참조하면서 그 관계가 복잡해진다. 따라서 M,V 간의 관계를 느슨하게 만들 필요가 있음.

또한 Views 간에도 그 관계가 느슨하면 좋겠음.

앞으로, 이런 M,V 의 관계를 구분하는 것을 우리는 controller라고 한다.

가장 중요한 간 역할이 무엇인지에 집중하는 것이다.

역할정의
1. Model
데이터를 갱신한다(추가,변경,제거,획득)

데이터를 획득하는 로직(Ajax나 localstorage등)을 model에 넣을 수도 있으나, controller에서 만들어서 줄 수도 있음.

2. Controller
전체적으로는 Model과 View간의 변경사항을 연결 지어주기.

event hander(listener) 구현체 만들기.

view 가 렌더링을 잘 할 수 있도록 데이터 가공(viewModel 만들기)

데이터 변경이 필요한 경우는 model에 전달.

3. View
DOM조작(view변경)에만 집중.

데이터를 받아서 별다른 가공없이 DOM에 추가.

Event listener 등록.



일관성 rendering 

1. 버그 수정 [O] -> debugger잘 쓰자! 관계만 알게 짜기 
2. 인풋, 리스트, 아코디언 css 애니메이션 /../

[] View를 3가지로 분리해보기 
1. 인풋  [O]
2. 리스트 [O]
3. 폴딩  [O]

### 추가로 해볼 것들 !

1. 추가된 model localStorage에 저장하기  -> fetch로 받아오기 
2. todoListitemView하나의 View로 추가하기 
3. todo에 상태 추가 하기 
3.1 완료 
3.2 삭제 
4. folding Animation알아보기 ! 



### 네트워크

애플리케이션 
데이터 전송 ...
물리

무결성
dns-ip-

TCP 안전하고 확실한 전송 tcp/ip 
UDP 손실 되도 ... 빠르게 보내기만 함 
checkSum

HTTP header정보!!!!
tomcat?
req / res

=> 중복 x 안 거쳐도 되는 건 안 거치도록 !!!


// 'use strict';

/**
- 할일을 입력하면 '해야할일들'에 노출된다.
- event delegation 을 사용한다. (document 에만 event를 등록한다)
- Template literal 을 활용한 view용 html 데이터 생성.

================================================
1. Model
데이터를 갱신한다(추가,변경,제거,획득)
데이터를 획득하는 로직(Ajax나 localstorage등)을 model에 넣을 수도 있으나, controller에서 만들어서 줄 수도 있음.

2. Controller
전체적으로는 Model과 View간의 변경사항을 연결 지어주기.
event hander(listener) 구현체 만들기.
view 가 렌더링을 잘 할 수 있도록 데이터 가공(viewModel 만들기)
데이터 변경이 필요한 경우는 model에 전달.

3. View
DOM조작(view변경)에만 집중.
데이터를 받아서 별다른 가공없이 DOM에 추가.
Event listener 등록.
*/

//Controller, View의 존재를 전혀 모르게 구현.