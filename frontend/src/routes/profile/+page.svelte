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
      <p>Username: {userData.name}</p>
    </div>

    <div class="info">
      <p>Email: {userData.email}</p>
      <p>Telephone: {userData.telephone}</p>
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
    width: 15em;
    height: 10em;
  }

  .name {
    background-color: var(--primary-color);
    padding: var(--size-l);
    height: 10em;
    width: 12em;
  }
</style>
