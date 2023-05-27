<script>
  import { count } from "./../../../store";

  import { page } from "$app/stores";
  import Codebox from "$lib/components/Codebox.svelte";
  $: RouteId = $page.params.cid;
  $: console.log(RouteId);
  $: data = $count[RouteId];
  $: codedesc = $count[RouteId].codedesc;
</script>

<main>
  <div class="box ">
    <h1 class="text-2xl md:text-3xl font-bold mb-2">{data.title} Component</h1>
    <hr />
    <div>
      <!-- {JSON.stringify(codedesc)} -->
      {#each codedesc as item, index}
        <h2
          class="text-center md:text-left text-xl md:text-2xl font-bold text-sky-300 pl-6 my-2"
        >
          {index + 1}. {@html item.title}
        </h2>
        <Codebox copyCode={item.code} bgcol={item.bg}>
          <span slot="output">{@html item.code}</span>
        </Codebox>
      {/each}
    </div>
  </div>
</main>

