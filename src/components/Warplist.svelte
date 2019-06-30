<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let day = 0;
  export let urls = [];
</script>

<ul class="warplist" transition:fade>
  <strong>— {new Date(+day).toLocaleDateString()} —</strong>
  {#each urls as url, i}
    <li transition:fade>
      <a class="warp" href={url}>{url}</a>
      <span
        class="delete"
        on:click={() => dispatch('delete', { day: day, index: i })}>
        ❌
      </span>
    </li>
  {/each}
</ul>
