const listaMusicas = [100, 200, 300, 400, 500, 600, 120, 1]
const musicasFavoritas = []
tempoTotal = 0
function processarMusicas() {
    for (let i = 0; i < listaMusicas.length; i++) {
        const minutos = parseInt(listaMusicas[i] / 60).toString().padStart(2, "0")
        let segundos = parseInt(listaMusicas[i] % 60).toString().padStart(2, "0")
        tempoTotal = tempoTotal + listaMusicas[i]
        let minutosSegundos = (minutos + ':' + segundos)
        console.log("Musicas: " + minutosSegundos)
        }
        const musicasFavoritas = listaMusicas.filter(num => num >= 120 && num <=300)

        for (let i = 0; i < musicasFavoritas.length; i++){
        const minutos = parseInt(musicasFavoritas[i] / 60).toString().padStart(2, "0")
        let segundos = parseInt(musicasFavoritas[i] % 60).toString().padStart(2, "0")
        let minutosSegundos = (minutos + ':' + segundos)
        console.log ("Musicas Favoritas: " + minutosSegundos)
        }
    }
processarMusicas(listaMusicas)

const minutos = parseInt(tempoTotal / 60) .toString().padStart(2, "0")
let segundos =parseInt(tempoTotal % 60)  .toString().padStart(2, "0")
let minutosSegundos = (minutos + ':' + segundos)
console.log("Tempo total da Playlist: " + minutosSegundos)