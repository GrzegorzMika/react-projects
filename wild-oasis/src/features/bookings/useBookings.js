import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const client = useQueryClient();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

  const sortValue = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortValue.split("-");
  const sortBy = { field, direction };

  const page = parseInt(searchParams.get("page") || 1);

  const {
    isLoading,
    error,
    data: { data: bookings, count } = {},
  } = useQuery({
    queryKey: ["booking", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    client.prefetchQuery({
      queryKey: ["booking", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }

  if (page > 1) {
    client.prefetchQuery({
      queryKey: ["booking", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }

  return {
    isLoading,
    error,
    bookings,
    count,
  };
}
