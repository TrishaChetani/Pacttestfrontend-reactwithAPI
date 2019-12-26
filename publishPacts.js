let publisher = require("@pact-foundation/pact-node")
let path = require("path")
let opts = {
    providerBaseUrl: "http://localhost:8082",
    pactFilesOrDirs: [path.resolve(process.cwd(), "pacts")],
    pactBroker: "https://taiger.pact.dius.com.au/",
    pactBrokerToken: process.env.PACT_TOKEN,
    consumerVersion: "2.0.0",
}

