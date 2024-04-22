## 실습1번 실행결과

https://github.com/gryrryfh/AI-Graphics/assets/50912987/7a25592c-d4ef-48a8-aaea-a80e32774f08

## 변경한 코드
```javascript
function setup() {
  createCanvas(500, 500,WEBGL);
  setAttributes('antiAlias',true);
}
function draw() {
  background(100);
  orbitControl();
  noStroke();
  c1 = color(255,255,0);
  c2 = color(0,255,0);
  c3 = color(255,0,0);
  c4 = color(0,0,255);
  let colArray = [c1,c2,c3,c4];
  
  for(i=0;i<colArray.length;i++){
    let a = map(i,0,colArray.length,0,TAU);
    directionalLight(colArray[i],cos(a),sin(a),0);
  }
  
  rotateX(PI/3+frameCount*.006);
  rotateY(frameCount*.007);
  rotateZ(frameCount*.008);
  let shiniDemo = map(cos(frameCount*.05),-1,1,25,1);
  //shininess(shiniDemo);
  //specularMaterial(255);
  normalMaterial();
   cone(150, 150);
  cylinder(120, 150)
  
}
```
## 변경내용
box와 sphere 대신 cone과 cyliner를 사용해 모자모양을 만들어보았습니다.

## 실습2번 실행결과

https://github.com/gryrryfh/AI-Graphics/assets/50912987/6c5521eb-5cc8-49ea-bab5-a14608e45edb

