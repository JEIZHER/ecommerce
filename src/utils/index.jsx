/**
 * this function calculate a total price of a new order
 * @param {array} products cart products:array of objets
 * @returns {number} total price
 */
export const totalPrice = products => products.reduce((sum, {price}) => sum + price, 0);