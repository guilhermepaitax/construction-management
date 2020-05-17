import { getRepository } from 'typeorm';

import Provider from '../models/Provider';

interface Request {
  razao_social?: string;
  nome_fantasia?: string;
  cnpj?: string;
  inscricao_estadual?: string;
}

class CreateProviderService {
  public async execute(providerData: Request): Promise<Provider> {
    const providersRepository = getRepository(Provider);

    const provider = providersRepository.create(providerData);

    await providersRepository.save(provider);

    return provider;
  }
}

export default CreateProviderService;
