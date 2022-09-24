<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->
## About The Project

This use undici for http client;

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

<!-- This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* node
  ```sh
  node >= 14
  ```

### Installation
1. npm

  ```sh
  npm install zincsearch-node 
  ```
2. yarn

  ```sh
  yarn install zincsearch-node 
  ```
3. pnpm

  ```sh
  pnpm add zincsearch-node 
  ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
1. import 
  * es6
  ```ts
  import ZincSearch from 'zincsearch-node';
  ```
  * require
  ```js
  const ZincSearch = require('zincsearch-node/lib/index.cjs')
  ```
2. init
  ```js
  const zincSearch = new ZincSearch({
    url: /* zincsearch url */,
    user: /* zincsearch user  */,
    password: /* zincsearch password  */,
  });
  // check healthz
  await zincSearch.healthz();
  ```
3. [more example see this wiki](https://github.com/IceHugh/zincsearch-node/wiki)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[ygz14836187@163.com](ygz14836187@163.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




