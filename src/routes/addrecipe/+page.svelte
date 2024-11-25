<script lang="ts">
  import "/src/style.css";
  import Header from "$lib/components/Header.svelte";

</script>


<Header/>
<main>
  <div class="recipe-data">
    <input class="input-field" type="text" placeholder="Recipe name:">
    <input class="input-field" type="text" placeholder="Description:">
    <button class="upload">Upload photo</button>
    <button class="submit">Add recipe</button>
  </div>
</main>


<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
