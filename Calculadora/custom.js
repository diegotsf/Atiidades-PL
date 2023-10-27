function insert(num)
{
    numero = document.getElementById('resultado').innerHTML
    numero = document.frms.resultado.value
    document.frms.resultado.value = numero + num
    document.getElementById('resultado').innerHTML = numero + num
}

function apagaTudo()
{
    text = ""
    document.frms.resultado.value = text
}

function apaga()
{
    text = document.frms.resultado.value
    newText = text.substr(0, text.length - 1)
    document.frms.resultado.value = newText
}

function calculo()
{
    var resultado = document.frms.resultado.value
    if (resultado)
    {
        document.frms.resultado.value = eval(resultado)
    }
}
