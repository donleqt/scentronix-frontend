export default async function RecipiesPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/recipes`);
  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
}
