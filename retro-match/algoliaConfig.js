import algoliasearch from 'algoliasearch/lite';

// Reemplaza con tus credenciales de Algolia
const searchClient = algoliasearch('G9VDNKVK0X', '241f8b2a54a229d1dc57667a194847bd');

export const algoliaConfig = {
  indexName: 'products',
  searchClient,
};