//socorro
//querySelector("./#") (consulte um seletor) and getElementById[or class]('')
//variavel para manipular o elemento html canvas

let canvasPong = document.getElementById('canvas')
let quadro = canvasPong.getContext('2d') //Preparando o canvas para receber desenhos 2D, eba.


 quadro.fillStyle = '#8b8b8b' //Muda acor de todos os elementos que tiverem quadro. Adiciona cor ao fillrect, mudando assim, qual cor será preenchida pelos comandos feitos pelo programador


 let player1 =  { //Vai fazer um desenho, O QUE É FILLRECT????? Fill= Preenchimento, Rect= Retangular. Vai preencher retangulamente. Os valores decidem a posição do elemento desenhado.12
    px:80,
    py:260,
    tx:30,
    ty:200,
    dir:0,
}


let player2 =  {
    px:1160,
    py:260,
    tx:30,
    ty:200,
    dir:0,
}   


let bolinha = {
    px:620, // Posição da bolinha no eixo X
    py:345, // Posição da bolinha no eixo Y
    tx:30, // Largura do objeto
    ty:30, // Altura do objeto
    dir:8, // é um novo atributo que atribue a direção que é 8 pixels no caso do prof. Andre Mauricio.
    dirY:2.
}


quadro.fillRect(1280/2-20,720/2-15,30,30) //Esses fill rects servem para fazer o seguinte: preencher uma parte específica da tela com o bloco ai, puxando a cor do quadro e preenchendo o espaço delimitado por isso)
//vale ressaltar também que os 2 primeiros valores determinam a posição do quadro e os 2 próximos valores determinam o tamanho do preenchimento.

quadro.font = '30px arial'
let pts1 = 0
let pts2 = 0

//let jogar = true: variável que informa que o jogo tá ativo
let jogar = true

//let score1 = quadro.fillText(`Pontos 1: ${pts1}`,280,50)
//let score2 = quadro.fillText(`Pontos 2: ${pts2}`,850,50)
//contatenar= +

function draw(){
    quadro.fillRect(player1.px,player1.py,player1.tx,player1.ty)
    quadro.fillRect(player2.px,player2.py,player2.tx,player2.ty)
    quadro.fillRect(bolinha.px,bolinha.py,bolinha.tx,bolinha.ty)
    quadro.fillText(`Pontos: ${pts1}`,280,50)
    quadro.fillText(`Pontos: ${pts2}`,890,50)
}

function telaVencedor(){
    quadro.clearRect(0,0,1280,720)
    quadro.font = '60px arialblack'
    quadro.fillText(`Jogador 1: ${pts1}`, 200,345)
    quadro.fillText(`Jogador 2: ${pts2}`, 800,345)
    quadro.fillStyle = 'black'
}






function moverJogador1(){
    if(player1.py < 0){
        player1.py = 0
    }
    else if(player1.py > 520){
        player1.py = 520
    }
    player1.py += player1.dir
}

document.addEventListener('keydown', function (e){
    if(e.keyCode === 87){ //o 83 é o valor numérico da respectiva tecla, a qual foi visualizada pelo console.
        player1.dir = -8
    }
    else if(e.keyCode === 83){
        player1.dir = 8
    }
})

document.addEventListener('keyup', function (e){
    if(e.keyCode === 87){ //linha, pelo oque foi dito pelo Christiano, aparentemente foi feito no console e fica assim no código visualmente. Meu pai do céu.
        player1.dir = 0
    }
    else if(e.keyCode === 83){
        player1.dir = 0
    }
    
}) //chamando função ao clicar.









function moverJogador2(){
    if(player2.py < 0){
        player2.py = 0
    }
    else if(player2.py > 520){
        player2.py = 520
    }
    player2.py += player2.dir
}

document.addEventListener('keydown', function (e){
    if(e.keyCode === 38){
        player2.dir = -8
    }
    else if(e.keyCode === 40)
        player2.dir = 8
})


document.addEventListener('keyup', function (e){
    if(e.keyCode === 38){
        player2.dir = 0
    }
    else if(e.keyCode === 40)
        player2.dir = 0
})










function moverBolinha(){
    bolinha.px += bolinha.dir //pegando o objeto bolinha para movimenta-lo 8px. 
    bolinha.py += bolinha.dirY
    if(bolinha.py < 0){
        bolinha.dirY *= -1
    }
    else if(bolinha.py > 690){
        bolinha.dirY *= -1
    }
}

function fimjogo(){
    if(pts1 > 2 || pts2 > 2){
        jogar = false
    }
}

function colisaoBolinha(){
    if (bolinha.py + bolinha.ty >= player2.py && bolinha.py <= player2.py + player2.ty && bolinha.px >= player2.px - player2.tx){
        bolinha.dir *= -1 //Multiplicando para que ela vá ao contrário
    }
    else if(bolinha.py + bolinha.ty >= player1.py && bolinha.py <= player1.py + player1.ty && bolinha.px <= player1.px + player1.tx){ //se a posição da bola for maior ou igual que a do objeto lá (barrinha), fará os bgl *E*. 
        bolinha.dir *=-1 //+ player1.tx
    }
}

function pontos(){
    if (bolinha.px < -100){
        bolinha.px = 620
        bolinha.py = 345
        bolinha.dir *= -1
        pts2 += 1
}
    else if(bolinha.px > 1380){
        bolinha.px = 620
        bolinha.py = 345
        bolinha.dir *= -1
        pts1 += 1
    }
}

function main(){
    if(jogar){
    quadro.clearRect (0,0,1280,720) //limpar o quadro. Irá limpar do 0 do eixo X e y. Apagando todos os elementos que estão no canva (cleaRect) para na sequência redesenha-los, 0 posição inicial e 1280 tamanho do canva, 0 posição inicial do eixo y e 720 altura do canva.
    draw() 
    moverBolinha() //Para que serve os parenteses?
    colisaoBolinha()
    moverJogador1()
    moverJogador2()
    pontos()
    fimjogo() //função jogo
    }
    else{
        draw()
        telaVencedor()
    }
}
// Aqui, utilizando-se da variável criando anteriormente, utilizamos da mesma para determinar se o jogo estará funcionadno (true) ou não (false) a depender da quantidade de pontos
setInterval(main, 10) //passar argumentos. Executará a função main em um determinado intervalo de tempo.


// bolinha.ty = tamanho da bola.
//quero chorar