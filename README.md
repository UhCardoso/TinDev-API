# DevTinder API

Projeto do Backend em NodeJS onde foi criado um app baseado nos matches do tinder, no qual os desenvolvedores podem curtir um ao outro com base nas tecnologias que eles têm conhecimento. O projeto foi desenvolvido durante a semana Omnistack7, praticando os principais conceitos de ReactJS, ReactNative e NodeJs com MongoDB. 
Neste projeto eu adicionei uma funcionalidade extra no qual o usuário poderá ver uma página com lista de desenvolvedores que deram match.
![alt text](https://thumbs2.imgbox.com/d2/6d/r9mRBzrn_t.png)

---
## Features do projeto
- **Rota para cadastrar dev:**

`https://api--tindev.herokuapp.com/devs`

No frontend utilizando a biblioteca *Axios* é feito uma requisição **POST**, enviando o seu usuário do GitHub com seguinte campo:

`"username": "username-github"`

- **Rota para listar devs:**

`https://api--tindev.herokuapp.com/devs`

No frontend utilizando a biblioteca *Axios* é feito uma requisição com o metodo HTTP **GET** retornando um array de JSON. Veja o exemplo abaixo:

![alt text](https://thumbs2.imgbox.com/b6/7c/kQ2W6lQ7_t.png)

- **Rota para dar like no dev:**
`https://api--tindev.herokuapp.com/devs/<id_do_dev>/likes`

No frontend utilizando a biblioteca *Axios* é feito uma requisição com o metodo HTTP **POST**, passando o id do dev que será curtido na url da requisição.

- **Rota para dar deslike no dev:**
`https://api--tindev.herokuapp.com/devs/<id_do_dev>/likes`

No frontend utilizando a biblioteca *Axios* é feito uma requisição com o metodo HTTP **POST**, passando o id do dev que não foi curtido na url da requisição.
