import { getRepository } from 'typeorm';
import { isUuid } from 'uuidv4';

import Provider from '../models/Provider';
import ProviderObservation from '../models/ProviderObservation';
import AppError from '../errors/AppError';

interface Request {
  observacao: string;
  provider_id: string;
}

class CreateProviderObservationsService {
  public async execute({
    observacao,
    provider_id,
  }: Request): Promise<ProviderObservation> {
    const providersRepository = getRepository(Provider);
    const providersObservationsRepository = getRepository(ProviderObservation);

    if (!isUuid(provider_id)) {
      throw new AppError('Invalid provider.');
    }

    const provider = await providersRepository.findOne(provider_id);

    if (!provider) {
      throw new AppError('Invalid provider.');
    }

    const observation = providersObservationsRepository.create({
      observacao,
      provider_id,
    });

    await providersObservationsRepository.save(observation);
    return observation;
  }
}

export default CreateProviderObservationsService;
