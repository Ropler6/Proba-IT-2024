<script lang="ts">
  import "/src/style.css";
  import Header from "$lib/components/Header.svelte";
  import Recipe from "$lib/components/Recipe.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  const recipes = data.post.recipes || [];
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
  <form action="">
    <h2>Contact us</h2>
    <div class="inputs">
      <div class="small-inputs">
        <input type="text" name="first-name" placeholder="First name">
        <input type="text" name="last-name" placeholder="Last name">
        <input type="text" name="email" placeholder="Email">
      </div>
      <input type="text" name="message" placeholder="Message">
    </div>
    <button class="submit" type="submit">Submit</button>
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
    background: center / contain no-repeat url("/Background.png");
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact {
    padding: var(--size-l);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: var(--size-l);
    padding: var(--size-l);
    width: 75%;
    flex-wrap: wrap;
  }

  input {
    color: var(--secondary-color);
    text-decoration: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    padding: var(--size-xs);
  }

  input[name="message"] {
    flex: 3;
    text-align: start;
  }

  .inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--size-xxl);
    height: 100%;
  }

  .small-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 2;
    gap: var(--size-l);
  }

  form > h2 {
    color: var(--secondary-color);
  }

  .submit {
    align-self: flex-end;
  }

</style>
