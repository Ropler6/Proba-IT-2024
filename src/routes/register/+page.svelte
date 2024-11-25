<script lang="ts">
  import "/src/style.css"
  import Header from "$lib/components/Header.svelte";
</script>


<Header/>
<main>
  <div class="register">
    <h2 style:color="var(--tertiary-color)">Register</h2>

    <form action="">
      <input class="input-field" type="text" placeholder="Full name">
      <input class="input-field" type="tel" placeholder="Telephone">
      <input class="input-field" type="email" placeholder="Email">
      <input class="input-field" type="password" placeholder="Password">
      <input class="input-field" type="password" placeholder="Confirm password">
      <button class="submit">Register</button>
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
    height: 100%;
  }

  .register, form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary-color);
  }

  .register {
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
