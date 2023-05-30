<script>
  import Card1 from "$lib/components/tcards/Card1.svelte";
  let cardData = [
    {
      title: "Simple Card",
      component: Card1,
    },
    {
        title:"Card Carousel"
    }
  ];
</script>

<main>
  <h1 class="text-sky-200 text-xl md:text-3xl font-bold mb-2">
    Tailwind Base <span>Cards </span>
  </h1>
  <hr />
  <div class="main_box mt-2">
    <h2 class=" text-xl md:text-2xl font-bold mb-2">1.Simple Card</h2>
    <div class="copy_box">
      <div class="output_box">
        <Card1 />
      </div>
    </div>
  </div>
</main>

<style>
  .copy_box {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    border-radius: 0.5rem;
  }
  .output_box {
    padding: 1rem;
    /* width: fit-content; */
  }
</style>
