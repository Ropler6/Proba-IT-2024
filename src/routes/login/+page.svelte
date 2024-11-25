<script lang="ts">
  import "/src/style.css"
  import Header from "$lib/components/Header.svelte";
</script>


<Header/>
<main>
  <div class="login">
    <h2 style:color="var(--tertiary-color)">Log in</h2>

    <form action="">
      <input class="input-field" type="email" placeholder="Email">
      <input class="input-field" type="password" placeholder="Password">
      <button class="submit">Log in</button>
    </form>
  </div>
</main>


<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%
  }

  .login, form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary-color);
  }

  .login {
    justify-content: space-around;
    padding: var(--size-l); 
    width: max(200px, 30%);
    height: 50%;
    border-radius: 10px;
  }

  form {
    gap: var(--size-l);
  }
</style>
