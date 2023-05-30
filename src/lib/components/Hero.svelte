<script>
  import { fade, fly, scale } from "svelte/transition";
  let visible = false;
  setTimeout(() => {
    visible = true;
  }, 800);

  let x = 0,
    y = 0;
  $: console.log(x);
</script>

<svelte:window bind:innerWidth={x} />

<section
  class="bg-gray-50 relative"
  style="background: url(https://img.freepik.com/free-vector/abstract-3d-perspective-indoor-wireframe-vector-design_1017-39916.jpg?w=1060&t=st=1685444455~exp=1685445055~hmac=84c2ef14a8623213a1e5eabfc3e395a0e511fbbf163fb5b7a08f2c4dd73327ac) no-repeat center ; background-size:cover; "
>
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    {#if visible && x >= 1220}
      {#key visible}
        <div
          class="dm absolute hidden lg:block border-2 w-[25%] left-10 h-[60%] border-gray-900 top-24 rounded-lg bg-yellow-300 shadow-lg shadow-gray-400"
          transition:fly={{ y: 200, duration: 800, delay: 500 }}
        >
          <div
            class="absolute box border-2 w-[75%] h-10 top-5 left-6 border-gray-900 rounded-lg bg-blue-300"
            transition:fly={{ x: -50, duration: 500, delay: 800 }}
          />
          <div
            class="absolute box border-2 w-10 h-10 top-5 left-[85%] border-gray-900 rounded-full bg-blue-300"
            transition:fly={{ x: 50, duration: 500, delay: 800 }}
          />
          <div
            class="absolute box border-2 w-[86%] h-[70%] top-20 left-6 border-gray-900 rounded-lg bg-emerald-300 flex justify-center items-center overflow-hidden"
            transition:fly={{
              y: 50,
              duration: 900,
              delay: 1200,
            }}
          >
            <img
              src="https://i.pinimg.com/564x/af/15/f8/af15f8c0a79e01467557e03916a56f48.jpg"
              alt="fifi"
              width="340"
              height="390"
            />
          </div>
        </div>
      {/key}
    {/if}

    <div class="mx-auto max-w-xl text-center">
      <h1
        class="text-3xl cursor-pointer font-extrabold sm:text-5xl text-sky-600 py-10"
      >
        <span
          class="md:border-2 border-gray-900 md:px-5 md:py-2 md:bg-sky-100 rounded-xl shadow_class duration-150"
        >
          Bunny UI
        </span>
        <strong class="font-extrabold text-gray-900 sm:block md:mt-10">
          Build Valuable Project
        </strong>
      </h1>

      <p class="mt-4 sm:text-xl/relaxed text-gray-400">
        This Components are made with <span class="text-orange-500 opacity-80">
          Svelte</span
        >. It's easy to use and customize.
        <strong class="text-gray-500">Just Copy Paste</strong> the Components.
      </p>

      <div class="mt-20 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border-sky-500 border-2 text-gray-900 px-12 py-3 text-sm font-medium shadow hover:bg-sky-200 duration-100 sm:w-auto"
          href="/get-started"
        >
          Explore
        </a>

        <a
          class="block w-full rounded px-12 py-3 border-2 text-sm font-medium text-sky-900 shadow hover:border-2 hover:border-gray-900 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/about"
        >
          Components
        </a>
      </div>
    </div>
    {#if visible && x >= 1220}
      {#key visible}
        <div
          class="absolute hidden lg:block border-2 w-[25%] right-10 h-[60%] border-gray-900 top-24 rounded-lg bg-yellow-300 shadow-lg shadow-gray-500"
          transition:fly={{ y: 200, duration: 800, delay: 500 }}
        >
          <div
            class="absolute box border-2 w-[75%] h-10 top-5 left-6 border-gray-900 rounded-lg bg-blue-300"
            transition:fly={{ x: -50, duration: 500, delay: 800 }}
          />
          <div
            class="absolute box border-2 w-10 h-10 top-5 left-[85%] border-gray-900 rounded-full bg-blue-300"
            transition:fly={{ x: 50, duration: 500, delay: 800 }}
          />
          <div
            class="absolute box border-2 w-[86%] h-[70%] top-20 left-6 border-gray-900 rounded-lg bg-emerald-300 text-gray-900 p-4 font-mono"
            transition:fly={{
              y: 50,
              duration: 900,
              delay: 1200,
            }}
          >
            <div class="mockup-code p-4 bg-gray-900">
              <pre class="mb-1 hover:bg-blue-950 rounded-md"><code
                  >Install <span class="text-orange-400" >SvelteKit</span></code
                ></pre>
              <pre class="mb-1 hover:bg-blue-950 rounded-md"><code
                  >npm svelte-add tailwindcss</code
                ></pre>
              <pre class="mb-1 hover:bg-blue-950 rounded-md"><code
                  >npm i daisyui</code
                ></pre>
              <pre class="mb-1 hover:bg-blue-950 rounded-md text-success"><code
                  >Just Copy Paste Components</code
                ></pre>
            </div>
          </div>
        </div>
      {/key}
    {/if}
  </div>
</section>

<style>
  .dm {
    background: rgba(235, 226, 51, 0.458);
    
  }
  @media (min-width: 640px) {
    .shadow_class {
      transition: all 0.3s ease;
      box-shadow: 5px 5px white, 7px 7px rgb(0, 16, 34);
    }
  }
</style>
