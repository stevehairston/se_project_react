const baseUrl = "http://localhost:3001";

const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getItemList = async () => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleServerResponse(res);
};

const addItem = async ({ name, imageUrl, weather }) => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
  return handleServerResponse(res);
};

const deleteItem = async (_id) => {
  const res = await fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return handleServerResponse(res);
};

const api = { getItemList, addItem, deleteItem, handleServerResponse };

export default api;
