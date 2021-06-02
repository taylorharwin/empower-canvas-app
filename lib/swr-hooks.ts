import useSWR from "swr";

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json());
}

export function useNotes() {
  const { data, error } = useSWR(`/api/get-notes`, fetcher);

  return {
    notes: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useNote(id: string) {
  return useSWR(`/api/get-note?id=${id}`, fetcher);
}
