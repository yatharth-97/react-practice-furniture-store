export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(number / 10);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]); //? using bracket notation object['keyName']
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)]; //* Set stores only unique values and ...spread makes individual values
};
