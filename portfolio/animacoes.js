quadrados = {
    posicionamento: [],
    velocidadesx: [],
    velocidadesy: []
};

function criarDivs() {
    local = document.getElementById("posicao"); //define dentro de qual ID será colocado
    tela = window.screen.width; //guarda o tamanho da tela
    qntdQuadrado = Math.round(tela / 45); //define a quantidade de quadrados

    let giro; //cria a variável para fazer o quadrado girar

    posicaoEsquerda = GerarNovoArray(qntdQuadrado); //cria um array para armazenar a posição do lado
    posicaoTopo = GerarNovoArray(qntdQuadrado); //cria um array para armazenar a posição do topo

    for (i = 0; i < qntdQuadrado; i++) {

        giro = rodar(); //Define a direção em que o quadrado gira
        elem = document.createElement('div'); //cria o elemento div
        elem.classList.add('quadrado', giro); //adiciona a classe quadrado e a direção da rotação
        elem.style.background = random_rgba(); //define a cor do quadrado
        elem.setAttribute('id', i); //atribui um ID para a div
        posicaoEsquerda[i] = posicaoLeft(); //armazena a posição em relação a esquerda de cada bloco
        posicaoTopo[i] = posicaoTop(); //armazena a posição em relação ao topo de cada bloco
        elem.style.left = posicaoEsquerda[i] + 'px'; //define a posição em relação a esquerda
        elem.style.top = posicaoTopo[i] + 'px'; //define a posição em relação ao topo

        definirVelocidade(i); //define a direção e velocidade do quadrado em questão.
        local.appendChild(elem); //insere o quadrado dentro da div com o id posicao
    }

    quadrados.posicionamento.push(posicaoEsquerda); //guarda a posição globalmente
    quadrados.posicionamento.push(posicaoTopo) //mesma coisa, guarda a posição globalmente
}

setInterval(() => {
    for (y = 0; y < quadrados.posicionamento[0].length; y++) {
        if (quadrados.posicionamento[0][y] + 10 >= window.innerWidth-30 || quadrados.posicionamento[0][y]<0) {
            quadrados.velocidadesx[y] = -quadrados.velocidadesx[y];
        }
        if (quadrados.posicionamento[1][y] >= 40 ||quadrados.posicionamento[1][y]<0) {
            quadrados.velocidadesy[y] = -quadrados.velocidadesy[y];
        }

        quadrados.posicionamento[0][y] += quadrados.velocidadesx[y];
        quadrados.posicionamento[1][y] += quadrados.velocidadesy[y];
        atualizar(y)
    }
}, 1000 / 120)

function atualizar(escolha) {
    square = document.getElementById(escolha);
    square.style.left = quadrados.posicionamento[0][escolha] + 'px';
    square.style.top = quadrados.posicionamento[1][escolha] + 'px';
}

function definirVelocidade(Referencia) {
    for (z = 0; z < 2; z++) {
        if (Referencia % 2 == 0) {
            num = (Math.random() * 2 - 1) 
        } else {
            num = (Math.random() * 2 - 1) 
        }
        if (z == 1) {
            quadrados.velocidadesx[Referencia] = num
        } else {
            quadrados.velocidadesy[Referencia] = num
        }
    }
}

function GerarNovoArray(tamanho) {
    criarArray = new Array(tamanho);
    return criarArray
}

function rodar() {
    if (i % 2 == 0) {
        ladoDoGiro = 'rotatingE'
    } else {
        ladoDoGiro = 'rotatingD'
    }
    return ladoDoGiro
}

function posicaoLeft() {
    pos = (Math.random() * (tela - 90))
    return pos
}

function posicaoTop() {
    pos = (Math.random() * (40 - 10) + 10)
    return pos
}

function random_rgba() {
    corzinha = 'rgba('
    for (x = 0; x < 3; x++) {
        corzinha += cor() + ',';
    }
    corzinha += (Math.random() * (0.7 - 0.35) + 0.35) + ')'
    return corzinha;
}

function cor() {
    colorido = Math.round(Math.random() * 255)
    return colorido
}
