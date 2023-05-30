<script>
  import CodeWriter from "../lib/components/CodeWriter.svelte";
  import Hero from "../lib/components/Hero.svelte";
  // import logo from "../lib/assets/logo.svg";
  import logo from "$lib/logo.png";
</script>

<svelte:head>
  <title>Home Page</title>
  <link rel="shortcut icon" href={logo} type="image/x-icon" />
  <link rel="shortcut icon" href="%sveltekit.assets%/logo.png" type="image/x-icon" />
  <meta name="og:image" content={logo} />
  <meta name="og:title" content="Home Page | Bunny UI" />
  <meta name="description" content="Copy Paste Components" />
</svelte:head>
<Hero />
<CodeWriter />
