<script>
  import CodeWriter from "../lib/components/CodeWriter.svelte";
  import Hero from "../lib/components/Hero.svelte";
  import Logo from "$lib/logo.png";
  import { page } from "$app/stores";
  import { Head } from "svead";

  let title = "Home | BunnyUI";
  let image = `https://github.com/SikandarJODD/bun/blob/master/logo.png?raw=true`;
  let description =
    "Build website using SvelteKit and TailwindCSS with BunnyUI components.";
  let url = $page.url.toString();
</script>

<svelte:head>
  <link rel="shortcut icon" href={Logo} type="image/x-icon" />
</svelte:head>
<Head {title} {description} {image} {url} />
<Hero />
<CodeWriter />
<div />
