const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Validação simples de CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0, resto;
  for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[10])) return false;

  return true;
}

// Rota GET para teste
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Rota principal de validação
app.post('/validar-cpf', (req, res) => {
  const { cpf } = req.body;
  if (!cpf) return res.status(400).json({ erro: 'CPF é obrigatório' });

  const valido = validarCPF(cpf);
  res.json({ valido });
});

// Escutar em todas interfaces (0.0.0.0) na porta 3333
app.listen({ port: 3333, host: '192.168.1.14' }, () => {
  console.log(' Microsserviço rodando em http://192.168.1.14:3333');
});
