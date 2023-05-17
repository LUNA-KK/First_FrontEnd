const data = [
    {id:1, name: "potato", src: "stuff/potato.jpg"},
    {id:2, name: "beet", src: "stuff/beet.jpg"},
    {id:3, name: "mushroom", src: "stuff/big mushroom.jpg"},
    {id:4, name: "cabbage", src: "stuff/cabbage.jpg"},
    {id:5, name: "carrot", src: "stuff/carrot.jpg"},
    {id:6, name: "corn", src: "stuff/corn.jpg"},
    {id:7, name: "cucumber", src: "stuff/eggplant.jpg"},
    {id:8, name: "green bean", src: "stuff/green bean.jpg"},
    {id:9, name: "mushroom", src: "stuff/mushroom.jpg"},
    {id:10, name: "onion", src: "stuff/onion.jpg"},
    {id:11, name: "paprika", src: "stuff/paprika.jpg"},
    {id:12, name: "parsley", src: "stuff/parsley.jpg"},
    {id:13, name: "pepper", src: "stuff/pepper.jpg"},
    {id:14, name: "potato", src: "stuff/potato.jpg"},
    {id:15, name: "red onion", src: "stuff/red onion.jpg"},
    {id:16, name: "sliced potato", src: "stuff/sliced potato.jpg"},
    {id:17, name: "sliced tomato", src: "stuff/sliced tomato.jpg"},
    {id:18, name: "small onion", src: "stuff/small onion.jpg"},
    {id:19, name: "tomato", src: "stuff/tomato.jpg"},
    {id:20, name: "potato", src: "stuff/potato.jpg"},
    {id:21, name: "beet", src: "stuff/beet.jpg"},
    {id:22, name: "mushroom", src: "stuff/big mushroom.jpg"},
    {id:23, name: "cabbage", src: "stuff/cabbage.jpg"},
    {id:24, name: "carrot", src: "stuff/carrot.jpg"},
    {id:25, name: "corn", src: "stuff/corn.jpg"},
    {id:26, name: "cucumber", src: "stuff/eggplant.jpg"},
    {id:27, name: "green bean", src: "stuff/green bean.jpg"},
    {id:28, name: "mushroom", src: "stuff/mushroom.jpg"},
    {id:29, name: "onion", src: "stuff/onion.jpg"},
    {id:30, name: "paprika", src: "stuff/paprika.jpg"}
]

//사진과 이름 배열이 적용됨
const root = document.getElementById('root')

data.forEach((basket) => {
const basketId = document.createElement('div') 
const basketName = document.createElement('div') 
const cardImg = document.createElement('img') 

basketId.innerText = basket.id; //div 요소를 생성하여 basket.id 값을 텍스트노드로 설정
basketName.innerText = basket.name; //div 요소를 생성하여 basket.name 값을 텍스트노드로 설정
cardImg.setAttribute("src", basket.src) //img 요소를 생성하여 basket.src 값을 속성으로 설정

const basketContainer = document.createElement('div')
//basketContainer div 요소를 생성하여 basketId, cardImg, basketName 요소를 자식으로 추가
//basket 클래스 추가, basketContainer를 root 요소에 추가
basketContainer.appendChild(basketId)
basketContainer.append(cardImg)
basketContainer.appendChild(basketName)
basketContainer.className = "basket"

root.appendChild(basketContainer)
})

//클릭 시 장바구니에 들어감
const space = document.getElementById('space')

root.addEventListener('click', (e) => { 
    let target = e.target.parentNode;   //이벤트가 발생한 요소의 부모요소
    if (target.className != 'basket') return;   //부모 요소의 클래스 이름
    
    space.append(target) 
    //space라는 id를 가진 요소에 target(이벤트가 발생한 요소의 부모 요소) 추가
    //즉 클릭 된 요소를 space 요소의 자식요소로 이동시킴!
})

space.addEventListener('click', (e) => {
    let target = e.target.parentNode;
    if (target.className != 'basket') return;

    root.append(target)
})