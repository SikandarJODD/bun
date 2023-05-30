<script>
  import { fade, fly, scale } from "svelte/transition";
  let cdata = [
    {
      ctitle: "Rome",
      subtitle: "Italy",
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80",
    },
    {
      ctitle: "Delhi",
      subtitle: "India",
      img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
      ctitle: "Paris",
      subtitle: "France",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    },
  ];
  let i = 0;
  setInterval(() => {
    i++;
    if (i == cdata.length) {
      i = 0;
    }
  }, 2000);
</script>

<a
  href="/"
  class="relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat w-80 md:w-96 h-52 md:h-64 shadow-gray-600 shadow-md"
  style="background-image: url({cdata[i].img});"
>
  <div class="absolute inset-0 bg-black/25" />

  <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
    <div class="sm:pt-18 pt-32 text-white lg:pt-40">
      {#key i}
        <h3 in:scale class="text-xl font-bold sm:text-2xl">{cdata[i].ctitle}</h3>
      {/key}
      {#key i}
        <p class="text-sm" in:fade>{cdata[i].subtitle}</p>
      {/key}
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
</a>
