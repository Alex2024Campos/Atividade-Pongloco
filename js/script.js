//socorro
//querySelector("./#") (consulte um seletor) and getElementById[or class]('')
//variavel para manipular o elemento html canvas

let canvasPong = document.getElementById('canvas')
let quadro = canvasPong.getContext('2d') //Preparando o canvas para receber desenhos 2D
let player1 =  quadro.fillRect(100,100,50,50) //Vai fazer um desenho, O QUE É FILLRECT????? Fill= Preenchimento, Rect= Retangular. Vai preencher retangulamente. Os valores decidem a posição do elemento desenhado.