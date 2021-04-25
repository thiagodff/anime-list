import { QueryClient } from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createLocalStoragePersistor } from 'react-query/createLocalStoragePersistor-experimental'

export const queryClient = new QueryClient();

const localStoragePersistor = createLocalStoragePersistor()

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
})
