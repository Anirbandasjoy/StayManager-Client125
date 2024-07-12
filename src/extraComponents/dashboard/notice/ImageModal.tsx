import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
  } from "@/components/ui/alert-dialog"
import Image from "next/image"
  
  const ImageModal = ({image, showImageModal, setShowImageModal} : {image : string, showImageModal : boolean, setShowImageModal : any})=> {
    console.log(showImageModal)
    return (
      <div>
        {
        showImageModal && <AlertDialog>
        {/* <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger> */}
        <AlertDialogContent>
         <Image src={image} alt="imageModal" width={300} height={300}  />
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowImageModal(false)}>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      }
      </div>
    )
  }
  export default ImageModal
  