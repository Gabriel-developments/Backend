# ADR: Deploy automático da branch `develop` para homologação no Render.com

**Status:** Proposto

## Contexto
Para garantir um ambiente de testes/homologação, será criada a branch `develop`. Alterações podem ser testadas nesse ambiente antes de irem para produção.

## Decisão
- Criar a branch `develop` no repositório.
- Configurar um segundo serviço no Render.com para homologação, apontando para a branch `develop`.
- O GitHub Actions será configurado para:
  - Fazer deploy automático para o Render de homologação sempre que houver merge/pull request para a branch `develop`.
- O ambiente de homologação usará variáveis de ambiente e banco de dados próprios, separados do ambiente de produção.

## Consequências
- Ambiente seguro para testes antes do deploy em produção.
- Possibilidade de validar novas features e correções sem impactar usuários finais.
- Fluxo de trabalho mais profissional e seguro. 