<script>
  import { page } from "$app/stores";
  $: console.log($page);
  $: pathN = $page.route.id;
  let data = [
    {
      nv: "Home",
      path: "/",
      svgCode: `      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        /></svg
      >`,
    },
    {
      nv: "products",
      path: "/products",
      svgCode: `<svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >`,
    },
    {
      nv: "about",
      path: "/about",
      svgCode: ` <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        /></svg
      >`,
    },
  ];
</script>

<div class="navbar bg-base-100 hidden md:flex">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost capitalize text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <!-- Laptop View  -->
      {#each data as item}
        <li><a href={item.path} class="capitalize mx-1">{item.nv}</a></li>
      {/each}
    </ul>
  </div>
</div>
<div class="btm-nav md:hidden">
  {#each data as item}
    <a href={item.path}>
      <button class={pathN === item.path ? "active" : ""}>
        {@html item.svgCode}
      </button>
    </a>
  {/each}
</div>
