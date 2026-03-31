//variaveis que recebem o input da regex, do texto de teste, o botao e o resultado
const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

//variaveis que recebem os elementos das flags
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

//funcao para verificar quais flags estao marcadas 
const getFlags = () => {
  if(globalFlag.checked && caseInsensitiveFlag.checked){
    return "gi";
  }
  else if(globalFlag.checked){
    return "g";
  }
  else if(caseInsensitiveFlag.checked){
    return "i";
  }
  return "";
}

//funcao que cria regex com o input do usuario e aplica as flags com auxilio da funcao getflags
testButton.addEventListener("click", () =>{
  const regex = new RegExp(regexPattern.value, getFlags());
  const testRegex = stringToTest.innerHTML.match(regex);
  if (testRegex === null){
    testResult.textContent = "no match"
  }else{
    stringToTest.innerHTML = stringToTest.innerHTML.replace(regex, '<span class="highlight">$&</span>')
    testResult.textContent = testRegex.join(", ")
  }
});

