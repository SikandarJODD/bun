<script>
  import { copy } from "svelte-copy";
  import Navbar from "$lib/components/Navbar.svelte";
  import Navbar2 from "$lib/components/Navbar2.svelte";
  import { dvnvs } from "../../../store";

  console.log($dvnvs.nv1);
  let dataNavs = [
    {
      title: "Simple Navabr",
      component: Navbar,
      code: $dvnvs.nv1,
      copyText: "Copy Code",
    },
    {
      title: "Simple Navabr with Bottom Navigation",
      component: Navbar2,
      code: `pop`,
      copyText: "Copy Code",
    },
  ];
  let cptext = "copy";
</script>

<main>
  {#each dataNavs as item, index}
    <div class="flex items-center">
      <h1 class="text-sky-300 text-xl md:text-xl font-bold">
        {index + 1}. {item.title}
      </h1>
      <button
        use:copy={item.code}
        class="mx-4 btn btn-outline btn-success btn-sm capitalize"
        on:click={() => {
          item.copyText = "copied";
          setTimeout(() => {
            item.copyText = "Copy Code";
          }, 1000);
        }}>{item.copyText}</button
      >
    </div>

    <div class="big_box">
      <div class="box">
        <svelte:component this={item.component} />
      </div>
    </div>
  {/each}
</main>

<style>
  .box {
    padding: 20px;
    overflow: hidden;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 10px;
  }
</style>
