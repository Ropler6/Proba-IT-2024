<script lang="ts">
   import "/src/style.css"

  interface Props {
    recipeName: string;
    rating: number;
    author: string;
  }

  let { recipeName, rating, author, }: Props = $props();
</script>


<div class="rating">
  <div class="name-and-ratings">
    <p class="recipe-name">{recipeName}</p>

    <div class="stars">
      {#each ([1,2,3,4,5].splice(0, rating)) as _}
        <div class="star">*</div>
      {/each}
    </div>

    <p class="nr-ratings">Number of ratings</p>

  </div>

  <div class="author">
    <p>Author:</p>
    <p style:font-size={"var(--size-l)"}>{author}</p>
  </div>
</div>


<style>
  .rating {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: var(--size-xxl);

    background-color: var(--tertiary-color);
    padding: var(--size-m);
  }

  .name-and-ratings {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .recipe-name {
    font-weight: 600;
    font-size: var(--size-l);
  }

  .stars {
    display: flex;
    flex-direction: row;
    gap: var(--size-m);
  }

  .author {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-xs);
  }

  .author > p {
    margin: 0;
  }

  .star {
    display: inline;
  }
</style>
