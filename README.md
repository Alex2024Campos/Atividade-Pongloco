# Atividade-Pongloco
>[!Important]
>- Criação de um jogo de Ping Pong utilizando de HTML, CSS e JS. 
>- Dupla: Alex e Christian.
>- Turma: 2°Mtec Desenvolvimento de Jogos Digitais.
>- Aula: Desenvolvimento de Jogos para Web (DJW).
>- Aula: 08/05/2024.
>- Escola: Etec. Basilides de Godoy.
>- Abaixo estão alguns comandos utilizados nesse projeto e as suas explicações:
>-  Em caso de bug devido a puxar o repositório em outro computador, faça: git pull --allow-unrelated-histories e depois só dê o push para ligar o git com o pc requisitado;
  ## setInterval:
 - setInterval: Serve para executar uma função ou instrução várias vezes em determinado intervalo de tempo.
![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/160960774/197b0582-904a-4af6-a929-ba233d2d8579)
 

_________________________________________________________________________________________________________________________________ 


   ## fillRect and fillStyle:
 - fillRect: Se resume em permitir o usuário preencher a tela com determinada cor, utilizando-se dos eixos X e Y duas vezes: px e py que determinará a posição do quadro e tx e ty que determinará o preenchimento conforme o desejado pelo programador.
 - fillStyle: Isso permite mudar a cor que será colocada pelo fillRect, em resumo, muda o preenchimento de determinado espaço que você mesmo inserir.
   ### Foto do site:
   ![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/160960774/9afa41e5-cf64-4b39-9393-b352449d511d)
   ### Foto do VisualStudio 
   ![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/160960774/4d2a91ce-7dac-490f-ab06-6a6e7536343b)


_________________________________________________________________________________________________________________________________ 


   ## Linha de Código da Movimentação do Objeto:
 - O código a seguir permite que a bola tenha um efeito de movimentação ao redesenha-lo uma posição a frente, fazendo assim o tal do efeito. Além disso, quando ela chegar em determinada posição ela será lançada na direção contrária.
   ![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/160960774/591c59cb-9710-43e4-bc22-65334a3594f8)


_________________________________________________________________________________________________________________________________ 


## function moverJogador1():
- Nessa function iremos determinar a qual velocidade o jogador1 (barra da esquerda) se move no eixo de posição Y. Ela pega o addEventListener (Keydown = qualquer tecla) e leva o resultado para a function moverJogador e assim fará a movimentação do objeto. Ela só será executada quando o jogador pressionar uma tecla, em resumo. Para deixar mais fácil de entender, "até criancinha de rua faz", como Marco diria: temos uma Function que não serve para nada (moverJogador1) e a "colocamos" em um evento de clique, o qual irá fazer o que estiver na function caso o clique seja feito pelo usuário.
![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/160960774/d1c9da38-ff22-4a2a-9161-3b16cb441061)

## function declaration:
- Se resume em fazer uma function sem nome, a qual ocupa menos linhas de código e é até mais prático. Em outras palavras, é uma forma direta de fazer um comando ser feito após determinada ação ou outro movimento. Utilize a imagem abaixo de exemplo, é a 1° linha de código.
![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/160960774/87319ab3-8da1-4a60-a2b4-2e8339f49e9b)


## Function Anonymous (anônima):
 - A função anônima fará com que ao clicar nessas teclas em específico, a barra se movimente para cima ou para baixo, junto da função movimentarJogador1, que depois será chamada na função main. É uma função sem nome que aparenta não conseguir ser utilizada como parâmetro em outras functions.
![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/162368958/e10464c7-2e83-4f79-a0fd-e0f315ec7ac2)


_________________________________________________________________________________________________________________________________ 


## Tecla de movimento:
- Escolhendo tecla que movimentará a barra pelo console do navegador. Vemos lá os valores numéricos de cada tecla para atribuir o valor dela ao código.
![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/162368958/09c56282-f585-48c0-9ed5-6db9dfc1e845)


_________________________________________________________________________________________________________________________________ 

## Function moverBolinha():
- Na function para movimentar a bola do jogo, fizemos algumas modificações no "else if", adicionando uma linha de código que estabelece um limite de altura para a bolinha com base na barra. Em outras palavras, se ultrapassar a altura ou ser igual a ela, a bolinha fará as ações abaixo.
![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/162368958/82698f69-b923-423f-9f0b-f5664cd25c1a)


![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/162368958/7cafd1ce-60a4-4a65-9e51-6548e81ee145)
![image](https://github.com/Alex2024Campos/Atividade-Pongloco/assets/162368958/cbe1db42-726d-49f7-891d-34ad12fefa89)
