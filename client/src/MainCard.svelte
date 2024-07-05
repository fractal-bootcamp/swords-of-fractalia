<script lang='ts'>
    import LoginForm from "./LoginForm.svelte";
</script>

<div class='main-card'>
  <div class='content'>
    <h1 class='title'>Swords of Fractalia</h1>
    <LoginForm on:token />
  </div>
  <div class='vertical-line' />
  <div class='image-placeholder'>
    A stunning image or something.
  </div>
</div>

<style>
  .main-card {
    margin: 0px auto;
    display: flex;
    max-width: 1280px;
    height: 80vh;
    align-items: center;
    filter: drop-shadow(3px 5px 10px #d479d788);
    background-image: linear-gradient(-15deg, #1c171a, #272123);
    border-radius: 24px;
  }
  
  .title {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 250;
  }

  .image-placeholder {
    flex-basis: 55%;
  }

  .content {
    display: flex;
    height: 100%;
    flex-direction: column;
    flex-basis: 45%;
  }

  .vertical-line {
    width: 0px;
    height: 90%;
    border-right: 2px solid #574853;
  }
</style>