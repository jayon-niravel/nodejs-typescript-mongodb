Node.js, Express.js, MongoDB with Typescript

Required files to run server
private/public key and env files

<br />

## Getting Started

 install dependencies

```bash
yarn
```
<br>

### Without Docker
Note: It is assumed here that you have MongoDB running in the background.

set `.env.development.local` file with your credentials.(like DB URL)

Run the app
```bash
yarn dev
```


### With Docker
Note: It is assumed here that you have installed Docker and running in the background.
```bash
yarn docker:db
```
set `.env.development.local` file with your credentials.(like DB URL)

Run the app
```bash
yarn dev
```



<br />
<br />

### Route Documents

you can access swagger documentation at `http://localhost:3000/api-docs`

<br>
