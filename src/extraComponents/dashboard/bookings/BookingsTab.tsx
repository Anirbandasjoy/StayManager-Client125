import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "../sidebar/Navbar";
const BookingsTab = () => {
  return (
    <div>
      <div className="mb-3">
        <Navbar />
      </div>
      <Tabs defaultValue="booking-request" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="booking-request">Booking Request</TabsTrigger>
          <TabsTrigger value="booking-list">Booking List</TabsTrigger>
        </TabsList>
        <TabsContent value="booking-request">
          <div>hello iam booking request</div>
        </TabsContent>
        <TabsContent value="booking-list">
          <div>hello iam booking list</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingsTab;
