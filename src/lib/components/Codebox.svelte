<script>
  import { copy } from "svelte-copy";
  export let copyCode = "t";
  export let bgcol;
  import { fade, scale, fly } from "svelte/transition";
  import CopyIcon from "$lib/imgs/copy.png";
  import CheckIcon from "$lib/imgs/check.png";
  let scrData = [
    { smdata: "<script>", istrue: false, ispal: false },
    {
      smdata: " import Navbar from '$lib/components/Navbar';",
      istrue: false,
      ispal: true,
    },
    {
      smdata: " import Footer from '$lib/components/Navbar';",
      istrue: false,
      ispal: true,
    },
    { smdata: "< /script>", istrue: false, ispal: false },
    { smdata: " <main>", istrue: false, ispal: false },
    { smdata: "<Navbar />", istrue: false, ispal: true },
    { smdata: "<slot />", istrue: false, ispal: true },
    { smdata: "<Footer/>", istrue: false, ispal: true },
    { smdata: "< /main>", istrue: false, ispal: false },
  ];
  $: visible = false;
  $: realIcon = CopyIcon;
  // style="background: {bgcol} "
</script>

<div class="flex flex-wrap flex-row">
  <!-- <div class="box mockup-code">
    {#each scrData as item, index}
      <div
        on:mouseenter={() => (item.istrue = true)}
        on:mouseleave={() => (item.istrue = false)}
        class="hover:bg-base-100 rounded-md px-2 {item.ispal === true
          ? 'hover:text-sky-500'
          : ''} "
      >
        <code
          >{index + 1}.
          <span class="{item.ispal === true ? 'pl-4 ' : 'pl=0'} "
            >{item.smdata.replace(" ", "")}</span
          ></code
        >
      </div>
    {/each}
  </div> -->
  <div
    class="box output_box relative "
    style="background: {bgcol} "
    on:mouseenter={() => (visible = true)}
    on:mouseleave={() => (visible = false)}
  >
    <div>
      <slot name="output" />
    </div>
    {#if visible}
      {#key visible}
        <div
          class="icon_box absolute top-3 right-3 z-10"
          transition:scale={{ duration: 300 }}
        >
          {#key realIcon}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img
              src={realIcon}
              alt="Copy - Code"
              width="25"
              class="   active:scale-110 cursor-pointer transition-all ease-out"
              in:fly={{ x: -10, duration: 500 }}
              on:click={() => {
                copyCode = "Copied";
                realIcon = CheckIcon;
                setTimeout(() => {
                  copyCode = "Copy";
                  realIcon = CopyIcon;
                }, 1500);
              }}
              use:copy={copyCode}
            />
          {/key}
        </div>
      {/key}
    {/if}
  </div>
</div>

<style lang="postcss">
  .box {
    /* padding: 50px 50px; */
    border: 1px solid #fff;
    margin: 20px auto;
    /* box-shadow: 7px 7px theme(colors.gray.950), 8px 8px #18f9d4; */
    /* background: rgba(18, 38, 83, 0.538); */
    background: linear-gradient(
      -35deg,
      rgba(23, 45, 97, 0.681) 0%,
      rgba(8, 28, 61, 0.54) 100%
    );
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    /* background: rgba(13, 31, 73, 0.538); */
    /* filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25)); */
    
  }
  @media only screen and (max-width: 480px) {
    .box {
      border: 1px solid #fff;
      box-shadow: none !important;
      padding: 45px 20px;
      width: 100%;
      min-height: 190px;
      /* max-height: 600px; */
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1540px) {
    .box {
      padding: 50px;
      min-width: 43%;
      max-width: 100%;
      min-height: 250px;
      max-height: 570px;
    }
  }
  .output_box {
    /* background: #000a1a; */
    /* background: #021534; */
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
