# ADR: Deploy automático da branch `main` para produção no Render.com

**Status:** Proposto

## Contexto
Queremos garantir que toda alteração aprovada na branch `main` seja automaticamente publicada em produção, facilitando o fluxo de entrega contínua e reduzindo erros manuais.

## Decisão
- Utilizar GitHub Actions para orquestrar o CI/CD.
- Toda vez que houver um merge/pull request para a branch `main`, o GitHub Actions irá:
  - Rodar testes (se existirem).
  - Fazer deploy automático para um serviço do Render.com configurado para produção.
- O Render.com será configurado para apontar para a branch `main` e rodar o backend em ambiente de produção.

## Consequências
- Deploys mais rápidos e confiáveis.
- Redução de erros humanos.
- Histórico de deploys centralizado no GitHub. 