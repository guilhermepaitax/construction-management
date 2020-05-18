import { Router } from 'express';
import providersRouter from './providers.routes';
import providersContactsRouter from './providersContacts.routes';
import providersBillingsRouter from './providersBillings.routes';
import providersObservations from './providersObservations.routes';

const routes = Router();

routes.use('/providers', providersRouter);
routes.use('/providers/contacts', providersContactsRouter);
routes.use('/providers/billings', providersBillingsRouter);
routes.use('/providers/observations', providersObservations);

export default routes;
