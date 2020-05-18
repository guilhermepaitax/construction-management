import { Router } from 'express';
import CreateProviderBillingsService from '../services/CreateProviderBillingsService';

const providersBillingsRouter = Router();

providersBillingsRouter.post('/:id', async (request, response) => {
  const { id } = request.params;
  const {
    metodo,
    prazo,
    banco,
    agencia,
    conta,
    operacao,
    titularidade,
  } = request.body;

  const createBilling = new CreateProviderBillingsService();

  const billing = await createBilling.execute({
    provider_id: id,
    metodo,
    prazo,
    banco,
    agencia,
    conta,
    operacao,
    titularidade,
  });

  response.json(billing);
});

export default providersBillingsRouter;
