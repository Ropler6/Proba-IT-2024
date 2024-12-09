<script lang="ts">
  import "/src/style.css"
  import Header from "$lib/components/Header.svelte";
  import type { ActionData } from "./$types";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  let { form }: { form: ActionData } = $props();
  if (form?.success && browser) {
    goto("/recipes");
  }

  let pass1: string;
  let pass2: string;
  const checkPassword = () => {
    if (pass1 !== pass2) {
      alert("The passwords do not match!");
    } 
  }

</script>


<Header/>
<main>
  <div class="register">
    <h2 style:color="var(--tertiary-color)">Register</h2>

    <form method="POST" action="?/register">
      <input class="input-field" type="text" name="name" placeholder="Full name">
      <input class="input-field" type="tel" name="telephone" placeholder="Telephone">
      <input class="input-field" type="email" name="email" placeholder="Email">
      <input class="input-field" type="password" name="password" placeholder="Password" bind:value={pass1}>
      <input class="input-field" type="password" name="password2" placeholder="Confirm password" bind:value={pass2}>
      <button class="submit" onclick={checkPassword}>Register</button>
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
    background: url("/Background.png");
    background-size: cover;
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
    width: max(15em, 25%);
    height: 65%;
    border-radius: 10px;
    gap: var(--size-m);
  }

  form {
    gap: var(--size-l);
    width: 100%;
  }
</style>
