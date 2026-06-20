const API_URL = "http://localhost:7001/api/auth";

export const registerUser = async (
  username: string,
  password: string,
  role: string
) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      role,
    }),
  });

  return response.json();
};

export const loginUser = async (
  username: string,
  password: string
) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return response.json();
};

export const googleLogin = async (
  credential: string
) => {
  const response = await fetch(
    "http://localhost:7001/api/auth/google",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credential,
      }),
    }
  );

  return response.json();
};