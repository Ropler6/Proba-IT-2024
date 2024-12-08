<script lang="ts">
  import "/src/style.css";
  import Header from "$lib/components/Header.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  let userData = data.userData;
</script>


<Header/>
<main>
  <div class="user-data">
    <div class="name">
      <img src="/ChefLogo.svg" alt="Chef logo">
      <p class="data-field">Username: {userData.name}</p>
    </div>

    <div class="info">
      <p class="data-field">Email: {userData.email}</p>
      <p class="data-field">Telephone: {userData.telephone}</p>
      <p class="data-field">College group: </p>
    </div>
  </div>

  <div class="button-container">
    <button class="submit">Add a recipe</button>
  </div>

</main>


<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    background: url("/Background.png");
    background-size: cover;
  }

  .user-data {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: var(--size-xl);
  }

  .info, .name {
    display: flex;
    background-color: var(--primary-color);
    border-radius: var(--size-s);
    padding: var(--size-l);
  }

  .info {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30em;
    height: 20em;
  }

  .name {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: var(--primary-color);
    padding: var(--size-l);
    height: 20em;
    width: 20em;
  }

  .data-field {
    border-bottom: 3px solid white;
    color: var(--tertiary-color);
    text-decoration: var(--secondary-color);
    width: 75%;
    height: var(--size-l);
  }
</style>
