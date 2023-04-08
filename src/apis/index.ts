export * from './client';

import * as auth from './auth';
import * as todos from './todos';

const apis = { ...auth, todos };
export default apis;
