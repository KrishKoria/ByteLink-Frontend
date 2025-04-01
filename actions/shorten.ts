"use server";

import { v4 as uuidv4 } from "uuid";

export async function shortenUrlAction(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) throw new Error("URL is required");

  const randomUserId = uuidv4();

  const response = await fetch("http://localhost:8080/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: url,
      user_id: randomUserId,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data.short_url;
}
