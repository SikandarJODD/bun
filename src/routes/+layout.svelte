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
            link: "/components/buttons",
          },
          {
            nv: "Card",
            link: "/components/cards",
          },
          {
            nv: "Navbars",
            link: "/components/navbars",
          },
          {
            nv: "Grid Based",
            link: "/components/grids",
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
        nv: "Custom",
        link: "/custom",
        isLarge: false,
      },
      {
        nv: "About Us",
        link: "/about",
        isLarge: false,
      },
    ],
  };
  let mint = true;
</script>

<div
  class="navbar bg-gradient-to-r from-gray-800 via-sky-900 border-b-2 to-sky-700"
  id="nav_height"
>
  <div class="navbar-start">
    <div class="dropdown">
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
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl text-sky-400 font-bold"
      >{data.title}</a
    >
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 z-20">
      {#each data.navs as item}
        {#if item.isLarge}
          <li tabindex="0">
            <details bind:open={mint}>
              <summary>{item.nv}</summary>
              <ul class="p-2 border-2 bg_col">
                {#each item.smallnvs as snv}
                  <li>
                    <a
                      href={snv.link}
                      on:click={() => {
                        mint = false;
                      }}>{snv.nv}</a
                    >
                  </li>
                {/each}
              </ul>
            </details>
          </li>
        {:else}
          <li>
            <a href={item.link} class:act={RouteId === item.link}>{item.nv}</a>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</div>
<slot />

<!-- Hello maintain -->

<style lang="postcss">
  .bg_col {
    background: #022e4bc8;
  }
  ul > li {
    font-size: 1rem;
    color: rgb(235, 233, 233);
  }
  .act {
    color: rgb(17, 170, 252);
    background: #46617dc4;
    border-radius: 4px;
  }
  #nav_height {
    min-height: 60px;
    height: 60px !important;
  }
</style>
