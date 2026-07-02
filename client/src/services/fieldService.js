const API_URL = "http://localhost:5000/api/fields";

const getToken = () => localStorage.getItem("token");

// Get All Fields
export const getFields = async () => {
  const res = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return await res.json();
};

// Create Field
export const createField = async (fieldData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(fieldData),
  });

  return await res.json();
};

// Delete Field
export const deleteField = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return await res.json();
};

// Update Field
export const updateField = async (id, fieldData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(fieldData),
  });

  return await res.json();
};