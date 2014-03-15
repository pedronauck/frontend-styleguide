![](http://f.cl.ly/items/2l0u1s0b0R2X0K253w30/github_image.png)

> Escrever códigos é o que fazemos todos os dias. Porém muitos desses códigos não vão passar apenas por uma única pessoa, mas sim por muitas. Por isso criamos esse guia, para que você possa manter um padrão de convenções e boas práticas para que seu código seja o mais declarativo possível e que ele possa ter um brilho natural.

[Veja o guia completo aqui](http://www.pedronauck.com/frontend-styleguide)

## Faça seu Fork!

Um padrão é algo determinado por uma ou por algumas pessoas. Não existe o melhor ou o pior padrão, existe aquele que você mais se adequar. Por isso, caso você não se interesse por este guia de estilo, você pode fazer um fork e criar o seu próprio guia de estilo do jeito que melhor se conver.

**Vamos as instruções:**

1 - Primeiramente faça um fork deste projeto.  
2 - Instale as dependências dele com o NPM.

``` bash
# estou assumindo que você já tem o nodejs instalado
$ npm install
```

3 - Estamos usando o [Assemble.io](http://www.assemble.io), um gerador de sites estáticos para rodar a aplicação. O Assemble usa no seu core o GruntJS para gerenciar o gerador, por isso alguns comandos são necessários para você montar seu guia de estilo.

| comando      |      descrição      |
|--------------|-------------|
| grunt server | task que levanta um server na porta :9000 com livereload e watch para você setar e criar seu ambiente de desenvolvimento |
| grunt build  | task para gera os arquivos para build |
| grunt deploy | task para deploy do projeto via `grunt-ftp-deploy` |

**OBS:** As configurações para deploy estão definidas dentro do arquivo `_deploy-config.yml`, altere este arquivo para fazer o deploy da sua aplicação. Para você poder fazer um deploy corretamente via ftp, você precisa criar um arquivo `.ftppass` na raíz do seu projeto com seus dados de username/password. [Veja aqui](https://github.com/zonak/grunt-ftp-deploy#authentication-parameters) como fazer.

4 - Após rodar estes comandos espero que tudo tenha dado certo

## Estrutura do projeto

```
src/
├── assets/
│   ├── fonts/
│   ├── images/
│   ├── javascripts/
│   ├── stylesheets/
├── includes/
│   ├── css/
│   ├── html/
│   ├── js/
├── layouts/
├── pages/
├── partials/
```

- `_config.yml`: Arquivo contendo as metadatas do projetos
- `_deploy-config.yml`: Configurações de deploy via `grunt-ftp-deploy`
- `config.rb`: Configurações de build do Compass
