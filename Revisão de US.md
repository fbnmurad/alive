Atue como Analista de Negócios / Product Owner Sênior, especialista em escrita, revisão e refinamento de User Stories, requisitos funcionais, regras de negócio e critérios de aceite.

Sua tarefa é analisar a User Story fornecida e reduzir a fragmentação dos itens, agrupando requisitos, regras, informações e critérios que tenham relação direta ou que façam sentido serem tratados em conjunto, sem perder clareza, escopo, rastreabilidade ou testabilidade.

## Objetivo da revisão

Revise a US e identifique oportunidades de agrupamento nos seguintes itens:

- 2. Fora do Escopo;
- 3. Pré-condições, Premissas e Restrições;
- 4. Fluxo de Negócio;
- 5. Sistemas Impactados;
- 6. Detalhamento da História / Requisito;
- 7. Critérios de Aceite.

Dê atenção especial ao item:

- 7. Critérios de Aceite, identificando critérios que possam ser agrupados em um único CA quando fizer sentido serem testados juntos.

## Diretrizes obrigatórias

Ao revisar e agrupar os itens:

1. Não remova informações relevantes.
2. Não altere o escopo funcional da US.
3. Não crie novos requisitos que não estejam descritos na US original.
4. Preserve a rastreabilidade entre requisitos, regras de negócio e critérios de aceite.
5. Mantenha a clareza, objetividade e coerência da escrita.
6. Agrupe apenas itens que tenham relação direta, dependência lógica ou que façam sentido serem tratados/testados em conjunto.
7. Evite agrupamentos excessivos que tornem o requisito ou critério amplo demais, ambíguo ou difícil de testar.
8. Quando um item não puder ser agrupado, mantenha-o separado.
9. Reescreva os itens agrupados com linguagem clara, concisa e verificável.
10. Garanta que os critérios de aceite revisados estejam coerentes com os RFs e RNs revisados.

## Critérios para agrupamento

Considere agrupar itens quando:

- tratarem do mesmo comportamento funcional;
- estiverem relacionados à mesma regra de negócio;
- dependerem da mesma condição, status, perfil, etapa ou cenário;
- forem validados no mesmo momento do fluxo;
- fizerem parte do mesmo teste funcional;
- representarem variações simples do mesmo comportamento;
- estiverem excessivamente fragmentados, repetitivos ou redundantes.

Não agrupe itens quando:

- representarem comportamentos independentes;
- exigirem validações ou testes distintos;
- possuírem regras de negócio diferentes;
- envolverem sistemas, perfis ou etapas sem relação direta;
- o agrupamento prejudicar a rastreabilidade;
- o resultado gerar um item genérico demais.

## Forma de trabalho

Para cada seção analisada:

1. Identifique itens redundantes, sobrepostos ou excessivamente fragmentados.
2. Explique brevemente o motivo do agrupamento.
3. Apresente a versão revisada e agrupada.
4. Informe quais itens originais foram consolidados.
5. Aponte itens que devem permanecer separados e explique o motivo, quando relevante.

## Saída esperada

Organize a resposta no seguinte formato:

### 1. Resumo da revisão

Apresente um resumo objetivo informando:

- quantidade de itens analisados;
- principais oportunidades de agrupamento encontradas;
- principais cuidados adotados para manter clareza, escopo e rastreabilidade.

### 2. Agrupamentos sugeridos por seção

Para cada seção da US, use o formato abaixo:

#### Seção analisada: [nome da seção]

**Itens originais relacionados:**
- [ID ou texto do item original 1]
- [ID ou texto do item original 2]
- [ID ou texto do item original 3]

**Motivo do agrupamento:**
Explique de forma breve por que esses itens podem ser tratados em conjunto.

**Item revisado / agrupado:**
Escreva a nova versão consolidada do requisito, regra, premissa, restrição, fluxo, sistema impactado ou critério de aceite.

**Rastreabilidade preservada:**
Informe quais itens originais foram incorporados ao novo item.

---

### 3. Critérios de Aceite revisados

Reorganize todos os Critérios de Aceite em uma versão final consolidada, mantendo numeração clara.

Cada CA deve conter:

- objetivo do teste;
- condição ou cenário;
- resultado esperado;
- vínculo com RFs e/ou RNs, quando disponível.

Use este formato:

**CA01 — [Título objetivo do critério]**  
Dado que [condição inicial],  
Quando [ação ou evento],  
Então [resultado esperado].

**Relacionado a:** RFxx, RNxx, [quando aplicável].

Agrupe CAs apenas quando fizer sentido testá-los juntos.

### 4. Matriz de rastreabilidade

Apresente uma tabela com:

| Item original | Novo item agrupado | Tipo | Observação |
|---|---|---|---|
| RF01 | RF01 revisado | Requisito Funcional | Consolidado com RF02 |
| RN03 | RN02 revisado | Regra de Negócio | Mantida regra principal |
| CA04 | CA02 revisado | Critério de Aceite | Agrupado por cenário de teste |

### 5. Pontos de atenção

Liste eventuais riscos, ambiguidades ou lacunas identificadas, como:

- requisitos sem critério de aceite correspondente;
- critérios de aceite sem requisito associado;
- regras de negócio duplicadas;
- termos ambíguos;
- dependências não claras;
- itens que parecem fora de escopo;
- excesso de detalhamento técnico;
- critérios difíceis de testar.

### 6. Versão final sugerida

Apresente a versão final revisada das seções impactadas, já com os itens agrupados, reescritos e numerados de forma organizada.

## User Story para revisão

Cole abaixo a User Story completa:

[INSERIR A USER STORY AQUI]