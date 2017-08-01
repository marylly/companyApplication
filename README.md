# Company Application Test
Esse é um projeto de teste de uma API, construída utilizando o framework Laravel 5, utilizado para construção estruturada de aplicações Web e API (Application Programming Interface), sendo possível atualizar as informações via HTTP Request ou CRUD feitos em Angular2, CSS(bootstrap) e HTML.

## Instalação da Aplicação

### Requisitos
Serão necessárias necessárias as seguintes ferramentas:

**Git**

Git é uma ferramenta de controle de versionamento de arquivos, muito utilizado no versionamento de arquivos que compõe um software, ou parte dele, sendo possível trabalhar em forma colaborativa, controlando a concorrência de manutenção dos arquivos de um projeto. Os arquivos versionados podem ficar armazenados num servidor de escolha, porém existem outras ferramentas para armazenamento de arquivos versionados utilizando o Git, como: GitHub, GitLab, BitBucket, etc.

**PHP Cli (Command-line)**

O PHP Cli (Command-line) é o PHP para execução de scripts em linha de comando com a linguagem PHP, será utilizado pelo Composer e para processamento dos testes unitários.

**Composer**

O Composer é um orquestrador de dependências da aplicação em PHP, onde a dependência é verificada, e caso não exista, a mesma é baixada e instalada para funcionamento da aplicação.

**Docker e o Docker-Compose**

O Docker é uma ferramenta de criação, manuntenção e execução de múltiplos containers de uma aplicação. Concentra todas as ferramentas, frameworks e conteúdo de uma aplicação criada, sendo possível criar um ambiente independente do ambiente do sistema operacional onde é executado.

**Node.js e NPM**


## Instalação das Dependências

Após a instalação das ferramentas necessárias, abra um terminal de comando.
Acesse a pasta criada com o download do projeto, e execute o composer para instalação das dependências do PHP dentro da pasta `api`:

```
$ composer install
```
_Observação:_ Caso a atualização das dependências do PHP sejam executadas, verifique a versão do PHP que deve ser >= 5.6 e se estão instalados os pacotes das extensões MBString, XML e/ou DOM.

Após finalização da atualização das dependências do PHP, vamos atualizar as dependências do NPM. Acesse a pasta `web`e execute o seguinte comando:
```
npm install
```

Após conclusão do download das dependências do PHP e do NPM, é necessário efetuar o download das imagens que serão utilizadas nos containers que serão gerados pelo Docker.

## Setup da Aplicação

Para fazer o setup da aplicação que está estrutura em containers dockers, deve se acessar a pasta raiz do projeto e executar o seguinte comando para construção dos containers necessários para funcionamento da aplicação:

```
$ docker-compose build
```
Terminados os downloads das imagens do dockers, crie os container e coloque eles no ar:

```
$ docker-compose up
```
_Observação:_ Caso a aplicação não fique disponível, verifique se a porta http 8064 do servidor web(nginx), a porta 3306 do MariaDB, a porta 9000 utilizada pelo serviço PHP-FPM e a porta 8001 ocupada pelo phpMyAdmin estejam ocupadas, impedindo de subir a aplicação ou parte dela. Se estas portas estiverem sendo utilizadas, as mesmas podem ser alteradas no arquivo docker-compose.yml existente na pasta raiz do projeto na seção dos serviços **Web**, **DB**, **php** e/ou **pma** respectivamente.

Após o setup completo da aplicação, ela pode ser executada com o comando a abaixo, a deixando em execução background:

```
$ docker-compose up -d
```

Para encerramento da aplicação, acesse a pasta raiz do projeto e digite o seguinte comando:
```
$ docker-compose down
```
## Acessando a aplicação
Infelizmente a aplicação inteira ainda não está em containers do docker, então tanto a api laravel quando a interface deverão ser executados via linha de comando. (Comming soon)

Para colocar o API da aplicação no ar, deve ser acessada a pasta `api` e digitado no terminal o seguinte comando:
```
php artisan serve --port=8081
```
A aplicação pode ser testada na seguinte URL pelo navegador: `http://localhost:8081`
_Observação:_ A porta da aplicação pode ser alterada de 8081 para outra, mas esta porta deve também ser atualizada no serviço de acesso aos dados da API dentro do Angular nos arquivos da pasta `web/app/service/`.

Para colocar a interface da aplicação no ar deve abrir um novo terminal, lembrando que o serviço do laravel deve já estar executando em outro terminal, acessar a pasta `web` digitar o seguinte comando:
```
npm start
```
Normalmente um navegador já aberto automaticamente, mas pode ser acessada na URL impressa após o comando, que normalmente é  `http://localhost:9000`

### API Laravel

```
php artisan serve --port=8081
```

Após conclusão do setup de todos os containers, é possível acessar a aplicação através da url `http://localhost:8064`

```
npm start
```

## Banco de Dados
Foi utilizado o banco de dados MariaDB para a persistência de dados nesta aplicação, que pode ser acessada através da url `http://localhost:8001` para verificação dos dados.

## Testes Unitários (Comming Soon)
Não foi possível testar e implementar, mas pretendo fazer.

## Code Coverage Report (Comming Soon)
Não foi possível testar e implementar, mas pretendo fazer.

## BDD (Comming Soon)
Não foi possível testar e implementar, mas pretendo experimentar.