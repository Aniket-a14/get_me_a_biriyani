export const validatePaymentInput = (data) => {
  const errors = {};

  if (!data.isAnonymous && (!data.name || data.name.trim().length < 2)) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!data.amount || data.amount < 10) {
    errors.amount = 'Amount must be at least ₹10';
  }

  if (data.message && data.message.length > 500) {
    errors.message = 'Message must be less than 500 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}; 