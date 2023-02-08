// w = weight , h = height

function buttonCalculateImc() {
  var buttonCalculateImc = document.querySelector("#button-calculate-imc");
  buttonCalculateImc.addEventListener("click", onClick);
}

function onClick() {
  // identificando os valores inputados nas caixas de texto e o valor final
  var inputWeight = document.querySelector("#input-weight");
  var inputHeight = document.querySelector("#input-height");
  var imcResult = document.querySelector("#imc-result");
  // atribuindo os valores digitados para variaveis
  var w = Number(inputWeight.value);
  var h = Number(inputHeight.value);

  // calculando o imc com a funcao que fizemos no inicio calculateIMC
  var imc = calculateImc(w, h);
  var formatedImc = imc.toFixed(2).replace(".", ",");

  console.log(imc);
  imcResult.textContent = formatedImc;
}

function calculateImc(w, h) {
  var result = w / (h * h);
  return result;
}

buttonCalculateImc();
