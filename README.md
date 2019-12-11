# tpz-errors

Módulo dedicado a padronizar os erros e tratamento de erros.

## Instalação

`npm install tpz-queue -P`

## Utilização

A interface expõe um objeto com duas propriedades:

- `error` - um objeto contendo todos os Errors;
- `errorHandlerMW` - um middleware para tratamento de erros.

### Errors

Os erros expostos na propriedade `error` extendem a classe Error, e tem uma propriedade `status` contendo o status HTTP equivalente. A mensagem do erro tem default para uma descrição do status HTTP.

| Nome | Status Code | Status Name | Parametros |
| --- | --- | --- | --- |
| AuthenticationError | 401 | UNAUTHORIZED | message |
| AuthorizationError | 403 | FORBIDDEN | message |
| DatabaseError | 503 | SERVICE_UNAVAILABLE | message |
| InternalServerError | 503 | SERVICE_UNAVAILABLE | message |
| NotFoundError | 404 | NOT_FOUND | message |
| RequestError | 400 | BAD_REQUEST | message |
| ValidationError | 400 | BAD_REQUEST | message, field |

### Middleware

O middleware exposto na propriedade `errorHandlerMW` vai tratar o erro e responder a request de forma padronizada.

Para utilizar em uma aplicação express, registre o middleware após as rotas:
```
const app = require('express')();
const { errorHandlerMW } = require('tpz-errors');

app.use(...); // suas rotas

app.use(errorHandlerMW);
```

Garanta que os erros são passados para a função `next` dos middlewares que processam a request:
```
const { ValidationError } = require('tpz-errors');

module.exports = (req, res, next) => {
  next(new ValidationError('campo invalido', 'campo'));
}
```

Caso a request tenha a propriedade logger populada, o erro será logado automaticamente.
