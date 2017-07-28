var mysql = require('mysql');
var inquirer = require('inquirer')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'bamazon'
});

connection.connect(function(error) {
  if(error) {
    console.error('error!!!', error);
    return;
  }

  console.log('connection made!', connection.threadId);

  showItems();
});

function showItems() {
    connection.query ("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
             console.log("Item Number:" + res[i].item_id);
             console.log("Product:" + res[i].product_name);
             console.log("Department:" + res[i].department_name);
             console.log("Price:" + "$" + res[i].price);
             console.log("In Stock:" + res[i].stock_quantity);
             console.log("======================================")
        }
        buyItem();
    });
   
};

var buyItem = function() {
    inquirer.prompt([{
    name: "itemId",
    type: "input",
    message: "Enter Product ID Number:"
  }, {
    name: "quantity",
    type: "input",
    message: "How many units would you like to purchase?"
  }]).then(function(answer) {
    connection.query("SELECT" + answer.itemID + "from products", function(err,res) {
        for (var i = 0; i < res[i].length; i++) {
            console.log(answer);
            console.log(res[i].item_id);
        }
    //     var inputId = answer.itemId;
    //     var inputQuantity = answer.quantity;
        
    //     for (var j = 0; j < res[j].length; j++) {

    //     if (answer.quantity > res[j].stock_quantity) {
    //         console.log("We're sorry. We don't have enough in stock.")
    //     } else {
    //         var updateStock = function() {
    //             connection.query(
    //                 "UPDATE products SET ? WHERE ?",
    //                 [
    //                   {
    //                     quantity: res[j].stock_quantity - answer.quantity
    //                   },
    //                   {
    //                     itemId: answer.itemId
    //                   }
    //                 ],
    //                 function(err, res) {
    //                 console.log(res.affectedRows + " products updated!\n");
    //                 }
    //             );
    //         }
    //     }
    //   }
        
    })
  });
};