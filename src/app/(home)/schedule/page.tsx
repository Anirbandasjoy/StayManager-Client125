import Template from "@/app/Template";
import BookingsCom from "@/components/home/bookings/BookingsCom";
import isAuth from "@/utils/auth/isAuth.";

const Bookings = () => {
  return (
    <Template>
      <BookingsCom />
    </Template>
  );
};

export default isAuth(Bookings);
