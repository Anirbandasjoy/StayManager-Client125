import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
const BookingRequest = () => {
  return (
    <div className="">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sit no</TableHead>
            <TableHead className="w-[300px]">Status</TableHead>
            <TableHead className="w-[300px] ">User</TableHead>
            <TableHead className="w-[300px]">Date</TableHead>
            <TableHead className="w-[300px]">Rent</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium ">1</TableCell>
            <TableCell>Pending...</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Image
                  src="https://i.ibb.co/vL3p03J/Whats-App-Image-2024-03-15-at-9-20-37-PM-Photoroom.jpg"
                  alt="image"
                  width={20}
                  height={20}
                  className="rounded-full cursor-pointer"
                />
                <div>
                  <h1 className="text-sm hover:underline cursor-pointer">
                    Anirban das joy
                  </h1>
                  <p className="text-xs hover:underline cursor-pointer">
                    joy600508@gmail.com
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>12/07/2003</TableCell>
            <TableCell>800 BDT</TableCell>
            <TableCell className="text-right ">
              <BsThreeDots className="ml-auto text-2xl cursor-pointer text-gray-600" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingRequest;
