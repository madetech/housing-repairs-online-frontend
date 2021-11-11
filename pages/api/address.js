// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import SearchPropertiesGateway from '../../gateways/SearchPropertiesGateway';

export default async function handler(req, res) {
  const result = await SearchPropertiesGateway(req.query.postcode);
  res.status(200).json(result)
}
