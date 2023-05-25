<script>
  let contentData = ["Footer", "Header", "Main", "Nav", "Section"];
</script>

<div class="parent px-10 py-5">
  <div class="div1">
    <h1 class="font-bold text-2xl">Components</h1>
    <ul class="box mt-2 cursor-pointer">
      {#each contentData as content, index}
        <li
          class=" m-[6px] rounded-md hover:text-sky-500 hover:bg-base-100 px-3 py-[2px]"
        >
          {index + 1}. <span>{content}</span>
        </li>
      {/each}
    </ul>
  </div>
  <div class="div2 bg-gray-950">
    <slot />
  </div>
</div>

<style>
  .parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .div1 {
    padding: 10px 15px;
    height: 85vh;
    grid-area: 1 / 1 / 6 / 2;
    background-color: #000a1a;
    border-radius: 14px;
    border: 1px solid #fff;
  }
  .box {
    display: flex;
    flex-direction: column;
  }
  .div2 {
    margin: 0px 30px;
    border-radius: 10px;
    border: 1px solid #fff;
    grid-area: 1 / 2 / 6 / 6;
  }
</style>
