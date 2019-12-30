let publisher = require("@pact-foundation/pact-node")
let path = require("path")
let opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(), "pacts")],
    pactBroker: "https://trishachetani.pact.dius.com.au/",
    pactBrokerToken: process.env.PACT_TOKEN,
    consumerVersion: "2.0.0",
}
publisher.publishPacts(opts)
