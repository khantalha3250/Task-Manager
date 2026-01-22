import { getAccessToken, getRefreshToken, setTokens, clearTokens } from "./auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const apiFetch = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const accessToken = getAccessToken();

  const headers: Record<string, string> = {
  "Content-Type": "application/json",
  ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  ...(options.headers as Record<string, string>),
};


  let response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Access token expired
  if (response.status === 401) {
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      clearTokens();
      window.location.href = "/login";
      return;
    }

    const refreshRes = await fetch(`${API_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (refreshRes.ok) {
      const data = await refreshRes.json();

      // ✅ SAFE NOW
      setTokens(data.accessToken, refreshToken);
      headers.Authorization = `Bearer ${data.accessToken}`;

      response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
      });
    } else {
      clearTokens();
      window.location.href = "/login";
      return;
    }
  }

  return response;
};
