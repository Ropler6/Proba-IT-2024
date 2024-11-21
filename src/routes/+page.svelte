<script lang="ts">
  import Header from "$lib/components/Header.svelte";

  //TBA
  let recipes: string[] = [];
</script>


<Header/>
<div class="big-logo"></div>
<div class="recipes">
  <h2>Top rated recipes</h2>

  <div class="recipe-list">
    {#each recipes as recipe}
        <div>{recipe}</div> 
    {/each}
  </div>
</div>


<style>
  .recipes {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .recipe-list {
    display: flex;
    flex-direction: row;
  }

  .big-logo {
    background: center / contain no-repeat url("");
    margin: var(--size-m);
    width: 100vw;
    height: 300px;
  }
</style>
