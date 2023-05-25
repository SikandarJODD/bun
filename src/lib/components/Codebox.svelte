<script>
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
  <div class="box output_box"><slot /></div>
</div>

<style lang="postcss">
  .box {
    width: 48%;
    height: 250px;
    padding: 20px 5px 8px 19px;
    border: 1px solid #fff;
    margin: 20px auto;
    box-shadow: 7px 7px theme(colors.gray.950), 8px 8px #18f9d4;
  }
  .output_box {
    /* background: #000a1a; */
    background: #021534;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
