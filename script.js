
function consultar() {
    let idade = document.getElementById('idade').value;
    let tempo = document.getElementById('tempo').value;
    let salario = document.getElementById('salario').value;


    if (idade >= 18 && tempo >= 5 && salario <= 2400) {
        alert('Parabéns, Você tem direito a receber o benefício PIS/PASEP')
    } else {
        alert('Infelizmente você não tem direito a receber o benefício')
    }

}

