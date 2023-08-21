const calculatePayment = (choice, totalAmount) => {
   const initialPayment = Math.ceil((10 / 100) * totalAmount);
   const remainingAmount = totalAmount - initialPayment;

   let paymentPerInterval;
   let intervals;

   if (choice === 'weekly') {
      paymentPerInterval = 150; // Weekly payment rounded up from $122
      intervals = Math.ceil(remainingAmount / paymentPerInterval);
   } else if (choice === 'monthly') {
      paymentPerInterval = 200; // Monthly payment rounded up from $122
      intervals = Math.ceil(remainingAmount / paymentPerInterval);
   } else {
      return null; // Invalid choice
   }

   if (intervals > 156 && choice === 'weekly') {
      intervals = 156; // Set to maximum of 156 weeks
   } else if (intervals > 36 && choice === 'monthly') {
      intervals = 36; // Set to maximum of 36 months
   }

   const totalPayment = initialPayment + (paymentPerInterval * intervals);
   
   return {
      initialPayment,
      paymentPerInterval,
      intervals,
      totalPayment
   };
};

// Example usage with different scenarios
const paymentDetailsWeekly = calculatePayment('weekly', 8000);
console.log('Weekly Payment Details:');
console.log(paymentDetailsWeekly);

const paymentDetailsMonthly = calculatePayment('monthly', 12000);
console.log('Monthly Payment Details:');
console.log(paymentDetailsMonthly);

const invalidChoice = calculatePayment('quarterly', 15000);
console.log('Invalid Choice Payment Details:');
console.log(invalidChoice);
