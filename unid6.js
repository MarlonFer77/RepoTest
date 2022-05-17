/*  Propriedades/Atributos
 Métodos/Funcções */

 let pessoa = {
     nome:"João", // propriedade
     idade: 28,
     cpf: "123.456.789-65",
     endereço: {
         cidade: "São Paulo",
         estado: "São Paulo",
         cep: "623900-000"
     },
     cumprimentar() {
         console.log("Olá Mundo");
     }
}

console.log(`Olá meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos e eu moro em ${pessoa.endereço.cidade}.`);

/* pessoa.idade = 29
pessoa.cumprimentar() */

console.log(pessoa["idade"]);

pessoa["cumprimentar"] ()

// pessoa["idade"] == pessoa.idade