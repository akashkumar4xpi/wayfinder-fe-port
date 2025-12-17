// Replace with your actual FastAPI URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function sendLead(data: { name: string; email: string; message: string; type: string }) {
  try {
    const res = await fetch(`${API_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to submit lead");
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

// Future: Blog fetching logic
export async function getBlogPosts() {
    // Simulator for now
    return [
        { slug: "indoor-nav-101", title: "Indoor Navigation Explained", date: "2025-12-10", category: "Tech" },
        { slug: "hospital-wayfinding", title: "Why Hospitals Need Digital Maps", date: "2025-12-12", category: "Healthcare" }
    ];
}