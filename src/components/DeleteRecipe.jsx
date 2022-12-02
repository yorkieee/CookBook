import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";

const backendUrl = "http://localhost:5001";

export const DeleteRecipe = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteThisRecipe = async () => {
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        method: "DELETE",
      };
      await fetch(`${backendUrl}/recipe/${id}`, options);
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <DeleteIcon fontSize="small" color="secondary" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <button
            onClick={deleteThisRecipe}
            className="noUnderline loginButton"
          >
            Delete !
          </button>
        </Box>
      </Modal>
    </div>
  );
};
