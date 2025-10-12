import Loading from "@/components/Loading";

export default function LoadingPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-background-light/80 dark:bg-background-dark/80"
      aria-label="Carregando página"
    >
      <Loading />
    </main>
  );
}
