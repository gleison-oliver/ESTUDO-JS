
let nome = (`marcelo`);
let idade = (`16`);
let cidade = (`Manaus`);
let genere = (`Qual é o seu genero? (M/F)`);

console.log(`óla, ${nome}! voce tem ${idade} anos e mora em ${cidade}.`)

if (idade >= 18) { //inicio(abertura)
    if (genere === `M`) 
        {
        console.log(`Você é maior de idade, senhor.`)
    } // primeiro fechamento

    else if (genere === `F`) {
        console.log(`Você é maior de idade, senhora.`)
    } // segundo fechamento

    else {
        console.log("Você é maior de idade.");
    } // terceira fechamento

} else {
        if (genere === `M` ) {
            console.log("Você é menor de idade, jovem rapaz.");
        } // quarto fechamento
     
        

     else if( genere === `F`) {
            console.log(`Voçê e menor de idade, jovem moça.`);
        }
        else {
            console.log(`Você é menor de idade.`)
        }
    }

console.log(`Seu nome tem ${nome.length} caracteres.`)
    