# Travis Coveralls Example
Example repo for including Coveralls in Travis CI build process. (Using jest to run tests)

Prerequisites
-------------
- Make sure repo is added to Travis CI
- Make sure repo is added to Coveralls.io

Install Coveralls package
-------------------------
`npm install coveralls --save-dev`

Add Coveralls command to package.json
-------------------------------------
```json
  "scripts": {
    ...
    "coveralls": "jest --coverage && cat ./tests/coverage/lcov.info | coveralls",
  },
```

Add Coveralls command to .travis.yml
------------------------------------
```yml
  script:
  - npm run coveralls
```

Configurations
-------------
The above steps automatically integrates Coveralls in the Travis CI build. Further configurations are possible under the "PULL REQUESTS ALERTS" section in the repo settings at coveralls.io.
