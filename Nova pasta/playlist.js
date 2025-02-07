function processarMusicas() {
   
    const duracoes = Number(prompt("Duração da música em segundos"))
    const duracoesMusicas = []
    const musicasFavoritas = []
    let tempoTotal = 0

    if (duracoes >= 120 && duracoes <= 300) {
        let divMinutos = duracoes / 60
        let divSegundos = duracoes % 60
        let minsec = (parseInt(divMinutos) + ":" + divSegundos)
        musicasFavoritas.push(minsec)
        duracoesMusicas.push(minsec)
        console.log("Músicas Favoritas:" + musicasFavoritas)
        console.log("Músicas:" + duracoesMusicas)
        tempoTotal += duracoes
        console.log ("Tempo da Playlist: " + tempoTotal)

    } else {

        if (duracoes >= 60) {
            let divMinutos = duracoes / 60
            let divSegundos = duracoes % 60
            let minsec = (parseInt(divMinutos) + ":" + divSegundos)
            duracoesMusicas.push(minsec)
            console.log("Músicas:" +duracoesMusicas)
            tempoTotal += duracoes
            console.log ("Tempo da Playlist: " + tempoTotal)
        } else {
            let minsec = (0 + ":" + duracoes)
            duracoesMusicas.push(minsec)
            console.log("Músicas:" +duracoesMusicas)
            tempoTotal += duracoes
            console.log ("Tempo da Playlist: " + tempoTotal)
        }
    }
    tempoTotal = tempoTotal + duracoes
}
