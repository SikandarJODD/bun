<script>
  import "../app.css";
  import Logo from "../logo.png";
  import { page } from "$app/stores";
  $: RouteId = $page.route.id;
  let data = {
    title: "Bunny UI",
    imgSrc: Logo,
    navs: [
      {
        nv: "Home",
        link: "/",
        isLarge: false,
      },
      {
        nv: "Components",
        link: "/components",
        isLarge: true,
        smallnvs: [
          {
            nv: "Button",
            link: "/components/button",
          },
          {
            nv: "Card",
            link: "/components/card",
          },
          {
            nv: "Navbars",
            link: "/components/navbars",
          },
          {
            nv: "Grid Based",
            link: "/components/grid-based",
          },
        ],
        smallnvs2: [
          {
            nv: "Hero Section",
            link: "/components/hero",
          },
          {
            nv: "Footer",
            link: "/components/footer",
          },
        ],
      },
      {
        nv: "About Us",
        link: "/about",
        isLarge: false,
      },
    ],
  };
</script>

<div
  class="navbar bg-gray-900 border-b-2 border-slate-400 md:flex sticky top-0"
  id="nav_height"
>
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <!-- Phone -->
        <li><a href="/">Home</a></li>
        <li><a href="/components">Components</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl" href="/">
      <img src={data.imgSrc} width="45" alt="" />
      <span class="px-2 text-2xl text-sky-500 font-bold">{data.title}</span></a
    >
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <!-- Laptop -->
      {#each data.navs as nav}
        {#if nav.isLarge == true}
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <li tabindex="0">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a>
              {nav.nv}
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                ><path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                /></svg
              >
            </a>
            <ul>
              <div class=" flex flex-row mt-4 bg-base-200 p-2 rounded-xl border-2">
                <ul class="p-2 bg-base-200">
                  {#each nav.smallnvs as smallnv}
                    <li><a href={smallnv.link} class="p-3 hover:text-sky-500">{smallnv.nv}</a></li>
                  {/each}
                </ul>
                <div class="divider divider-horizontal lg:divider-horizontal" />
                <ul class="p-2 bg-base-200">
                  {#each nav.smallnvs2 as smallnv}
                    <li><a href={smallnv.link} class="p-3 hover:text-sky-500">{smallnv.nv}</a></li>
                  {/each}
                </ul>
              </div>
            </ul>
          </li>
        {:else}
          <li>
            <a href={nav.link} class="mx-1" class:act={RouteId == nav.link}
              >{nav.nv}</a
            >
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</div>
<slot />

<style lang="postcss">
  .act {
    color: rgb(17, 170, 252);
    background: #46617dc4;
  }
  #nav_height {
    min-height: 60px;
    height: 60px !important;
  }
</style>
