$(document).ready(() => {
   let product1 = new Product(123, 'Ноутбук', 45600);
   let product2 = new Product(124, 'Клавиатура', 1200);
   let product3 = new Product(125, 'Мышь для ПК', 600);

   let mycart = new Cart('getCart.json');
   $('.buyBtn').click(e => {
       mycart._addProduct(e.target);
   });
   // $('#cart').on('click', '.del-btn', () => {});
    let feed = new Feedback('feedback.json');
    $('.product').draggable({
        revert: true
    });
    $('#cart').droppable({
        drop: function(event, ui){
            console.log(ui, event);
            console.log($(ui.draggable));
            mycart._addProduct($(ui.draggable[0]))
        }
        
    });

});