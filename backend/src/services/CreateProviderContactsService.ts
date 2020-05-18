import { getRepository } from 'typeorm';
import { isUuid } from 'uuidv4';

import Provider from '../models/Provider';
import ProviderContact from '../models/ProviderContact';
import AppError from '../errors/AppError';

interface Request {
  telefone_01?: string;
  telefone_02?: string;
  email?: string;
  nome_contato?: string;
  endereco?: string;
  provider_id: string;
}

class CreateProviderContactsService {
  public async execute(contactData: Request): Promise<ProviderContact> {
    const providersRepository = getRepository(Provider);
    const providersContactsRepository = getRepository(ProviderContact);

    if (!isUuid(contactData.provider_id)) {
      throw new AppError('Invalid provider.');
    }

    const provider = await providersRepository.findOne(contactData.provider_id);

    if (!provider) {
      throw new AppError('Invalid provider.');
    }

    const contact = providersContactsRepository.create(contactData);

    await providersContactsRepository.save(contact);
    return contact;
  }
}

export default CreateProviderContactsService;
