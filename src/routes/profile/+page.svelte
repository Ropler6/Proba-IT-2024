<script lang="ts">
  import "/src/style.css";
  import Header from "$lib/components/Header.svelte";

</script>


<Header/>
<main>
  <div class="user-data">
    <div class="name">
      <input class="input-field" type="text" placeholder="Name:">
    </div>

    <div class="info">
      <input class="input-field" type="email" placeholder="Email:">
      <input class="input-field" type="tel" placeholder="Telephone:">
      <input class="input-field" type="text" placeholder="College group:">
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
