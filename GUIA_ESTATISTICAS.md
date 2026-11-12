# Estatísticas e contador de visitas — Pomar do Peregrino

## Situação
A página inicial já contém a área do contador. **Ainda não está registrando visitas**, pois é preciso criar e ativar um serviço de estatísticas. Nenhum número fictício é apresentado.

## Ativação com GoatCounter
1. A pessoa responsável pela Acolhida Beija-Flor cria uma conta no site oficial: https://www.goatcounter.com/ (verificar plano e condições atuais).
2. Escolhe um identificador para o site e obtém o domínio real `identificador.goatcounter.com`.
3. Informa esse domínio ao responsável técnico, **sem compartilhar senha**.
4. Em `estatisticas.js`, alterar `const DOMINIO_GOATCOUNTER = "";` para o domínio confirmado, sem `https://`.
5. Publicar a alteração no GitHub e conferir o registro de uma visita de teste no painel GoatCounter.
6. Testar se o endpoint público `https://identificador.goatcounter.com/counter/TOTAL.json` permite leitura pública e responde com `count`. Se não permitir, a contagem pública continuará com aviso, mas não deve exibir números falsos. Avaliar configurações e alternativas compatíveis.

## Observações importantes
- O registro começa após a ativação; não recupera acessos anteriores.
- Visualizações não equivalem a pessoas únicas. Filtros, bloqueadores e bots afetam a precisão.
- O contador da página inicial usa a métrica TOTAL disponibilizada pelo serviço, quando acessível.
- O código de rastreamento colocado **apenas na página inicial** mede acessos a essa página. Para medir fichas individuais, croqui e passeio virtual, instalar o script de rastreamento também nessas páginas, após validação do serviço.
- Avaliar e atualizar o aviso de privacidade do site antes de ativar a ferramenta.
- Nunca colocar senhas, tokens ou informações pessoais em arquivos públicos do GitHub.
