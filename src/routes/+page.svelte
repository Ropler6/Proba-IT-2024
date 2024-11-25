<script lang="ts">
  import "/src/style.css"
  import Header from "$lib/components/Header.svelte";
  import Recipe from "$lib/components/Recipe.svelte";
  import { type Recipe as Recipe_T } from "$lib/ts/datatypes"

  let recipes: Recipe_T[] = [];
</script>


<Header/>
<div class="big-logo"></div>

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
    <input class="input-field" type="text" name="first-name" placeholder="First name">
    <input class="input-field" type="text" name="last-name" placeholder="Last name">
    <input class="input-field" type="text" name="email" placeholder="Email">
    <input class="input-field" type="text" name="message" placeholder="Message"
           style:height="150px">
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

  .big-logo {
    background: center / contain no-repeat url("");
    margin: var(--size-m);
    width: 100vw;
    height: 300px;
  }

  .contact {
    padding: var(--size-l);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: var(--size-l);
    padding: var(--size-l);
    height: 50vh;
    flex-wrap: wrap;
  }

  .contact > h2 {
    color: var(--secondary-color);
  }

</style>
