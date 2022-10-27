# NCC-Template
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=curium-rocks_ncc-template&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=curium-rocks_ncc-template) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=curium-rocks_ncc-template&metric=coverage)](https://sonarcloud.io/summary/new_code?id=curium-rocks_ncc-template) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=curium-rocks_ncc-template&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=curium-rocks_ncc-template) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=curium-rocks_ncc-template&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=curium-rocks_ncc-template) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=curium-rocks_ncc-template&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=curium-rocks_ncc-template) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=curium-rocks_ncc-template&metric=bugs)](https://sonarcloud.io/summary/new_code?id=curium-rocks_ncc-template)

This a template repository for spinning up a new project using ncc. It uses eslint with the standard profile, jest, and sonarcloud.

## How to build
You can use `npm run build` to compile the typescript down to one js file (dist/index.js), this file can be uploaded for use in serverless functions or other environments by directly calling with Node.JS using `node path/to/index.js`

## How to test
You can run the tests with `npm test`.

## Code formatting
You can check if the code meets formatting standards with `npm run lint` if there are any violations you may be able to fix them automatically with `npm run lint:fix`.
