let pratoSelecionado;
let bebidaSelecionado;
let sobremesaSelecionado;
let R$bebida;
let R$prato;
let R$sobremesa;
let calculoTotal;
let nome;
let endereco;

function addBordaP(prato) {
  const tirarBorda = document.querySelector('.menu-prato .ativo');
  if (tirarBorda !== null) {
    tirarBorda.classList.remove('ativo');
  }
  prato.classList.toggle('ativo');
  pratoSelecionado = prato.querySelector('h4').innerHTML;
  R$prato = prato.querySelector('.num').innerHTML;
  liberarBotaoFecharPedido();
}

function addBordaB(bebida) {
  const tirarBorda = document.querySelector('.menu-bebida .ativo');
  if (tirarBorda !== null) {
    tirarBorda.classList.remove('ativo');
  }
  bebida.classList.toggle('ativo');
  bebidaSelecionado = bebida.querySelector('h4').innerHTML;
  R$bebida = bebida.querySelector('.num').innerHTML;
  liberarBotaoFecharPedido();
}

function addBordaS(sobremesa) {
  const tirarBorda = document.querySelector('.menu-sobremesa .ativo');
  if (tirarBorda !== null) {
    tirarBorda.classList.remove('ativo');
  }
  sobremesa.classList.toggle('ativo');
  sobremesaSelecionado = sobremesa.querySelector('h4').innerHTML;
  R$sobremesa = sobremesa.querySelector('.num').innerHTML;
  liberarBotaoFecharPedido();
}

function liberarBotaoFecharPedido() {
  if (pratoSelecionado !== undefined) {
    if (bebidaSelecionado !== undefined) {
      if (sobremesaSelecionado !== undefined) {
        let botaoSelecionar = document.querySelector('.selecione');
        botaoSelecionar.classList.add('escondido');
        let botaoFechar = document.querySelector('.fechar');
        botaoFechar.classList.remove('escondido');
      }
    }
  }
}

function converterVirguraParaPonto(valor) {
  return Number(valor.replace(/,/g, '.'));
}

function converterPontoParaVirgula(valor) {
  return valor.toFixed(2).toString().replace('.', ',');
}

function containerConfirma() {
  const container = document.querySelector('.container-confirma');
  container.classList.remove('escondido');
  /* */
  nome = prompt('Qual o seu nome ?');
  endereco = prompt('Qual o seu endereço ?');
  /* */
  const textoP = document.querySelector('.caixa-pedido .prato .texto');
  textoP.innerHTML = pratoSelecionado;
  /* */
  const textoB = document.querySelector('.caixa-pedido .bebida .texto');
  textoB.innerHTML = bebidaSelecionado;
  /* */
  const textoS = document.querySelector('.caixa-pedido .sobremesa .texto');
  textoS.innerHTML = sobremesaSelecionado;
  /* */
  const valorP = document.querySelector('.caixa-pedido .prato .valor');
  valorP.innerHTML = R$prato;
  /* */
  const valorB = document.querySelector('.caixa-pedido .bebida .valor');
  valorB.innerHTML = R$bebida;
  /* */
  const valorS = document.querySelector('.caixa-pedido .sobremesa .valor');
  valorS.innerHTML = R$sobremesa;
  /* */
  calculoTotal =
    converterVirguraParaPonto(R$prato) +
    converterVirguraParaPonto(R$bebida) +
    converterVirguraParaPonto(R$sobremesa);
  /* */
  const valorT = document.querySelector('.caixa-pedido .total .valor');
  valorT.innerHTML = `R$ ${converterPontoParaVirgula(calculoTotal)}`;
}

function cancelar() {
  const cancel = document.querySelector('.container-confirma');
  cancel.classList.add('escondido');
}

function WhatsApp() {
  let texto = `Olá, gostaria de fazer o pedido:
  - Prato: ${pratoSelecionado}
  - Bebida: ${bebidaSelecionado}
  - Sobremesa: ${sobremesaSelecionado}
  Total: R$ ${converterPontoParaVirgula(calculoTotal)}
  
  Nome: ${nome}
  Endereço: ${endereco}`;

  let textoCodificado = encodeURIComponent(texto);
  console.log(textoCodificado);
  let urlWhats = `https://wa.me/5511932651411?text=${textoCodificado}`;

  window.open(urlWhats);
}
