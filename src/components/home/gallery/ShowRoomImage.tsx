import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Image from "next/image";

const ShowRoomImage = ({
  show,
  setShow,
  image,
}: {
  show: boolean;
  setShow: any;
  image: string;
}) => {
  return (
    <AlertDialog open={show} onOpenChange={setShow}>
      <AlertDialogContent className="">
        <div className="w-full h-96 overflow-auto">
          <Image
            src={image}
            layout="responsive"
            width={600}
            height={400}
            objectFit="cover"
            alt={`gallery-image-${image}`}
            className="rounded-lg "
          />
        </div>

        <AlertDialogCancel>close</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ShowRoomImage;
