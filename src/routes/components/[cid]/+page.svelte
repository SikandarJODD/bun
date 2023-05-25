<script>
  import { count } from "./../../../store";

  import { page } from "$app/stores";
  import Codebox from "../../../lib/components/Codebox.svelte";
  $: RouteId = $page.params.cid;
  $: console.log(RouteId);
  $: data = $count[RouteId];
  $: codedesc = $count[RouteId].codedesc;
</script>

<main>
  <div class="box">
    <h1 class="text-3xl font-bold mb-2">{data.title} Component</h1>
    <hr />
    <p>
      <!-- {JSON.stringify(codedesc)} -->
      {#each codedesc as item,index}
        <h2 class="text-2xl font-bold text-sky-300 pl-6 my-2">{index+1}. {item.title}</h2>
        <Codebox >
          {@html item.code}
        </Codebox>
      {/each}
    </p>
  </div>
</main>
