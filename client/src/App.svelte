<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={'true'}>
<link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">

<script lang="ts">
    import { validateToken } from "./api/validateToken";
  import MainCard from "./MainCard.svelte";

  enum AppView {
    INDEX,
    GAME
  }

  let loginToken: string;
  let view: AppView = AppView.INDEX;

  function onTokenCreate(e: CustomEvent<string>) {
    loginToken = e.detail;
    validateToken(loginToken).then(res => {
      if (res) {
        view = AppView.GAME;
      }
    })
  }

</script>

<main>
  {#if view === AppView.INDEX}
    <MainCard on:token={onTokenCreate} />
  {:else if view === AppView.GAME}
    <p>Game on</p>
  {/if}
</main>

<style>
  
</style>
