import { cookies } from "next/headers";

type RequestOptions = RequestInit;

export async function api<T>(
  url: string,
  options: RequestOptions = {},
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Lógica de request interceptor

  const token = (await cookies()).get("auth-token")?.value;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_KEY}`,
    ...(options.headers as Record<string, string>),
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    headers,
  });

  // Lógica de response interceptor

  if (!response.ok) {
    if (response.status === 401) {
      // Lógica de logout ou refresh token aqui...
      console.error("Erro de autenticação!");
    }

    const errorData = await response.json().catch(() => ({}));

    throw new Error(`HTTP error! status: ${response.status}`, {
      cause: errorData,
    });
  }

  return response.json() as T;
}
