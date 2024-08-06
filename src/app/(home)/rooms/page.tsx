import Banner from "@/extraComponents/home/Banner";
import RoomPage from "@/extraComponents/rooms/RoomPage";
const Rooms = () => {
  return (
    <div>
      <Banner
        imageURL="https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        headingText="Rooms."
        subheadingText="Pleas explore my hostel all rooms and purches your chouse room"
      />
      <div className="container">
        <RoomPage />
      </div>
    </div>
  );
};

export default Rooms;
