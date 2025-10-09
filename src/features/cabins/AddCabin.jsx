import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <Model>
      <Model.Open>
        <Button>Add new cabin</Button>
      </Model.Open>
      <Modal.Window>
        <CreateCabinForm />
      </Modal.Window>
    </Model>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button
//         $variation="primary"
//         $size="largebtn"
//         onClick={() => setIsOpenModal((show) => !show)}
//       >
//         Add new cabin
//       </Button>

//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;


