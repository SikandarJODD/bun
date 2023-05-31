<script>
  import Logo from "$lib/logo.png";
  import { Head } from "svead";
  import { page } from "$app/stores";
  let title = "BunnyUI | About";
  let image = `https://img.freepik.com/premium-vector/website-development-abstract-concept-vector-illustration_107173-25077.jpg?w=200`;
  let description =
    "Build website using SvelteKit and TailwindCSS with BunnyUI components.";
  let url = $page.url.toString();
</script>

<svelte:head>
  <link rel="shortcut icon" href={Logo} type="image/x-icon" />
</svelte:head>
<Head {title} {description} {image} {url} />
<div class="bg-green-400 px-4 py-3 text-gray-900">
  <p class="text-center text-sm font-medium">
    Enjoy BunnyUI ❤️️
    <a
      href="https://github.com/SikandarJODD/bun"
      target="_blank"
      class="inline-block underline"
    >
      Give us Star on Github</a
    >
  </p>
</div>

<div class="bg-white">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="text-center ">
      <div class=" rounded-full">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQGP1dNhTLkZrA/profile-displayphoto-shrink_800_800/0/1662137583464?e=1691020800&v=beta&t=VsLUVmVvzVdtij0f-Qe5KjE_Vq4sYiyQ4Ov_8qkuF6w"
          alt=""
          class="rounded-full h-52 w-52 mx-auto border-2 p-2  border-green-500 hover:scale-110 transition duration-300 ease-in-out mb-4"
        />
      </div>
      <p
        class="mt-1 text-xl font-extrabold text-gray-700  sm:text-5xl sm:tracking-tight lg:text-5xl"
      >
        Developed By <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-600"
          >Sikandar.S.Bhide</span
        >
      </p>
      <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
        BunnyUI is a collection of UI components for SvelteKit and TailwindCSS.
      </p>
    </div>
  </div>
</div>
