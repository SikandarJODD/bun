<script>
  import { fade, fly, scale } from "svelte/transition";
  let visible = false;
  setTimeout(() => {
    visible = true;
  }, 800);
</script>

<section class="bg-gray-50 relative -z-10">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    {#if visible}
      {#key visible}
        <div
          class="absolute hidden md:block border-2 w-1/4 left-10 h-3/5 border-gray-900 top-24 rounded-lg bg-yellow-300"
          transition:fly={{ y: 200, duration: 800, delay: 500 }}
        >
          <div
            class="absolute box border-2 w-3/4 h-10 top-5 left-6 border-gray-900 rounded-lg bg-blue-300"
            transition:fly={{ x: -50, duration: 500, delay: 800 }}
          />
          <div
            class="absolute box border-2 w-10 h-10 top-5 left-[315px] border-gray-900 rounded-full bg-blue-300"
            transition:fly={{ x: 50, duration: 500, delay: 800 }}
          />
          <div
            class="absolute box border-2 w-[328px] h-48 top-20 left-6 border-gray-900 rounded-lg bg-emerald-300"
            transition:fly={{
              y: 50,
              duration: 900,
              delay: 1200,
            }}
          />
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

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border-sky-500 border-2 text-gray-900 px-12 py-3 text-sm font-medium shadow hover:bg-sky-100 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
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
  </div>
</section>

<style>
  @media (min-width: 640px) {
    .shadow_class {
      transition: all 0.3s ease;
      box-shadow: 5px 5px white, 7px 7px rgb(0, 16, 34);
    }
  }
</style>
