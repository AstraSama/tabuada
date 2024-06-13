const tabuada = (data) => {
    for(let i = 0; i < 10; i++) {
        console.log(
            data * (i + 1)
        )
    }
}

process.stdout.write("Escreva o número: ");

process.stdin.on('data', function(data) {
    let resposta = Number(data.toString().trim());
    tabuada(resposta);
    process.exit();
})