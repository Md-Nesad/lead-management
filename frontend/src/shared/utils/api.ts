const BASE_URL = "https://lead-management-hrr4.onrender.com/api/leads";

export async function getLeads() {
  const res = await fetch(BASE_URL);

  return res.json();
}

/* CREATE */

export async function createLead(data: any) {
  const res = await fetch(`${BASE_URL}/create`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return res.json();
}

/* UPDATE */

export async function updateLead(endpoint: string) {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "PUT",
  });

  return res.json();
}

export async function getStats() {
  const res = await fetch(`${BASE_URL}/stats`);

  return res.json();
}

export async function deleteLead(id: string) {
  const res = await fetch(`${BASE_URL}/delete/${id}`, {
    method: "DELETE",
  });

  return res.json();
}
