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

<form action="">
  <h2>Contact us</h2>
  <input type="text" name="first-name" placeholder="First name"
         style:grid-row="2 / 3" style:grid-column="1 / 2">
  <input type="text" name="last-name" placeholder="Last name"
         style:grid-row="3 / 4" style:grid-column="1 / 2">
  <input type="text" name="email" placeholder="Email"
         style:grid-row="4 / 5" style:grid-column="1 / 2">
  <input type="text" name="message" placeholder="Message"
         style:height="200px" style:grid-column="2 / 3"
         style:grid-row="2 / 5">
</form>


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

  form {
    display: grid;
    grid-template-rows: repeat(4, 1fr); 
    grid-template-columns: 1fr 3fr;
    gap: var(--size-l);
    padding: var(--size-l);
  }

  form > h2, input {
    color: var(--secondary-color);
    text-decoration: var(--secondary-color);
    width: 50%;
    height: var(--size-l);
  }

</style>
