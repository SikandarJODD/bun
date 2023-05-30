<script>
</script>

<main>
  <div class="container">
    <div class="box item1" />
    <div class="box item2" />
    <div class="box item3" />
  </div>
</main>

<style>
  .box {
    width: 100px;
    height: 100px;
    margin: 20px 0;
    border-radius: 10px;
    border: 2px solid white;
    background: #020d126c;
  }
  .item1 {
    animation: greeky 4s forwards;
  }
  .item2 {
    animation: greek 4s forwards;
  }
  .item3 {
    animation: gree 4s forwards 0.2s;
  }

  @keyframes greeky {
    0% {
      transform: translate(0, 0);
      width: 100px;
      height: 100px;
    }
    50% {
      top: 0px;
      transform: translate(478px, 0);
      width: 100px;
      height: 100px;
    }
    100% {
      position: relative;
      transform: translate(478px, 0);
      width: 435px;
      height: 60px;
      top: 5px;
      background: #31c39c50;
    }
  }
  @keyframes greek {
    0% {
      transform: translate(0, 0);
      width: 100px;
      height: 100px;
    }
    50% {
      transform: translate(560px, 0);
      width: 100px;
      height: 100px;
    }
    100% {
      transform: translate(560px, 0);
      width: 350px;
      height: 250px;
      background: #24afb157;
    }
  }
  @keyframes gree {
    0% {
      transform: translate(0, 0);
      width: 100px;
      height: 100px;
    }
    50% {
      transform: translate(370px, 0px);
      width: 100px;
      height: 100px;
    }
    70% {
      transform: translate(376px, -100px) rotate(-90deg);
      width: 100px;
      height: 100px;
    }
    100% {
      position: relative;
      transform: translate(385px, -175px) rotate(-90deg);
      width: 253px;
      height: 60px;
      background: #17a6341b;
    }
  }
</style>
