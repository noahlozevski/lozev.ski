<template>
  <div class="container">
    <div class="mix-tape">
      <div class="content">
        <div class="letter">Mix Tape</div>
        <div class="l1"></div>
        <div class="l2"></div>
        <div class="l3"></div>
        <div class="y1"></div>
        <div class="o1"></div>
        <div class="y2"></div>
        <div class="o2"></div>
        <div class="inside-content">
          <div class="tape1">
            <div class="t3">
              <div class="circle"></div>
              <div class="box1"></div>
              <div class="box2"></div>
              <div class="box3"></div>
              <div class="box4"></div>
            </div>
            <div class="t5"></div>
            <div class="t6"></div>
            <div class="t7"></div>
            <div class="t8"></div>
            <div class="t9"></div>
            <div class="t10"></div>
            <div class="t11"></div>
            <div class="t12"></div>
            <div class="t4"></div>
          </div>
          <div class="tape2">
            <div class="tt3">
              <div class="circle2"></div>
              <div class="box1"></div>
              <div class="box2"></div>
              <div class="box3"></div>
              <div class="box4"></div>
            </div>
            <div class="tt5"></div>
            <div class="tt6"></div>
            <div class="tt7"></div>
            <div class="tt8"></div>
            <div class="tt9"></div>
            <div class="tt10"></div>
            <div class="tt11"></div>
            <div class="tt12"></div>
            <div class="tt4"></div>
          </div>
        </div>
        <div class="lower-part"></div>
        <div class="lower-part2"></div>
        <div class="side-part"></div>
        <div class="side-part2"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  width: 600px;
  height: 500px;
}
.mix-tape {
  background: black;
  position: absolute;
  width: 350px;
  height: 220px;
  top: 30%;
  left: 20%;
  border-radius: 10px;
  box-shadow: 29px 24px 20px 2px rgba(0, 0, 0, 0.75);
  animation: 1s infinite move;
}
.content {
  background: #fce195;
  position: absolute;
  width: 300px;
  height: 150px;
  top: 10%;
  left: 7%;
  border-radius: 5px;
}
.letter {
  background: orange;
  position: absolute;
  left: 2%;
  top: 6%;
  width: 30px;
  height: 40px;
}
.l1 {
  width: 220px;
  height: 2px;
  position: absolute;
  background: black;
  top: 8%;
  left: 20%;
}
.l2 {
  width: 220px;
  height: 2px;
  position: absolute;
  background: black;
  top: 18%;
  left: 20%;
}
.l3 {
  width: 220px;
  height: 2px;
  position: absolute;
  background: black;
  top: 28%;
  left: 20%;
}
.y1 {
  background: yellow;
  position: absolute;
  width: 300px;
  height: 20px;
  top: 40%;
}
.o1 {
  background: orange;
  position: absolute;
  width: 300px;
  height: 20px;
  top: 53%;
}
.y2 {
  background: yellow;
  position: absolute;
  width: 300px;
  height: 20px;
  top: 66%;
}
.o2 {
  background: orange;
  position: absolute;
  width: 300px;
  height: 20px;
  top: 79%;
}
.inside-content {
  background: black;
  width: 180px;
  height: 60px;
  position: absolute;
  top: 45%;
  left: 20%;
  border-radius: 5px;
}
.tape1 {
  background: linear-gradient(90deg, rgba(246, 229, 141, 1) 35%, rgba(205, 181, 20, 1) 100%);
  position: absolute;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  animation: 2s infinite rotate;
}
.t3 {
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  top: 25%;
  left: 25%;
  overflow: hidden;
  border: 2px solid black;
}
.circle {
  background: #eab543;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  left: 20%;
  top: 10%;
}
.box1 {
  background: #fce195;
  position: absolute;
  height: 5px;
  width: 5px;
  left: 40%;
  border: 1px solid black;
}
.box2 {
  background: #fce195;
  position: absolute;
  height: 5px;
  width: 5px;
  left: 80%;
  top: 40%;
  border: 1px solid black;
}
.box3 {
  background: #fce195;
  position: absolute;
  height: 5px;
  width: 5px;
  left: 40%;
  top: 80%;
  border: 1px solid black;
}
.box4 {
  background: #fce195;
  position: absolute;
  height: 5px;
  width: 5px;
  top: 40%;
  border: 1px solid black;
}
.t5 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 40%;
  left: 12%;
  background: black;
}
.t6 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 64%;
  left: 22%;
  background: black;
}
.t7 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 74%;
  left: 46%;
  background: black;
}
.t8 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 64%;
  left: 66%;
  background: black;
}
.t9 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 40%;
  left: 74%;
  background: black;
}
.t10 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 20%;
  left: 64%;
  background: black;
}
.t11 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 20%;
  left: 24%;
  background: black;
}
.t12 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 14%;
  left: 44%;
  background: black;
}
.t4 {
  border: 3px solid #f0932b;
  position: absolute;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  top: 9%;
  left: 8%;
}
.tape2 {
  background: linear-gradient(90deg, rgba(246, 229, 141, 1) 35%, rgba(205, 181, 20, 1) 100%);
  position: absolute;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  left: 67%;
  animation: 2s rotate infinite;
}
.tt3 {
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  top: 25%;
  left: 25%;
  border: 1px solid black;
  overflow: hidden;
}
.circle2 {
  background: #eab543;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  left: 20%;
  top: 10%;
}
.tt5 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 40%;
  left: 12%;
  background: black;
}
.tt6 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 64%;
  left: 22%;
  background: black;
}
.tt7 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 74%;
  left: 46%;
  background: black;
}
.tt8 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 64%;
  left: 66%;
  background: black;
}
.tt9 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 40%;
  left: 74%;
  background: black;
}
.tt10 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 20%;
  left: 64%;
  background: black;
}
.tt11 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 20%;
  left: 24%;
  background: black;
}
.tt12 {
  position: absolute;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  top: 14%;
  left: 44%;
  background: black;
}
.tt4 {
  border: 3px solid #f0932b;
  position: absolute;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  top: 9%;
  left: 8%;
}
.lower-part {
  clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 0 50%);
  width: 200px;
  height: 90px;
  background: #eab543;
  position: absolute;
  top: 104%;
  left: 18%;
}
.lower-part2 {
  clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 0 50%);
  width: 185px;
  height: 80px;
  background: black;
  position: absolute;
  top: 105.7%;
  left: 20.8%;
}
.side-part {
  background: black;
  width: 10px;
  height: 50px;
  position: absolute;
  top: 90%;
  left: -9%;
  border: 2px solid #eab543;
}
.side-part2 {
  background: black;
  width: 10px;
  height: 50px;
  position: absolute;
  top: 90%;
  left: 106%;
  border: 2px solid #eab543;
}
@keyframes move {
  0% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes rotate {
  0%,
  100% {
    transform: rotate(360deg);
  }
  0% {
    transform: rotate(0deg);
  }
}
</style>
