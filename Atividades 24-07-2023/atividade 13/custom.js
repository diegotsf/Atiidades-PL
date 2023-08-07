var n1, n2, n2, s1, s2, s3, tipo;

    do
    {
        n1 = parseFloat(window.prompt("Informe o primeiro valor: ", "0"))
    }
    while(isNaN(n1))
    do
    {
        n2 = parseFloat(window.prompt("Informe o segundo valor: ", "0"))
    }
    while(isNaN(n2))
    do
    {
        n3 = parseFloat(window.prompt("Informe o terceiro valor: ", "0"))
    }
    while(isNaN(n3))

    s1 = n3 + n2;
    s2 = n1 + n3;
    s3 = n1 + n2;
    
    if(n1 != n2 && n1 != n3 && n2 != n3)
    {
        tipo = "escaleno";
    }
    if(n1 == n2 && n1 == n3 && n2 == n3)
    {
        tipo = "equilátero"
    }
    if(n1 == n2 && n1 != n3 || n1 == n3 && n1 != n2 || n2 == n3 && n2 != n1)
    {
        tipo = "isósceles"
    }

    if(s1 > n1 && s2 > n2 && s3 > n3)
    {
        document.write("<p>" + "Os valores inseridos formam um triângulo " + tipo + "</p>")
    }
    else
    {
        document.write("<p>" + "Os valores inseridos não formam um triângulo." + "</p>")
    }
    if(tipo == "escaleno")
    {
        document.getElementById("imagem").innerHTML= "<img src='triangulo-escaleno.png' width='250'>"; 
    }
    if(tipo == "equilátero")
    {
        document.getElementById("imagem").innerHTML= "<img src='triangulo-equilatero.png' width='250'>"; 
    }
    if(tipo == "isósceles")
    {
        document.getElementById("imagem").innerHTML= "<img src='triangulo-isosceles.png' width='250'>"; 
    }
