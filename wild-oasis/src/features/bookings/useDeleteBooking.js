import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingAPI,
    onSuccess: () => {
      toast.success("Booking deleted successfully!");
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: () => toast.error("Booking could not be deleted!"),
  });
  return { isDeleting, deleteBooking };
}
