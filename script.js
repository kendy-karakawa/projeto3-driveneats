let pratoSelecionado;
let bebidaSelecionado;
let sobremesaSelecionado;
let R$bebida;
let R$prato;
let R$sobremesa;

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
  valorB.innerHTML = R$prato;
  /* */
  const valorS = document.querySelector('.caixa-pedido .sobremesa .valor');
  valorS.innerHTML = R$prato;
  /* */
}

function containerConfirma() {
  const container = document.querySelector('.container-confirma');
  container.classList.remove('escondido');
}

function cancelar() {
  const cancel = document.querySelector('.container-confirma');
  cancel.classList.add('escondido');
}

function WhatsApp() {
  /*
`Olá, gostaria de fazer o pedido:
- Prato: ${Frango Yin Yang}
- Bebida: ${Coquinha Gelada}
- Sobremesa: ${Pudim}
Total: R$ ${27.70}

Nome: ${Fulano}
Endereço: ${Rua...}`

 https://wa.me/5511987641124?text=
*/
}
