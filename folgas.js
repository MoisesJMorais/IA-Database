/**
 * ESCALA DE FOLGAS
 * Regras: 
 * 6x1: Ciclo de 7 dias (1 dia de folga)
 * 6x2: Ciclo de 8 dias (2 dias consecutivos de folga)
 */

const colaboradores = [
  { nome: "Kenyi", escala: "6x2", inicioProximaFolga: "2026-04-10" },
  { nome: "Elton", escala: "6x2", inicioProximaFolga: "2026-04-11" },
  { nome: "Geazi", escala: "6x2", inicioProximaFolga: "2026-04-13" },
  { nome: "Moisés", escala: "6x1", inicioProximaFolga: "2026-04-12" }
];

function listarFolgas(colab, quantidade = 3) {
  let resultado = [];
  let dataBase = new Date(colab.inicioProximaFolga + "T00:00:00");
  const diasCiclo = colab.escala === "6x2" ? 8 : 7;

  for (let i = 0; i < quantidade; i++) {
    let dia1 = new Date(dataBase);
    
    if (colab.escala === "6x2") {
      let dia2 = new Date(dataBase);
      dia2.setDate(dia1.getDate() + 1);
      resultado.push(`${formatar(dia1)} e ${formatar(dia2)}`);
    } else {
      resultado.push(`${formatar(dia1)}`);
    }

    // Pula para o início da próxima folga no ciclo
    dataBase.setDate(dataBase.getDate() + diasCiclo);
  }
  return resultado;
}

function formatar(data) {
  return data.toLocaleDateString('pt-BR');
}