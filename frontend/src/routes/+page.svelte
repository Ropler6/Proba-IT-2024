<script lang="ts">
  import "/src/style.css"
  import Header from "$lib/components/Header.svelte";
  import Recipe from "$lib/components/Recipe.svelte";
  import { type Recipe as Recipe_T } from "$lib/ts/datatypes"
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  const recipes = data.post.recipes as Recipe_T[];
</script>


<Header/>
<div class="big-logo">
  <img src="/LogoBlack.svg" alt="Logo">
</div>

<div class="recipes">
  <h2 style:color={"var(--tertiary-color)"}>Top rated recipes</h2>

  <div class="recipe-list">
    {#each recipes as recipe}
      <Recipe name={recipe.name} author={recipe.author} rating={recipe.rating}/>
    {/each}
  </div>

</div>

<div class="contact">
  <h2>Contact us</h2>
  <form action="">
    <input type="text" name="first-name" placeholder="First name">
    <input type="text" name="last-name" placeholder="Last name">
    <input type="text" name="email" placeholder="Email">
    <input type="text" name="message" placeholder="Message">
  </form>
</div>


<style>
  .recipes {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary-color);
    padding: var(--size-m);
  }

  .recipe-list {
    display: flex;
    flex-direction: row;
    gap: var(--size-xxl);
  }

  /* Todo: fix on mobile */
  .big-logo {
    background: center / contain no-repeat url("/Background.png");
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* To be fixed */
  .contact {
    padding: var(--size-l);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* To be fixed */
  form {
    display: flex;
    flex-direction: column;
    gap: var(--size-l);
    padding: var(--size-l);
    height: 25vh;
    width: 75%;
    flex-wrap: wrap;
  }

  input {
    color: var(--secondary-color);
    text-decoration: var(--secondary-color);
    border: 2px solid var(--secondary-color);
  }

  /* To be fixed */
  input[name="message"] {
    width: 40%;
    flex: 1;
    text-align: start;
  }

  .contact > h2 {
    color: var(--secondary-color);
  }

</style>
