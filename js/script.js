//socorro
//querySelector("./#") (consulte um seletor) and getElementById[or class]('')
//variavel para manipular o elemento html canvas

let canvasPong = document.getElementById('canvas')
let quadro = canvasPong.getContext('2d') //Preparando o canvas para receber desenhos 2D, eba.


 quadro.fillStyle = '#8b8b8b' //Muda acor de todos os elementos que tiverem quadro. Adiciona cor ao fillrect, mudando assim, qual cor será preenchida pelos comandos feitos pelo programador
let player1 =  { //Vai fazer um desenho, O QUE É FILLRECT????? Fill= Preenchimento, Rect= Retangular. Vai preencher retangulamente. Os valores decidem a posição do elemento desenhado.
    px:80,
    py:260,
    tx:30,
    ty:200,
}

let player2 =  quadro.fillRect(1180,260,30,200) 
let bolinha = quadro.fillRect(1280/2-15,720/2,30,30) //Esses fill rects servem para fazer o seguinte: preencher uma parte específica da tela com o bloco ai, puxando a cor do quadro e preenchendo o espaço delimitado por isso)
//vale ressaltar também que os 2 primeiros valores determinam a posição do quadro e os 2 próximos valores determinam o tamanho do preenchimento.

quadro.font = '30px arial'
let pts1 = 0
let pts2 = 0
let score1 = quadro.fillText(`Pontos 1: ${pts1}`,280,50)
let score2 = quadro.fillText(`Pontos 2: ${pts2}`,850,50)
//contatenar= +

