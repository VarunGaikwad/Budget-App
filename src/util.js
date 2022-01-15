const currencyFormatter = new Intl.NumberFormat('en-US', {
    currency: 'INR',
    style: 'currency',
    minimumFractionDigits: 0
});
export default currencyFormatter;