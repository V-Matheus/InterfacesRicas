export default function FilmePage({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log("id", id);

  return <div>filmes page</div>;
}
