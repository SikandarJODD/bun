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
    { smdata: "<slot />", istrue: true, ispal: true },
    { smdata: "<Footer/>", istrue: false, ispal: true },
    { smdata: "< /main>", istrue: false, ispal: false },
  ];
  $: scr5 = scrData[5].istrue;
  $: scr6 = scrData[6].istrue;
  $: scr7 = scrData[7].istrue;
</script>

<div class="flex flex-wrap flex-row">
  <div class="box mockup-code">
    {#each scrData as item, index}
      <div
        on:mouseenter={() => (item.istrue = true)}
        on:mouseleave={() => (item.istrue = false)}
        class="hover:bg-base-100 {item.istrue === true
          ? 'bg-base-100'
          : ''}  rounded-md px-2 {item.ispal === true
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
  </div>
  <div class="box">
    <div class="sm_box">
      <div class="header_content duration-100 {scr5 === true ? 'active' : ''} ">
        {scr5 === true ? "Navbar " : ""}
      </div>
      <div class="slot_content {scr6 === true ? 'active' : ''}">
        {@html scr6 === true ? `Sikandar Bhide ` : ""}
      </div>
      <div class="footer_content {scr7 === true ? 'active' : ''}">
        {@html scr7 === true ? "Footer" : ""}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .box {
    width: 40%;
    margin: 70px auto;
    padding: 20px 23px;
    border: 1px solid #ffffff;
    box-shadow: 7px 7px theme(colors.gray.900), 8px 8px #1fbcfa;
  }
  @media (max-width: 768px) {
    .box {
      width: 85%;
    }
  }
  .sm_box {
    width: 100%;
    height: 100%;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background: #56575824;
  }
  .header_content {
    width: 95%;
    height: 50px;
    /* background: #2889ffe0; */
    background: #69a9f8e0;
    border-radius: 10px;
    margin: 15px auto;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .slot_content {
    width: 95%;
    height: 100px;
    background: #3efe9be0;
    border-radius: 10px;
    margin: 15px auto;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .footer_content {
    width: 95%;
    height: 50px;
    background: theme(colors.yellow.300);
    border-radius: 10px;
    margin: 15px auto;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }
  .active {
    background: rgb(64, 193, 249);
    color: #ffffff;
    border: 3px solid #ffffff;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
