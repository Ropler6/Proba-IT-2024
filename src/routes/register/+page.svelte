<script lang="ts">
  import "/src/style.css"
  import Header from "$lib/components/Header.svelte";
</script>


<Header/>
<main>
  <div class="register">
    <h2 style:color="var(--tertiary-color)">Register</h2>

    <form action="">
      <input type="text" placeholder="Full name">
      <input type="tel" placeholder="Telephone">
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">
      <input type="password" placeholder="Confirm password">
      <button type="submit">Register</button>
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

  input {
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 3px solid white;
    color: var(--tertiary-color);
  }

  button {
    width: 100px;
    height: 40px;
    background-color: var(--secondary-color);
    border: 0;
    border-radius: 10px;
    color: var(--tertiary-color);
  }

</style>
