import { getRepository } from 'typeorm';
import { isUuid } from 'uuidv4';

import Provider from '../models/Provider';
import ProviderBilling from '../models/ProviderBilling';
import AppError from '../errors/AppError';

interface Request {
  metodo?: string;
  prazo?: string;
  banco?: string;
  agencia?: string;
  conta?: string;
  operacao?: string;
  titularidade?: string;
  provider_id: string;
}

class CreateProviderBillingsService {
  public async execute(billingData: Request): Promise<ProviderBilling> {
    const providersRepository = getRepository(Provider);
    const providersBillingsRepository = getRepository(ProviderBilling);

    if (!isUuid(billingData.provider_id)) {
      throw new AppError('Invalid provider.');
    }

    const provider = await providersRepository.findOne(billingData.provider_id);

    if (!provider) {
      throw new AppError('Invalid provider.');
    }

    const billing = providersBillingsRepository.create(billingData);

    await providersBillingsRepository.save(billing);
    return billing;
  }
}

export default CreateProviderBillingsService;
