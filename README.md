### ReactAPI 

Project is build on based on api developed on using spring boot "https://github.com/TrishaChetani/SpringRestAPIApplication" 
 - Motivation : to learn and understand how we can consume API in frontend
 
### ToolUsed
Node, react

#### Run
Clone and ```npm start```

### Test
To run in local environment with dependencies setup
    npm i 
To run the consumer pact test which will generate the pact file to ./pacts/consumer-provider.json
   npm
To publish the pact file to the pact broker 
    npm run publish:pact
To run the provider pact test to verify the pact file
    npm run verify:pact
### Structure: 
```tree -L 2 -I "node_modules"```
.
├── Dockerfile
├── README.md
├── __pact-tests__
│   └── bookTickets.test.pact.js
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── precache-manifest.a2527413d40db9268861dc71513b3469.js
│   ├── robots.txt
│   ├── service-worker.js
│   └── static
├── docker-compose.yml
├── logs
│   └── pact.log
├── package-lock.json
├── package.json
├── pactSetup.js
├── pactTestWrapper.js
├── pacts
│   └── consumer-provider.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── publishPacts.js
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
└── verifyPacts.js

### Test
- The testsuites are found in the __pact-tests__ folder
    1. The mock server is 127.0.0.1:8991
    2. While we are writing a consumer test, do not be mis-led by the provider variable.
    This is where we define the pact server which mocks our provider and will respond to API requests we make to it.
    3. Pact will start a service listening on port 8891 writing logs to a logs/ directory
    where the test are executed from and will create the actual pact contract file in the pacts/ directory.
    4. Pact will use the latest specification version  (spec: 2)
    
    
  #### Test Setup:
   -  provider.setup())
      Before our tests can actually run, we need to start the Pact service and provide it with 
      our expected interactions. 
      Example: authentication_api.test.pact.js
          ```const interaction = {
          state: 'Authenticate with valid clientId',
          uponReceiving: 'accessToken, timeLeftRefreshThresholdMs and authenticationErrorMsg',
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
              'Content-Type': 'application/json;charset=UTF-8'
              },
              body: like(EXPECTED_BODY),
          },
          };
          return provider.addInteraction(interaction);
          ```
          1. This is where we define our expectations. Any mis-match between expected interactions will cause the test to throw an error when being asserted
          2. withRequest and willRespondWith define the expected interaction between API consumer and provider
          3. withRequest part is defining what the consumer API is expected to send and we use the capability from the pact library known as Matchers to allow some flexibility on the provider implementation of the contract
          
      - Consumer Test:
                  ```
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
                          expect(response.headers['content-type']).toEqual('application/json;charset=UTF-8');
                          expect(response.data).toEqual(EXPECTED_BODY);
                          expect(response.status).toEqual(200);
                      })
                      .then(() => provider.verify())
                  })
                  ```
                  1. This is our actual consumer test where we use the axios.request to make HTTP requests to the mocked API service that the pact library created for us.
                  This is the actual expected usage in real world where fire a API call to the provider
                  curl -X POST "https://iconverse-govtech.taiger.io/iconverse-admin/api/external/authenticate" -H "accept: */*" -H "Content-Type: application/json" -d "{ clientId: \"admin\", clientSecret: \"admin\"}"
                  2. We assert with provider.verify()) that all expected interactions have been fulfilled by making sure it doesn't throw an error and conclude the test.
                  
         - Test Teardown:
           provider.finalize())
           After running the test, you have a pact file in the pacts/ directory that you can collaborate with your provider.
      ####reference: 
       -  https://github.com/DiUS/pact-workshop-js
       - https://github.com/pact-foundation/pact-js/tree/master/examples/jest
       - DiUS/pact-workshop-js
                  
                  



