<script>
  let contentData = [
    {
      name: "Navbar",
      path: "/components/navbars",
    },
    {
      name: "Buttons",
      path: "/components/buttons",
    },
    {
      name: "Footer",
      path: "/components/footer",
    },
    {
      name: "Hero",
      path: "/components/hero",
    },
    {
      name: "Grids",
      path: "/components/grids",
    },
    {
      name: "Cards",
      path: "/components/cards",
    },
    {
      name: `Cards <span class="font-semibold badge badge-primary badge-outline ml-2 p-2 group-hover:bg-gray-950" >Tailwind CSS</span>`,
      path: "/components/tcards",
    },
  ];
</script>

<div class="parent px-5 py-5 md:px-10 md:py-5">
  <div class="div1 md:sticky md:top-20">
    <h1 class="font-bold text-2xl">Components</h1>
    <ul class="box mt-2 cursor-pointer">
      {#each contentData as content, index}
        <li
          class=" m-[6px] rounded-md hover:text-sky-500 hover:bg-base-100 px-3 py-[2px] group"
        >
          <a href={content.path}>
            {index + 1}. <span>{@html content.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="div2  bg-slate-950  md:shadow-2xl md:shadow-gray-900 p-5">
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

  .div2 {
    margin: 0px 30px;
    border-radius: 10px;
    border: 1px solid #fff;
    grid-area: 1 / 2 / 6 / 6;
  }
  @media (max-width: 768px) {
    .parent {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }

    .div1 {
      grid-area: 1 / 1 / 2 / 2;
      height: fit-content;
      width: 100%;
      margin: 0px auto;
    }
    .div2 {
      grid-area: 2 / 1 / 7 / 2;
      height: fit-content;
      width: 100%;
      margin: 20px auto;
    }
  }
</style>
