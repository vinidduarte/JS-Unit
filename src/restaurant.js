/* eslint-disable max-len */
// Siga as orientações do README!

function createMenu(menu) {
    const consumption = [];
  
    return {
      fetchMenu: () => menu,
      consumption,
      order: (item) => {
        if (menu.food[item] || menu.drinks[item]) {
          consumption.push(item);
        } else {
          return 'Item indisponível';
        }
      },
      pay: () => {
        let total = 0;
        for (const item of consumption) {
          if (menu.food[item]) {
            total += menu.food[item];
          } else if (menu.drinks[item]) {
            total += menu.drinks[item];
          }
        }
        return total * 1.1;
      },
    };
  }
  const menu = {
    food: { coxinha: 3.90, sanduiche: 9.90 },
    drinks: { agua: 3.90, cerveja: 6.90 },
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
  
  module.exports = createMenu;
