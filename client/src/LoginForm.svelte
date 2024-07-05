<script lang='ts'>
    import { createEventDispatcher } from "svelte";
  import { login } from "./api/login";

  let user: string;
  let password: string;

  let loginError: boolean = false;

  const dispatcher = createEventDispatcher<{token: string}>();

  async function loginClicked() {
    const loginResponseDTO = await login(user, password);
    const token = loginResponseDTO.token;
    if (!token) {
      loginError = true;
    } else {
      loginError = false;
      dispatcher('token', token);
    }
  }
</script>

<div class='login-form'>
  <input class={`${loginError && !user ? 'error' : ''}`} placeholder="Who are you?" bind:value={user} />
  <input class={`${loginError ? 'error' : ''}`} type='password' placeholder="What is your magic phrase?" bind:value={password} />
  <button class='login-button' on:click={loginClicked}>
    Enter the Realm
    <div class='login-button-background' />
  </button>
</div>

<style>
  .login-form {
    flex-basis: 50%;
    justify-content: center;
    align-items: center;
    margin: 32px 64px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .login-button {
    width: fit-content;
    position: relative;
    font-size: 32px;
    padding: 8px 32px 2px;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 450;
    overflow: hidden;
    border: none;
    outline: none;
    z-index: 0;
  }

  .login-button-background {
    position: absolute;
    left: 0px;
    top: 100%;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(#a329ae, #92249e);
    transition: top 300ms ease-in-out;
  }

  .login-button:hover .login-button-background {
    top: 0%;
  }

  .login-form input {
    width: 100%;
    font-size: 20px;
    text-align: center;
    background-color: #222222;
    outline: 1px solid #666666;
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    font-family: "Architects Daughter", cursive;
  }

  .login-form input.error {
    outline: 2px solid #e7263d;
  }

  .login-form input:focus {
    outline: 2px solid #e6addc;
  }

  .login-form ::placeholder {
    color: #9c9297;
  }
</style>