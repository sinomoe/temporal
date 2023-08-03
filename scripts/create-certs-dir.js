// Create /tmp/temporal-certs and populate it with certs from env vars.
// Used in CI flow to store the Cloud certs from GH secrets into local files.
const fs = require('fs-extra');

const targetDir = process.argv[2] ?? '/tmp/temporal-certs';

fs.mkdirsSync(targetDir);
fs.writeFileSync(`${targetDir}/tls.pem`, process.env.TEMPORAL_TLS_CERT);
fs.writeFileSync(`${targetDir}/tls.key`, process.env.TEMPORAL_TLS_KEY);
