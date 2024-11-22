<script>
  import "/src/style.css"
</script>

<div class="header">
  <div class="recipe-buttons">
    <img width="25px" height="25px" src="/logo.png" alt="site logo">
    <a class="page-link" href="/recipes">Recipes</a>
    <a class="page-link" href="/addrecipe">Add recipe</a>
  </div>

  <div class="accounts">
    <a class="page-link" href="/login">Login</a>
    <a class="page-link" href="/register">Register</a>
  </div>
</div>


<style>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
