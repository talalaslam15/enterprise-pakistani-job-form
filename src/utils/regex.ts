const regex = {
  socialSecurityNumber: /^(?!000|666|9\d{2})\d{3}(?!00)\d{2}(?!0000)\d{4}$/,
  pakistaniPhone: /^3\d{9}$/, // Pakistani numbers: starts with 3, followed by 9 more digits (10 total)
  cnic: /^\d{13}$/, // Just 13 digits for CNIC
  link: /^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/,
};

export { regex };
