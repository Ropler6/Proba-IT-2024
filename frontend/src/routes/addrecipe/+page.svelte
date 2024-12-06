<script lang="ts">
  import "/src/style.css";
  import Header from "$lib/components/Header.svelte";
  import { add } from "$lib/ts/database"
  import type { Recipe } from "$lib/ts/datatypes";

  let username: string = "Ion" // TO BE ADDED
  let recipeName: string = "";
  let recipeDescription: string = "";

  async function onclick() {
    await add<Recipe>("recipes", {
      name: recipeName,
      author: username,
      rating: 1,
      description: recipeDescription,
    } satisfies Recipe);
  }
</script>


<Header/>
<main>
  <form class="recipe-data">
    <input class="input-field" type="text" placeholder="Recipe name:" bind:value={recipeName}>
    <input class="input-field" type="text" placeholder="Description:" bind:value={recipeDescription}>
    <button class="upload">Upload photo</button>
    <button class="submit" {onclick}>Add recipe</button>
  </form>
</main>


<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("/Background.png");
    background-size: cover;
  }

  .recipe-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: var(--size-m);
    width: 20em;
    height: 17.5em;
    background-color: var(--primary-color);
    border-radius: var(--size-m);
  }

  .upload {
    background: transparent;
    color: var(--tertiary-color);
    border: 1px solid white;
    border-radius: var(--size-m);
    padding: var(--size-xxs) var(--size-xs);
  }
</style>
