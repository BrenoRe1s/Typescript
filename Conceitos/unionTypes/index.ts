type Id = number;
type Hibrido = number | string// isso faz com que o tipo receba qualquer um dois tipos(Permite mais de 2)
type sexo = 'Mulher'|'Homen'//Isso faz com que receba qualquer uma dessas duas strings
let humano: sexo;
humano = 'homen'//vai dar erro tem que ser exatamente "Homen"
humano = 'Homen'


function pessoa(id:Id,nome:string,idade:number): object /*Retonar a function como um objeto*/{
    
    return {id,nome,idade}//O return tem que ser feito na ordem da função e ser retornado com {}
}