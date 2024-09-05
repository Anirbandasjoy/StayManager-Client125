import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
  } from "@/components/ui/alert-dialog";
  import Image from "next/image";
  import { useEffect, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
  
  interface ImageModalProps {
    image: string;
    showImageModal: boolean;
    setShowImageModal: (show: boolean) => void;
  }
  
  const ImageModal: React.FC<ImageModalProps> = ({ image, showImageModal, setShowImageModal }) => {
    const [open, setOpen] = useState(showImageModal);
  
    useEffect(() => {
      setOpen(showImageModal);
    }, [showImageModal, image, setShowImageModal]);
  
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="">
          <div className="relative w-full h-96 flex justify-center items-center">
            <Image
              src={image}
              alt="imageModal"
              layout="fill"
              objectFit="contain"
              className="absolute"
            />
          </div>
          <AlertDialogFooter>
          <AlertDialogCancel className="absolute right-1 top-1 bg-red-400 hover:bg-red-500 text-white" onClick={() => setShowImageModal(false)}>
            <AiFillCloseSquare className="text-white text-lg" />
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default ImageModal;
  