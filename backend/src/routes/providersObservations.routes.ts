import { Router } from 'express';
import CreateProviderObservationsService from '../services/CreateProviderObservationsService';

const providersObservationsRouter = Router();

providersObservationsRouter.post('/:id', async (request, response) => {
  const { id } = request.params;
  const { observacao } = request.body;

  const createObservation = new CreateProviderObservationsService();

  const observation = await createObservation.execute({
    provider_id: id,
    observacao,
  });

  response.json(observation);
});

export default providersObservationsRouter;
