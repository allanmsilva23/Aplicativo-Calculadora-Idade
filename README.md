# 🩺 Triagem Clínica - Calculadora de Idade

**Atividade Prática 1 - Data de Nascimento**

Este projeto é uma aplicação mobile desenvolvida em **React Native** para a disciplina de Programação para Dispositivos Móveis II. O aplicativo calcula a idade exata de um paciente (anos, meses e dias) a partir da data de nascimento e o classifica em faixas etárias clínicas.

## 🚀 Funcionalidades

- Máscara automática para a entrada da data de nascimento (`DD/MM/AAAA`).
- Cálculo preciso de anos, meses e dias.
- Classificação etária exigida:
  - **Jovens:** Indivíduos de até 19 anos
  - **Adultos:** Indivíduos com idade entre 20 até 59 anos
  - **Idosos:** Indivíduos de 60 anos em diante
- Interface moderna, amigável e desenvolvida em tela única.

## 📁 Estrutura de Arquivos

Para cumprir a exigência da atividade e seguir as boas práticas de desenvolvimento de software multiplataforma, o projeto foi modularizado utilizando a pasta `/src`:

```text
/
├── App.js                         # Ponto de entrada do aplicativo
└── src/
    ├── screens/
    │   └── HomeScreen.js          # Interface principal e única (UI)
    └── utils/
        └── calculoIdade.js        # Lógica de negócio e cálculo de datas
```

## 🛠️ Como Executar no Expo Snack

O aplicativo foi desenvolvido no SnackExpoDev, siga os passos abaixo para preparar e testar o projeto:

1. Acesse o site do [Expo Snack](https://snack.expo.dev/).
2. Crie a estrutura de pastas indicada acima (`src/screens` e `src/utils`).
3. Copie e cole os códigos nos seus respectivos arquivos correspondentes.
4. Salve o projeto no Snack (botão **Save**).

## 📱 Como Usar

1. Quando o emulador carregar o aplicativo (pela aba Web, iOS, Android ou pelo app Expo Go no seu celular).
2. Toque no campo **Data de Nascimento**.
3. Digite uma data completa usando o teclado numérico (o próprio sistema vai colocar as barras `/`).
4. Toque no botão **Calcular Idade** (ou Calcular Diagnóstico).
5. O resultado aparecerá logo abaixo detalhando a classificação do paciente e a idade exata formatada.

---
*Projeto acadêmico desenvolvido para a construção de interfaces mobile com React Native.*
