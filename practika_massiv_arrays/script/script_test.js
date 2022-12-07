
const getMinMax = (arr) => {
    let min = 0;
    let max = 0;
    for (let number of arr) {
        // console.log (`number`, number)
        if (number < min){
            min = number
        }
        if (number > max) {
            max = number
        }
    }
    // console.log(`min`, min);
    // console.log(`max`, max);
    const resultArr = [min, max]
    return resultArr;
  }
const minAndMaxArray = getMinMax ([2,3,5,8,1]);
// console.log(`minAndMaxArray`, minAndMaxArray)





const queueTime = (customers, pointsQuantity) => {

    if (!customers.length) {
      return 0;
    }
  
    const cashPoints = [];
    const restQueue = [];
  
    for (let i = 0; i < customers.length; i++) {
      const currentCustomer = customers[i];
      if (i < pointsQuantity) {
        cashPoints.push(currentCustomer);
      } else {
        restQueue.push(currentCustomer);
      }
    }
  
    // console.log(`cashPoints`, cashPoints);
    // console.log(`restQueue`, restQueue);
  
    for (let i = 0; i < restQueue.length; i++) {

      const shortestQueue = getMinMax(cashPoints).min;
      const currentCustomerTime = restQueue[i];
  
      console.log(`shortestQueue`, shortestQueue);
  
      for (let j = 0; j < cashPoints.length; j++) {
        if (cashPoints[j] === shortestQueue) {
          cashPoints[j] += currentCustomerTime;
        }
      }
  
      console.log(`cashPoints`, cashPoints)
    }
    return getMinMax(cashPoints).max
  };
  
  // const time = queueTime([10, 2, 3, 3], 2);
  const time = queueTime([5, 3, 4], 2);
  
  console.log(`time`, time)