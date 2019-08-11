# [Siris Technology](https://siristechnology.com)

> A company website built using react, gatsby, graphql, node

<a id="status-image-popup" title="Latest push build on default branch: passed" name="status-images" class="pointer open-popup">
  <img src="https://travis-ci.com/siristechnology/siris-technology.svg?branch=master" alt="build:passed">
</a>

## Running locally for development

- Create `.env.development` file with all environment variables as in `.env.example` e.g. GITHUB_TOKEN, SITE_RECAPTCHA_KEY, SITE_RECAPTCHA_SECRET
- To download dependencies: `$ yarn`
- To run locally: `$ yarn start:dev`
- To stop dev server: `$ yarn stop:dev`

## Running production build

- Create `.env.production` file with all environment variables as in `.env.example` e.g. GITHUB_TOKEN, SITE_RECAPTCHA_KEY, SITE_RECAPTCHA_SECRET
- To build all static files: `$ yarn build`
- To run from build static files: `$ yarn start`

### Clean the cache

- `$ yarn reset`

## Contributors

- [Ajayns](https://github.com/ajayns)
- [Ismail](https://smakosh.com)

## License

Copyright © 2019 Siris Technology\
Licensed under the MIT license. [LICENSE.md](LICENSE.md)

---
