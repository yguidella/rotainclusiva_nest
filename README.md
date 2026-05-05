# ♿ Rota Inclusiva

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?style=for-the-badge&logo=insomnia&logoColor=white)

---

## 🎯 O Projeto

O **Rota Inclusiva** é uma solução de **Back-end** desenvolvida para enfrentar os desafios de mobilidade urbana de pessoas com deficiência ou mobilidade reduzida. Através de uma API REST, conecta motoristas voluntários e passageiros em uma rede de caronas colaborativas e acessíveis.

---

## 🚀 Funcionalidades Principais (CRUD)

* **Gestão de Usuários:** Cadastro, autenticação e gerenciamento de perfis.
* **Módulo de Caronas:** Fluxo completo para criação, listagem, atualização e remoção de ofertas de transporte.
* **Categorização de Acessibilidade:** Gerenciamento dos tipos de suporte e acessibilidade oferecidos.
* **Cálculo de Previsibilidade:** Funcionalidade central do sistema que utiliza distância e velocidade para calcular o **tempo estimado de viagem**, permitindo melhor planejamento e autonomia ao usuário.

---

## 🧮 Funcionalidade Especial

### ⏱️ Cálculo de Tempo Estimado de Viagem

Cálculo do tempo estimado de deslocamento, baseado em:

- Distância da viagem
- Velocidade média informada

Essa funcionalidade transforma dados simples em uma informação essencial para acessibilidade e planejamento de mobilidade, garantindo mais autonomia para o usuário.

---

## 🗂️ Estrutura de Dados (Entidades e Atributos)

* **Usuario:** id, nome, usuario, senha, foto.
* **Carona:** id, origem, destino, distancia, velocidade, data, acessibilidade_id, usuario_id.
* **Acessibilidade:** id, tipo.

---

## 🛠️ Stack Técnica

* Framework: NestJS (Node.js)
* Linguagem: TypeScript
* Banco de Dados: MySQL
* ORM: TypeORM
* Documentação/Testes: Insomnia

---

## 🤝 Fluxo Colaborativo

* Metodologia Ágil com entregas contínuas
* Uso de Git/GitHub com branches e Pull Requests
* Integração segura entre equipe de desenvolvimento
* Comunicação via Discord e suporte de organização via Canva

---

## 🌍 Impacto Social

O **Rota Inclusiva** transforma dados técnicos em autonomia real. O cálculo de tempo estimado não é apenas um número, mas uma ferramenta essencial para planejamento de deslocamento, promovendo inclusão e acessibilidade na mobilidade urbana.
