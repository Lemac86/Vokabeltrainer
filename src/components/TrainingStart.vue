<template>
  <h1 class="notHomeH1">Training</h1>
  <h3 class="languageSelect">Choose a language:</h3>
  <div class="flagsSpan">
    <button class="flagsButtons">
      <img src="/germany.png" alt="germany" class="flags" />
    </button>
    <button class="flagsButtons">
      <img src="/sweden.png" alt="sweden" class="flags" />
    </button>
  </div>
</template>

<style lang="scss">
.languageSelect {
  margin-left: 5vw;
  margin-top: 20vh;
  font-size: medium;
  color: var(--colorYellow);
  font-family: "Cinzel Decorative", cursive;
  text-shadow: -0.5px 0 black, 0 0.5px black, 1px 0 black, 0 -0.5px black,
    1.5px 1px 2px black;
  font-size: min(4vw, 36px);
}

.flags {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.flagsSpan {
  display: flex;
  justify-content: space-evenly;
  margin-top: 3vh;
}

.flagsButtons {
  width: 30vw;
  max-width: 180px;
  aspect-ratio: 4/3;
  background-color: transparent;
  border: none;
  transition: transform 500ms;

  &:hover,
  &:focus {
    transform: scale(135%);
  }
}
</style>
