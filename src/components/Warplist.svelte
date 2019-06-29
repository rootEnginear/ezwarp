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
      <a
        class="delete"
        href="#delete"
        on:click={() => dispatch('delete', { day: day, index: i })}>
        ❌
      </a>
    </li>
  {/each}
</ul>
