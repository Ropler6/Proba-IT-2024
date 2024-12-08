<script lang="ts">
  import "/src/style.css";
  import Header from "$lib/components/Header.svelte";
  import Recipe from "$lib/components/Recipe.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  const recipes = data.recipes;
</script>


<Header/>
<main>
  <div class="search-filter">
    <input type="text" name="search" placeholder="Search">
    <div class="top-buttons">
      <button>Filter</button>
      <button>Sort</button>
    </div>
  </div>

  <div class="recipes">
    {#each recipes as recipe}
      <Recipe name={recipe.name} author={recipe.author} rating={recipe.rating}/>
    {/each}
  </div>
</main>


<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    background: url("/Background.png");
    background-size: cover;
  }

  .search-filter {
    display: flex;
    flex-direction: column;
    padding: var(--size-xxl);
    gap: var(--size-xs);
  }

  input {
    width: max(15em, 30vw);
    padding: var(--size-xxs);
    border: 1px solid gray;
    border-radius: 5px;
    color: black;
  }

  .top-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .recipes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: var(--size-xxl);
    justify-content: center;
    gap: var(--size-l);
  }
</style>
