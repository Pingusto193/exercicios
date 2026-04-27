let capital = 1000; 
let taxa = 0.05; 
let tempo = 3; 
let montante = capital * (1 + taxa * tempo); 
console.log('O montante após ' + tempo + ' anos será: R$ ' + montante.toFixed(2));