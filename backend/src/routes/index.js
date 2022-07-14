import { Router } from 'express';

import shirtsRouter from './shirts';

const appRouter = Router();

appRouter.use('/shirts', shirtsRouter);

export default appRouter;
