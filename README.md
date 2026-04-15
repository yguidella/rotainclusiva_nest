#### 🎯 O Projeto
O **Rota Inclusiva** é uma solução de **Back-end** desenvolvida para enfrentar os desafios de mobilidade urbana de pessoas com deficiência ou mobilidade reduzida. Através de uma API REST, conectamos motoristas voluntários e passageiros em uma rede de caronas colaborativas e acessíveis.

---

#### 🚀 Funcionalidades Principais (CRUD)
* **Gestão de Usuários:** Cadastro, autenticação e gerenciamento de perfis de motoristas e passageiros.
* **Módulo de Caronas:** Fluxo completo para criação, listagem, atualização e remoção de ofertas de transporte.
* **Categorização de Acessibilidade:** Gerenciamento de tipos de suporte e acessibilidade oferecidos em cada trajeto.
* **Cálculo de Previsibilidade:** Lógica especializada para converter distância e velocidade em tempo real (Horas/Minutos).

---

#### 🗂️ Estrutura de Dados (Entidades e Atributos)
* **Usuario:** id, nome, usuario (email), senha, foto, tipo (passageiro/motorista).
* **Carona:** id, titulo, descricao, data, local_partida, local_chegada, tempo_estimado.
* **Acessibilidade:** id, tipo_acessibilidade (ex: rampa, cão-guia, espaço para cadeira), descricao.

---

#### 🛠️ Stack Técnica
* **Framework:** NestJS (Node.js)
* **Linguagem:** TypeScript
* **Banco de Dados:** MySQL
* **ORM:** TypeORM
* **Documentação/Testes:** Insomnia

---

#### 🤝 Fluxo Colaborativo
* **Metodologia Ágil:** Organização de tarefas e prazos focada em entregas contínuas.
* **Gestão de Código:** Uso estratégico de branches e Pull Requests no **Git/GitHub** para integração segura.
* **Comunicação:** Alinhamento técnico via Discord e suporte visual via Canva.

---

#### 🌍 Impacto Social
O diferencial do **Rota Inclusiva** é transformar dados técnicos em **autonomia**. O cálculo de tempo estimado não é apenas um número, mas uma ferramenta de planejamento essencial para garantir que o usuário tenha controle total sobre seu deslocamento, minimizando imprevistos.
