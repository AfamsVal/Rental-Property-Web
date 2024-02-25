const BASE_URL = process.env.NEXT_PUBLIC_API_DOMAIN || false;

const fetchProperties = async () => {
  if (!BASE_URL) return [];
  try {
    const res = await fetch(`${BASE_URL}/properties`);
    const result = await res.json();
    if (result.success) return result.data;
    throw new Error("Failed to fetch!");
  } catch (error) {
    console.log(error);
    return [];
  }
};

const fetchProperty = async (id: string) => {
  if (!BASE_URL) return null;
  try {
    const res = await fetch(`${BASE_URL}/properties/${id}`);
    const result = await res.json();
    if (result.success) return result.data;
    throw new Error("Failed to fetch!");
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchProperties, fetchProperty };
