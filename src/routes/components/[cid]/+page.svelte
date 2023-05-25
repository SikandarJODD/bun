<script>
  import { count } from "./../../../store";

  import { page } from "$app/stores";
  $: RouteId = $page.params.cid;
  $: console.log(RouteId);
</script>

<main>
  {JSON.stringify($count[RouteId])}
</main>
