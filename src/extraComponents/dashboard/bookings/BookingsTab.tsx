import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "../sidebar/Navbar";
import BookingRequest from "./BookingRequest";
import BookingsList from "./BookingsList";
const BookingsTab = () => {
  return (
    <div>
      <div className="mb-3">
        <Navbar />
      </div>
      <Tabs defaultValue="booking-request" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mx-auto">
          <TabsTrigger value="booking-request">Booking Request</TabsTrigger>
          <TabsTrigger value="portal-request">Portal request</TabsTrigger>
        </TabsList>
        <TabsContent value="booking-request">
          <BookingRequest />
        </TabsContent>
        <TabsContent value="booking-list">
          <BookingsList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingsTab;
