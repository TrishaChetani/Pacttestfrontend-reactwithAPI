"use strict"
const path = require("path")
const { Matchers } = require("@pact-foundation/pact")
const axios = require('axios');
const { like } = Matchers;
describe('book Tickets request', () => {
  const urlpath = '/bookTickets';
  const getApiEndpoint = () => `http://${global.host}:${global.port}`
  const EXPECTED_BODY = 
  {
    "id": 5,
    "amount": 0,
    "category": "string"
};
  const BODY =  {
    "amount": 0,
    "category": "string",
    "id": 0
  };
  beforeEach(() => {
    const interaction = {
      state: 'ticket booking with valid id, amount, category',
      uponReceiving: 'id, amount and category',
      withRequest: {
        method: 'POST',
        path: urlpath,
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: like(BODY),
      },
      willRespondWith: {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: like(EXPECTED_BODY),
      },
    };
    return provider.addInteraction(interaction);
  });
  // add expectations
  it('returns a successfully body',() => {
   return axios.request({
      method: 'POST',
      baseURL: getApiEndpoint(),
      url: urlpath,
      headers: {
        Accept: '*/*',
        'content-type': 'application/json',
      },
      data: BODY,
    }) 
      .then((response) => {
        expect(response.headers['content-type']).toEqual('application/json');
        expect(response.data).toEqual(EXPECTED_BODY);
        expect(response.status).toEqual(200);
    })
    .then(() => provider.verify())
  })
})