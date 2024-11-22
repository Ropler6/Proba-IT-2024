<script lang="ts">
  import "/src/style.css"
  import Header from "$lib/components/Header.svelte";
  import Recipe from "$lib/components/Recipe.svelte";

  //TBA
  let recipes: string[] = ["Pateu"];
</script>


<Header/>
<div class="big-logo"></div>

<div class="recipes">
  <h2 style:color={"var(--tertiary-color)"}>Top rated recipes</h2>

  <div class="recipe-list">
    {#each recipes as recipe}
      <Recipe recipeName={"Pateu"} author={"Student"} rating={5}/>
    {/each}
  </div>
</div>


<style>
  .recipes {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary-color);
  }

  .recipe-list {
    display: flex;
    flex-direction: row;
    gap: var(--size-xxl);
  }

  .big-logo {
    background: center / contain no-repeat url("");
    margin: var(--size-m);
    width: 100vw;
    height: 300px;
  }
</style>
