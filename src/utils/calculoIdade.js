export function calcularIdadeCompleta(dataNascimento) {
  const partes = dataNascimento.split('/');
  if (partes.length !== 3) return null;

  const diaNasc = parseInt(partes[0], 10);
  const mesNasc = parseInt(partes[1], 10) - 1;
  const anoNasc = parseInt(partes[2], 10);

  const dataNasc = new Date(anoNasc, mesNasc, diaNasc);
  const hoje = new Date();

  let anos = hoje.getFullYear() - dataNasc.getFullYear();
  let meses = hoje.getMonth() - dataNasc.getMonth();
  let dias = hoje.getDate() - dataNasc.getDate();

  if (dias < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  let classificacao = '';
  if (anos <= 19) {
    classificacao = 'Jovem';
  } else if (anos >= 20 && anos <= 59) {
    classificacao = 'Adulto';
  } else {
    classificacao = 'Idoso';
  }

  return { anos, meses, dias, classificacao };
}