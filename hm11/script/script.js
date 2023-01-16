// const element = document.createElement('div')

// console.log (element)

// element.innerText = 'Hello iam div'

// document.body.append(element)


const products = [
  {
    name: "Iphone 12", 
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "XiaomiX",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];



const renderProducts = (productsList) => {

  const container = document.createElement('div')



  productsList.forEach((product) => {


    const productCont = document.createElement('div');
    // console.log (productCont);

    const productTitle = document.createElement('h3');
    // console.log (productTitle);

    const productSubtitle = document.createElement('h4');
    // console.log (productSubtitle);

    const productPropList = document.createElement('ul');
    // console.log (productPropList);


    product.properties.forEach((prop) => {
      const listItem = document.createElement('li')
      listItem.innerText = prop;

      productPropList.append(listItem)


    

      
    

    })
    
    
    productTitle.innerText = product.name;
    productSubtitle.innerText = product.brand;
    

    productCont.append(productTitle, productSubtitle, productPropList)

    container.append(productCont)
    

  })
  
 
   document.body.append(container)
   

}


 renderProducts(products);


const renderProducts2 = (productsList) => {

  const container = document.createElement('div')

  container.innerHTML = `
    ${productsList
      .map((prod) => {
        return `
        <div>
          <h3> ${prod.name}</h3>
          <h4> ${prod.brand}</h4>
          <ul>
            ${prod.properties
              .map((prop) => {
                return `
                <li>
                  ${prop}
                </li>
                `
            }) 
            .join('')}
          </ul>
        </div>
        `
        })
      .join('')}
 `
 document.body.append(container)
}
// renderProducts2(products)


