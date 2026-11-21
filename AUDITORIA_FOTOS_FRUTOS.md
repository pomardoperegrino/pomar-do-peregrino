# Auditoria de imagens — Pomar do Peregrino
Atualização: 21/11/2026. Base: código do repositório GitHub. **Esta é uma auditoria documental e de referências, não uma aprovação visual das fotografias.**

## O que existe
- 128 posições cadastradas no índice `dados-plantas.js`, referentes ao croqui de 05/11/2026; não equivalem à confirmação individual do plantio.
- 35 posições possuem referência fotográfica explícita no objeto `photoReferences` de `ficha-individual.html`. Muitas posições compartilham a mesma imagem da espécie ou grupo; 35 **não** significa 35 fotos distintas.
- O código também possui tratamentos específicos para arquivos locais de **cabeludinha** (`cabeludinha.png`), **ingá-anão** (`inga anão.png`) e **pêssego** (`pessego.jpeg`), utilizados em múltiplas posições. Os arquivos constam no repositório.
- Para outras plantas, há tentativa de pesquisa automática no Wikimedia Commons. Esse mecanismo **não** comprova que a imagem será encontrada, carregará ou corresponderá à cultivar.
- Certos nomes ambíguos têm a busca automática bloqueada para evitar atribuições erradas.
- As fotografias do terreno e da aquisição de mudas documentam o projeto, mas não substituem fotografias botânicas identificadas.

## Melhorias aplicadas nesta revisão
- Em `ficha-individual.html`, a imagem do ingá-anão passa a usar o arquivo relativo local como fonte principal, evitando dependência do endereço `raw.githubusercontent.com`.
- Esta auditoria foi atualizada para reconhecer as referências adicionadas ao código depois do relatório de 12/11/2026.

## Pontos de atenção
1. **Não marcar fotos como verificadas apenas porque há URL ou arquivo no código.** Conferir visualmente fruto, folhas, legenda e correspondência com a espécie.
2. Verificar nome científico e cultivar com registro do viveiro, etiqueta ou profissional habilitado, sobretudo para cortiça-crespa/lisa, guabirobas, ingás, fisális, campari, ameixinha-amarela, cravo-louro e espécies não identificadas.
3. Para imagens do Wikimedia Commons, conferir na página original o arquivo, a autoria, a licença vigente e as exigências de atribuição.
4. Para imagens recebidas por mensagem, registrar autoria e autorização de publicação antes de considerar definitivas.
5. Priorizar fotos nítidas do **fruto**, preferencialmente ainda na planta, com enquadramento adequado para celular e texto alternativo descritivo.
6. Fotos de referência de uma espécie não comprovam a identidade da muda plantada nem a cultivar comercial.
7. Confirmar o carregamento das imagens no site publicado em celular e computador; testes de código não substituem esse teste.

## Ordem sugerida de trabalho
- **Etapa 1:** confirmar os arquivos locais de cabeludinha, ingá-anão e pêssego e verificar suas autorizações.
- **Etapa 2:** conferir visualmente as 35 referências explícitas, agrupando por espécie para não repetir trabalho.
- **Etapa 3:** substituir gradualmente buscas automáticas por imagens fixas, verificadas, com crédito e licença.
- **Etapa 4:** completar as espécies sem fotografia confiável, sem usar imagens incorretas apenas para preencher espaços.
- **Etapa 5:** validar as fichas e QR Codes em celular antes de imprimir placas.

## Critério de conclusão por espécie
[ ] Identificação botânica confirmada
[ ] Fotografia real, nítida e correspondente
[ ] Arquivo abre no site publicado
[ ] Autoria e licença/autorização registradas
[ ] Legenda distingue imagem de referência de fotografia da muda local

**Observação:** o painel `revisao-fotos.html` apresenta categorias automáticas úteis para triagem, mas seus indicadores não representam uma contagem de fotos visualmente aprovadas.
