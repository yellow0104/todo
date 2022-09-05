const quote = ['삶이 있는 한 희망은 있다', '산다는것 그것은 치열한 전투이다. ', '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.', '언제나 현재에 집중할수 있다면 행복할것이다.', '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해', '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다', '신은 용기있는자를 결코 버리지 않는다', '행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가우리를 향해 열린 문을 보지 못하게 된다', '피할수 없으면 즐겨라',
'단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?', '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에', '먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다', '행복한 삶을 살기위해 필요한 것은 거의 없다', '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다', '어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다'
];

const nam = ['키케로', '로망 롤랑', '사무엘존슨', '파울로 코엘료', '찰리 채플린', '엘버트 허버드', '켄러', '헬렌켈러', '로버트 엘리엇', '이드리스 샤흐', '엘사 맥스웰', '채근담', '마르쿠스 아우렐리우스 안토니우스', 'L.론허바드', '제임스 오펜하임'];

const num = Math.floor(Math.random() * quote.length);

const quote_h1 = document.getElementById('quote');
const name_h3 = document.getElementById('name');
console.log(quote_h1);
quote_h1.innerText = quote[num];
name_h3.innerText = nam[num];

const todoform = document.getElementById('todo-form')
const todolist = document.getElementById('todo-list')
const todoinput  = todoform.querySelector('input')

function paintodo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerHTML = newTodo;
    console.log(li);
    console.log(todolist);
    todolist.appendChild(li);

}


function handleToDosubmit(event){
    event.preventDefault();
    const newTodo = todoinput.value;
    todoinput.value = '';
    paintodo(newTodo);

}
todoform.addEventListener('submit', handleToDosubmit);
