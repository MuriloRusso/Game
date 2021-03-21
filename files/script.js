var player = "a1";
var isPrimeiraPartida = true;
var pont = 0;
var frutaLoca;
var frutaVermelhaLoca;
var a1, a2, a3, a4, a5, a6, a7, a8, b1, b2, b3, b4, b5, b6, b7, b8, c1, c2, c3, c4, c5, c6, c7, c8, d1, d2, d3, d4, d5, d6, d7, d8, e1, e2, e3, e4, e5, e6, e7, e8, f1, f2, f3, f4, f5, f6, f7, f8, g1, g2, g3, g4, g5, g6, g7, g8, g9, h1, h2, h3, h4, h5, h6, h7, h8;
var frutasAtivas = 0;
var dificuldade = 11;
var isGameOn = false;
var frutasVerdes = 0;
var pontFrutaVermelha = 500;
var isGameMuted = false;
var somFruta = new Audio();
var somFrutaVermelha = new Audio();
somFruta.src = 'files/som/coin.wav'
somFrutaVermelha.src = 'files/som/coin-2.wav'
var nivelDificuldade;

function nivelInfantil(){
    nivelDificuldade = "Infantil";
    sairTelaDificuldade();
}
function nivelMobile(){
    nivelDificuldade = "Mobile";
    sairTelaDificuldade();
}
function nivelComputador(){
    nivelDificuldade = "Computador";
    sairTelaDificuldade();
}
function nivelHard(){
    nivelDificuldade = "Hard";
    sairTelaDificuldade();
}
function sairTelaDificuldade(){
    document.getElementById('tela-dificuldade').style.display = 'none';
    document.getElementById('tela-inicial').style.display = 'flex';
    document.getElementById('sinopse').style.display = 'flex';
    document.getElementById('tut-1').style.display = 'flex';    
    document.getElementById('tut-2').style.display = 'flex';
    if(isPrimeiraPartida === false){
        document.getElementById('btn-mudar-dificuldade').style.display = "block";
        document.getElementById('btn-reiniciar').style.display = "block";
    }
    else{
        document.getElementById('btn-tela-inicial').style.display = "block";
    }
}

function mudarDificuldade(){
    document.getElementById('txt-tela-inicial').style.display = 'none';
    document.getElementById('btn-reiniciar').style.display = 'none';
    document.getElementById('btn-mudar-dificuldade').style.display = 'none';
    document.getElementById('tela-dificuldade').style.display = 'flex';
}

function aumentarDificuldade(){
    if(nivelDificuldade === "Infantil"){
        dificuldade = 50;
    }
    else if(nivelDificuldade === "Mobile"){
        if(frutasVerdes < 6){
            dificuldade = 16;
        }
        else if(frutasVerdes > 6 && frutasVerdes < 11){
            dificuldade = 15;
        }
        else if(frutasVerdes > 11 && frutasVerdes < 16){
            dificuldade = 14;
        }
        else if(frutasVerdes > 16 && frutasVerdes < 21){
            dificuldade = 13;
        }
        else if(frutasVerdes > 21 && frutasVerdes < 26){
            dificuldade = 12;
        }
        else if(frutasVerdes > 26 && frutasVerdes < 31){
            dificuldade = 11;
        }
        else if(frutasVerdes > 51 && frutasVerdes < 101){
            dificuldade = 10;
        }
        else if(frutasVerdes > 101 && frutasVerdes < 121){
            dificuldade = 9;
        }
        else if(frutasVerdes > 121 && frutasVerdes < 131){
            dificuldade = 8;
        }
        else if(frutasVerdes > 131 && frutasVerdes < 141){
            dificuldade = 7;
        }
        else if(frutasVerdes > 141 && frutasVerdes < 151){
            dificuldade = 6;
        }
        else if(frutasVerdes > 151 && frutasVerdes < 161){
            dificuldade = 5;
        }
        else if(frutasVerdes > 151){
            dificuldade = 4;
        }
    }
    else if(nivelDificuldade === "Computador"){
        if(frutasVerdes < 6){
            dificuldade = 11;
        }
        else if(frutasVerdes > 6 && frutasVerdes < 11){
            dificuldade = 10;
        }
        else if(frutasVerdes > 11 && frutasVerdes < 16){
            dificuldade = 9;
        }
        else if(frutasVerdes > 16 && frutasVerdes < 21){
            dificuldade = 8;
        }
        else if(frutasVerdes > 21 && frutasVerdes < 26){
            dificuldade = 7;
        }
        else if(frutasVerdes > 26 && frutasVerdes < 31){
            dificuldade = 6;
        }
        else if(frutasVerdes > 51 && frutasVerdes < 101){
            dificuldade = 5;
        }
        else if(frutasVerdes > 101){
            dificuldade = 4;
        }
    }
    else if(nivelDificuldade === "Hard"){
        if(frutasVerdes < 6){
            dificuldade = 8;
        }
        else if(frutasVerdes > 6 && frutasVerdes < 11){
            dificuldade = 7;
        }
        else if(frutasVerdes > 11 && frutasVerdes < 16){
            dificuldade = 6;
        }
        else if(frutasVerdes > 16 && frutasVerdes < 21){
            dificuldade = 5;
        }
        else if(frutasVerdes > 21 && frutasVerdes < 26){
            dificuldade = 4;
        }
        else if(frutasVerdes > 26){
            dificuldade = 3;
        }
    }
}

function iniciar(){
    a1= 0; a2= 0; a3= 0; a4= 0; a5= 0; a6= 0; a7= 0; a8= 0; b1= 0; b2= 0; b3= 0; b4= 0; b5= 0; b6= 0; b7= 0; b8= 0; c1= 0; c2= 0; c3= 0; c4= 0; c5= 0; c6= 0; c7= 0; c8= 0; d1= 0; d2= 0; d3= 0; d4= 0; d5= 0; d6= 0; d7= 0; d8= 0; e1= 0; e2= 0; e3= 0; e4=0; e5= 0; e6= 0; e7= 0; e8= 0; f1= 0; f2= 0; f3= 0; f4= 0; f5= 0; f6= 0; f7= 0; f8= 0; g1= 0; g2= 0; g3= 0; g4= 0; g5= 0; g6= 0; g7= 0; g8= 0; h1= 0; h2= 0; h3= 0; h4= 0; h5= 0; h6= 0; h7= 0; h8= 0;
    isGameOn = true;
    document.getElementById('tela-inicial').style.display = "none";
    gerarFruta();
    frutasAtivas++;
    loopFrutaVermelha();
    document.getElementById('btn-reiniciar').style.display = "block";
    document.getElementById('btn-mudar-dificuldade').style.display = 'block';
    document.getElementById('btn-tela-inicial').style.display = "none";
    isPrimeiraPartida = false;
    for(var x = 1; x < 9999; x++){
        setTimeout(function(){
            if(frutasAtivas < dificuldade){
                gerarFruta();
                frutasAtivas++;
                frutasVerdes++;
                console.log(frutasAtivas);
                aumentarDificuldade();
            }
            else{
                document.getElementById('txt-tela-inicial').style.display = 'block';
                isGameOn = false;
                document.getElementById('tela-inicial').style.display = "flex";
                document.getElementById('txt-tela-inicial').innerHTML = "Sua pontuação final foi: " + pont + " na dificuldade " + nivelDificuldade;
            }
        }, 700*x);
    }
}
function loopFrutaVermelha(){
    for(var y = 1; y < 11; y++){
        var timeRed = Math.floor(Math.random() * 30000);
        setTimeout(function(){
            gerarFrutaVermelha();
        }, timeRed*y);
    }
}

        function gerarFrutaVermelha(){
            var timeActived = 5000;
            if(isGameOn === true){
                frutaVermelhaLoca = Math.floor(Math.random() * 64);
                if(frutaVermelhaLoca === 0){
                    if(player != "a1" && a1 === 0){
                        document.getElementById('a1').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        a1 = 2;
                        setTimeout(function(){
                            a1 = 0;
                            document.getElementById('a1').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 1){
                    if(player != "a2" && a2 === 0){
                        document.getElementById('a2').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        a2 = 2;
                        setTimeout(function(){
                            a2 = 0;
                            document.getElementById('a2').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 2){
                    if(player != "a3" && a3 === 0){
                        document.getElementById('a3').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        a3 = 2;
                        setTimeout(function(){
                            a3 = 0;
                            document.getElementById('a3').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 3){
                    if(player != "a4" && a4 === 0){
                        document.getElementById('a4').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        a4 = 2;
                        setTimeout(function(){
                            a4 = 0;
                            document.getElementById('a4').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 4){
                    if(player != "a5" && a5 === 0){
                        document.getElementById('a5').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        a5 = 2;
                        setTimeout(function(){
                            a5 = 0;
                            document.getElementById('a5').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 5){
                    if(player != "a6" && a6 === 0){
                        document.getElementById('a6').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        a6 = 2;
                        setTimeout(function(){
                            a6 = 0;
                            document.getElementById('a6').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 6){
                    if(player != "a7" && a7 === 0){
                        document.getElementById('a7').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        a7 = 2;
                        setTimeout(function(){
                            a7 = 0;
                            document.getElementById('a7').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 7){
                    if(player != "a8" && a8 === 0){
                        document.getElementById('a8').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        a8 = 2;
                        setTimeout(function(){
                            a8 = 0;
                            document.getElementById('a8').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                //Coluna B
                else if(frutaVermelhaLoca === 8){
                    if(player != "b1" && b1 === 0){
                        document.getElementById('b1').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        b1 = 2;
                        setTimeout(function(){
                            b1 = 0;
                            document.getElementById('b1').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 9){
                    if(player != "b2" && b2 === 0){
                        document.getElementById('b2').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        b2 = 2;
                        setTimeout(function(){
                            b2 = 0;
                            document.getElementById('b2').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 10){
                    if(player != "b3" && b3 === 0){
                        document.getElementById('b3').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        b3 = 2;
                        setTimeout(function(){
                            b3 = 0;
                            document.getElementById('b3').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 11){
                    if(player != "b4" && b4 === 0){
                        document.getElementById('b4').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        b4 = 2;
                        setTimeout(function(){
                            b4 = 0;
                            document.getElementById('b4').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 12){
                    if(player != "b5" && b5 === 0){
                        document.getElementById('b5').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        b5 = 2;
                        setTimeout(function(){
                            b5 = 0;
                            document.getElementById('b5').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 13){
                    if(player != "b6" && b6 === 0){
                        document.getElementById('b6').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        b6 = 2;
                        setTimeout(function(){
                            b6 = 0;
                            document.getElementById('b6').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 14){
                    if(player != "b7" && b7 === 0){
                        document.getElementById('b7').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        b7 = 2;
                        setTimeout(function(){
                            b7 = 0;
                            document.getElementById('b7').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 15){
                    if(player != "b8" && b8 === 0){
                        document.getElementById('b8').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        b8 = 2;
                        setTimeout(function(){
                            b8 = 0;
                            document.getElementById('b8').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                //Coluna C
                else if(frutaVermelhaLoca === 16){
                    if(player != "c1" && c1 === 0){
                        document.getElementById('c1').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        c1 = 2;
                        setTimeout(function(){
                            c1 = 0;
                            document.getElementById('c1').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 17){
                    if(player != "c2" && c2 === 0){
                        document.getElementById('c2').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        c2 = 2;
                        setTimeout(function(){
                            c2 = 0;
                            document.getElementById('c2').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 18){
                    if(player != "c3" && c3 === 0){
                        document.getElementById('c3').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        c3 = 2;
                        setTimeout(function(){
                            c3 = 0;
                            document.getElementById('c3').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 19){
                    if(player != "c4" && c4 === 0){
                        document.getElementById('c4').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        c4 = 2;
                        setTimeout(function(){
                            c4 = 0;
                            document.getElementById('c4').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 20){
                    if(player != "c5" && c5 === 0){
                        document.getElementById('c5').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        c5 = 2;
                        setTimeout(function(){
                            c5 = 0;
                            document.getElementById('c5').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 21){
                    if(player != "c6" && c6 === 0){
                        document.getElementById('c6').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        c6 = 2;
                        setTimeout(function(){
                            c6 = 0;
                            document.getElementById('c6').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 22){
                    if(player != "c7" && c7 === 0){
                        document.getElementById('c7').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        c7 = 2;
                        setTimeout(function(){
                            c7 = 0;
                            document.getElementById('c7').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 23){
                    if(player != "c8" && c8 === 0){
                        document.getElementById('c8').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        c8 = 2;
                        setTimeout(function(){
                            c8 = 0;
                            document.getElementById('c8').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                //Coluna D
                else if(frutaVermelhaLoca === 24){
                    if(player != "d1" && d1 === 0){
                        document.getElementById('d1').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        d1 = 2;
                        setTimeout(function(){
                            d1 = 0;
                            document.getElementById('d1').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 25){
                    if(player != "d2" && d2 === 0){
                        document.getElementById('d2').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        d2 = 2;
                        setTimeout(function(){
                            d2 = 0;
                            document.getElementById('d2').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 26){
                    if(player != "d3" && d3 === 0){
                        document.getElementById('d3').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        d3 = 2;
                        setTimeout(function(){
                            d3 = 0;
                            document.getElementById('d3').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 27){
                    if(player != "d4" && d4 === 0){
                        document.getElementById('d4').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        d4 = 2;
                        setTimeout(function(){
                            d4 = 0;
                            document.getElementById('d4').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 28){
                    if(player != "d5" && d5 === 0){
                        document.getElementById('d5').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        d5 = 2;
                        setTimeout(function(){
                            d5 = 0;
                            document.getElementById('d5').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 29){
                    if(player != "d6" && d6 === 0){
                        document.getElementById('d6').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        d6 = 2;
                        setTimeout(function(){
                            d6 = 0;
                            document.getElementById('d6').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 30){
                    if(player != "d7" && d7 === 0){
                        document.getElementById('d7').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        d7 = 2;
                        setTimeout(function(){
                            d7 = 0;
                            document.getElementById('d7').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 31){
                    if(player != "d8" && d8 === 0){
                        document.getElementById('d8').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        d8 = 2;
                        setTimeout(function(){
                            d8 = 0;
                            document.getElementById('d8').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                //Coluna E
                else if(frutaVermelhaLoca === 32){
                    if(player != "e1" && e1 === 0){
                        document.getElementById('e1').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        e1 = 2;
                        setTimeout(function(){
                            e1 = 0;
                            document.getElementById('e1').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 33){
                    if(player != "e2" && e2 === 0){
                        document.getElementById('e2').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        e2 = 2;
                        setTimeout(function(){
                            e2 = 0;
                            document.getElementById('e2').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 34){
                    if(player != "e3" && e3 === 0){
                        document.getElementById('e3').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        e3 = 2;
                        setTimeout(function(){
                            e3 = 0;
                            document.getElementById('e3').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 35){
                    if(player != "e4" && e4 === 0){
                        document.getElementById('e4').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        e4 = 2;
                        setTimeout(function(){
                            e4 = 0;
                            document.getElementById('e4').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 36){
                    if(player != "e5" && e5 === 0){
                        document.getElementById('e5').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        e5 = 2;
                        setTimeout(function(){
                            e5 = 0;
                            document.getElementById('e5').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 37){
                    if(player != "e6" && e6 === 0){
                        document.getElementById('e6').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        e6 = 2;
                        setTimeout(function(){
                            e6 = 0;
                            document.getElementById('e6').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 38){
                    if(player != "e7" && e7 === 0){
                        document.getElementById('e7').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        e7 = 2;
                        setTimeout(function(){
                            e7 = 0;
                            document.getElementById('e7').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 39){
                    if(player != "e8" && e8 === 0){
                        document.getElementById('e8').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        e8 = 2;
                        setTimeout(function(){
                            e8 = 0;
                            document.getElementById('e8').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                //Coluna F
                else if(frutaVermelhaLoca === 40){
                    if(player != "f1" && f1 === 0){
                        document.getElementById('f1').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        f1 = 2;
                        setTimeout(function(){
                            f1 = 0;
                            document.getElementById('f1').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 41){
                    if(player != "f2" && f2 === 0){
                        document.getElementById('f2').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        f2 = 2;
                        setTimeout(function(){
                            f2 = 0;
                            document.getElementById('f2').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 42){
                    if(player != "f3" && f3 === 0){
                        document.getElementById('f3').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        f3 = 2;
                        setTimeout(function(){
                            f3 = 0;
                            document.getElementById('f3').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 43){
                    if(player != "f4" && f4 === 0){
                        document.getElementById('f4').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        f4 = 2;
                        setTimeout(function(){
                            f4 = 0;
                            document.getElementById('f4').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 44){
                    if(player != "f5" && f5 === 0){
                        document.getElementById('f5').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        f5 = 2;
                        setTimeout(function(){
                            f5 = 0;
                            document.getElementById('f5').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 45){
                    if(player != "f6" && f6 === 0){
                        document.getElementById('f6').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        f6 = 2;
                        setTimeout(function(){
                            f6 = 0;
                            document.getElementById('f6').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 46){
                    if(player != "f7" && f7 === 0){
                        document.getElementById('f7').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        f7 = 2;
                        setTimeout(function(){
                            f7 = 0;
                            document.getElementById('f7').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 47){
                    if(player != "f8" && f8 === 0){
                        document.getElementById('f8').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        f8 = 2;
                        setTimeout(function(){
                            f8 = 0;
                            document.getElementById('f8').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                //Coluna G
                else if(frutaVermelhaLoca === 48){
                    if(player != "g1" && g1 === 0){
                        document.getElementById('g1').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        g1 = 2;
                        setTimeout(function(){
                            g1 = 0;
                            document.getElementById('g1').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 49){
                    if(player != "g2" && g2 === 0){
                        document.getElementById('g2').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        g2 = 2;
                        setTimeout(function(){
                            g2 = 0;
                            document.getElementById('g2').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 50){
                    if(player != "g3" && g3 === 0){
                        document.getElementById('g3').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        g3 = 2;
                        setTimeout(function(){
                            g3 = 0;
                            document.getElementById('g3').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 51){
                    if(player != "g4" && g4 === 0){
                        document.getElementById('g4').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        g4 = 2;
                        setTimeout(function(){
                            g4 = 0;
                            document.getElementById('g4').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 52){
                    if(player != "g5" && g5 === 0){
                        document.getElementById('g5').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        g5 = 2;
                        setTimeout(function(){
                            g5 = 0;
                            document.getElementById('g5').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 53){
                    if(player != "g6" && g6 === 0){
                        document.getElementById('g6').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        g6 = 2;
                        setTimeout(function(){
                            g6 = 0;
                            document.getElementById('g6').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 54){
                    if(player != "g7" && g7 === 0){
                        document.getElementById('g7').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        g7 = 2;
                        setTimeout(function(){
                            g7 = 0;
                            document.getElementById('g7').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 55){
                    if(player != "g8" && g8 === 0){
                        document.getElementById('g8').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        g8 = 2;
                        setTimeout(function(){
                            g8 = 0;
                            document.getElementById('g8').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                //Coluna H
                else if(frutaVermelhaLoca === 56){
                    if(player != "h1" && h1 ===  0){
                        document.getElementById('h1').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        h1 = 2;
                        setTimeout(function(){
                            h1 = 0;
                            document.getElementById('h1').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 57){
                    if(player != "h2" && h2 ===  0){
                        document.getElementById('h2').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        h2 = 2;
                        setTimeout(function(){
                            h2 = 0;
                            document.getElementById('h2').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 58){
                    if(player != "h3" && h3 ===  0){
                        document.getElementById('h3').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        h3 = 2;
                        setTimeout(function(){
                            h3 = 0;
                            document.getElementById('h3').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 59){
                    if(player != "h4" && h4 === 0){
                        document.getElementById('h4').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        h4 = 2;
                        setTimeout(function(){
                            h4 = 0;
                            document.getElementById('h4').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 60){
                    if(player != "h5" && h5 === 0){
                        document.getElementById('h5').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        h5 = 2;
                        setTimeout(function(){
                            h5 = 0;
                            document.getElementById('h5').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 61){
                    if(player != "h6" && h6 === 0){
                        document.getElementById('h6').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        h6 = 2;
                        setTimeout(function(){
                            h6 = 0;
                            document.getElementById('h6').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 62){
                    if(player != "h7" && h7 === 0){
                        document.getElementById('h7').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        h7 = 2;
                        setTimeout(function(){
                            h7 = 0;
                            document.getElementById('h7').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
                else if(frutaVermelhaLoca === 63){
                    if(player != "h8" && h8 === 0){
                        document.getElementById('h8').style.backgroundImage = "url('files/img/apples/red-apple.png')";
                        h8 = 2;
                        setTimeout(function(){
                            h8 = 0;
                            document.getElementById('h8').style.backgroundImage = "none";
                        }, timeActived);
                    }
                    else{
                        gerarFrutaVermelha();
                    }
                }
            }
        }  
       
function tocarSom(){
    if(isGameMuted === false){
        somFruta.play();
    }
    else{}
}
function tocarSomVermelho(){
    if(isGameMuted === false){
        somFrutaVermelha.play();
    }
    else{}
}


        function gerarFruta(){
            if(isGameOn === true){
                //frutaLoca = 5;
                frutaLoca = Math.floor(Math.random() * 64);
                if(frutaLoca === 0){
                    if(player != "a1" && a1 === 0){
                        document.getElementById('a1').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        a1 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 1){
                    if(player != "a2" && a2 === 0){
                        document.getElementById('a2').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        a2 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 2){
                    if(player != "a3" && a3 === 0){
                        document.getElementById('a3').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        a3 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 3){
                    if(player != "a4" && a4 === 0){
                        document.getElementById('a4').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        a4 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 4){
                    if(player != "a5" && a5 === 0){
                        document.getElementById('a5').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        a5 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 5){
                    if(player != "a6" && a6 === 0){
                        document.getElementById('a6').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        a6 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 6){
                    if(player != "a7" && a7 === 0){
                        document.getElementById('a7').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        a7 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 7){
                    if(player != "a8" && a8 === 0){
                        document.getElementById('a8').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        a8 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna B
                else if(frutaLoca === 8){
                    if(player != "b1" && b1 === 0){
                        document.getElementById('b1').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        b1 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 9){
                    if(player != "b2" && b2 === 0){
                        document.getElementById('b2').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        b2 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 10){
                    if(player != "b3" && b3 === 0){
                        document.getElementById('b3').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        b3 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 11){
                    if(player != "b4" && b4 === 0){
                        document.getElementById('b4').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        b4 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 12){
                    if(player != "b5" && b5 === 0){
                        document.getElementById('b5').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        b5 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 13){
                    if(player != "b6" && b6 === 0){
                        document.getElementById('b6').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        b6 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 14){
                    if(player != "b7" && b7 === 0){
                        document.getElementById('b7').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        b7 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 15){
                    if(player != "b8" && b8 === 0){
                        document.getElementById('b8').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        b8 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna C
                else if(frutaLoca === 16){
                    if(player != "c1" && c1 === 0){
                        document.getElementById('c1').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        c1 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 17){
                    if(player != "c2" && c2 === 0){
                        document.getElementById('c2').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        c2 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 18){
                    if(player != "c3" && c3 === 0){
                        document.getElementById('c3').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        c3 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 19){
                    if(player != "c4" && c4 === 0){
                        document.getElementById('c4').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        c4 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 20){
                    if(player != "c5" && c5 === 0){
                        document.getElementById('c5').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        c5 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 21){
                    if(player != "c6" && c6 === 0){
                        document.getElementById('c6').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        c6 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 22){
                    if(player != "c7" && c7 === 0){
                        document.getElementById('c7').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        c7 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 23){
                    if(player != "c8" && c8 === 0){
                        document.getElementById('c8').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        c8 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna D
                else if(frutaLoca === 24){
                    if(player != "d1" && d1 === 0){
                        document.getElementById('d1').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        d1 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 25){
                    if(player != "d2" && d2 === 0){
                        document.getElementById('d2').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        d2 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 26){
                    if(player != "d3" && d3 === 0){
                        document.getElementById('d3').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        d3 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 27){
                    if(player != "d4" && d4 === 0){
                        document.getElementById('d4').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        d4 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 28){
                    if(player != "d5" && d5 === 0){
                        document.getElementById('d5').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        d5 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 29){
                    if(player != "d6" && d6 === 0){
                        document.getElementById('d6').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        d6 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 30){
                    if(player != "d7" && d7 === 0){
                        document.getElementById('d7').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        d7 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 31){
                    if(player != "d8" && d8 === 0){
                        document.getElementById('d8').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        d8 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna E
                else if(frutaLoca === 32){
                    if(player != "e1" && e1 === 0){
                        document.getElementById('e1').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        e1 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 33){
                    if(player != "e2" && e2 === 0){
                        document.getElementById('e2').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        e2 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 34){
                    if(player != "e3" && e3 === 0){
                        document.getElementById('e3').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        e3 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 35){
                    if(player != "e4" && e4 === 0){
                        document.getElementById('e4').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        e4 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 36){
                    if(player != "e5" && e5 === 0){
                        document.getElementById('e5').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        e5 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 37){
                    if(player != "e6" && e6 === 0){
                        document.getElementById('e6').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        e6 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 38){
                    if(player != "e7" && e7 === 0){
                        document.getElementById('e7').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        e7 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 39){
                    if(player != "e8" && e8 === 0){
                        document.getElementById('e8').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        e8 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna F
                else if(frutaLoca === 40){
                    if(player != "f1" && f1 === 0){
                        document.getElementById('f1').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        f1 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 41){
                    if(player != "f2" && f2 === 0){
                        document.getElementById('f2').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        f2 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 42){
                    if(player != "f3" && f3 === 0){
                        document.getElementById('f3').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        f3 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 43){
                    if(player != "f4" && f4 === 0){
                        document.getElementById('f4').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        f4 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 44){
                    if(player != "f5" && f5 === 0){
                        document.getElementById('f5').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        f5 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 45){
                    if(player != "f6" && f6 === 0){
                        document.getElementById('f6').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        f6 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 46){
                    if(player != "f7" && f7 === 0){
                        document.getElementById('f7').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        f7 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 47){
                    if(player != "f8" && f8 === 0){
                        document.getElementById('f8').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        f8 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna G
                else if(frutaLoca === 48){
                    if(player != "g1" && g1 === 0){
                        document.getElementById('g1').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        g1 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 49){
                    if(player != "g2" && g2 === 0){
                        document.getElementById('g2').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        g2 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 50){
                    if(player != "g3" && g3 === 0){
                        document.getElementById('g3').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        g3 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 51){
                    if(player != "g4" && g4 === 0){
                        document.getElementById('g4').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        g4 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 52){
                    if(player != "g5" && g5 === 0){
                        document.getElementById('g5').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        g5 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 53){
                    if(player != "g6" && g6 === 0){
                        document.getElementById('g6').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        g6 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 54){
                    if(player != "g7" && g7 === 0){
                        document.getElementById('g7').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        g7 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 55){
                    if(player != "g8" && g8 === 0){
                        document.getElementById('g8').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        g8 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna H
                else if(frutaLoca === 56){
                    if(player != "h1" && h1 === 0){
                        document.getElementById('h1').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        h1 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 57){
                    if(player != "h2" && h2 === 0){
                        document.getElementById('h2').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        h2 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 58){
                    if(player != "h3" && h3 === 0){
                        document.getElementById('h3').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        h3 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 59){
                    if(player != "h4" && h4 === 0){
                        document.getElementById('h4').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        h4 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 60){
                    if(player != "h5" && h5 === 0){
                        document.getElementById('h5').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        h5 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 61){
                    if(player != "h6" && h6 === 0){
                        document.getElementById('h6').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        h6 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 62){
                    if(player != "h7" && h7 === 0){
                        document.getElementById('h7').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        h7 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 63){
                    if(player != "h8" && h8 === 0){
                        document.getElementById('h8').style.backgroundImage = "url('files/img/apples/green-apple.png')";
                        h8 = 1;
                    }
                    else{
                        gerarFruta();
                    }
                }
            }
        }  
        function direita(){
            if(isGameOn === true){
                //som.play();
                if(player === "a1"){
                    player = "a2";
                    document.getElementById('a1').style.backgroundColor = "transparent";
                    document.getElementById('a2').style.backgroundColor = "#555";
                    if(a2 === 1){
                        a2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a2').style.backgroundImage = "none";
                    }
                    else if(a2 === 2){
                        a2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a2').style.backgroundImage = "none";
                    }
                }
                else if(player === "a2"){
                    player = "a3";
                    document.getElementById('a2').style.backgroundColor = "transparent";
                    document.getElementById('a3').style.backgroundColor = "#555";
                    if(a3 === 1){
                        a3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a3').style.backgroundImage = "none";
                    }
                    else if(a3 === 2){
                        a3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a3').style.backgroundImage = "none";
                    }
                }
                else if(player === "a3"){
                    player = "a4";
                    document.getElementById('a3').style.backgroundColor = "transparent";
                    document.getElementById('a4').style.backgroundColor = "#555";
                    if(a4 === 1){
                        a4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a4').style.backgroundImage = "none";
                    }
                    else if(a4 === 2){
                        a4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a4').style.backgroundImage = "none";
                    }
                }
                else if(player === "a4"){
                    player = "a5";
                    document.getElementById('a4').style.backgroundColor = "transparent";
                    document.getElementById('a5').style.backgroundColor = "#555";
                    if(a5 === 1){
                        a5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a5').style.backgroundImage = "none";
                    }
                    else if(a5 === 2){
                        a5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a5').style.backgroundImage = "none";
                    }
                }
                else if(player === "a5"){
                    player = "a6";
                    document.getElementById('a5').style.backgroundColor = "transparent";
                    document.getElementById('a6').style.backgroundColor = "#555";
                    if(a6 === 1){
                        a6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a6').style.backgroundImage = "none";
                    }
                    else if(a6 === 2){
                        a6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a6').style.backgroundImage = "none";
                    }
                }
                else if(player === "a6"){
                    player = "a7";
                    document.getElementById('a6').style.backgroundColor = "transparent";
                    document.getElementById('a7').style.backgroundColor = "#555";
                    if(a7 === 1){
                        a7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a7').style.backgroundImage = "none";
                    }
                    else if(a7 === 2){
                        a7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a7').style.backgroundImage = "none";
                    }
                }
                else if(player === "a7"){
                    player = "a8";
                    document.getElementById('a7').style.backgroundColor = "transparent";
                    document.getElementById('a8').style.backgroundColor = "#555";
                    if(a8 === 1){
                        a8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a8').style.backgroundImage = "none";
                    }
                    else if(a8 === 2){
                        a8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a8').style.backgroundImage = "none";
                    }
                }
                else if(player === "b1"){
                    player = "b2";
                    document.getElementById('b1').style.backgroundColor = "transparent";
                    document.getElementById('b2').style.backgroundColor = "#555";
                    if(b2 === 1){
                        b2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b2').style.backgroundImage = "none";
                    }
                    else if(b2 === 2){
                        b2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b2').style.backgroundImage = "none";
                    }
                }
                else if(player === "b2"){
                    player = "b3";
                    document.getElementById('b2').style.backgroundColor = "transparent";
                    document.getElementById('b3').style.backgroundColor = "#555";
                    if(b3 === 1){
                        b3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b3').style.backgroundImage = "none";
                    }
                    else if(b3 === 2){
                        b3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b3').style.backgroundImage = "none";
                    }
                }
                else if(player === "b3"){
                    player = "b4";
                    document.getElementById('b3').style.backgroundColor = "transparent";
                    document.getElementById('b4').style.backgroundColor = "#555";
                    if(b4 === 1){
                        b4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b4').style.backgroundImage = "none";
                    }
                    else if(b4 === 2){
                        b4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b4').style.backgroundImage = "none";
                    }
                }
                else if(player === "b4"){
                    player = "b5";
                    document.getElementById('b4').style.backgroundColor = "transparent";
                    document.getElementById('b5').style.backgroundColor = "#555";
                    if(b5 === 1){
                        b5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b5').style.backgroundImage = "none";
                    }
                    else if(b5 === 2){
                        b5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b5').style.backgroundImage = "none";
                    }
                }
                else if(player === "b5"){
                    player = "b6";
                    document.getElementById('b5').style.backgroundColor = "transparent";
                    document.getElementById('b6').style.backgroundColor = "#555";
                    if(b6 === 1){
                        b6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b6').style.backgroundImage = "none";
                    }
                    else if(b6 === 2){
                        b6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b6').style.backgroundImage = "none";
                    }
                }
                else if(player === "b6"){
                    player = "b7";
                    document.getElementById('b6').style.backgroundColor = "transparent";
                    document.getElementById('b7').style.backgroundColor = "#555";
                    if(b7 === 1){
                        b7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b7').style.backgroundImage = "none";
                    }
                    else if(b7 === 2){
                        b7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b7').style.backgroundImage = "none";
                    }
                }
                else if(player === "b7"){
                    player = "b8";
                    document.getElementById('b7').style.backgroundColor = "transparent";
                    document.getElementById('b8').style.backgroundColor = "#555";
                    if(b8 === 1){
                        b8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b8').style.backgroundImage = "none";
                    }
                    else if(b8 === 2){
                        b8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b8').style.backgroundImage = "none";
                    }
                }
                else if(player === "c1"){
                    player = "c2";
                    document.getElementById('c1').style.backgroundColor = "transparent";
                    document.getElementById('c2').style.backgroundColor = "#555";
                    if(c2 === 1){
                        c2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c2').style.backgroundImage = "none";
                    }
                    else if(c2 === 2){
                        c2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c2').style.backgroundImage = "none";
                    }
                }
                else if(player === "c2"){
                    player = "c3";
                    document.getElementById('c2').style.backgroundColor = "transparent";
                    document.getElementById('c3').style.backgroundColor = "#555";
                    if(c3 === 1){
                        c3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c3').style.backgroundImage = "none";
                    }
                    else if(c3 === 2){
                        c3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c3').style.backgroundImage = "none";
                    }
                }
                else if(player === "c3"){
                    player = "c4";
                    document.getElementById('c3').style.backgroundColor = "transparent";
                    document.getElementById('c4').style.backgroundColor = "#555";
                    if(c4 === 1){
                        c4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c4').style.backgroundImage = "none";
                    }
                    else if(c4 === 2){
                        c4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c4').style.backgroundImage = "none";
                    }
                }
                else if(player === "c4"){
                    player = "c5";
                    document.getElementById('c4').style.backgroundColor = "transparent";
                    document.getElementById('c5').style.backgroundColor = "#555";
                    if(c5 === 1){
                        c5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c5').style.backgroundImage = "none";
                    }
                    else if(c5 === 2){
                        c5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c5').style.backgroundImage = "none";
                    }
                }
                else if(player === "c5"){
                    player = "c6";
                    document.getElementById('c5').style.backgroundColor = "transparent";
                    document.getElementById('c6').style.backgroundColor = "#555";
                    if(c6 === 1){
                        c6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c6').style.backgroundImage = "none";
                    }
                    else if(c6 === 2){
                        c6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c6').style.backgroundImage = "none";
                    }
                }
                else if(player === "c6"){
                    player = "c7";
                    document.getElementById('c6').style.backgroundColor = "transparent";
                    document.getElementById('c7').style.backgroundColor = "#555";
                    if(c7 === 1){
                        c7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c7').style.backgroundImage = "none";
                    }
                    else if(c7 === 2){
                        c7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c7').style.backgroundImage = "none";
                    }
                }
                else if(player === "c7"){
                    player = "c8";
                    document.getElementById('c7').style.backgroundColor = "transparent";
                    document.getElementById('c8').style.backgroundColor = "#555";
                    if(c8 === 1){
                        c8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c8').style.backgroundImage = "none";
                    }
                    else if(c8 === 2){
                        c8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c8').style.backgroundImage = "none";
                    }
                }
                else if(player === "d1"){
                    player = "d2";
                    document.getElementById('d1').style.backgroundColor = "transparent";
                    document.getElementById('d2').style.backgroundColor = "#555";
                    if(d2 === 1){
                        d2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d2').style.backgroundImage = "none";
                    }
                    else if(d2 === 2){
                        d2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d2').style.backgroundImage = "none";
                    }
                }
                else if(player === "d2"){
                    player = "d3";
                    document.getElementById('d2').style.backgroundColor = "transparent";
                    document.getElementById('d3').style.backgroundColor = "#555";
                    if(d3 === 1){
                        d3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d3').style.backgroundImage = "none";
                    }
                    else if(d3 === 2){
                        d3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d3').style.backgroundImage = "none";
                    }
                }
                else if(player === "d3"){
                    player = "d4";
                    document.getElementById('d3').style.backgroundColor = "transparent";
                    document.getElementById('d4').style.backgroundColor = "#555";
                    if(d4 === 1){
                        d4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d4').style.backgroundImage = "none";
                    }
                    else if(d4 === 2){
                        d4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d4').style.backgroundImage = "none";
                    }
                }
                else if(player === "d4"){
                    player = "d5";
                    document.getElementById('d4').style.backgroundColor = "transparent";
                    document.getElementById('d5').style.backgroundColor = "#555";
                    if(d5 === 1){
                        d5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d5').style.backgroundImage = "none";
                    }
                    else if(d5 === 2){
                        d5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d5').style.backgroundImage = "none";
                    }
                }
                else if(player === "d5"){
                    player = "d6";
                    document.getElementById('d5').style.backgroundColor = "transparent";
                    document.getElementById('d6').style.backgroundColor = "#555";
                    if(d6 === 1){
                        d6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d6').style.backgroundImage = "none";
                    }
                    else if(d6 === 2){
                        d6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d6').style.backgroundImage = "none";
                    }
                }
                else if(player === "d6"){
                    player = "d7";
                    document.getElementById('d6').style.backgroundColor = "transparent";
                    document.getElementById('d7').style.backgroundColor = "#555";
                    if(d7 === 1){
                        d7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d7').style.backgroundImage = "none";
                    }
                    else if(d7 === 2){
                        d7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d7').style.backgroundImage = "none";
                    }
                }
                else if(player === "d7"){
                    player = "d8";
                    document.getElementById('d7').style.backgroundColor = "transparent";
                    document.getElementById('d8').style.backgroundColor = "#555";
                    if(d8 === 1){
                        d8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d8').style.backgroundImage = "none";
                    }
                    else if(d8 === 2){
                        d8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d8').style.backgroundImage = "none";
                    }
                }
                else if(player === "e1"){
                    player = "e2";
                    document.getElementById('e1').style.backgroundColor = "transparent";
                    document.getElementById('e2').style.backgroundColor = "#555";
                    if(e2 === 1){
                        e2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e2').style.backgroundImage = "none";
                    }
                    else if(e2 === 2){
                        e2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e2').style.backgroundImage = "none";
                    }
                }
                else if(player === "e2"){
                    player = "e3";
                    document.getElementById('e2').style.backgroundColor = "transparent";
                    document.getElementById('e3').style.backgroundColor = "#555";
                    if(e3 === 1){
                        e3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e3').style.backgroundImage = "none";
                    }
                    else if(e3 === 2){
                        e3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e3').style.backgroundImage = "none";
                    }
                }
                else if(player === "e3"){
                    player = "e4";
                    document.getElementById('e3').style.backgroundColor = "transparent";
                    document.getElementById('e4').style.backgroundColor = "#555";
                    if(e4 === 1){
                        e4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e4').style.backgroundImage = "none";
                    }
                    else if(e4 === 2){
                        e4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e4').style.backgroundImage = "none";
                    }
                }
                else if(player === "e4"){
                    player = "e5";
                    document.getElementById('e4').style.backgroundColor = "transparent";
                    document.getElementById('e5').style.backgroundColor = "#555";
                    if(e5 === 1){
                        e5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e5').style.backgroundImage = "none";
                    }
                    else if(e5 === 2){
                        e5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e5').style.backgroundImage = "none";
                    }
                }
                else if(player === "e5"){
                    player = "e6";
                    document.getElementById('e5').style.backgroundColor = "transparent";
                    document.getElementById('e6').style.backgroundColor = "#555";
                    if(e6 === 1){
                        e6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e6').style.backgroundImage = "none";
                    }
                    else if(e6 === 2){
                        e6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e6').style.backgroundImage = "none";
                    }
                }
                else if(player === "e6"){
                    player = "e7";
                    document.getElementById('e6').style.backgroundColor = "transparent";
                    document.getElementById('e7').style.backgroundColor = "#555";
                    if(e7 === 1){
                        e7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e7').style.backgroundImage = "none";
                    }
                    else if(e7 === 2){
                        e7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e7').style.backgroundImage = "none";
                    }
                }
                else if(player === "e7"){
                    player = "e8";
                    document.getElementById('e7').style.backgroundColor = "transparent";
                    document.getElementById('e8').style.backgroundColor = "#555";
                    if(e8 === 1){
                        e8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e8').style.backgroundImage = "none";
                    }
                    else if(e8 === 2){
                        e8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e8').style.backgroundImage = "none";
                    }
                }
                else if(player === "f1"){
                    player = "f2";
                    document.getElementById('f1').style.backgroundColor = "transparent";
                    document.getElementById('f2').style.backgroundColor = "#555";
                    if(f2 === 1){
                        f2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f2').style.backgroundImage = "none";
                    }
                    else if(f2 === 2){
                        f2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f2').style.backgroundImage = "none";
                    }
                }
                else if(player === "f2"){
                    player = "f3";
                    document.getElementById('f2').style.backgroundColor = "transparent";
                    document.getElementById('f3').style.backgroundColor = "#555";
                    if(f3 === 1){
                        f3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f3').style.backgroundImage = "none";
                    }
                    else if(f3 === 2){
                        f3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f3').style.backgroundImage = "none";
                    }
                }
                else if(player === "f3"){
                    player = "f4";
                    document.getElementById('f3').style.backgroundColor = "transparent";
                    document.getElementById('f4').style.backgroundColor = "#555";
                    if(f4 === 1){
                        f4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f4').style.backgroundImage = "none";
                    }
                    else if(f4 === 2){
                        f4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f4').style.backgroundImage = "none";
                    }
                }
                else if(player === "f4"){
                    player = "f5";
                    document.getElementById('f4').style.backgroundColor = "transparent";
                    document.getElementById('f5').style.backgroundColor = "#555";
                    if(f5 === 1){
                        f5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f5').style.backgroundImage = "none";
                    }
                    else if(f5 === 2){
                        f5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f5').style.backgroundImage = "none";
                    }
                }
                else if(player === "f5"){
                    player = "f6";
                    document.getElementById('f5').style.backgroundColor = "transparent";
                    document.getElementById('f6').style.backgroundColor = "#555";
                    if(f6 === 1){
                        f6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f6').style.backgroundImage = "none";
                    }
                    else if(f6 === 2){
                        f6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f6').style.backgroundImage = "none";
                    }
                }
                else if(player === "f6"){
                    player = "f7";
                    document.getElementById('f6').style.backgroundColor = "transparent";
                    document.getElementById('f7').style.backgroundColor = "#555";
                    if(f7 === 1){
                        f7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f7').style.backgroundImage = "none";
                    }
                    else if(f7 === 2){
                        f7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f7').style.backgroundImage = "none";
                    }
                }
                else if(player === "f7"){
                    player = "f8";
                    document.getElementById('f7').style.backgroundColor = "transparent";
                    document.getElementById('f8').style.backgroundColor = "#555";
                    if(f8 === 1){
                        f8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f8').style.backgroundImage = "none";
                    }
                    else if(f8 === 2){
                        f8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f8').style.backgroundImage = "none";
                    }
                }
                else if(player === "g1"){
                    player = "g2";
                    document.getElementById('g1').style.backgroundColor = "transparent";
                    document.getElementById('g2').style.backgroundColor = "#555";
                    if(g2 === 1){
                        g2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g2').style.backgroundImage = "none";
                    }
                    else if(g2 === 2){
                        g2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g2').style.backgroundImage = "none";
                    }
                }
                else if(player === "g2"){
                    player = "g3";
                    document.getElementById('g2').style.backgroundColor = "transparent";
                    document.getElementById('g3').style.backgroundColor = "#555";
                    if(g3 === 1){
                        g3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g3').style.backgroundImage = "none";
                    }
                    else if(g3 === 2){
                        g3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g3').style.backgroundImage = "none";
                    }
                }
                else if(player === "g3"){
                    player = "g4";
                    document.getElementById('g3').style.backgroundColor = "transparent";
                    document.getElementById('g4').style.backgroundColor = "#555";
                    if(g4 === 1){
                        g4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g4').style.backgroundImage = "none";
                    }
                    else if(g4 === 2){
                        g4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g4').style.backgroundImage = "none";
                    }
                }
                else if(player === "g4"){
                    player = "g5";
                    document.getElementById('g4').style.backgroundColor = "transparent";
                    document.getElementById('g5').style.backgroundColor = "#555";
                    if(g5 === 1){
                        g5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g5').style.backgroundImage = "none";
                    }
                    else if(g5 === 2){
                        g5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g5').style.backgroundImage = "none";
                    }
                }
                else if(player === "g5"){
                    player = "g6";
                    document.getElementById('g5').style.backgroundColor = "transparent";
                    document.getElementById('g6').style.backgroundColor = "#555";
                    if(g6 === 1){
                        g6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g6').style.backgroundImage = "none";
                    }
                    else if(g6 === 2){
                        g6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g6').style.backgroundImage = "none";
                    }
                }
                else if(player === "g6"){
                    player = "g7";
                    document.getElementById('g6').style.backgroundColor = "transparent";
                    document.getElementById('g7').style.backgroundColor = "#555";
                    if(g7 === 1){
                        g7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g7').style.backgroundImage = "none";
                    }
                    else if(g7 === 2){
                        g7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g7').style.backgroundImage = "none";
                    }
                }
                else if(player === "g7"){
                    player = "g8";
                    document.getElementById('g7').style.backgroundColor = "transparent";
                    document.getElementById('g8').style.backgroundColor = "#555";
                    if(g8 === 1){
                        g8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g8').style.backgroundImage = "none";
                    }
                    else if(g8 === 2){
                        g2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g8').style.backgroundImage = "none";
                    }
                }
                else if(player === "h1"){
                    player = "h2";
                    document.getElementById('h1').style.backgroundColor = "transparent";
                    document.getElementById('h2').style.backgroundColor = "#555";
                    if(h2 === 1){
                        h2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h2').style.backgroundImage = "none";
                    }
                    else if(h2 === 2){
                        h2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h2').style.backgroundImage = "none";
                    }
                }
                else if(player === "h2"){
                    player = "h3";
                    document.getElementById('h2').style.backgroundColor = "transparent";
                    document.getElementById('h3').style.backgroundColor = "#555";
                    if(h3 === 1){
                        h3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h3').style.backgroundImage = "none";
                    }
                    else if(h3 === 2){
                        h3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h3').style.backgroundImage = "none";
                    }
                }
                else if(player === "h3"){
                    player = "h4";
                    document.getElementById('h3').style.backgroundColor = "transparent";
                    document.getElementById('h4').style.backgroundColor = "#555";
                    if(h4 === 1){
                        h4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h4').style.backgroundImage = "none";
                    }
                    else if(h4 === 2){
                        h4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h4').style.backgroundImage = "none";
                    }
                }
                else if(player === "h4"){
                    player = "h5";
                    document.getElementById('h4').style.backgroundColor = "transparent";
                    document.getElementById('h5').style.backgroundColor = "#555";
                    if(h5 === 1){
                        h5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h5').style.backgroundImage = "none";
                    }
                    else if(h5 === 2){
                        h5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h5').style.backgroundImage = "none";
                    }
                }
                else if(player === "h5"){
                    player = "h6";
                    document.getElementById('h5').style.backgroundColor = "transparent";
                    document.getElementById('h6').style.backgroundColor = "#555";
                    if(h6 === 1){
                        h6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h6').style.backgroundImage = "none";
                    }
                    else if(h6 === 2){
                        h6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h6').style.backgroundImage = "none";
                    }
                }
                else if(player === "h6"){
                    player = "h7";
                    document.getElementById('h6').style.backgroundColor = "transparent";
                    document.getElementById('h7').style.backgroundColor = "#555";
                    if(h7 === 1){
                        h7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h7').style.backgroundImage = "none";
                    }
                    else if(h7 === 2){
                        h7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h7').style.backgroundImage = "none";
                    }
                }
                else if(player === "h7"){
                    player = "h8";
                    document.getElementById('h7').style.backgroundColor = "transparent";
                    document.getElementById('h8').style.backgroundColor = "#555";
                    if(h8 === 1){
                        h8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h8').style.backgroundImage = "none";
                    }
                    else if(h8 === 2){
                        h8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h8').style.backgroundImage = "none";
                    }
                }
                else{}
            }
        }
        function esquerda(){
            if(isGameOn === true){
               // som.play();
                if(player === "a8"){
                    player = "a7";
                    document.getElementById('a8').style.backgroundColor = "transparent";
                    document.getElementById('a7').style.backgroundColor = "#555";
                    if(a7 === 1){
                        a7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a7').style.backgroundImage = "none";
                    }
                    else if(a7 === 2){
                        a7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a7').style.backgroundImage = "none";
                    }
                }
                else if(player === "a7"){
                    player = "a6";
                    document.getElementById('a7').style.backgroundColor = "transparent";
                    document.getElementById('a6').style.backgroundColor = "#555";
                    if(a6 === 1){
                        a6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a6').style.backgroundImage = "none";
                    }
                    else if(a6 === 2){
                        a6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a6').style.backgroundImage = "none";
                    }
                }
                else if(player === "a6"){
                    player = "a5";
                    document.getElementById('a6').style.backgroundColor = "transparent";
                    document.getElementById('a5').style.backgroundColor = "#555";
                    if(a5 === 1){
                        a5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a5').style.backgroundImage = "none";
                    }
                    else if(a5 === 2){
                        a5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a5').style.backgroundImage = "none";
                    }
                }
                else if(player === "a5"){
                    player = "a4";
                    document.getElementById('a5').style.backgroundColor = "transparent";
                    document.getElementById('a4').style.backgroundColor = "#555";
                    if(a4 === 1){
                        a4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a4').style.backgroundImage = "none";
                    }
                    else if(a4 === 2){
                        a4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a4').style.backgroundImage = "none";
                    }
                }
                else if(player === "a4"){
                    player = "a3";
                    document.getElementById('a4').style.backgroundColor = "transparent";
                    document.getElementById('a3').style.backgroundColor = "#555";
                    if(a3 === 1){
                        a3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a3').style.backgroundImage = "none";
                    }
                    else if(a3 === 2){
                        a3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a3').style.backgroundImage = "none";
                    }
                }
                else if(player === "a3"){
                    player = "a2";
                    document.getElementById('a3').style.backgroundColor = "transparent";
                    document.getElementById('a2').style.backgroundColor = "#555";
                    if(a2 === 1){
                        a2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a2').style.backgroundImage = "none";
                    }
                    else if(a2 === 2){
                        a2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a2').style.backgroundImage = "none";
                    }
                }
                else if(player === "a2"){
                    player = "a1";
                    document.getElementById('a2').style.backgroundColor = "transparent";
                    document.getElementById('a1').style.backgroundColor = "#555";
                    if(a1 === 1){
                        a1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a1').style.backgroundImage = "none";
                    }
                    else if(a1 === 2){
                        a1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a1').style.backgroundImage = "none";
                    }
                }
                else if(player === "b8"){
                    player = "b7";
                    document.getElementById('b8').style.backgroundColor = "transparent";
                    document.getElementById('b7').style.backgroundColor = "#555";
                    if(b7 === 1){
                        b7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b7').style.backgroundImage = "none";
                    }
                    else if(b7 === 2){
                        b7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b7').style.backgroundImage = "none";
                    }
                }
                else if(player === "b7"){
                    player = "b6";
                    document.getElementById('b7').style.backgroundColor = "transparent";
                    document.getElementById('b6').style.backgroundColor = "#555";
                    if(b6 === 1){
                        b6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b6').style.backgroundImage = "none";
                    }
                    else if(b6 === 2){
                        b6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b6').style.backgroundImage = "none";
                    }
                }
                else if(player === "b6"){
                    player = "b5";
                    document.getElementById('b6').style.backgroundColor = "transparent";
                    document.getElementById('b5').style.backgroundColor = "#555";
                    if(b5 === 1){
                        b5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b5').style.backgroundImage = "none";
                    }
                    else if(b5 === 2){
                        b5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b5').style.backgroundImage = "none";
                    }
                }
                else if(player === "b5"){
                    player = "b4";
                    document.getElementById('b5').style.backgroundColor = "transparent";
                    document.getElementById('b4').style.backgroundColor = "#555";
                    if(b4 === 1){
                        b4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b4').style.backgroundImage = "none";
                    }
                    else if(b4 === 2){
                        b4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b4').style.backgroundImage = "none";
                    }
                }
                else if(player === "b4"){
                    player = "b3";
                    document.getElementById('b4').style.backgroundColor = "transparent";
                    document.getElementById('b3').style.backgroundColor = "#555";
                    if(b3 === 1){
                        b3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b3').style.backgroundImage = "none";
                    }
                    else if(b3 === 2){
                        b3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b3').style.backgroundImage = "none";
                    }
                }
                else if(player === "b3"){
                    player = "b2";
                    document.getElementById('b3').style.backgroundColor = "transparent";
                    document.getElementById('b2').style.backgroundColor = "#555";
                    if(b2 === 1){
                        b2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b2').style.backgroundImage = "none";
                    }
                    else if(b2 === 2){
                        b2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b2').style.backgroundImage = "none";
                    }
                }
                else if(player === "b2"){
                    player = "b1";
                    document.getElementById('b2').style.backgroundColor = "transparent";
                    document.getElementById('b1').style.backgroundColor = "#555";
                    if(b1 === 1){
                        b1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b1').style.backgroundImage = "none";
                    }
                    else if(b1 === 2){
                        b1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b1').style.backgroundImage = "none";
                    }
                }
                else if(player === "c8"){
                    player = "c7";
                    document.getElementById('c8').style.backgroundColor = "transparent";
                    document.getElementById('c7').style.backgroundColor = "#555";
                    if(c7 === 1){
                        c7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c7').style.backgroundImage = "none";
                    }
                    else if(c7 === 2){
                        c7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c7').style.backgroundImage = "none";
                    }
                }
                else if(player === "c7"){
                    player = "c6";
                    document.getElementById('c7').style.backgroundColor = "transparent";
                    document.getElementById('c6').style.backgroundColor = "#555";
                    if(c6 === 1){
                        c6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c6').style.backgroundImage = "none";
                    }
                    else if(c6 === 2){
                        c6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c6').style.backgroundImage = "none";
                    }
                }
                else if(player === "c6"){
                    player = "c5";
                    document.getElementById('c6').style.backgroundColor = "transparent";
                    document.getElementById('c5').style.backgroundColor = "#555";
                    if(c5 === 1){
                        c5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c5').style.backgroundImage = "none";
                    }
                    else if(c5 === 2){
                        c5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c5').style.backgroundImage = "none";
                    }
                }
                else if(player === "c5"){
                    player = "c4";
                    document.getElementById('c5').style.backgroundColor = "transparent";
                    document.getElementById('c4').style.backgroundColor = "#555";
                    if(c4 === 1){
                        c4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c4').style.backgroundImage = "none";
                    }
                    else if(c4 === 2){
                        c4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c4').style.backgroundImage = "none";
                    }
                }
                else if(player === "c4"){
                    player = "c3";
                    document.getElementById('c4').style.backgroundColor = "transparent";
                    document.getElementById('c3').style.backgroundColor = "#555";
                    if(c3 === 1){
                        c3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c3').style.backgroundImage = "none";
                    }
                    else if(c3 === 2){
                        c3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c3').style.backgroundImage = "none";
                    }
                }
                else if(player === "c3"){
                    player = "c2";
                    document.getElementById('c3').style.backgroundColor = "transparent";
                    document.getElementById('c2').style.backgroundColor = "#555";
                    if(c2 === 1){
                        c2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c2').style.backgroundImage = "none";
                    }
                    else if(c2 === 2){
                        c2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c2').style.backgroundImage = "none";
                    }
                }
                else if(player === "c2"){
                    player = "c1";
                    document.getElementById('c2').style.backgroundColor = "transparent";
                    document.getElementById('c1').style.backgroundColor = "#555";
                    if(c1 === 1){
                        c1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c1').style.backgroundImage = "none";
                    }
                    else if(c1 === 2){
                        c1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c1').style.backgroundImage = "none";
                    }
                }
                else if(player === "d8"){
                    player = "d7";
                    document.getElementById('d8').style.backgroundColor = "transparent";
                    document.getElementById('d7').style.backgroundColor = "#555";
                    if(d7 === 1){
                        d7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d7').style.backgroundImage = "none";
                    }
                    else if(d7 === 2){
                        d7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d7').style.backgroundImage = "none";
                    }
                }
                else if(player === "d7"){
                    player = "d6";
                    document.getElementById('d7').style.backgroundColor = "transparent";
                    document.getElementById('d6').style.backgroundColor = "#555";
                    if(d6 === 1){
                        d6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d6').style.backgroundImage = "none";
                    }
                    else if(d6 === 2){
                        d6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d6').style.backgroundImage = "none";
                    }
                }
                else if(player === "d6"){
                    player = "d5";
                    document.getElementById('d6').style.backgroundColor = "transparent";
                    document.getElementById('d5').style.backgroundColor = "#555";
                    if(d5 === 1){
                        d5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d5').style.backgroundImage = "none";
                    }
                    else if(d5 === 2){
                        d5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d5').style.backgroundImage = "none";
                    }
                }
                else if(player === "d5"){
                    player = "d4";
                    document.getElementById('d5').style.backgroundColor = "transparent";
                    document.getElementById('d4').style.backgroundColor = "#555";
                    if(d4 === 1){
                        d4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d4').style.backgroundImage = "none";
                    }
                    else if(d4 === 2){
                        d4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d4').style.backgroundImage = "none";
                    }
                }
                else if(player === "d4"){
                    player = "d3";
                    document.getElementById('d4').style.backgroundColor = "transparent";
                    document.getElementById('d3').style.backgroundColor = "#555";
                    if(d3 === 1){
                        d3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d3').style.backgroundImage = "none";
                    }
                    else if(d3 === 2){
                        d3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d3').style.backgroundImage = "none";
                    }
                }
                else if(player === "d3"){
                    player = "d2";
                    document.getElementById('d3').style.backgroundColor = "transparent";
                    document.getElementById('d2').style.backgroundColor = "#555";
                    if(d2 === 1){
                        d2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d2').style.backgroundImage = "none";
                    }
                    else if(d2 === 2){
                        d2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d2').style.backgroundImage = "none";
                    }
                }
                else if(player === "d2"){
                    player = "d1";
                    document.getElementById('d2').style.backgroundColor = "transparent";
                    document.getElementById('d1').style.backgroundColor = "#555";
                    if(d1 === 1){
                        d1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d1').style.backgroundImage = "none";
                    }
                    else if(d1 === 2){
                        d1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d1').style.backgroundImage = "none";
                    }
                }
                else if(player === "e8"){
                    player = "e7";
                    document.getElementById('e8').style.backgroundColor = "transparent";
                    document.getElementById('e7').style.backgroundColor = "#555";
                    if(e7 === 1){
                        e7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e7').style.backgroundImage = "none";
                    }
                    else if(e7 === 2){
                        e7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e7').style.backgroundImage = "none";
                    }
                }
                else if(player === "e7"){
                    player = "e6";
                    document.getElementById('e7').style.backgroundColor = "transparent";
                    document.getElementById('e6').style.backgroundColor = "#555";
                    if(e6 === 1){
                        e6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e6').style.backgroundImage = "none";
                    }
                    else if(e6 === 2){
                        e6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e6').style.backgroundImage = "none";
                    }
                }
                else if(player === "e6"){
                    player = "e5";
                    document.getElementById('e6').style.backgroundColor = "transparent";
                    document.getElementById('e5').style.backgroundColor = "#555";
                    if(e5 === 1){
                        e5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e5').style.backgroundImage = "none";
                    }
                    else if(e5 === 2){
                        e5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e5').style.backgroundImage = "none";
                    }
                }
                else if(player === "e5"){
                    player = "e4";
                    document.getElementById('e5').style.backgroundColor = "transparent";
                    document.getElementById('e4').style.backgroundColor = "#555";
                    if(e4 === 1){
                        e4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e4').style.backgroundImage = "none";
                    }
                    else if(e4 === 2){
                        e4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e4').style.backgroundImage = "none";
                    }
                }
                else if(player === "e4"){
                    player = "e3";
                    document.getElementById('e4').style.backgroundColor = "transparent";
                    document.getElementById('e3').style.backgroundColor = "#555";
                    if(e3 === 1){
                        e3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e3').style.backgroundImage = "none";
                    }
                    else if(e3 === 2){
                        e3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e3').style.backgroundImage = "none";
                    }
                }
                else if(player === "e3"){
                    player = "e2";
                    document.getElementById('e3').style.backgroundColor = "transparent";
                    document.getElementById('e2').style.backgroundColor = "#555";
                    if(e2 === 1){
                        e2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e2').style.backgroundImage = "none";
                    }
                    else if(e2 === 2){
                        e2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e2').style.backgroundImage = "none";
                    }
                }
                else if(player === "e2"){
                    player = "e1";
                    document.getElementById('e2').style.backgroundColor = "transparent";
                    document.getElementById('e1').style.backgroundColor = "#555";
                    if(e1 === 1){
                        e1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e1').style.backgroundImage = "none";
                    }
                    else if(e1 === 2){
                        e1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e1').style.backgroundImage = "none";
                    }
                }
                else if(player === "f8"){
                    player = "f7";
                    document.getElementById('f8').style.backgroundColor = "transparent";
                    document.getElementById('f7').style.backgroundColor = "#555";
                    if(f7 === 1){
                        f7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f7').style.backgroundImage = "none";
                    }
                    else if(f7 === 2){
                        f7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f7').style.backgroundImage = "none";
                    }
                }
                else if(player === "f7"){
                    player = "f6";
                    document.getElementById('f7').style.backgroundColor = "transparent";
                    document.getElementById('f6').style.backgroundColor = "#555";
                    if(f6 === 1){
                        f6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f6').style.backgroundImage = "none";
                    }
                    else if(f6 === 2){
                        f6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f6').style.backgroundImage = "none";
                    }
                }
                else if(player === "f6"){
                    player = "f5";
                    document.getElementById('f6').style.backgroundColor = "transparent";
                    document.getElementById('f5').style.backgroundColor = "#555";
                    if(f5 === 1){
                        f5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f5').style.backgroundImage = "none";
                    }
                    else if(f5 === 2){
                        f5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f5').style.backgroundImage = "none";
                    }
                }
                else if(player === "f5"){
                    player = "f4";
                    document.getElementById('f5').style.backgroundColor = "transparent";
                    document.getElementById('f4').style.backgroundColor = "#555";
                    if(f4 === 1){
                        f4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f4').style.backgroundImage = "none";
                    }
                    else if(f4 === 2){
                        f4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f4').style.backgroundImage = "none";
                    }
                }
                else if(player === "f4"){
                    player = "f3";
                    document.getElementById('f4').style.backgroundColor = "transparent";
                    document.getElementById('f3').style.backgroundColor = "#555";
                    if(f3 === 1){
                        f3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f3').style.backgroundImage = "none";
                    }
                    else if(f3 === 2){
                        f3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f3').style.backgroundImage = "none";
                    }
                }
                else if(player === "f3"){
                    player = "f2";
                    document.getElementById('f3').style.backgroundColor = "transparent";
                    document.getElementById('f2').style.backgroundColor = "#555";
                    if(f2 === 1){
                        f2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f2').style.backgroundImage = "none";
                    }
                    else if(f2 === 2){
                        f2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f2').style.backgroundImage = "none";
                    }
                }
                else if(player === "f2"){
                    player = "f1";
                    document.getElementById('f2').style.backgroundColor = "transparent";
                    document.getElementById('f1').style.backgroundColor = "#555";
                    if(f1 === 1){
                        f1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f1').style.backgroundImage = "none";
                    }
                    else if(f1 === 2){
                        f1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f1').style.backgroundImage = "none";
                    }
                }
                else if(player === "g8"){
                    player = "g7";
                    document.getElementById('g8').style.backgroundColor = "transparent";
                    document.getElementById('g7').style.backgroundColor = "#555";
                    if(g7 === 1){
                        g7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g7').style.backgroundImage = "none";
                    }
                    else if(g7 === 2){
                        g7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g7').style.backgroundImage = "none";
                    }
                }
                else if(player === "g7"){
                    player = "g6";
                    document.getElementById('g7').style.backgroundColor = "transparent";
                    document.getElementById('g6').style.backgroundColor = "#555";
                    if(g6 === 1){
                        g6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g6').style.backgroundImage = "none";
                    }
                    else if(g6 === 2){
                        g6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g6').style.backgroundImage = "none";
                    }
                }
                else if(player === "g6"){
                    player = "g5";
                    document.getElementById('g6').style.backgroundColor = "transparent";
                    document.getElementById('g5').style.backgroundColor = "#555";
                    if(g5 === 1){
                        g5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g5').style.backgroundImage = "none";
                    }
                    else if(g5 === 2){
                        g5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g5').style.backgroundImage = "none";
                    }
                }
                else if(player === "g5"){
                    player = "g4";
                    document.getElementById('g5').style.backgroundColor = "transparent";
                    document.getElementById('g4').style.backgroundColor = "#555";
                    if(g4 === 1){
                        g4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g4').style.backgroundImage = "none";
                    }
                    else if(g4 === 2){
                        g4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g4').style.backgroundImage = "none";
                    }
                }
                else if(player === "g4"){
                    player = "g3";
                    document.getElementById('g4').style.backgroundColor = "transparent";
                    document.getElementById('g3').style.backgroundColor = "#555";
                    if(g3 === 1){
                        g3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g3').style.backgroundImage = "none";
                    }
                    else if(g3 === 2){
                        g3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g3').style.backgroundImage = "none";
                    }
                }
                else if(player === "g3"){
                    player = "g2";
                    document.getElementById('g3').style.backgroundColor = "transparent";
                    document.getElementById('g2').style.backgroundColor = "#555";
                    if(g2 === 1){
                        g2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g2').style.backgroundImage = "none";
                    }
                    else if(g2 === 2){
                        g2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g2').style.backgroundImage = "none";
                    }
                }
                else if(player === "g2"){
                    player = "g1";
                    document.getElementById('g2').style.backgroundColor = "transparent";
                    document.getElementById('g1').style.backgroundColor = "#555";
                    if(g1 === 1){
                        g1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g1').style.backgroundImage = "none";
                    }
                    else if(g1 === 2){
                        g1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g1').style.backgroundImage = "none";
                    }
                }
                else if(player === "h8"){
                    player = "h7";
                    document.getElementById('h8').style.backgroundColor = "transparent";
                    document.getElementById('h7').style.backgroundColor = "#555";
                    if(h7 === 1){
                        h7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h7').style.backgroundImage = "none";
                    }
                    else if(h7 === 2){
                        h7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h7').style.backgroundImage = "none";
                    }
                }
                else if(player === "h7"){
                    player = "h6";
                    document.getElementById('h7').style.backgroundColor = "transparent";
                    document.getElementById('h6').style.backgroundColor = "#555";
                    if(h6 === 1){
                        h6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h6').style.backgroundImage = "none";
                    }
                    else if(h6 === 2){
                        h6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h6').style.backgroundImage = "none";
                    }
                }
                else if(player === "h6"){
                    player = "h5";
                    document.getElementById('h6').style.backgroundColor = "transparent";
                    document.getElementById('h5').style.backgroundColor = "#555";
                    if(h5 === 1){
                        h5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h5').style.backgroundImage = "none";
                    }
                    else if(h5 === 2){
                        h5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h5').style.backgroundImage = "none";
                    }
                }
                else if(player === "h5"){
                    player = "h4";
                    document.getElementById('h5').style.backgroundColor = "transparent";
                    document.getElementById('h4').style.backgroundColor = "#555";
                    if(h4 === 1){
                        h4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h4').style.backgroundImage = "none";
                    }
                    else if(h4 === 2){
                        h4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h4').style.backgroundImage = "none";
                    }
                }
                else if(player === "h4"){
                    player = "h3";
                    document.getElementById('h4').style.backgroundColor = "transparent";
                    document.getElementById('h3').style.backgroundColor = "#555";
                    if(h3 === 1){
                        h3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h3').style.backgroundImage = "none";
                    }
                    else if(h3 === 2){
                        h3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h3').style.backgroundImage = "none";
                    }
                }
                else if(player === "h3"){
                    player = "h2";
                    document.getElementById('h3').style.backgroundColor = "transparent";
                    document.getElementById('h2').style.backgroundColor = "#555";
                    if(h2 === 1){
                        h2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h2').style.backgroundImage = "none";
                    }
                    else if(h2 === 2){
                        h2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h2').style.backgroundImage = "none";
                    }
                }
                else if(player === "h2"){
                    player = "h1";
                    document.getElementById('h2').style.backgroundColor = "transparent";
                    document.getElementById('h1').style.backgroundColor = "#555";
                    if(h1 === 1){
                        h1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h1').style.backgroundImage = "none";
                    }
                    else if(h1 === 2){
                        h1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('h1').style.backgroundImage = "none";
                    }
                }
                else{}
            }
        }
        function cima(){
            if(isGameOn === true){
                //som.play();
                if(player === "a1"){
                    player = "b1";
                    document.getElementById('a1').style.backgroundColor = "transparent";
                    document.getElementById('b1').style.backgroundColor = "#555";
                    if(b1 === 1){
                        b1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b1').style.backgroundImage = "none";
                    }
                    else if(b1 === 2){
                        b1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b1').style.backgroundImage = "none";
                    }
                }
                else if(player === "a2"){
                    player = "b2";
                    document.getElementById('a2').style.backgroundColor = "transparent";
                    document.getElementById('b2').style.backgroundColor = "#555";
                    if(b2 === 1){
                        b2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b2').style.backgroundImage = "none";
                    }
                    else if(b2 === 2){
                        b2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b2').style.backgroundImage = "none";
                    }
                }
                else if(player === "a3"){
                    player = "b3";
                    document.getElementById('a3').style.backgroundColor = "transparent";
                    document.getElementById('b3').style.backgroundColor = "#555";
                    if(b3 === 1){
                        b3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b3').style.backgroundImage = "none";
                    }
                    else if(b3 === 2){
                        b3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b3').style.backgroundImage = "none";
                    }
                }
                else if(player === "a4"){
                    player = "b4";
                    document.getElementById('a4').style.backgroundColor = "transparent";
                    document.getElementById('b4').style.backgroundColor = "#555";
                    if(b4 === 1){
                        b4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b4').style.backgroundImage = "none";
                    }
                    else if(b4 === 2){
                        b4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b4').style.backgroundImage = "none";
                    }
                }
                else if(player === "a5"){
                    player = "b5";
                    document.getElementById('a5').style.backgroundColor = "transparent";
                    document.getElementById('b5').style.backgroundColor = "#555";
                    if(b5 === 1){
                        b5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b5').style.backgroundImage = "none";
                    }
                    else if(b5 === 2){
                        b5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b5').style.backgroundImage = "none";
                    }
                }
                else if(player === "a6"){
                    player = "b6";
                    document.getElementById('a6').style.backgroundColor = "transparent";
                    document.getElementById('b6').style.backgroundColor = "#555";
                    if(b6 === 1){
                        b6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b6').style.backgroundImage = "none";
                    }
                    else if(b6 === 2){
                        b6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b6').style.backgroundImage = "none";
                    }
                }
                else if(player === "a7"){
                    player = "b7";
                    document.getElementById('a7').style.backgroundColor = "transparent";
                    document.getElementById('b7').style.backgroundColor = "#555";
                    if(b7 === 1){
                        b7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b7').style.backgroundImage = "none";
                    }
                    else if(b7 === 2){
                        b7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b7').style.backgroundImage = "none";
                    }
                }
                else if(player === "a8"){
                    player = "b8";
                    document.getElementById('a8').style.backgroundColor = "transparent";
                    document.getElementById('b8').style.backgroundColor = "#555";
                    if(b8 === 1){
                        b8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b8').style.backgroundImage = "none";
                    }
                    else if(b8 === 2){
                        b8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('b8').style.backgroundImage = "none";
                    }
                }
                else if(player === "b1"){
                    player = "c1";
                    document.getElementById('b1').style.backgroundColor = "transparent";
                    document.getElementById('c1').style.backgroundColor = "#555";
                    if(c1 === 1){
                        c1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c1').style.backgroundImage = "none";
                    }
                    else if(c1 === 2){
                        c1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c1').style.backgroundImage = "none";
                    }
                }
                else if(player === "b2"){
                    player = "c2";
                    document.getElementById('b2').style.backgroundColor = "transparent";
                    document.getElementById('c2').style.backgroundColor = "#555";
                    if(c2 === 1){
                        c2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c2').style.backgroundImage = "none";
                    }
                    else if(c2 === 2){
                        c2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c2').style.backgroundImage = "none";
                    }
                    
                }
                else if(player === "b3"){
                    player = "c3";
                    document.getElementById('b3').style.backgroundColor = "transparent";
                    document.getElementById('c3').style.backgroundColor = "#555";
                    if(c3 === 1){
                        c3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c3').style.backgroundImage = "none";
                    }
                    else if(c3 === 2){
                        c3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c3').style.backgroundImage = "none";
                    }
                    
                }
                else if(player === "b4"){
                    player = "c4";
                    document.getElementById('b4').style.backgroundColor = "transparent";
                    document.getElementById('c4').style.backgroundColor = "#555";
                    if(c4 === 1){
                        c4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c4').style.backgroundImage = "none";
                    }
                    else if(c4 === 2){
                        c4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c4').style.backgroundImage = "none";
                    }
                    
                }
                else if(player === "b5"){
                    player = "c5";
                    document.getElementById('b5').style.backgroundColor = "transparent";
                    document.getElementById('c5').style.backgroundColor = "#555";
                    if(c5 === 1){
                        c5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c5').style.backgroundImage = "none";
                    }
                    else if(c5 === 2){
                        c5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c5').style.backgroundImage = "none";
                    }
                    
                }
                else if(player === "b6"){
                    player = "c6";
                    document.getElementById('b6').style.backgroundColor = "transparent";
                    document.getElementById('c6').style.backgroundColor = "#555";
                    if(c6 === 1){
                        c6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c6').style.backgroundImage = "none";
                    }
                    else if(c6 === 2){
                        c6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c6').style.backgroundImage = "none";
                    }
                    
                }
                else if(player === "b7"){
                    player = "c7";
                    document.getElementById('b7').style.backgroundColor = "transparent";
                    document.getElementById('c7').style.backgroundColor = "#555";
                    if(c7 === 1){
                        c7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c7').style.backgroundImage = "none";
                    }
                    else if(c7 === 2){
                        c7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c7').style.backgroundImage = "none";
                    }
                    
                }
                else if(player === "b8"){
                    player = "c8";
                    document.getElementById('b8').style.backgroundColor = "transparent";
                    document.getElementById('c8').style.backgroundColor = "#555";
                    if(c8 === 1){
                        c8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c8').style.backgroundImage = "none";
                    }
                    else if(c8 === 2){
                        c8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('c8').style.backgroundImage = "none";
                    }
                    
                }
                else if(player === "c1"){
                    player = "d1";
                    document.getElementById('c1').style.backgroundColor = "transparent";
                    document.getElementById('d1').style.backgroundColor = "#555";
                    if(d1 === 1){
                        d1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d1').style.backgroundImage = "none";
                    }
                    else if(d1 === 2){
                        d1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d1').style.backgroundImage = "none";
                    }
                }
                else if(player === "c2"){
                    player = "d2";
                    document.getElementById('c2').style.backgroundColor = "transparent";
                    document.getElementById('d2').style.backgroundColor = "#555";
                    if(d2 === 1){
                        d2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d2').style.backgroundImage = "none";
                    }
                    else if(d2 === 2){
                        d2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d2').style.backgroundImage = "none";
                    }
                }
                else if(player === "c3"){
                    player = "d3";
                    document.getElementById('c3').style.backgroundColor = "transparent";
                    document.getElementById('d3').style.backgroundColor = "#555";
                    if(d3 === 1){
                        d3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d3').style.backgroundImage = "none";
                    }
                    else if(d3 === 2){
                        d3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d3').style.backgroundImage = "none";
                    }
                }
                else if(player === "c4"){
                    player = "d4";
                    document.getElementById('c4').style.backgroundColor = "transparent";
                    document.getElementById('d4').style.backgroundColor = "#555";
                    if(d4 === 1){
                        d4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d4').style.backgroundImage = "none";
                    }
                    else if(d4 === 2){
                        d4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d4').style.backgroundImage = "none";
                    }
                }
                else if(player === "c5"){
                    player = "d5";
                    document.getElementById('c5').style.backgroundColor = "transparent";
                    document.getElementById('d5').style.backgroundColor = "#555";
                    if(d5 === 1){
                        d5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d5').style.backgroundImage = "none";
                    }
                    else if(d5 === 2){
                        d5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d5').style.backgroundImage = "none";
                    }
                }
                else if(player === "c6"){
                    player = "d6";
                    document.getElementById('c6').style.backgroundColor = "transparent";
                    document.getElementById('d6').style.backgroundColor = "#555";
                    if(d6 === 1){
                        d6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d6').style.backgroundImage = "none";
                    }
                    else if(d6 === 2){
                        d6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d6').style.backgroundImage = "none";
                    }
                }
                else if(player === "c7"){
                    player = "d7";
                    document.getElementById('c7').style.backgroundColor = "transparent";
                    document.getElementById('d7').style.backgroundColor = "#555";
                    if(d7 === 1){
                        d7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d7').style.backgroundImage = "none";
                    }
                    else if(d7 === 2){
                        d7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d7').style.backgroundImage = "none";
                    }
                }
                else if(player === "c8"){
                    player = "d8";
                    document.getElementById('c8').style.backgroundColor = "transparent";
                    document.getElementById('d8').style.backgroundColor = "#555";
                    if(d8 === 1){
                        d8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d8').style.backgroundImage = "none";
                    }
                    else if(d8 === 2){
                        d8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('d8').style.backgroundImage = "none";
                    }
                }
                else if(player === "d1"){
                    player = "e1";
                    document.getElementById('d1').style.backgroundColor = "transparent";
                    document.getElementById('e1').style.backgroundColor = "#555";
                    if(e1 === 1){
                        e1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e1').style.backgroundImage = "none";
                    }
                    else if(e1 === 2){
                        e1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e1').style.backgroundImage = "none";
                    }
                }
                else if(player === "d2"){
                    player = "e2";
                    document.getElementById('d2').style.backgroundColor = "transparent";
                    document.getElementById('e2').style.backgroundColor = "#555";
                    if(e2 === 1){
                        e2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e2').style.backgroundImage = "none";
                    }
                    else if(e2 === 2){
                        e2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e2').style.backgroundImage = "none";
                    }
                }
                else if(player === "d3"){
                    player = "e3";
                    document.getElementById('d3').style.backgroundColor = "transparent";
                    document.getElementById('e3').style.backgroundColor = "#555";
                    if(e3 === 1){
                        e3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e3').style.backgroundImage = "none";
                    }
                    else if(e3 === 2){
                        e3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e3').style.backgroundImage = "none";
                    }
                }
                else if(player === "d4"){
                    player = "e4";
                    document.getElementById('d4').style.backgroundColor = "transparent";
                    document.getElementById('e4').style.backgroundColor = "#555";
                    if(e4 === 1){
                        e4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e4').style.backgroundImage = "none";
                    }
                    else if(e4 === 2){
                        e4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e4').style.backgroundImage = "none";
                    }
                }
                else if(player === "d5"){
                    player = "e5";
                    document.getElementById('d5').style.backgroundColor = "transparent";
                    document.getElementById('e5').style.backgroundColor = "#555";
                    if(e5 === 1){
                        e5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e5').style.backgroundImage = "none";
                    }
                    else if(e5 === 2){
                        e5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e5').style.backgroundImage = "none";
                    }
                }
                else if(player === "d6"){
                    player = "e6";
                    document.getElementById('d6').style.backgroundColor = "transparent";
                    document.getElementById('e6').style.backgroundColor = "#555";
                    if(e6 === 1){
                        e6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e6').style.backgroundImage = "none";
                    }
                    else if(e6 === 2){
                        e6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e6').style.backgroundImage = "none";
                    }
                }
                else if(player === "d7"){
                    player = "e7";
                    document.getElementById('d7').style.backgroundColor = "transparent";
                    document.getElementById('e7').style.backgroundColor = "#555";
                    if(e7 === 1){
                        e7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e7').style.backgroundImage = "none";
                    }
                    else if(e7 === 2){
                        e7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e7').style.backgroundImage = "none";
                    }
                }
                else if(player === "d8"){
                    player = "e8";
                    document.getElementById('d8').style.backgroundColor = "transparent";
                    document.getElementById('e8').style.backgroundColor = "#555";
                    if(e8 === 1){
                        e8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e8').style.backgroundImage = "none";
                    }
                    else if(e8 === 2){
                        e8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('e8').style.backgroundImage = "none";
                    }
                }
                else if(player === "e1"){
                    player = "f1";
                    document.getElementById('e1').style.backgroundColor = "transparent";
                    document.getElementById('f1').style.backgroundColor = "#555";
                    if(f1 === 1){
                        f1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f1').style.backgroundImage = "none";
                    }
                    else if(f1 === 2){
                        f1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f1').style.backgroundImage = "none";
                    }
                }
                else if(player === "e2"){
                    player = "f2";
                    document.getElementById('e2').style.backgroundColor = "transparent";
                    document.getElementById('f2').style.backgroundColor = "#555";
                    if(f2 === 1){
                        f2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f2').style.backgroundImage = "none";
                    }
                    else if(f2 === 2){
                        f2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f2').style.backgroundImage = "none";
                    }
                }
                else if(player === "e3"){
                    player = "f3";
                    document.getElementById('e3').style.backgroundColor = "transparent";
                    document.getElementById('f3').style.backgroundColor = "#555";
                    if(f3 === 1){
                        f3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f3').style.backgroundImage = "none";
                    }
                    else if(f3 === 2){
                        f3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f3').style.backgroundImage = "none";
                    }
                }
                else if(player === "e4"){
                    player = "f4";
                    document.getElementById('e4').style.backgroundColor = "transparent";
                    document.getElementById('f4').style.backgroundColor = "#555";
                    if(f4 === 1){
                        f4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f4').style.backgroundImage = "none";
                    }
                    else if(f4 === 2){
                        f4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f4').style.backgroundImage = "none";
                    }
                }
                else if(player === "e5"){
                    player = "f5";
                    document.getElementById('e5').style.backgroundColor = "transparent";
                    document.getElementById('f5').style.backgroundColor = "#555";
                    if(f5 === 1){
                        f5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f5').style.backgroundImage = "none";
                    }
                    else if(f5 === 2){
                        f5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f5').style.backgroundImage = "none";
                    }
                }
                else if(player === "e6"){
                    player = "f6";
                    document.getElementById('e6').style.backgroundColor = "transparent";
                    document.getElementById('f6').style.backgroundColor = "#555";
                    if(f6 === 1){
                        f6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f6').style.backgroundImage = "none";
                    }
                    else if(f6 === 2){
                        f6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f6').style.backgroundImage = "none";
                    }
                }
                else if(player === "e7"){
                    player = "f7";
                    document.getElementById('e7').style.backgroundColor = "transparent";
                    document.getElementById('f7').style.backgroundColor = "#555";
                    if(f7 === 1){
                        f7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f7').style.backgroundImage = "none";
                    }
                    else if(f7 === 2){
                        f7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f7').style.backgroundImage = "none";
                    }
                }
                else if(player === "e8"){
                    player = "f8";
                    document.getElementById('e8').style.backgroundColor = "transparent";
                    document.getElementById('f8').style.backgroundColor = "#555";
                    if(f8 === 1){
                        f8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f8').style.backgroundImage = "none";
                    }
                    else if(f8 === 2){
                        f8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('f8').style.backgroundImage = "none";
                    }
                }
                else if(player === "f1"){
                    player = "g1";
                    document.getElementById('f1').style.backgroundColor = "transparent";
                    document.getElementById('g1').style.backgroundColor = "#555";
                    if(g1 === 1){
                        g1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g1').style.backgroundImage = "none";
                    }
                    else if(g1 === 2){
                        g1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g1').style.backgroundImage = "none";
                    }
                }
                else if(player === "f2"){
                    player = "g2";
                    document.getElementById('f2').style.backgroundColor = "transparent";
                    document.getElementById('g2').style.backgroundColor = "#555";
                    if(g2 === 1){
                        g2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g2').style.backgroundImage = "none";
                    }
                    else if(g2 === 2){
                        g2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g2').style.backgroundImage = "none";
                    }
                }
                else if(player === "f3"){
                    player = "g3";
                    document.getElementById('f3').style.backgroundColor = "transparent";
                    document.getElementById('g3').style.backgroundColor = "#555";
                    if(g3 === 1){
                        g3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g3').style.backgroundImage = "none";
                    }
                    else if(g3 === 2){
                        g3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g3').style.backgroundImage = "none";
                    }
                }
                else if(player === "f4"){
                    player = "g4";
                    document.getElementById('f4').style.backgroundColor = "transparent";
                    document.getElementById('g4').style.backgroundColor = "#555";
                    if(g4 === 1){
                        g4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g4').style.backgroundImage = "none";
                    }
                    else if(g4 === 2){
                        g4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g4').style.backgroundImage = "none";
                    }
                }
                else if(player === "f5"){
                    player = "g5";
                    document.getElementById('f5').style.backgroundColor = "transparent";
                    document.getElementById('g5').style.backgroundColor = "#555";
                    if(g5 === 1){
                        g5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g5').style.backgroundImage = "none";
                    }
                    else if(g5 === 2){
                        g5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g5').style.backgroundImage = "none";
                    }
                }
                else if(player === "f6"){
                    player = "g6";
                    document.getElementById('f6').style.backgroundColor = "transparent";
                    document.getElementById('g6').style.backgroundColor = "#555";
                    if(g6 === 1){
                        g6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g6').style.backgroundImage = "none";
                    }
                    else if(g6 === 2){
                        g6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g6').style.backgroundImage = "none";
                    }
                }
                else if(player === "f7"){
                    player = "g7";
                    document.getElementById('f7').style.backgroundColor = "transparent";
                    document.getElementById('g7').style.backgroundColor = "#555";
                    if(g7 === 1){
                        g7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g7').style.backgroundImage = "none";
                    }
                    else if(g7 === 2){
                        g7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g7').style.backgroundImage = "none";
                    }
                }
                else if(player === "f8"){
                    player = "g8";
                    document.getElementById('f8').style.backgroundColor = "transparent";
                    document.getElementById('g8').style.backgroundColor = "#555";
                    if(g8 === 1){
                        g8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g8').style.backgroundImage = "none";
                    }
                    else if(g8 === 2){
                        g8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('g8').style.backgroundImage = "none";
                    }
                }
                else if(player === "g1"){
                    player = "h1";
                    document.getElementById('g1').style.backgroundColor = "transparent";
                    document.getElementById('h1').style.backgroundColor = "#555";
                    if(h1 === 1){
                        h1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h1').style.backgroundImage = "none";
                    }
                    else if(h1 === 2){
                        h1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h1').style.backgroundImage = "none";
                    }
                }
                else if(player === "g2"){
                    player = "h2";
                    document.getElementById('g2').style.backgroundColor = "transparent";
                    document.getElementById('h2').style.backgroundColor = "#555";
                    if(h2 === 1){
                        h2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h2').style.backgroundImage = "none";
                    }
                    else if(h2 === 2){
                        h2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h2').style.backgroundImage = "none";
                    }
                }
                else if(player === "g3"){
                    player = "h3";
                    document.getElementById('g3').style.backgroundColor = "transparent";
                    document.getElementById('h3').style.backgroundColor = "#555";
                    if(h3 === 1){
                        h3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h3').style.backgroundImage = "none";
                    }
                    else if(h3 === 2){
                        h3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h3').style.backgroundImage = "none";
                    }
                }
                else if(player === "g4"){
                    player = "h4";
                    document.getElementById('g4').style.backgroundColor = "transparent";
                    document.getElementById('h4').style.backgroundColor = "#555";
                    if(h4 === 1){
                        h4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h4').style.backgroundImage = "none";
                    }
                    else if(h4 === 2){
                        h4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h4').style.backgroundImage = "none";
                    }
                }
                else if(player === "g5"){
                    player = "h5";
                    document.getElementById('g5').style.backgroundColor = "transparent";
                    document.getElementById('h5').style.backgroundColor = "#555";
                    if(h5 === 1){
                        h5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h5').style.backgroundImage = "none";
                    }
                    else if(h5 === 2){
                        h5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h5').style.backgroundImage = "none";
                    }
                }
                else if(player === "g6"){
                    player = "h6";
                    document.getElementById('g6').style.backgroundColor = "transparent";
                    document.getElementById('h6').style.backgroundColor = "#555";
                    if(h6 === 1){
                        h6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h6').style.backgroundImage = "none";
                    }
                    else if(h6 === 2){
                        h6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h6').style.backgroundImage = "none";
                    }
                }
                else if(player === "g7"){
                    player = "h7";
                    document.getElementById('g7').style.backgroundColor = "transparent";
                    document.getElementById('h7').style.backgroundColor = "#555";
                    if(h7 === 1){
                        h7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h7').style.backgroundImage = "none";
                    }
                    else if(h7 === 2){
                        h7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h7').style.backgroundImage = "none";
                    }
                }
                else if(player === "g8"){
                    player = "h8";
                    document.getElementById('g8').style.backgroundColor = "transparent";
                    document.getElementById('h8').style.backgroundColor = "#555";
                    if(h8 === 1){
                        h8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h8').style.backgroundImage = "none";
                    }
                    else if(h8 === 2){
                        h8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                         document.getElementById('h8').style.backgroundImage = "none";
                    }
                }
            }
        }
        function baixo(){
            if(isGameOn === true){
                //som.play();
                if(player === "b1"){
                    player = "a1";
                    document.getElementById('b1').style.backgroundColor = "transparent";
                    document.getElementById('a1').style.backgroundColor = "#555";
                    if(a1 === 1){
                        a1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a1').style.backgroundImage = "none";
                    }
                    else if(a1 === 2){
                        a1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a1').style.backgroundImage = "none";
                    }
                }
                else if(player === "b2"){
                    player = "a2";
                    document.getElementById('b2').style.backgroundColor = "transparent";
                    document.getElementById('a2').style.backgroundColor = "#555";
                    if(a2 === 1){
                        a2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a2').style.backgroundImage = "none";
                    }
                    else if(a2 === 2){
                        a2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a2').style.backgroundImage = "none";
                    }
                }
                else if(player === "b3"){
                    player = "a3";
                    document.getElementById('b3').style.backgroundColor = "transparent";
                    document.getElementById('a3').style.backgroundColor = "#555";
                    if(a3 === 1){
                        a3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a3').style.backgroundImage = "none";
                    }
                    else if(a3 === 2){
                        a3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a3').style.backgroundImage = "none";
                    }
                }
                else if(player === "b4"){
                    player = "a4";
                    document.getElementById('b4').style.backgroundColor = "transparent";
                    document.getElementById('a4').style.backgroundColor = "#555";
                    if(a4 === 1){
                        a4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a4').style.backgroundImage = "none";
                    }
                    else if(a4 === 2){
                        a4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a4').style.backgroundImage = "none";
                    }
                }
                else if(player === "b5"){
                    player = "a5";
                    document.getElementById('b5').style.backgroundColor = "transparent";
                    document.getElementById('a5').style.backgroundColor = "#555";
                    if(a5 === 1){
                        a5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a5').style.backgroundImage = "none";
                    }
                    else if(a5 === 2){
                        a5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a5').style.backgroundImage = "none";
                    }
                }
                else if(player === "b6"){
                    player = "a6";
                    document.getElementById('b6').style.backgroundColor = "transparent";
                    document.getElementById('a6').style.backgroundColor = "#555";
                    if(a6 === 1){
                        a6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a6').style.backgroundImage = "none";
                    }
                    else if(a6 === 2){
                        a6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a6').style.backgroundImage = "none";
                    }
                }
                else if(player === "b7"){
                    player = "a7";
                    document.getElementById('b7').style.backgroundColor = "transparent";
                    document.getElementById('a7').style.backgroundColor = "#555";
                    if(a7 === 1){
                        a7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a7').style.backgroundImage = "none";
                    }
                    else if(a7 === 2){
                        a7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a7').style.backgroundImage = "none";
                    }
                }
                else if(player === "b8"){
                    player = "a8";
                    document.getElementById('b8').style.backgroundColor = "transparent";
                    document.getElementById('a8').style.backgroundColor = "#555";
                    if(a8 === 1){
                        a8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a8').style.backgroundImage = "none";
                    }
                    else if(a8 === 2){
                        a8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('a8').style.backgroundImage = "none";
                    }
                }
                else if(player === "c1"){
                    player = "b1";
                    document.getElementById('c1').style.backgroundColor = "transparent";
                    document.getElementById('b1').style.backgroundColor = "#555";
                    if(b1 === 1){
                        b1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b1').style.backgroundImage = "none";
                    }
                    else if(b1 === 2){
                        b1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b1').style.backgroundImage = "none";
                    }
                }
                else if(player === "c2"){
                    player = "b2";
                    document.getElementById('c2').style.backgroundColor = "transparent";
                    document.getElementById('b2').style.backgroundColor = "#555";
                    if(b2 === 1){
                        b2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b2').style.backgroundImage = "none";
                    }
                    else if(b2 === 2){
                        b2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b2').style.backgroundImage = "none";
                    }
                }
                else if(player === "c3"){
                    player = "b3";
                    document.getElementById('c3').style.backgroundColor = "transparent";
                    document.getElementById('b3').style.backgroundColor = "#555";
                    if(b3 === 1){
                        b3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b3').style.backgroundImage = "none";
                    }
                    else if(b3 === 2){
                        b3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b3').style.backgroundImage = "none";
                    }
                }
                else if(player === "c4"){
                    player = "b4";
                    document.getElementById('c4').style.backgroundColor = "transparent";
                    document.getElementById('b4').style.backgroundColor = "#555";
                    if(b4 === 1){
                        b4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b4').style.backgroundImage = "none";
                    }
                    else if(b4 === 2){
                        b4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b4').style.backgroundImage = "none";
                    }
                }
                else if(player === "c5"){
                    player = "b5";
                    document.getElementById('c5').style.backgroundColor = "transparent";
                    document.getElementById('b5').style.backgroundColor = "#555";
                    if(b5 === 1){
                        b5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b5').style.backgroundImage = "none";
                    }
                    else if(b5 === 2){
                        b5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b5').style.backgroundImage = "none";
                    }
                }
                else if(player === "c6"){
                    player = "b6";
                    document.getElementById('c6').style.backgroundColor = "transparent";
                    document.getElementById('b6').style.backgroundColor = "#555";
                    if(b6 === 1){
                        b6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b6').style.backgroundImage = "none";
                    }
                    else if(b6 === 2){
                        b6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b6').style.backgroundImage = "none";
                    }
                }
                else if(player === "c7"){
                    player = "b7";
                    document.getElementById('c7').style.backgroundColor = "transparent";
                    document.getElementById('b7').style.backgroundColor = "#555";
                    if(b7 === 1){
                        b7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b7').style.backgroundImage = "none";
                    }
                    else if(b7 === 2){
                        b7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b7').style.backgroundImage = "none";
                    }
                }
                else if(player === "c8"){
                    player = "b8";
                    document.getElementById('c8').style.backgroundColor = "transparent";
                    document.getElementById('b8').style.backgroundColor = "#555";
                    if(b8 === 1){
                        b8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b8').style.backgroundImage = "none";
                    }
                    else if(b8 === 2){
                        b8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('b8').style.backgroundImage = "none";
                    }
                }
                else if(player === "d1"){
                    player = "c1";
                    document.getElementById('d1').style.backgroundColor = "transparent";
                    document.getElementById('c1').style.backgroundColor = "#555";
                    if(c1 === 1){
                        c1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c1').style.backgroundImage = "none";
                    }
                    else if(c1 === 2){
                        c1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c1').style.backgroundImage = "none";
                    }
                }
                else if(player === "d2"){
                    player = "c2";
                    document.getElementById('d2').style.backgroundColor = "transparent";
                    document.getElementById('c2').style.backgroundColor = "#555";
                    if(c2 === 1){
                        c2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c2').style.backgroundImage = "none";
                    }
                    else if(c2 === 2){
                        c2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c2').style.backgroundImage = "none";
                    }
                }
                else if(player === "d3"){
                    player = "c3";
                    document.getElementById('d3').style.backgroundColor = "transparent";
                    document.getElementById('c3').style.backgroundColor = "#555";
                    if(c3 === 1){
                        c3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c3').style.backgroundImage = "none";
                    }
                    else if(c3 === 2){
                        c3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c3').style.backgroundImage = "none";
                    }
                }
                else if(player === "d4"){
                    player = "c4";
                    document.getElementById('d4').style.backgroundColor = "transparent";
                    document.getElementById('c4').style.backgroundColor = "#555";
                    if(c4 === 1){
                        c4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c4').style.backgroundImage = "none";
                    }
                    else if(c4 === 2){
                        c4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c4').style.backgroundImage = "none";
                    }
                }
                else if(player === "d5"){
                    player = "c5";
                    document.getElementById('d5').style.backgroundColor = "transparent";
                    document.getElementById('c5').style.backgroundColor = "#555";
                    if(c5 === 1){
                        c5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c5').style.backgroundImage = "none";
                    }
                    else if(c5 === 2){
                        c5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c5').style.backgroundImage = "none";
                    }
                }
                else if(player === "d6"){
                    player = "c6";
                    document.getElementById('d6').style.backgroundColor = "transparent";
                    document.getElementById('c6').style.backgroundColor = "#555";
                    if(c6 === 1){
                        c6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c6').style.backgroundImage = "none";
                    }
                    else if(c6 === 2){
                        c6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c6').style.backgroundImage = "none";
                    }
                }
                else if(player === "d7"){
                    player = "c7";
                    document.getElementById('d7').style.backgroundColor = "transparent";
                    document.getElementById('c7').style.backgroundColor = "#555";
                    if(c7 === 1){
                        c7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c7').style.backgroundImage = "none";
                    }
                    else if(c7 === 2){
                        c7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c7').style.backgroundImage = "none";
                    }
                }
                else if(player === "d8"){
                    player = "c8";
                    document.getElementById('d8').style.backgroundColor = "transparent";
                    document.getElementById('c8').style.backgroundColor = "#555";
                    if(c8 === 1){
                        c8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c8').style.backgroundImage = "none";
                    }
                    else if(c8 === 2){
                        c8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('c8').style.backgroundImage = "none";
                    }
                }
                else if(player === "e1"){
                    player = "d1";
                    document.getElementById('e1').style.backgroundColor = "transparent";
                    document.getElementById('d1').style.backgroundColor = "#555";
                    if(d1 === 1){
                        d1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d1').style.backgroundImage = "none";
                    }
                    else if(d1 === 2){
                        d1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d1').style.backgroundImage = "none";
                    }
                }
                else if(player === "e2"){
                    player = "d2";
                    document.getElementById('e2').style.backgroundColor = "transparent";
                    document.getElementById('d2').style.backgroundColor = "#555";
                    if(d2 === 1){
                        d2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d2').style.backgroundImage = "none";
                    }
                    else if(d2 === 2){
                        d2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d2').style.backgroundImage = "none";
                    }
                }
                else if(player === "e3"){
                    player = "d3";
                    document.getElementById('e3').style.backgroundColor = "transparent";
                    document.getElementById('d3').style.backgroundColor = "#555";
                    if(d3 === 1){
                        d3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d3').style.backgroundImage = "none";
                    }
                    else if(d3 === 2){
                        d3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d3').style.backgroundImage = "none";
                    }
                }
                else if(player === "e4"){
                    player = "d4";
                    document.getElementById('e4').style.backgroundColor = "transparent";
                    document.getElementById('d4').style.backgroundColor = "#555";
                    if(d4 === 1){
                        d4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d4').style.backgroundImage = "none";
                    }
                    else if(d4 === 2){
                        d4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d4').style.backgroundImage = "none";
                    }
                }
                else if(player === "e5"){
                    player = "d5";
                    document.getElementById('e5').style.backgroundColor = "transparent";
                    document.getElementById('d5').style.backgroundColor = "#555";
                    if(d5 === 1){
                        d5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d5').style.backgroundImage = "none";
                    }
                    else if(d5 === 2){
                        d5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d5').style.backgroundImage = "none";
                    }
                }
                else if(player === "e6"){
                    player = "d6";
                    document.getElementById('e6').style.backgroundColor = "transparent";
                    document.getElementById('d6').style.backgroundColor = "#555";
                    if(d6 === 1){
                        d6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d6').style.backgroundImage = "none";
                    }
                    else if(d6 === 2){
                        d6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d6').style.backgroundImage = "none";
                    }
                }
                else if(player === "e7"){
                    player = "d7";
                    document.getElementById('e7').style.backgroundColor = "transparent";
                    document.getElementById('d7').style.backgroundColor = "#555";
                    if(d7 === 1){
                        d7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d7').style.backgroundImage = "none";
                    }
                    else if(d7 === 2){
                        d7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d7').style.backgroundImage = "none";
                    }
                }
                else if(player === "e8"){
                    player = "d8";
                    document.getElementById('e8').style.backgroundColor = "transparent";
                    document.getElementById('d8').style.backgroundColor = "#555";
                    if(d8 === 1){
                        d8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d8').style.backgroundImage = "none";
                    }
                    else if(d8 === 2){
                        d8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('d8').style.backgroundImage = "none";
                    }
                }
                else if(player === "f1"){
                    player = "e1";
                    document.getElementById('f1').style.backgroundColor = "transparent";
                    document.getElementById('e1').style.backgroundColor = "#555";
                    if(e1 === 1){
                        e1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e1').style.backgroundImage = "none";
                    }
                    else if(e1 === 2){
                        e1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e1').style.backgroundImage = "none";
                    }
                }
                else if(player === "f2"){
                    player = "e2";
                    document.getElementById('f2').style.backgroundColor = "transparent";
                    document.getElementById('e2').style.backgroundColor = "#555";
                    if(e2 === 1){
                        e2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e2').style.backgroundImage = "none";
                    }
                    else if(e2 === 2){
                        e2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e2').style.backgroundImage = "none";
                    }
                }
                else if(player === "f3"){
                    player = "e3";
                    document.getElementById('f3').style.backgroundColor = "transparent";
                    document.getElementById('e3').style.backgroundColor = "#555";
                    if(e3 === 1){
                        e3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e3').style.backgroundImage = "none";
                    }
                    else if(e3 === 2){
                        e3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e3').style.backgroundImage = "none";
                    }
                }
                else if(player === "f4"){
                    player = "e4";
                    document.getElementById('f4').style.backgroundColor = "transparent";
                    document.getElementById('e4').style.backgroundColor = "#555";
                    if(e4 === 1){
                        e4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e4').style.backgroundImage = "none";
                    }
                    else if(e4 === 2){
                        e4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e4').style.backgroundImage = "none";
                    }
                }
                else if(player === "f5"){
                    player = "e5";
                    document.getElementById('f5').style.backgroundColor = "transparent";
                    document.getElementById('e5').style.backgroundColor = "#555";
                    if(e5 === 1){
                        e5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e5').style.backgroundImage = "none";
                    }
                    else if(e5 === 2){
                        e5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e5').style.backgroundImage = "none";
                    }
                }
                else if(player === "f6"){
                    player = "e6";
                    document.getElementById('f6').style.backgroundColor = "transparent";
                    document.getElementById('e6').style.backgroundColor = "#555";
                    if(e6 === 1){
                        e6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e6').style.backgroundImage = "none";
                    }
                    else if(e6 === 2){
                        e6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e6').style.backgroundImage = "none";
                    }
                }
                else if(player === "f7"){
                    player = "e7";
                    document.getElementById('f7').style.backgroundColor = "transparent";
                    document.getElementById('e7').style.backgroundColor = "#555";
                    if(e7 === 1){
                        e7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e7').style.backgroundImage = "none";
                    }
                    else if(e7 === 2){
                        e7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e7').style.backgroundImage = "none";
                    }
                }
                else if(player === "f8"){
                    player = "e8";
                    document.getElementById('f8').style.backgroundColor = "transparent";
                    document.getElementById('e8').style.backgroundColor = "#555";
                    if(e8 === 1){
                        e8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e8').style.backgroundImage = "none";
                    }
                    else if(e8 === 2){
                        e8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('e8').style.backgroundImage = "none";
                    }
                }
                else if(player === "g1"){
                    player = "f1";
                    document.getElementById('g1').style.backgroundColor = "transparent";
                    document.getElementById('f1').style.backgroundColor = "#555";
                    if(f1 === 1){
                        f1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f1').style.backgroundImage = "none";
                    }
                    else if(f1 === 2){
                        f1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f1').style.backgroundImage = "none";
                    }
                }
                else if(player === "g2"){
                    player = "f2";
                    document.getElementById('g2').style.backgroundColor = "transparent";
                    document.getElementById('f2').style.backgroundColor = "#555";
                    if(f2 === 1){
                        f2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f2').style.backgroundImage = "none";
                    }
                    else if(f2 === 2){
                        f2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f2').style.backgroundImage = "none";
                    }
                }
                else if(player === "g3"){
                    player = "f3";
                    document.getElementById('g3').style.backgroundColor = "transparent";
                    document.getElementById('f3').style.backgroundColor = "#555";
                    if(f3 === 1){
                        f3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f3').style.backgroundImage = "none";
                    }
                    else if(f3 === 2){
                        f3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f3').style.backgroundImage = "none";
                    }
                }
                else if(player === "g4"){
                    player = "f4";
                    document.getElementById('g4').style.backgroundColor = "transparent";
                    document.getElementById('f4').style.backgroundColor = "#555";
                    if(f4 === 1){
                        f4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f4').style.backgroundImage = "none";
                    }
                    else if(f4 === 2){
                        f4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f4').style.backgroundImage = "none";
                    }
                }
                else if(player === "g5"){
                    player = "f5";
                    document.getElementById('g5').style.backgroundColor = "transparent";
                    document.getElementById('f5').style.backgroundColor = "#555";
                    if(f5 === 1){
                        f5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f5').style.backgroundImage = "none";
                    }
                    else if(f5 === 2){
                        f5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f5').style.backgroundImage = "none";
                    }
                }
                else if(player === "g6"){
                    player = "f6";
                    document.getElementById('g6').style.backgroundColor = "transparent";
                    document.getElementById('f6').style.backgroundColor = "#555";
                    if(f6 === 1){
                        f6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f6').style.backgroundImage = "none";
                    }
                    else if(f6 === 2){
                        f6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f6').style.backgroundImage = "none";
                    }
                }
                else if(player === "g7"){
                    player = "f7";
                    document.getElementById('g7').style.backgroundColor = "transparent";
                    document.getElementById('f7').style.backgroundColor = "#555";
                    if(f7 === 1){
                        f7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f7').style.backgroundImage = "none";
                    }
                    else if(f7 === 2){
                        f7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f7').style.backgroundImage = "none";
                    }
                }
                else if(player === "g8"){
                    player = "f8";
                    document.getElementById('g8').style.backgroundColor = "transparent";
                    document.getElementById('f8').style.backgroundColor = "#555";
                    if(f8 === 1){
                        f8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f8').style.backgroundImage = "none";
                    }
                    else if(f8 === 2){
                        f8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('f8').style.backgroundImage = "none";
                    }
                }
                else if(player === "h1"){
                    player = "g1";
                    document.getElementById('h1').style.backgroundColor = "transparent";
                    document.getElementById('g1').style.backgroundColor = "#555";
                    if(g1 === 1){
                        g1 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g1').style.backgroundImage = "none";
                    }
                    else if(g1 === 2){
                        g1 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g1').style.backgroundImage = "none";
                    }
                }
                else if(player === "h2"){
                    player = "g2";
                    document.getElementById('h2').style.backgroundColor = "transparent";
                    document.getElementById('g2').style.backgroundColor = "#555";
                    if(g2 === 1){
                        g2 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g2').style.backgroundImage = "none";
                    }
                    else if(g2 === 2){
                        g2 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g2').style.backgroundImage = "none";
                    }
                }
                else if(player === "h3"){
                    player = "g3";
                    document.getElementById('h3').style.backgroundColor = "transparent";
                    document.getElementById('g3').style.backgroundColor = "#555";
                    if(g3 === 1){
                        g3 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g3').style.backgroundImage = "none";
                    }
                    else if(g3 === 2){
                        g3 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g3').style.backgroundImage = "none";
                    }
                }
                else if(player === "h4"){
                    player = "g4";
                    document.getElementById('h4').style.backgroundColor = "transparent";
                    document.getElementById('g4').style.backgroundColor = "#555";
                    if(g4 === 1){
                        g4 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g4').style.backgroundImage = "none";
                    }
                    else if(g4 === 2){
                        g4 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g4').style.backgroundImage = "none";
                    }
                }
                else if(player === "h5"){
                    player = "g5";
                    document.getElementById('h5').style.backgroundColor = "transparent";
                    document.getElementById('g5').style.backgroundColor = "#555";
                    if(g5 === 1){
                        g5 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g5').style.backgroundImage = "none";
                    }
                    else if(g5 === 2){
                        g5 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g5').style.backgroundImage = "none";
                    }
                }
                else if(player === "h6"){
                    player = "g6";
                    document.getElementById('h6').style.backgroundColor = "transparent";
                    document.getElementById('g6').style.backgroundColor = "#555";
                    if(g6 === 1){
                        g6 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g6').style.backgroundImage = "none";
                    }
                    else if(g6 === 2){
                        g6 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g6').style.backgroundImage = "none";
                    }
                }
                else if(player === "h7"){
                    player = "g7";
                    document.getElementById('h7').style.backgroundColor = "transparent";
                    document.getElementById('g7').style.backgroundColor = "#555";
                    if(g7 === 1){
                        g7 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g7').style.backgroundImage = "none";
                    }
                    else if(g7 === 2){
                        g7 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g7').style.backgroundImage = "none";
                    }
                }
                else if(player === "h8"){
                    player = "g8";
                    document.getElementById('h8').style.backgroundColor = "transparent";
                    document.getElementById('g8').style.backgroundColor = "#555";
                    if(g8 === 1){
                        g8 = 0;
                        pont = pont + 100; tocarSom();
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g8').style.backgroundImage = "none";
                    }
                    else if(g8 === 2){
                        g8 = 0;
                        pont = pont + pontFrutaVermelha; tocarSomVermelho();
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                        document.getElementById('g8').style.backgroundImage = "none";
                    }
                }
            }
        }
        function reiniciar(){
            isGameOn = true;
            document.getElementById('tela-inicial').style.display = "none";
            document.getElementById('btn-mudar-dificuldade').style.display = 'block';
            player = "a1";
            pont = 0;
            frutasVerdes = 0;
            loopFrutaVermelha();
            document.getElementById('pont').innerHTML = "Pontuação: " + pont;
            a1= 0; a2= 0; a3= 0; a4= 0; a5= 0; a6= 0; a7= 0; a8= 0; b1= 0; b2= 0; b3= 0; b4= 0; b5= 0; b6= 0; b7= 0; b8= 0; c1= 0; c2= 0; c3= 0; c4= 0; c5= 0; c6= 0; c7= 0; c8= 0; d1= 0; d2= 0; d3= 0; d4= 0; d5= 0; d6= 0; d7= 0; d8= 0; e1= 0; e2= 0; e3= 0; e4=0; e5= 0; e6= 0; e7= 0; e8= 0; f1= 0; f2= 0; f3= 0; f4= 0; f5= 0; f6= 0; f7= 0; f8= 0; g1= 0; g2= 0; g3= 0; g4= 0; g5= 0; g6= 0; g7= 0; g8= 0; h1= 0; h2= 0; h3= 0; h4= 0; h5= 0; h6= 0; h7= 0; h8 = 0;
            frutasAtivas = 0;
            document.getElementById('a1').style.backgroundColor = "#555";
            document.getElementById('a2').style.backgroundColor = "transparent";
            document.getElementById('a3').style.backgroundColor = "transparent";
            document.getElementById('a4').style.backgroundColor = "transparent";
            document.getElementById('a5').style.backgroundColor = "transparent";
            document.getElementById('a6').style.backgroundColor = "transparent";
            document.getElementById('a7').style.backgroundColor = "transparent";
            document.getElementById('a8').style.backgroundColor = "transparent";
            document.getElementById('b1').style.backgroundColor = "transparent";
            document.getElementById('b2').style.backgroundColor = "transparent";
            document.getElementById('b3').style.backgroundColor = "transparent";
            document.getElementById('b4').style.backgroundColor = "transparent";
            document.getElementById('b5').style.backgroundColor = "transparent";
            document.getElementById('b6').style.backgroundColor = "transparent";
            document.getElementById('b7').style.backgroundColor = "transparent";
            document.getElementById('b8').style.backgroundColor = "transparent";
            document.getElementById('c1').style.backgroundColor = "transparent";
            document.getElementById('c2').style.backgroundColor = "transparent";
            document.getElementById('c3').style.backgroundColor = "transparent";
            document.getElementById('c4').style.backgroundColor = "transparent";
            document.getElementById('c5').style.backgroundColor = "transparent";
            document.getElementById('c6').style.backgroundColor = "transparent";
            document.getElementById('c7').style.backgroundColor = "transparent";
            document.getElementById('c8').style.backgroundColor = "transparent";
            document.getElementById('d1').style.backgroundColor = "transparent";
            document.getElementById('d2').style.backgroundColor = "transparent";
            document.getElementById('d3').style.backgroundColor = "transparent";
            document.getElementById('d4').style.backgroundColor = "transparent";
            document.getElementById('d5').style.backgroundColor = "transparent";
            document.getElementById('d6').style.backgroundColor = "transparent";
            document.getElementById('d7').style.backgroundColor = "transparent";
            document.getElementById('d8').style.backgroundColor = "transparent";
            document.getElementById('e1').style.backgroundColor = "transparent";
            document.getElementById('e2').style.backgroundColor = "transparent";
            document.getElementById('e3').style.backgroundColor = "transparent";
            document.getElementById('e4').style.backgroundColor = "transparent";
            document.getElementById('e5').style.backgroundColor = "transparent";
            document.getElementById('e6').style.backgroundColor = "transparent";
            document.getElementById('e7').style.backgroundColor = "transparent";
            document.getElementById('e8').style.backgroundColor = "transparent";
            document.getElementById('f1').style.backgroundColor = "transparent";
            document.getElementById('f2').style.backgroundColor = "transparent";
            document.getElementById('f3').style.backgroundColor = "transparent";
            document.getElementById('f4').style.backgroundColor = "transparent";
            document.getElementById('f5').style.backgroundColor = "transparent";
            document.getElementById('f6').style.backgroundColor = "transparent";
            document.getElementById('f7').style.backgroundColor = "transparent";
            document.getElementById('f8').style.backgroundColor = "transparent";
            document.getElementById('g1').style.backgroundColor = "transparent";
            document.getElementById('g2').style.backgroundColor = "transparent";
            document.getElementById('g3').style.backgroundColor = "transparent";
            document.getElementById('g4').style.backgroundColor = "transparent";
            document.getElementById('g5').style.backgroundColor = "transparent";
            document.getElementById('g6').style.backgroundColor = "transparent";
            document.getElementById('g7').style.backgroundColor = "transparent";
            document.getElementById('g8').style.backgroundColor = "transparent";
            document.getElementById('h1').style.backgroundColor = "transparent";
            document.getElementById('h2').style.backgroundColor = "transparent";
            document.getElementById('h3').style.backgroundColor = "transparent";
            document.getElementById('h4').style.backgroundColor = "transparent";
            document.getElementById('h5').style.backgroundColor = "transparent";
            document.getElementById('h6').style.backgroundColor = "transparent";
            document.getElementById('h7').style.backgroundColor = "transparent";
            document.getElementById('h8').style.backgroundColor = "transparent";
            document.getElementById('a1').style.backgroundImage = "none";
            document.getElementById('a2').style.backgroundImage = "none";
            document.getElementById('a3').style.backgroundImage = "none";
            document.getElementById('a4').style.backgroundImage = "none";
            document.getElementById('a5').style.backgroundImage = "none";
            document.getElementById('a6').style.backgroundImage = "none";
            document.getElementById('a7').style.backgroundImage = "none";
            document.getElementById('a8').style.backgroundImage = "none";
            document.getElementById('b1').style.backgroundImage = "none";
            document.getElementById('b2').style.backgroundImage = "none";
            document.getElementById('b3').style.backgroundImage = "none";
            document.getElementById('b4').style.backgroundImage = "none";
            document.getElementById('b5').style.backgroundImage = "none";
            document.getElementById('b6').style.backgroundImage = "none";
            document.getElementById('b7').style.backgroundImage = "none";
            document.getElementById('b8').style.backgroundImage = "none";
            document.getElementById('c1').style.backgroundImage = "none";
            document.getElementById('c2').style.backgroundImage = "none";
            document.getElementById('c3').style.backgroundImage = "none";
            document.getElementById('c4').style.backgroundImage = "none";
            document.getElementById('c5').style.backgroundImage = "none";
            document.getElementById('c6').style.backgroundImage = "none";
            document.getElementById('c7').style.backgroundImage = "none";
            document.getElementById('c8').style.backgroundImage = "none";
            document.getElementById('d1').style.backgroundImage = "none";
            document.getElementById('d2').style.backgroundImage = "none";
            document.getElementById('d3').style.backgroundImage = "none";
            document.getElementById('d4').style.backgroundImage = "none";
            document.getElementById('d5').style.backgroundImage = "none";
            document.getElementById('d6').style.backgroundImage = "none";
            document.getElementById('d7').style.backgroundImage = "none";
            document.getElementById('d8').style.backgroundImage = "none";
            document.getElementById('e1').style.backgroundImage = "none";
            document.getElementById('e2').style.backgroundImage = "none";
            document.getElementById('e3').style.backgroundImage = "none";
            document.getElementById('e4').style.backgroundImage = "none";
            document.getElementById('e5').style.backgroundImage = "none";
            document.getElementById('e6').style.backgroundImage = "none";
            document.getElementById('e7').style.backgroundImage = "none";
            document.getElementById('e8').style.backgroundImage = "none";
            document.getElementById('f1').style.backgroundImage = "none";
            document.getElementById('f2').style.backgroundImage = "none";
            document.getElementById('f3').style.backgroundImage = "none";
            document.getElementById('f4').style.backgroundImage = "none";
            document.getElementById('f5').style.backgroundImage = "none";
            document.getElementById('f6').style.backgroundImage = "none";
            document.getElementById('f7').style.backgroundImage = "none";
            document.getElementById('f8').style.backgroundImage = "none";
            document.getElementById('g1').style.backgroundImage = "none";
            document.getElementById('g2').style.backgroundImage = "none";
            document.getElementById('g3').style.backgroundImage = "none";
            document.getElementById('g4').style.backgroundImage = "none";
            document.getElementById('g5').style.backgroundImage = "none";
            document.getElementById('g6').style.backgroundImage = "none";
            document.getElementById('g7').style.backgroundImage = "none";
            document.getElementById('g8').style.backgroundImage = "none";
            document.getElementById('h1').style.backgroundImage = "none";
            document.getElementById('h2').style.backgroundImage = "none";
            document.getElementById('h3').style.backgroundImage = "none";
            document.getElementById('h4').style.backgroundImage = "none";
            document.getElementById('h5').style.backgroundImage = "none";
            document.getElementById('h6').style.backgroundImage = "none";
            document.getElementById('h7').style.backgroundImage = "none";
            document.getElementById('h8').style.backgroundImage = "none";
        }
/*function pausar(){
    isGameOn = false;
    document.getElementById('tela-inicial').style.display = "flex";
    document.getElementById('txt-tela-inicial').innerHTML = "Jogo Pausado";
}
function voltar(){
    isGameOn = true;
    document.getElementById('tela-inicial').style.display = "none";
}*/
document.onkeydown = function(e) {
    switch(e.which) {
        case 37:// left
        esquerda();
        break;

        case 38: // up
        cima();
        break;

        case 39: // right
        direita();
        break;

        case 40: // down
        baixo();
        break;

        default: return; // exit this handler for other keys
    }
   // closeGalery(); // prevent the default action (scroll / move caret)
};
//cima
$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 119 || e.keyCode == 119){
		cima();
	}
  })
})     
//baixo
$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 115 || e.keyCode == 115){
		baixo();
	}
  })
})   
//esquerda
$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 97 || e.keyCode == 97){
		esquerda();
	}
  })
})
//direita
$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 100 || e.keyCode == 100){
		direita();
	}
  })
})
//mute
$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 109 || e.keyCode == 109){
		mutar();
	}
  })
})
function mutar(){
    if(isGameMuted === false){
        isGameMuted = true;
        document.getElementById('btn-mute').style.backgroundImage = "url('files/img/mute/muted.png')";
    }
    else{
        isGameMuted = false;
        document.getElementById('btn-mute').style.backgroundImage = "url('files/img/mute/no-muted.png')";
    }
}
/*$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 112 || e.keyCode == 112   ){
		pausar();
	}
  })
})*/
