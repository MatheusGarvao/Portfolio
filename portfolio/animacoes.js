function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + (r() * (0.5 - 0.7) + 0.5) + ')';
}

function rotate() {
    for (i = 0; i <= 29; i++) {
        if (i % 2 == 0) {
            quadrado[i].rotation += Math.random() * 0.003;
        } else {
            quadrado[i].rotation -= Math.random() * 0.003;
        }
    }
}
