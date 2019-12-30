let pact = require("@pact-foundation/pact-node")
let path = require("path")
let opts = {
    provider: 'iProvider',
    pactFilesOrDirs: [path.resolve(process.cwd(), "pacts")],
    providerBaseUrl: 'http://localhost:9090',
    pactBrokerUrl: 'https://trishachetani.pact.dius.com.au',
    pactBrokerToken: process.env.PACT_TOKEN,
    publishVerificationResult: true,
    providerVersion: '1.0.0'
}
pact.verifyPacts(opts).then(() => {
    console.log('success')
    process.exit(0)
}).catch((error) => {
    console.log('failed', error)
    process.exit(1)
})
