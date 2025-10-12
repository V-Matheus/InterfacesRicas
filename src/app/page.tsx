import Movies from "@/interfaces/Movies";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query = "" } = await searchParams;
  return <Movies query={query} />;
}
