
function soma(n1,n2){
    let soma = n1 + n2
    return soma 

}
 
console.log(soma(2,3))

let senhaCorreta = "batatapodre"

function comparaSenha(senhaCorreta , senhaEscrita){
  if(senhaEscrita == senhaCorreta){
   console.log('Conectado')
  }  else {
   console.log('Senha Incorreta')
  }
}
{

  comparaSenha(senhaCorreta, 'morango')
  comparaSenha(senhaCorreta, 'batatapodre')

}


function fatorial (N){
  let resposta = 1
  for (let i=1; i< N;i++){
    resposta = resposta * i

}
}

console.log(fatorial(5));

function recebanumero(N){
  if(N % 2 ==0){
    console.log('o numero é par')
  } else{
    console.log('o numero é impar') 

  }

  }
recebanumero(5)











 
  
  
  
  
  








