<script>
  import { copy } from "svelte-copy";
  import { carData } from "../../../store";
  import CardSlide from "$lib/components/tcards/CardSlide.svelte";
  import Card1 from "$lib/components/tcards/Card1.svelte";
  import Cardblog from "$lib/components/tcards/Cardblog.svelte";
  let cardData = [
    {
      title: "Simple Card Carousel",
      component: Card1,
      code: $carData.code1,
      copyText: "Copy Code",
    },
    {
      title: "Card Carousel",
      component: CardSlide,
      code: $carData.code2,
      copyText: "Copy Code",
    },
    {
      title: "Blog Card",
      component: Cardblog,
      code: $carData.code3,
      copyText: "Copy Code",
    },
  ];
</script>

<main>
  <h1 class="text-sky-200 text-xl md:text-3xl font-bold mb-2">
    Tailwind Base <span>Cards </span>
  </h1>
  <hr />
  <!-- <h2 class=" text-xl md:text-2xl font-bold mb-2">1.Simple Card</h2>
    <div class="copy_box">
      <div class="output_box">
        <Card1 />
      </div>
    </div> -->
  {#each cardData as item, index}
    <div class="my-5">
      <div class="flex items-center my-2">
        <h2 class=" text-xl md:text-2xl font-bold mb-2">
          {index + 1}.{item.title}
        </h2>
        <button
          on:click={() => {
            item.copyText = "Copied";
            setTimeout(() => {
              item.copyText = "Copy Code";
            }, 1500);
          }}
          class="btn btn-outline border-green-400 text-green-500 active:bg-green-500 active:text-gray-900 hover:bg-green-500 hover:text-gray-900 ml-3 btn-sm capitalize"
          use:copy={item.code}>{item.copyText}</button
        >
      </div>
      <div class="copy_box">
        <div class="output_box">
          <svelte:component this={item.component} />
        </div>
      </div>
    </div>
  {/each}
</main>

<style>
  .copy_box {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  .output_box {
    padding: 1rem;
    display: flex;
    justify-content: center;
    /* width: fit-content; */
  }
</style>
