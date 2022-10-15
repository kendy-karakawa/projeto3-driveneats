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
  pratoSelecionado = prato.innerHTML;
  liberarBotaoFecharPedido();
}

function addBordaB(bebida) {
  const tirarBorda = document.querySelector('.menu-bebida .ativo');
  if (tirarBorda !== null) {
    tirarBorda.classList.remove('ativo');
  }
  bebida.classList.toggle('ativo');
  bebidaSelecionado = bebida.innerHTML;
  liberarBotaoFecharPedido();
}

function addBordaS(sobremesa) {
  const tirarBorda = document.querySelector('.menu-sobremesa .ativo');
  if (tirarBorda !== null) {
    tirarBorda.classList.remove('ativo');
  }
  sobremesa.classList.toggle('ativo');
  sobremesaSelecionado = sobremesa.innerHTML;
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
