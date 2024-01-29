export async function getDrinkList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/drinks`
    );
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
