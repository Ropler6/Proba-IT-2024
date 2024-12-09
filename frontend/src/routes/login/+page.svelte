<script lang="ts">
  import "/src/style.css"
  import Header from "$lib/components/Header.svelte";
  import type { ActionData } from "./$types";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  let { form }: { form: ActionData } = $props();
  if (form?.success && browser) {
    goto("/recipes")
  }
</script>


<Header/>
<main>
  <div class="login">
    <h2 style:color="var(--tertiary-color)">Loghează-te, chiorăie mațele!</h2>

    <form method="POST" action="?/login">
      <input class="input-field" type="email" name="email" placeholder="Email">
      <input class="input-field" type="password" name="password" placeholder="Password">
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
    height: 100%;
    background: url("/Background.png");
    background-size: cover;
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
