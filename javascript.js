/*/function somar(){
    var n1 = 0;
    var n2 = 0;
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)
    btn.addEventListener('click', updateBtn)
    function updateBtn() {
        if (btn.textContent === 'Iniciar máquina') {
            btn.textContent = 'Parar máquina';
            txt.textContent = 'A máquina iniciou!';
        } else {
           txt.textContent = 'vsfd'
        }
     }


    const  calculo = n1 + n2    

    document.getElementById('somar').textContent = somar.toFixed(3)

}




function ligar(){
    document.getElementById ('lampada').setAttribute('src','luzligada.gif');
}
function desligar(){
    document.getElementById ('lampada').setAttribute('src','luzDesligada.gif');
}
function desaparecer(){
   document.getElementById ('lampada').style.display='none';
}
function aparecer(){
   document.getElementById ('lampada').style.display='inline';
}
function calcular(){
   peso= Number(document.getElementById('peso').value);
   altura= Number(document.getElementById('altura').value);
     imc= peso / (altura * altura);

     document.getElementById('resultado').innerText = imc.toFixed(3);
        console.log('IMC calculado '+ imc);
   }
   document.getElementById ('lampada').setAttribute('src','luzDesligada.gif');
}
/*/