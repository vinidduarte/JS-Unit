const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const menu = {
      food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 3.90, cerveja: 6.90 }
    };
    
    const restaurant = createMenu(menu);
    
    console.log(restaurant.fetchMenu());  
    
    console.log(restaurant.consumption);  
    
    console.log(restaurant.order('coxinha')); 
    console.log(restaurant.consumption);       
    
    console.log(restaurant.order('picanha'));  
    console.log(restaurant.consumption);      
    
    console.log(restaurant.order('agua'));     
    console.log(restaurant.consumption);     
    
    console.log(restaurant.pay()); 
    
  });
});
