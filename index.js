const products = [
  {
    id: 1,
    name: "iPhone 17",
    price: 999,
    quantity: 5,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 70,
    quantity: 10,
  },
  {
    id: 3,
    name: "Mouse",
    price: 40,
    quantity: 0,
  },
  {
    id: 4,
    name: "Pokemon cards",
    price: 200,
    quantity: 0,
  },
];

function displayInventory(productList) {
  for (let i = 0; i < productList.length; i++) {
    // iphone 17 - $999 (out of stock)
    let stockText;
    if (productList[i].quantity > 0) {
      stockText = `${productList[i].quantity} in stock`;
    } else {
      stockText = "Out of stock";
    }
    console.log(
      `${productList[i].name} - $${productList[i].price} (${stockText})`,
    );
  }
}

function outOfStockProducts(productList) {
  console.log("The full product list is", productList);
  // This function will return all of the products that are out of stock
  const tempList = [];

  for (let i = 0; i < productList.length; i++) {
    if (productList[i].quantity === 0) {
      tempList.push(productList[i]);
    }
  }

  console.log("The temp list of out of stock products is", tempList);

  return tempList;
}

// displayInventory(products);
// displayInventory(products);
// displayInventory(products);
// displayInventory(products);
// displayInventory(products);
// outOfStockProducts(products);

// function expensiveItems(productList) {
//   if (!Array.isArray(productList) || productList.length === 0) return [];

//   const MIN_PRICE = 150;

//   const result = [];
//   for (let i = 0; i < productList.length; i++) {
//     const item = productList[i];

//     if (!item || typeof item !== "object") continue;

//     const price = item.price;

//     if (typeof price === "number" && price >= MIN_PRICE) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// function expensiveItems(productList) {
//   const MIN_PRICE = 150;

//   return Array.isArray(productList)
//     ? productList.filter(
//         (item) =>
//           item &&
//           typeof item === "object" &&
//           typeof item.price === "number" &&
//           item.price >= MIN_PRICE,
//       )
//     : [];
// }

function expensiveItems(productList) {
  //returns items that are higher than $150
  const expensive = [];
  for (let i = 0; i < products.length; i++) {
    if (productList[i].price > 150) {
      expensive.push(productList[i]);
    }
  }
  return expensive;
}

console.log(expensiveItems(products));
