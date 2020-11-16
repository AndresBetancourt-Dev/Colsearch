import React, { createContext, useState } from "react";

export const MissingPersonContext = createContext();

export const MissingPersonProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [identificationCard, setIdentificationCard] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState({
    age: 0,
    height: 0,
    skin: "",
    hairColour: "",
    complexion: "",
    detailed: "",
  });
  const [location, setLocation] = useState({
    city: "",
    country: "",
    neighborhood: "",
    latitude: 0,
    longitude: 0,
  });

  return (
    <MissingPersonContext.Provider
      value={{
        name,
        setName,
        surname,
        setSurname,
        location,
        setLocation,
        identificationCard,
        setIdentificationCard,
        imageUrl,
        setImageUrl,
        contact,
        setContact,
        email,
        setEmail,
        description,
        setDescription,
      }}
    >
      {children}
    </MissingPersonContext.Provider>
  );
};
