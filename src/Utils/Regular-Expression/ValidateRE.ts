export const validateEmail = (email: string) : boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return emailRegex.test(email);
  }
export const  validatePhoneNumber = (phoneNumber : string) =>{
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phoneNumber);
}