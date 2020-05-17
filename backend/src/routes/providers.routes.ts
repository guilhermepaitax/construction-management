import { Router } from 'express';
import CreateProviderService from '../services/CreateProviderService';

const providersRouter = Router();

providersRouter.post('/', async (request, response) => {
  const {
    razao_social,
    nome_fantasia,
    cnpj,
    inscricao_estadual,
  } = request.body;

  const createProvider = new CreateProviderService();

  const provider = await createProvider.execute({
    razao_social,
    nome_fantasia,
    cnpj,
    inscricao_estadual,
  });

  response.json(provider);
});

export default providersRouter;
