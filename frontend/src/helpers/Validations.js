export const validateFullRegisterInformation = (
  name,
  surname,
  location,
  identificationCard,
  imageUrl,
  contact,
  email,
  description
) => {
  if (name === "" || name === undefined || name === null) {
    return false;
  }
  if (surname === "" || surname === undefined || surname === null) {
    return false;
  }
  if (
    identificationCard === "" ||
    identificationCard === undefined ||
    identificationCard === null
  ) {
    return false;
  }
  if (imageUrl === "" || imageUrl === undefined || imageUrl === null) {
    return false;
  }
  if (contact === "" || contact === undefined || contact === null) {
    return false;
  }
  if (email === "" || email === undefined || email === null) {
    return false;
  }

  if (!checkDescription(description)) {
    return false;
  }
  if (!checkLocation(location)) {
    return false;
  }
  return true;
};

const checkLocation = ({
  city,
  country,
  neighborhood,
  latitude,
  longitude,
}) => {
  if (city === "" || city === undefined || city === null) {
    return false;
  }
  if (country === "" || country === undefined || country === null) {
    return false;
  }
  if (
    neighborhood === "" ||
    neighborhood === undefined ||
    neighborhood === null
  ) {
    return false;
  }
  if (latitude === 0 || longitude === 0) {
    return false;
  }
  return true;
};

const checkDescription = ({
  age,
  height,
  skin,
  hairColour,
  complexion,
  detailed,
}) => {
  if (skin === "" || skin === undefined || skin === null) {
    return false;
  }
  if (hairColour === "" || hairColour === undefined || hairColour === null) {
    return false;
  }
  if (complexion === "" || complexion === undefined || complexion === null) {
    return false;
  }
  if (detailed === "" || detailed === undefined || detailed === null) {
    return false;
  }
  if (age < 0) {
    return false;
  }
  if (height <= 0 || height > 272) {
    return false;
  }
  return true;
};
