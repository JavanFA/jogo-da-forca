const palavras = [
    "Carro", "Onibus", "Barco", "Aviao", "Moto", "Bicileta", "Helicoptero"
];
const palavrasecreta = palavras[Math.floor(Math.random() * palavras.length)];
const letraserradas = [];
const letrascertas = [];

document.addEventListener("keydown", (evento) => {
    const codigo = evento.keyCode; // 65 - 90 (intervalo)
    if(isLetra(codigo)) {
        const letra = evento.key;
        if(letraserradas.includes(letra)) {

        } 
        
        else {
            if(palavras.includes(letra)) {
                letrascertas.push(letra);
            } 
            else {
                letraserradas.push(letra);
            }
        } 
        atualizarJogo();
    }
})




function atualizarJogo() {
    mostrarletraserradas()
}


function mostrarletraserradas() {
    const div = document.querySelector(".letras-erradas-container");
    letraserradas.forEach(letra => {
        div.innerHTML += `<span>${letra}</span>`;
    })
}


function MostrarAvisoLetraRepetida() {
    const aviso = document.querySelector(".aviso-palavra-repetida");
    aviso.classList.add("show");
    setTimeout(() => {
        aviso.classList.remove("show");
    }, 1000)
}


function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
  }