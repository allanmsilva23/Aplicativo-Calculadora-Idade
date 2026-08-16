import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Keyboard 
} from 'react-native';
import { calcularIdadeCompleta } from '../utils/calculoIdade';

export default function HomeScreen() {
  const [dataInput, setDataInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const formatarData = (texto) => {
    let formatado = texto.replace(/\D/g, '');
    if (formatado.length > 2) formatado = formatado.replace(/^(\d{2})(\d)/, '$1/$2');
    if (formatado.length > 5) formatado = formatado.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
    setDataInput(formatado.substring(0, 10));
  };

  const handleCalcular = () => {
    Keyboard.dismiss();
    setErro('');
    setResultado(null);

    if (dataInput.length !== 10) {
      setErro('Por favor, insira a data completa no formato DD/MM/AAAA.');
      return;
    }

    const dadosCalculados = calcularIdadeCompleta(dataInput);

    if (!dadosCalculados) {
      setErro('Data inválida. Verifique e tente novamente.');
      return;
    }

    setResultado(dadosCalculados);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Triagem Clínica</Text>
        <Text style={styles.subtitulo}>Sistema de diagnóstico do paciente</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#94A3B8"
          keyboardType="numeric"
          value={dataInput}
          onChangeText={formatarData}
          maxLength={10}
        />

        <TouchableOpacity 
          style={styles.botao} 
          onPress={handleCalcular}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotao}>Calcular Idade</Text>
        </TouchableOpacity>

        {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      </View>

      {resultado && (
        <View style={styles.cardResultado}>
          <Text style={styles.labelResultado}>Classificação</Text>
          <Text style={styles.resultadoDestaque}>
            Paciente {resultado.classificacao}
          </Text>
          
          <View style={styles.linhaSeparadora} />
          
          <Text style={styles.textoResultado}>
            O paciente possui <Text style={styles.destaqueNumero}>{resultado.anos}</Text> anos,{' '}
            <Text style={styles.destaqueNumero}>{resultado.meses}</Text> meses e{' '}
            <Text style={styles.destaqueNumero}>{resultado.dias}</Text> dias de vida.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 36,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1E293B',
    letterSpacing: -0.5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 6,
    fontWeight: '500',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 24,
    shadowColor: '#475569',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '800',
    color: '#475569',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  input: {
    height: 56,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 18,
    color: '#0F172A',
    backgroundColor: '#F8FAFC',
    marginBottom: 24,
    fontWeight: '500',
  },
  botao: {
    backgroundColor: '#4F46E5',
    height: 56,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  erro: {
    color: '#EF4444',
    marginTop: 16,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
  cardResultado: {
    marginTop: 32,
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 24,
    borderLeftWidth: 6,
    borderLeftColor: '#10B981',
    shadowColor: '#475569',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
  },
  labelResultado: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  resultadoDestaque: {
    fontSize: 24,
    fontWeight: '900',
    color: '#10B981',
    letterSpacing: 0.5,
  },
  linhaSeparadora: {
    width: '100%',
    height: 1.5,
    backgroundColor: '#F1F5F9',
    marginVertical: 16,
  },
  textoResultado: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 26,
    fontWeight: '500',
  },
  destaqueNumero: {
    fontWeight: '800',
    color: '#1E293B',
    fontSize: 17,
  }
});