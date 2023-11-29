user = prompt("Qual seu nome?");
hotel = prompt("Qual o nome do Hotel?");
senha = parseInt(prompt("Informe sua senha"));

if (senha === 8) {
  alert(
    "Bem vindo ao Hotel " +
      hotel +
      ", " +
      user +
      ". É um imenso prazer ter você por aqui!"
  );

  function inicio() {
    let escolha = parseInt(
      prompt(
        "Seleciona uma opção: 1) Reserva de Quartos 2) Cadastro de Hospedes 3) Abastecer Carros 4) Eventos 5) Buffet 6) Auditorio 7) Passeio 8) Ar 9) Sair"
      )
    );

    switch (escolha) {
      case 1:
        reserva_quartos();
        break;
      case 2:
        cadastro_hospedes();
        break;
      case 3:
        abastecer_carros();
        break;
      case 4:
        eventos();
      case 5:
        buffet();
        break;
      case 6:
        auditorio();
        break;
      case 7:
        passeio();
        break;
      case 8:
        ar();
        break;
      case 9:
        sair();
        break;

      default:
        erro();
        inicio();
        break;
    }
  }
} else {
  alert("Senha incorreta");
}

function reserva_quartos() {
  // BLOCO DE RESERVA DE QUARTOS
  alert("Hotel: " + hotel + " - Reserva de Quartos");
  diaria = parseInt(prompt("Por gentileza, serão quantas diárias?"));

  if (diaria > 0 && diaria < 30) {
    var valor = parseFloat(prompt("Qual o valor padrão da diária?"));
    hospede = prompt("Qual o nome do Hospede?");
    alert(
      "O valor da diária será de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(diaria * valor)
    );
    // FIM DO BLOCO DE RESERVA DE QUARTOS

    // CONFIRMAÇÃO DA RESERVA
    confirma = prompt(
      user +
        " você confirma a hospedagem para " +
        hospede +
        " por " +
        diaria +
        " dias? S/N"
    );

    confirma = confirma.toLowerCase(); // TRANSFORMA A RESPOSTA EM LETRA MINUSCULA

    if (
      confirma === "s" ||
      confirma === "sim" ||
      confirma === "S" ||
      confirma === "Sim"
    ) {
      alert(
        user +
          " , reserva efetuada para " +
          hospede +
          " . O valor total é de " +
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(diaria * valor)
      );
    } else if (
      confirma === "n" ||
      confirma === "nao" ||
      confirma === "N" ||
      confirma === "Não"
    ) {
      alert(user + " , reserva não efetuada");
    }
    // FIM DA CONFIRMAÇÃO DA RESERVA
  } else
    alert(
      "Valor inválido, Por favor informe um número corretamente. Maior que 1 e Menor que 30"
    );
  inicio();
}
function cadastro_hospedes() {
  alert("Hotel: " + hotel + " - Cadastro de Hospedes");

  valorDiaria = 100;
  gratuidades = 0;
  meias = 0;
  valorTotal = 0;

  while (true) {
    nome = prompt("Qual o nome do Hóspede?" + "\n" + "Digite PARE para sair");

    if (nome === "PARE") {
      break;
    }

    idade = parseInt(prompt("Qual a idade do Hóspede?"));

    if (idade < 6) {
      gratuidades++;
    } else if (idade >= 60) {
      meias++;
    }

    valorHospedagem = valorDiaria;
    if (idade < 60) {
    } else 50;

    valorTotal += valorHospedagem;
  }

  alert(
    `O valor total das hospedagens é: R$${valorTotal}; ${gratuidades} gratuidade(s); ${meias} meia(s)}`
  );
}
function abastecer_carros() {
  alert("HOTEL: " + hotel + " - ABASTECER");
  if (confirm("Deseja abastecer?")) {
    var litros = parseFloat(prompt("Quantos litros?"));
    var valor = parseFloat(prompt("Qual o valor do litro?"));
    var total = litros * valor;
    alert(
      "O valor total é de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)
    );
  } else {
    alert("Obrigado e volte sempre");
  }

  inicio();
}
function eventos() {
  precoGarcom = 10.5;
  duracao = prompt("qual a duracao do evento?");
  garcom = prompt("quantos garçons serão necessario?");
  valorTotal = duracao * precoGarcom * garcom;
  alert("o valor total é de " + valorTotal);
  reserva = prompt("deseja reservar? S/N").toUpperCase();
  if (reserva == "S") {
    alert("reserva efetuada");
  } else {
    alert("reserva não efetuada");
  }
}
function buffet() {
  quantidade = parseInt(prompt("Quantos convidados?"));
  if (quantidade > 350) {
    alert("quantidade de convidados superior à capacidade máxima");
  } else {
    cafe = quantidade * 0.2;
    agua = quantidade * 0.5;
    salgados = quantidade * 7;
    custoCafe = cafe * 0.8;
    custoAgua = agua * 0.4;
    custoSalgados = salgados * 0.34;
    custoTotal = custoCafe + custoAgua + custoSalgados;
    alert(
      "O evento precisará de " +
        cafe +
        " litros de café, " +
        agua +
        " litros de água, " +
        salgados +
        " salgados. O custo total do evento será de R$" +
        custoTotal
    );
    reserva = prompt("Gostaria de efetuar a reserva? S/N").toUpperCase();
    if (reserva == "S") {
      alert("reserva efetuada com sucesso");
    } else {
      alert("reserva não efetuada");
    }
  }
}
function auditorio() {
  var semana = ["segunda", "terça", "quarta", "quinta", "sexta"];

  var dia = prompt("Qual o dia do evento?").toLowerCase();
  var hora = parseInt(prompt("Qual o horário do evento?"));

  if (semana.includes(dia) && hora >= 7 && hora < 15) {
    var nome = prompt("Qual o nome da empresa?");
    alert(
      "Restaurante reservado para " + nome + ": " + dia + " às " + hora + "hs"
    );
  } else {
    alert("Restaurante não disponível");
  }
  inicio();
}
function passeio() {
  var wOilAlcool = parseFloat(prompt("Informe o preço do álcool no Wayne Oil"));
  var wOilGasolina = parseFloat(
    prompt("Informe o preço da gasolina no Wayne Oil")
  );
  var sPetrolAlcool = parseFloat(
    prompt("Informe o preço do álcool no Stark Petrol")
  );
  var sPetrolGasolina = parseFloat(
    prompt("Informe o preço da gasolina no Stark Petrol")
  );

  var wOilAlcoolTotal = wayneOilAlcool * 42;
  var wOilGasolinaTotal = wayneOilGasolina * 42;
  var sPetrolAlcoolTotal = starkPetrolAlcool * 42;
  var sPetrolGasolinaTotal = starkPetrolGasolina * 42;

  var cheaperAlcool =
    wOilAlcoolTotal < sPetrolAlcoolTotal ? "Wayne Oil" : "Stark Petrol";
  var cheaperGasolina =
    wOilGasolinaTotal < sPetrolGasolinaTotal ? "Wayne Oil" : "Stark Petrol";

  var cheaperFuel =
    wayneOilAlcoolTotal <= wayneOilGasolinaTotal * 0.7 ? "Álcool" : "Gasolina";

  alert("O combustível mais atraente é: " + cheaperFuel);
  alert("O posto mais barato para abastecer com álcool é: " + cheaperAlcool);
  alert(
    "O posto mais barato para abastecer com gasolina é: " + cheaperGasolina
  );

  inicio();
}
function ar() {
  const empresas = [];
  const precos = [];

  while (true) {
    const nomeEmpresa = prompt("Qual o nome da empresa?");
    const valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));
    const quantidadeAparelhos = parseInt(
      prompt("Quantos aparelhos você precisa?")
    );
    const desconto = parseFloat(prompt("Qual o desconto oferecido (%)?"));
    const minimoAparelhos = parseInt(
      prompt("Quantos aparelhos para ter desconto?")
    );

    let valorTotal = valorPorAparelho * quantidadeAparelhos;

    if (quantidadeAparelhos >= minimoAparelhos) {
      valorTotal -= valorTotal * (desconto / 100);
    }

    empresas.push(nomeEmpresa);
    precos.push(valorTotal);

    alert(`O custo da ${nomeEmpresa} é R$ ${valorTotal.toFixed(2)}`);

    const resposta = prompt("Deseja informar mais dados? (S/N)").toUpperCase();
    if (resposta !== "S") {
      break;
    }
  }

  const menorPreco = Math.min(...precos);
  const indexMenorPreco = precos.indexOf(menorPreco);
  const empresaMenorPreco = empresas[indexMenorPreco];

  alert(
    `O menor orçamento é da ${empresaMenorPreco} por R$ ${menorPreco.toFixed(
      2
    )}`
  );
}
function erro() {
  alert("Opção inválida");
  inicio();
}
function sair() {
  var confirma = confirm("Você deseja sair?");
  if (confirma) {
    window.close();
    alert("Muito obrigado e até logo " + user);
  } else {
    inicio();
  }
}
