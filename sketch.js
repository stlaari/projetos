// Água Viva, LIVRE, literatura, reflexão
// O pequeno príncipe, LIVRE, literatura, ficção
// O amor não é óbvio, 16 , romance LGBT
// Quem é você, Alasca?, 16, romance
// A paciente silenciosa, 12, suspense, mistério
// Jogos Vorazes, 14, ação
// O lar das crianças peculiares, 12, fantasia

let campoIdade;
let campoSuspense;
let campoRomanceLGBT;

function setup() {
  createCanvas(700, 400);
  createElement("h2", "recomendador de livros");
  createSpan("Sua idade:");
  campoIdade = createInput ("5");
  campoSuspense = createCheckbox ("Gosta de suspense?");
  campoRomanceLGBT = createCheckbox ("Gosta de romance LGBT?");
}

function draw() {
  background("white");
  let idade = campoIdade.value() ;
  let gostaDesuspense = campoSuspense.checked ();
  let gostaDeRomanceLGBT = campoRomanceLGBT.checked ();
  let recomendacao = geraRecomendacao (idade, gostaDesuspense, gostaDeRomanceLGBT);
  fill (color (255, 0, 100)) ;
  textAlign (CENTER, CENTER) ;
  textSize (38) ;
  text (recomendacao, width / 2, height / 2);
}
  
  function geraRecomendacao (idade, gostaDesuspense, gostaDeRomanceLGBT) {
  
    if (idade >= 12) {
      
      if (idade >=14) {
        
      if (idade >= 16) {
        
        if (gostaDeRomanceLGBT) {
    return "O amor não é óbvio";
    } 
        else {
      return "Quem é você, Alasca?"
    }
         }
    
      else {
          return "Jogos vorazes"
      }  
      }
        
      if (gostaDesuspense) {
    return "A paciente silenciosa";
    } 
        else {
      return "O lar das crianças peculiares"
    }
          
      }
        
        return "Água Viva" ;
    }
      
    
  
  
