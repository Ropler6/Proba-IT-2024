<script lang="ts">
  import { onMount } from "svelte";
  import "/src/style.css"
  
  let loggedIn: boolean;
  onMount(async() => {
    const response = await fetch("/api/cookies");
    const email = await response.json() as string;
    if (email) loggedIn = true;
    else loggedIn = false;
  });
</script>

<div class="header">
  <div class="recipe-buttons">
    <img width="100px" height="50px" src="/LogoWhite.svg" alt="site logo">
    <a class="page-link" href="/recipes">Recipes</a>
    <a class="page-link" href="/addrecipe">Add recipe</a>
  </div>

  {#if loggedIn}
    <a class="page-link" href="/profile">Profile</a>
  {:else}
    <div class="accounts">
      <a class="page-link" href="/login">Login</a>
      <a class="page-link" href="/register">Register</a>
    </div>
  {/if}
</div>


<style>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: var(--size-m) var(--size-xxl);
    background-color: var(--primary-color);
    border-radius: 0 0 var(--size-m) var(--size-m);
    box-shadow: 5px 1px 10px 5px black;
  }

  .recipe-buttons, .accounts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--size-l);
  }
</style>
