
# 📱 Validador de CPF - React Native + Node.js

Este projeto é um app mobile feito com **React Native (Expo)** que valida CPFs utilizando um **microsserviço em Node.js**.  
A aplicação possui persistência local e comunicação com um backend próprio.

---

## 🔧 Tecnologias Utilizadas

- React Native com Expo
- Node.js + Express (microsserviço de validação de CPF)
- Axios (requisições HTTP)
- AsyncStorage (persistência local)
- TypeScript

---

## 📁 Estrutura do Projeto

```
validadorcpf/
├── validador-backend/        # Microsserviço Node.js
└── validadorcpf2/            # Projeto React Native (Expo)
```

---

## ▶️ Como executar o projeto

### 1️⃣ Pré-requisitos

- Node.js (recomendado 18+)
- Expo CLI:
  ```bash
  npm install -g expo-cli
  ```
- EAS CLI:
  ```bash
  npm install -g eas-cli
  ```
- Java JDK 17 (para gerar keystore, se for gerar build APK manual)

---

### 2️⃣ Instalar dependências

#### 📦 Backend:

```bash
cd validador-backend
npm install
```

#### 📦 App Mobile:

```bash
cd ../validadorcpf2
npm install
```

---

### 3️⃣ Rodar o backend (microsserviço)

```bash
cd validador-backend
node server.js
```

⚠️ Certifique-se de editar o `server.js` com o **IP local da sua máquina**, por exemplo:

```js
app.listen({ port: 3333, host: '192.168.0.101' }, () => {
  console.log(' Microsserviço rodando em http://192.168.0.101:3333');
});
```

---

### 4️⃣ Rodar o app com Expo

```bash
cd ../validadorcpf2
npx expo start
```

Use o app **Expo Go** no celular e escaneie o QR code.

---

### 5️⃣ Persistência

O app armazena localmente os CPFs válidos utilizando `AsyncStorage`.


---

## ⚠️ Importante: Atualize o IP no app

Dentro do arquivo `CadastrarScreen.tsx`, altere o IP na linha onde é feita a requisição para o backend:

```ts
const response = await axios.post('http://192.168.61.113:3333/validar-cpf', { cpf });
```

Substitua `192.168.61.113` pelo **seu IP local atual**, conforme exibido pelo comando `ipconfig`.

Essa alteração é necessária para que o app mobile consiga se comunicar com o backend corretamente durante o desenvolvimento.



---

## 📲 Build do APK

### 1. Subir sua keystore manualmente:

Se já gerou a keystore:
```bash
npx eas credentials -p android
```

Escolha:
```
❯ Upload my own keystore
```

Preencha:

- Path to keystore: `./my-key.jks`
- Password: `123456`
- Alias: `validadorcpf`
- Key password: `123456`

---

### 2. Rodar build:

```bash
npx eas build -p android --profile development
```

Após a conclusão, será gerado um link de download do `.apk`.

---
---

## 📂 Keystore

Uma keystore de exemplo foi gerada:

- Nome: `validadorcpf-keystore.jks`
- Senha: `123456`
- Alias: `validadorcpf`
- Senha da chave: `123456`

Use apenas para testes. **Não utilize essa keystore em produção.**

---

## 📸 Telas do App

- Tela Inicial
- Cadastro de CPF
- Validação de CPF
- Lista de CPFs validados
- Detalhes de validação

---

## 👨‍💻 Autor

Feito por Vitor Souza.  
Projeto educacional para disciplina de desenvolvimento mobile.
