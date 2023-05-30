import { writable } from "svelte/store";
export const count = writable({
  buttons: {
    title: "Button",
    codedesc: [
      {
        title: "Classic button",
        bg: "#b8fffe",
        code: `
                <button  style="padding:10px;margin:0px;border:2px solid #000;border-radius:5px;background-color:#fff;color:#000;font-size:20px;box-shadow:4px 4px 0px #000a19;">Submit</button>
                `,

      },
      {
        title: "Primary button",
        bg: "#b8fffe",
        code: `<button class="btnx basic">Download </button>  
                <style>
                    .btnx {
                        padding: 10px;
                        border: 2px solid black;
                        border-radius: 5px;
                        background-color: #f1f1f1;
                        font-size: 20px;
                        cursor: pointer;
                        color: black;
                        transition: all 0.2s ease-in-out;
                        transform: scale(1);
                    }
                    .btnx:active {
                      border: 2px solid black;
                      transition: all 0.2s ease-in-out;
                      transform: scale(0.83);
                    } 
         
                    .basic {
                        background-color: #65cffd;
                    }
                    .basic:hover {
                        transform: translate(-3px, -3px);
                        box-shadow: 4px 4px #002231;
                        transition: all 0.2s ease-in-out;
                    }
                </style>`,

      },
      {
        title: "Secondary button",
        bg: "#b8fffe",
        code: `<button class="btnx sv_animate">Download </button>  
                <style>
                    .btnx {
                        padding: 10px;
                        border: 2px solid black;
                        border-radius: 5px;
                        background-color: #f1f1f1;
                        font-size: 20px;
                        cursor: pointer;
                        color: black;
                        transition: all 0.2s ease-in-out;
                        transform: scale(1);
                    }
                    .btnx:active {
                      border: 2px solid black;
                      transition: all 0.2s ease-in-out;
                      transform: scale(0.83);
                    } 
         
                    .sv_animate {
                        background-color: #65fd8b;
                    }
                    .sv_animate:hover {
                        transform: translate(-3px, -3px);
                        box-shadow: 4px 4px #002b1b;
                        transition: all 0.2s ease-in-out;
                    }
                </style>`,

      },
      {
        title: `Tertiary button  <span class="badge badge-primary badge-outline p-3 mx-1" > daisyUI </span>  <span class="badge badge-primary badge-outline p-3 mx-1" > Tailwind CSS </span> `,
        code: `<button class="btn btn-outline hover:bg-sky-500">Cool Stuff </button>`,
        bg: "#021534",
      }

    ]
  },
  cards: {
    title: "Cards",
    codedesc: [
      {
        title: `Simple Card <span class="badge badge-accent badge-outline p-3 mx-1" > daisyUI </span>  <span class="badge badge-primary badge-outline p-3 mx-1" > Tailwind CSS </span>`,
        code: `<div class="card  
                 card-side bg-base-100 shadow-xl group transition-all duration-100 border flex flex-col md:flex-row">
                <figure><img src="https://i.pinimg.com/564x/58/cf/ee/58cfee91db3873880fd5a183ff3a24af.jpg" class="w-full md:w-56 rounded-t-2xl md:rounded-t-none rounded-r-2xl md:rounded-r-none  " alt="Movie"/></figure>
                <div class="card-body group-hover:bg-base-200 rounded-r-2xl rounded-l-2xl transition-all duration-100">
               
                  <h2 class="card-title transition-all duration-100 group-hover:text-sky-500 md:text-3xl text-2xl font-bold">Aesthetics UI Card</h2>
                  <div>
                  <span class="badge badge-primary badge-outline p-3  group-hover:bg-primary group-hover:text-gray-900" > daisyUI </span>  <span class="badge badge-primary badge-outline p-3 mx-1 group-hover:bg-primary group-hover:text-gray-900" > Tailwind CSS </span>
                  </div>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>`,

      }, {
        title: `Secondary button <span class="badge badge-accent badge-outline p-3 mx-1" > daisyUI </span>  <span class="badge badge-primary badge-outline p-3 mx-1" > Tailwind CSS </span>`,
        code: `<div class="card md:w-96  bg-base-100 transition-all duration-100 
              shadow-xl group">
                <figure><img src="https://i.pinimg.com/564x/70/0e/7f/700e7ff79fa9f3d94ea5fb2ea1e18182.jpg" alt="Shoes"  /></figure>
                <div class="card-body group-hover:border-sky-500 border-b-2 border-l-2 border-r-2 rounded-b-xl">
                  <h2 class="card-title group-hover:text-sky-400 font-bold md:text-3xl text-2xl">Title of Card</h2>
                  <p>Hover over Card to See the Change. Your Welcome </p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary btn-outline group-hover:bg-primary group-hover:text-gray-900 ">Buy Now</button>
                  </div>
                </div>
              </div>`,
      },
      {
        title: `Card - background image <span class="badge badge-primary badge-outline p-3 mx-1" > Tailwind CSS </span>`,
        code: `<a
        href="#"
        class="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat w-80 md:w-96 h-52 md:h-64"
      >
        <div class="absolute inset-0 bg-black/25"></div>
      
        <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
          <div class="sm:pt-18 pt-32 text-white lg:pt-40">
            <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>
      
            <p class="text-sm">Italy</p>
          </div>
      
          <span
            class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
          >
            4.5
      
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-yellow-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </span>
        </div>
      </a>`
      }
    ]
  },
});
export const dvnvs = writable({
  nv1: `
  <` +
    `script>
    let data = [
      {
        nv: "Home",
        path: "/",
      },
      {
        nv: "products",
        path: "/products",
      },
      {
        nv: "about",
        path: "/about",
      },
    ];
  <` +
    `/script>
  
  <div class="navbar bg-base-100">
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
        <ul
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <!-- Phone  View  -->
          {#each data as item}
            <li><a href={item.path} class="capitalize">{item.nv}</a></li>
          {/each}
        </ul>
      </div>
      <a href="/" class="btn btn-ghost capitalize text-xl">daisyUI</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 ">
        <!-- Laptop View  -->
        {#each data as item}
          <li  ><a href={item.path} class="capitalize mx-1" >{item.nv}</a></li>
        {/each}
      </ul>
    </div>
  </div>
  </slot>
  `,
  nv2: `<scrip>
  import { page } from "$app/stores";
  $: console.log($page);
  $: pathN = $page.route.id;
  let data = [
    {
      nv: "Home",
      path: "/",
      svgCode: `+ `      <svg
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
      >`+ `,
    },
    {
      nv: "products",
      path: "/products",
      svgCode: `+ `<svg
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
      >`+ `,
    },
    {
      nv: "about",
      path: "/about",
      svgCode: `+ ` <svg
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
      >`+ `,
    },`+ `
  ];
<`+ `/script>

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
</slot>
`
})