import { Router } from 'express';
import CreateProviderContactsService from '../services/CreateProviderContactsService';

const providersContactsRouter = Router();

providersContactsRouter.post('/:id', async (request, response) => {
  const { id } = request.params;
  const {
    telefone_01,
    telefone_02,
    email,
    nome_contato,
    endereco,
  } = request.body;

  const createContact = new CreateProviderContactsService();

  const contact = await createContact.execute({
    provider_id: id,
    telefone_01,
    telefone_02,
    email,
    nome_contato,
    endereco,
  });

  response.json(contact);
});

export default providersContactsRouter;
