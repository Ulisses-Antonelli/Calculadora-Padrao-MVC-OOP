# Calculadora Simples - Implementação MVC e JavaScript Orientado a Objetos

Este repositório contém uma calculadora interativa implementando a arquitetura MVC (Model-View-Controller) e escrita em JavaScript com uma abordagem orientada a objetos. A calculadora permite que os usuários realizem cálculos básicos e vejam o resultado na tela.

## Status do projeto: 
`Incompleto:` é preciso ajustar o reset após o cálculo ser executado.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white)

## Arquitetura MVC

A aplicação segue o padrão arquitetural MVC (Model-View-Controller) para manter uma clara separação de responsabilidades e melhorar a organização do código. Aqui está uma breve visão geral de cada componente:

### Model (Modelo)

O Model representa os dados e a lógica de negócio da aplicação. Neste projeto, a classe `CalculatorModel` gerencia o display da calculadora e realiza os cálculos.

### View (Visualização)

A View é responsável por apresentar a interface do usuário aos usuários e exibir o display da calculadora. Neste projeto, a classe `CalculatorView` lida com os elementos do DOM, como os botões numéricos e o display exibido na página.

### Controller (Controlador)

O Controller atua como intermediário entre o Model e a View, tratando a interação do usuário e atualizando o Model de acordo. Neste projeto, a classe `CalculatorController` vincula manipuladores de eventos aos botões da calculadora e gerencia as ações de cálculo e reset do display.

## Como Começar

Para utilizar a Calculadora Interativa, siga os seguintes passos:

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em seu navegador da web.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

## Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para abrir issues e enviar pull requests.

---

O objetivo de implementar a Calculadora Interativa com a arquitetura MVC e a abordagem orientada a objetos é meramente um exercício de aprendizado. O projeto foi desenvolvido com o intuito de compreender melhor os princípios da arquitetura MVC e da programação orientada a objetos em JavaScript, bem como as técnicas de implementação de uma calculadora interativa.
