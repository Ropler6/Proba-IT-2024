<script lang="ts">
  import "/src/style.css";
  import Header from "$lib/components/Header.svelte";
  import Recipe from "$lib/components/Recipe.svelte";
  import type { PageData } from "./$types";
  import type { Recipe as Recipe_T } from "$lib/ts/datatypes";

  let choosingSort = $state(false);
  let choosingFilter = $state(false);

  let { data }: { data: PageData } = $props();
  let dataRecipes = data.recipes as Recipe_T[] || [];

  let filters = $state([true, true, true, true, true]);
  let ascendingSort = $state(0);
  
  let recipes = $derived(dataRecipes.filter(x => filters[x.rating - 1] !== false)
                                    .sort((a, b) =>
                                          (b.rating - a.rating) * ascendingSort
                                          + (a.rating - b.rating) * (1 - ascendingSort)
                                    )
                        );
  
</script>


<!-- peak quality code <3 -->
<Header/>
<main>
  <div class="search-filter">
    <input type="text" name="search" placeholder="Search">
    <div class="top-buttons">
      <div class="filter">
        <button onclick={() => choosingFilter = !choosingFilter}>Filter</button>
        {#if choosingFilter}
          <div class="options">
            <div class="option">
              <label for="5-star">*****</label>
              <input type="checkbox" name="5-star" bind:checked={filters[4]}>
            </div>
            <div class="option">
              <label for="4-star">****</label>
              <input type="checkbox" name="4-star" bind:checked={filters[3]}>
            </div>
            <div class="option">
              <label for="3-star">***</label>
              <input type="checkbox" name="3-star" bind:checked={filters[2]}>
            </div>
            <div class="option">
              <label for="2-star">**</label>
              <input type="checkbox" name="2-star" bind:checked={filters[1]}>
            </div>
            <div class="option">
              <label for="1-star">*</label>
              <input type="checkbox" name="1-star" bind:checked={filters[0]}>
            </div>
          </div>
        {/if}
      </div>

      <div class="sort">
        <button onclick={() => choosingSort = !choosingSort}>Sort</button>
        {#if choosingSort}
          <div class="options">
            <div onclick={() => ascendingSort = 1}>Top rated</div>
            <div onclick={() => ascendingSort = 0}>Worst rated</div>
          </div>
        {/if}
      </div>
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

  .options {
    display: flex;
    flex-direction: column;
  }

  .filter, .sort {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 7em;
  }

  input[type="checkbox"] {
    width: min-content;
  }

  .option {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
</style>
