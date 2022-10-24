# MongoDB Car Shop :shopping_cart:

![MONGODB](https://user-images.githubusercontent.com/98343640/197544382-e85924e8-7cce-45cf-91c7-d3aea915f4d6.png)


## :page_with_curl: Sobre

O projeto Car Shop tem como objetivo trabalhar com banco de dados MongoDB, que contém dados de uma concessionária de veículos. A partir disso, foi desenvolvido uma API RESTful utilizando a arquitetura MSC (Model, Service e Controller), a POO (Programação Orientada a Objetos) e os princípios de SOLID com TypeScript.


## :man_technologist: Habilidades Desenvolvidas

* Conexão do banco de dados MongoDB com o Node.js
* Manipular e acessar os dados no banco de dados MongoBD
* Criar uma API RESTful
* Criar classes 
* Definir interfaces e types
* Utilizar POO (Programação Orientada a Objetos)
* Utilizar SOLID 
* Utilizar TypeScript
* Utilizar o Mongoose.js 
* Implementar testes unitários com Mocha, Chai e Sinon


## :hammer_and_wrench: Ferramentas Utilizadas

* MongoDB
* Mongoose.js
* Node.js
* Express
* Mongoose.js
* TypeScript
* OOP
* SOLID
* Mocha.js
* Chai.js
* Sinon.js


## :female_detective: Instruções de Instalação e Execução
Para rodar a aplicação é necessário ter o Git, MongoDb, Docker e o Docker Compose instalados na sua máquina.

Faça o clone do repositório e entre na pasta do projeto:

```sh
git clone git@github.com:famalaquias/mongodb-car-shop.git && cd mongodb-car-shop
```

<details>
  <summary>
    <strong>Executando o MongoDB localmente</strong>
  </summary><br>

  ### 1 - Entre na pasta do projeto e utilize o comando `npm install` para instalar as dependências necessárias.
  
  ### 2 - Coloque a URI do MongoDB no arquivo `./src/models/connection.ts` na variável `MONGO_DB_URL`.
  
  ### 3 - Utilize o comando `npm run dev` para inicializar a API.
</details>

<details>
  <summary>
    <strong>Executando o MongoDB via Docker</strong>
  </summary><br>

   ### 1 - Entre na pasta do projeto e utilize o comando `docker-compose up -d`. 
   
   ### 2 - Entre no terminal do container através do comando `docker exec -it car_shop bash`.
   
   ### 3 - Instale as dependências necessárias através do comando `npm install`.
   
   ### 4 - Utilize o comando `npm run dev` para inicializar a API.
</details>


## :test_tube: Testes Unitários

Execute o comando abaixo no diretório raiz do projeto para rodar os testes:
```sh
npm run test:dev
```

Execute o comando abaixo no diretório raiz do projeto para verificar a cobertura de testes:
```sh
npm run test:coverage
```
![TESTESCOVARAGE](https://user-images.githubusercontent.com/98343640/197551415-52e6b1e1-65bd-4b84-a5e9-9db5af3ddb66.png)
