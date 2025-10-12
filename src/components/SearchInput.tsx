"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function SearchInput({ totalResults }: { totalResults: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [query, setQuery] = useState(searchParams.get("query") || "");

  const mountedRef = useRef(false);
  const debounceRef = useRef<number | null>(null);
  const editingRef = useRef(false);

  useEffect(() => {
    const param = searchParams.get("query") || "";
    if (!editingRef.current) {
      setQuery(param);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    if (debounceRef.current) {
      window.clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }

    debounceRef.current = window.setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (query) {
        params.set("query", query);
      } else {
        params.delete("query");
      }

      const searchString = params.toString();
      const newUrl = searchString ? `${pathname}?${searchString}` : pathname;

      const curr = window.location.pathname + window.location.search;
      if (curr === newUrl) {
        return;
      }

      replace(newUrl, { scroll: false });
    }, 400);

    return () => {
      if (debounceRef.current) {
        window.clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
  }, [query, pathname, replace, searchParams]);

  return (
    <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupInput
          placeholder="Buscar filme pelo título"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            editingRef.current = true;
          }}
          onBlur={() => {
            editingRef.current = false;
          }}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          {totalResults} results
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
