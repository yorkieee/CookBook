import React, { useState, useContext } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import { AuthContext } from "../context/AuthContext";
import { Container } from "@mui/material";

export const UpdateProfile = () => {
  const { user, getProfile } = useContext(AuthContext);
  const [name, setName] = useState(user.name ? user.name : "");

  const updateUsername = async (e) => {
    e.preventDefault();
    try {
      const backendUrl = "http://localhost:5001";
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ name }),
      };
      const response = await fetch(`${backendUrl}/updateUsername`, options);
      const { success } = await response.json();
      console.log("success update", success);
      if (success) {
        getProfile();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Button onClick={handleOpen}>
        <EditIcon fontSize="small" color="black" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ color: "white" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update your profile
          </Typography>
          <TextField
            label="Your new username"
            onChange={handleUsernameChange}
            value={name}
          />
          <Button onClick={(e) => updateUsername(e)}>Update</Button>
        </Box>
      </Modal>
    </Container>
  );
};
