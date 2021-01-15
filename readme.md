1. ensure you have docker and docker compose installed
2. start docker
3. install with `npm i`
4. rename `.env_example` to `.env`
5. add a private key to `.env`
6. change the username and password in api
7. run `docker-compose up`
8. open http://localhost:6688/
9. deploy the aggregator with [remix](http://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.6.6+commit.6c089d02.js&gist=a4dd0ef57000c8cc96604b340dd32bef) from the gist file using these params
    ```
    const LINK = "0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2";
    const paymentAmount = 1;
    const timeout = 60; 
    const validator = "0x0000000000000000000000000000000000000000"; 
    const minSubmissionValue = 10000000000; 
    const maxSubmissionValue = 1000000000000; 
    const decimals = 8; 
    const description = "HNY/WXDAI oracle";
    ```







