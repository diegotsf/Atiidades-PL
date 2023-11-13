function calcular() 
{
   var preco, precoFinal;
   precoFinal = 0;
    for(i = 0; i < 600; i++)
    {
        if(c[i] == 3)
        {
            if(i < 200)
            {
                preco = 50
                if(     ((i >= 10) && (i < 30)) || ((i >= 50 ) && (i < 70)) || ((i >= 90 ) && (i < 110))|| ((i >= 130 ) && (i < 150))|| ((i >= 170 ) && (i < 190))     )
                {
                    preco = preco + (preco / 10)
                }
                precoFinal = precoFinal + preco
            }
            if ((i > 200) && (i < 400))
            {
                preco = 40
                if(     ((i >= 210) && (i < 230)) || ((i >= 250 ) && (i < 270)) || ((i >= 290 ) && (i < 310))|| ((i >= 330 ) && (i < 350))|| ((i >= 370 ) && (i < 390))      )
                {
                    preco = preco + (preco / 10)
                }
                precoFinal = precoFinal + preco
            }
            if ((i > 400))
            {
                preco = 30
                if(     ((i >= 410) && (i < 430)) || ((i >= 450 ) && (i < 470)) || ((i >= 490 ) && (i < 510))|| ((i >= 530 ) && (i < 550))|| ((i >= 570 ) && (i < 590))      )
                {
                    preco = preco + (preco / 10)
                }
                precoFinal = precoFinal + preco
            }
        }
    }
    if(precoFinal == 0)
    {
        alert("Não foi selecionado nenhum assento.")
    }
    else{
        alert("O preço final foi de R$" + precoFinal + ".")
    }
}


var c = []

function insert(id) {
    var imgElement = document.querySelector('.img-' + id);

    if (imgElement) {
        estadoAtual[id] = (estadoAtual[id] === 1) ? 2 : 1;
        
        if (estadoAtual[id] === 2) {
            c[id] = 3;
        } else {
            c[id] = 4;
        }

        imgElement.src = (estadoAtual[id] === 1) ? 'poltrona.png' : 'Poltronaocupada.png';
    }
}
