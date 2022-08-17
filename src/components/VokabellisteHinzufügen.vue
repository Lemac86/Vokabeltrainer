<template>
  <h1 class="notHomeH1">Vokabelliste</h1>
  <div class="addVokabularyDiv">Vokabel hinzufügen:</div>
  <div class="textInputDiv">
    <img src="/germany.png" alt="germany" class="flagsBefore" />
    <input
      type="text"
      id="inputDeutsch"
      name="&#x1F50D;"
      class="textInput"
      placeholder="   Deutsche Bedeutung..."
      required
    />
    <img src="/germany.png" alt="germany" class="flagsEnd" />
  </div>
  <div class="textInputDiv">
    <img src="/sweden.png" alt="sweden" class="flagsBefore" />
    <input
      type="text"
      id="inputSchwedisch"
      name="&#x1F50D;"
      class="textInput"
      placeholder="   Schwedische Bedeutung..."
      required
    />
    <img src="/sweden.png" alt="sweden" class="flagsEnd" />
  </div>
  <button class="addVokabularyButton">Hinzufügen</button>
</template>

<style lang="scss" scoped>
.addVokabularyDiv {
  font-family: "Cinzel Decorative", cursive;
  color: var(--colorYellow);
  margin-left: 10%;
  padding-bottom: 20px;
  font-size: min(4vw, 40px);
}

.textInputDiv {
  position: relative;
  display: block;
  width: calc(70vw + 100px);
  height: 39px;
  margin-top: 20px;
  margin-left: calc(15vw - 60px);
}

.textInput {
  height: 100%;
  width: 70vw;
  background-color: var(--colorYellow);
  color: var(--colorBlue);
  font-family: "Cinzel Decorative", cursive;
  font-size: 0.8em;
  font-weight: 700;
  padding: 0;
  margin-left: 50px;
  text-align: center;
  border: 0.1px solid var(--colorBlue);
  border-radius: 5px;
  &:focus {
    background-color: var(--colorBlue);
    color: var(--colorYellow);
    border-color: var(--colorYellow);
  }
}

.flagsBefore {
  position: absolute;
  aspect-ratio: 4/3;
  height: 120%;
  align-content: center;
  transform: translate(-0%, -4%);
}

.flagsEnd {
  position: absolute;
  aspect-ratio: 4/3;
  height: 120%;
  align-content: center;
  transform: translate(-25%, -4%);
}

.addVokabularyButton {
  height: 15vh;
  width: 70vw;
  margin-left: calc(50% - 35vw);
  margin-top: 15vh;
  font-weight: 700;
  font-family: "Cinzel Decorative", cursive;
  font-size: 25px;
  background-color: var(--colorYellow);
  color: var(--colorBlue);
  border: 0.1px solid var(--colorBlue);
  border-radius: 25px;
  &:focus,
  &:hover {
    background-color: var(--colorBlue);
    color: var(--colorYellow);
    border-color: var(--colorYellow);
  }
}
</style>
