<script>
  import { fade, fly, scale } from "svelte/transition";
  let cdata = [
    {
      ctitle: "Svelte is the Best Framework",
      subtitle: "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser",
      img: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      ctitle: "I Love Svelte ❤️",
      subtitle: "Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      ctitle: "Is there anything Good then Svelte",
      subtitle: "most loved web framework with the most satisfied developers drawing the most interest in learning it",
      img: "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
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

<article
  class="overflow-hidden rounded-lg transition hover:shadow-lg w-full md:w-96 shadow-gray-600 shadow-md"
>
  <img alt="Office" src={cdata[i].img} class="h-56 w-full object-cover" />

  <div class=" p-4 sm:p-6 bg-green-300">
    <time datetime="2022-10-10" class="block text-xs text-gray-500">
      10th Oct 2022
    </time>

    <a href="/">
      <h3 class="mt-0.5 text-lg text-gray-900 font-bold">
        {cdata[i].ctitle}
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      {cdata[i].subtitle}
    </p>
  </div>
</article>
