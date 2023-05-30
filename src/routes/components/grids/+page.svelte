<script>
  import { copy } from "svelte-copy";
  import { carData } from "../../../store";
  import CardSlide from "$lib/components/tcards/CardSlide.svelte";
  import Card1 from "$lib/components/tcards/Card1.svelte";
  import Cardblog from "$lib/components/tcards/Cardblog.svelte";
  import GridsDesign from "$lib/components/gridsLayouts/GridsDesign.svelte";
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
  <h2 class=" text-xl md:text-2xl font-bold my-5 text-center">Grid Layout</h2>
  <div class="copy_box back_col">
    <div class="output_box relative">
      <div class="img_box">
        <img
          src="https://img.freepik.com/free-vector/pastel-memphis-instagram-ad-background_53876-98941.jpg?w=740&t=st=1685439482~exp=1685440082~hmac=6f5cb3bb685529d8e1d95eae8e1c4245f4a07e844143b407f3cd0f68e0c5d13c"
          alt="grid"
          width="360"
          class="absolute top-8 duration-300 object-cover rounded-lg shadow-xl"
        />
      </div>
      <GridsDesign />
    </div>
  </div>
  <!-- {#each cardData as item, index}
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
  {/each} -->
</main>

<style>
  .copy_box {
    background-color: #ffffff;
    display: flex;
    border-radius: 0.5rem;
    padding: 0 4%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    max-height: 420px;
  }
  .output_box {
    padding: 1rem;
    display: flex;
    /* width: fit-content; */
  }
  .back_col {
    background: rgb(16, 43, 75);
  }
</style>
