const stripe = Stripe('pk_test_51QrXT3Dvhv6106t5liv7Y4ehYtJ3QenW27w1Nre3tcvSJO5l0ZCyEZx57ZS4unBSSl2zOPkFPN1z0qiUnEUfPHU700RjIzRPFs');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});