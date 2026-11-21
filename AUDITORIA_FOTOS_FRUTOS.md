# Auditoria geral das referências botânicas — Pomar do Peregrino
Data: 21/11/2026. Fonte: arquivos `dados-plantas.js` e `ficha-individual.html` do repositório. **Auditoria estática do código; não representa verificação visual, teste de disponibilidade das URLs ou confirmação da espécie de cada muda.**

## Critério educativo aprovado
> **Imagem de referência botânica:** utilizada para auxiliar na identificação da planta. Pode apresentar diferenças em relação ao exemplar cultivado no Pomar do Peregrino.

A legenda foi inserida na ficha individual e aparece quando a imagem é carregada. Fotografias do pomar não são obrigatórias; podem ser usadas fotografias ou ilustrações botânicas confiáveis, com créditos/licenças.

## Inventário
- **128** posições cadastradas; **73** nomes distintos de plantas no índice.
- **36** códigos com referência individual explícita no objeto `photoReferences`, abrangendo até **20** nomes de plantas; **20** arquivos de imagem distintos citados nesse objeto.
- Existem também arquivos locais, referências por regras de espécie/grupo e pesquisas automáticas no Wikimedia Commons.
- **Não é possível afirmar que todas as 128 posições exibem uma imagem válida** sem testar as páginas publicadas e conferir a correspondência botânica.

## Triagem por nome (73 nomes; grupos mutuamente exclusivos para organizar o trabalho)
A classificação abaixo é uma **triagem de mecanismos presentes no código**, não uma aprovação das imagens. Quando mais de um mecanismo existe, a categoria indica a primeira via relevante, mas há regras que podem prevalecer sobre outras.

| Categoria | Nomes | Espécies ou nomes cadastrados |
|---|---:|---|
| Referência explícita por código | 20 | Araçá-laranja; Araçá-vermelho; Caqui Fuyu; Caqui Kioto (Chocolate); Cerejeira-do-rio-grande; Cortiça Crespa; Erva-mate; Fisális; Fortunella Xim Xim; Grumixama; Guabiju; Guaçatonga; Ingá-chinelo; Laranja Champagne; Maçã Eva; Mirtilo; Pitanga; Tangerina Ponkan; Tangerina Satsuma Okitsu; Uvaia |
| Arquivo local | 5 | Cabeludinha; Ingá-anão; Pêssego Comum; Pêssego Douradão; Pêssego Ouro Mel |
| Referência por espécie/grupo ou variedade | 7 | Guabiroba Crespa; Guabiroba-do-campo; Laranja Sanguínea; Laranja Umbigo; Laranja Valência; Pêssego Delicioso; Pêssego Premier |
| Busca automática ou outra tentativa sem referência fixa garantida | 28 | Abacate Hass; Ameixa Amarela; Ameixa Coração de Boi; Ameixa Roxa Comum; Café; Figo Branco; Figo Roxo de Valinhos; Framboesa; Goiaba Amarela; Goiaba Vermelha; Graviola; Kiwi; Laranja Açúcar; Laranja Folha Murcha; Laranja Lima; Lichia; Limão Siciliano; Limão Tahiti; Maçã Julieta; Mamão; Nogueira-Pecã; Pera Abacaxi; Pera Branca; Pera Pau; Pera-d'água; Romã; Tangerina Mexerica; Tangerina Montenegrina |
| Sem busca automática segura, sem referência fixa na triagem | 13 | Ameixinha Amarela; Amora Portuguesa; Araçá-amarelo; Baga de Macaco; Campari; Cipó-rabo-de-macaco; Cortiça Lisa; Cravo Louro; Falta identificar; Ingá-banana; Ingá-de-metro; Ingá-feijão; Jabuticaba |

**Atenção:** nomes com referência explícita podem ter outros códigos da mesma planta sem imagem individual; alguns tratamentos do código, como os de laranjas e pêssegos, priorizam regras de grupo em vez da referência por código. Guabirobas usam imagem comparativa de outra identificação e não devem ser apresentadas como prova da espécie da muda. Para ingá-anão e cabeludinha, confirmar autoria e permissão de publicação dos arquivos locais.

## Pendências de validação
1. Testar cada uma das 128 URLs de ficha, a imagem exibida, seu texto alternativo, a legenda e o retorno ao croqui em celular e computador.
2. Conferir as imagens fixas no Wikimedia Commons: arquivo, identificação, autoria, licença e eventual exigência de atribuição.
3. Conferir os arquivos locais `cabeludinha.png`, `inga anão.png` e `pessego.jpeg` e suas autorizações.
4. Para os 28 nomes com busca automática, substituir gradualmente resultados variáveis por referências selecionadas e documentadas.
5. Para os 13 nomes sem referência fixa na triagem, obter identificação segura antes de associar uma imagem. `Falta identificar` deve permanecer sem identificação especulativa.
6. Confirmar diferenças entre espécie, grupo e cultivar, especialmente citros, pêssegos, guabirobas, cortiças e ingás.

## Experiência do peregrino
- As fichas têm nome, código, doador, localização no croqui e navegação entre posições.
- A legenda educativa é apresentada apenas quando uma imagem carregou; na ausência dela, há uma mensagem de referência visual em preparação.
- Há ajustes de tela pequena e imagens dimensionadas, mas **a legibilidade, o enquadramento e o tempo de carregamento ainda exigem teste em dispositivos reais**.
- O site não deve apresentar uma imagem errada apenas para preencher a ficha.

## Critério de aprovação por ficha
- [ ] Nome/código/doador correspondem ao índice
- [ ] Imagem carregou e ajuda a reconhecer a planta
- [ ] Espécie ou grupo da imagem identificados com grau de certeza adequado
- [ ] Fonte, autoria e licença ou autorização conferidas
- [ ] Legenda educativa visível e texto alternativo adequado
- [ ] Botões e croqui funcionam no celular
