# Curso Full Cycle 3.0 - Módulo Sistemas Monolíticos

<div>
    <img alt="Criado por Alcir Junior [Caju]" src="https://img.shields.io/badge/criado%20por-Alcir Junior [Caju]-%23f08700">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23f08700">
</div>

---

## Descrição

O Curso Full Cycle é uma formação completa para fazer com que pessoas desenvolvedoras sejam capazes de trabalhar em projetos expressivos sendo capazes de desenvolver aplicações de grande porte utilizando de boas práticas de desenvolvimento.

---

## Repositório Pai
https://github.com/alcir-junior-caju/study-full-cycle-3-0

---

## Visualizar o projeto na IDE:

Para quem quiser visualizar o projeto na IDE clique no teclado a tecla `ponto`, esse recurso do GitHub é bem bacana

---
### O que é uma aplicação monolítica
- AplicaçÕes 'Tradicionais';
- 'Tudo em um';
- Unidade de deployment;

### Polêmica por trás das aplicações monolíticas
- Aplicações da década passada;
- Ultrapassada;
- Não escalam;
- Impedem o crescimento do negócio;
- Alto acoplamento;
- Grande parte dos argumentos são Falsos!;

### Quando utilizar monolitos pode ser uma boa
- Novos projetos onde o modelo de negócio não está claro;
- Instabilidade no core do nogécio;
- Evitar complexidade no processo de deploy;
- Evitar complexidade na operação;

### Tipos de sistemas monolíticos
- Single process;
- Monolitos distribuídos;
- Black box;

### Single Process
- Alto acoplamento;
- Modular;
- Modular com bancos de dados segregados;

### User a longo prazo
- User;
    - Dados pessoais;
    - Endereços;
    - Cartões de crédito;
    - Tickets de suporte;
    - Compras;
    - Carrinho abandonado;
    - Devoluções;
    - Financiamento;
    - Indicações;
    - Reclamações;
    - Email mkt;
    - Campanhas;
    - Favoritos;
    - Lista de casamento;
    - Histórico de login;
    - Lista de preferência de emails;
    - Avaliação de produtos;
    - CRM;
    - Propostas;
    - Lances / Leilões;
    - Cartão de pontos;

### Principais problemas com essa abordagem
- Não existe contexto;
- Entidades que se relacionam;
- Não há divisão, Tudo faz parte de tudo. Tudo grudado em tudo;
- Efeitos colaterais indesejados;
- Precisamos evitar isso!;

### Sistemas monolíticos modulares
- Módulos quebrados em 'Bounded contexts';
- Conversam através de contratos e facades;
- Entidades podem ser 'duplicadas' tendo apenas os atributos necessários;
- Equipes especializadas por módulos;
- Alta coesão: O que muda junto, permanece junto;

### DDD é um ponto de partida
- Começar a pensar em contextos;
    - Catálogo - User;
    - Carrinho - User;
    - Checkout - User;
    - Pagamentos - Cliente;
    - Suporte ao Cliente - Cliente;
    - Marketing - Lead;
    - Programa de pontos - Beneficiário;
    - Lista de casamento - Convidado;
- Cada contexto vira um módulo;

### Sistemas monolíticos modulares com bancos segregados
- Mesma característica do modular mas com bases de dados segregadas;

### Se é para segregar tanto, não é melhor já trabalhar com microserviços?
- Um único deploy;
- Única operação;
- Observabilidade simplificada;
- Sistemas se comunicando internamente;
- Única linguagem, Menos governança;

### Shared Kernel - Seedwork
- Ponto de atençao ao shared kernel;
