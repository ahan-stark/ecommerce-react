import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { LoginState, removeUser } from "../../Store/Auth/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { red } from "@mui/material/colors";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AlertDialogSlideProps {
  open: boolean;
  onClose: () => void;
}

const AlertDialogSlide: React.FC<AlertDialogSlideProps> = ({
  open,
  onClose,
}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
    localStorage.clear();
    onClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Confirm Logout"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to log out?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} >Cancel</Button>
        <Button onClick={handleLogout} sx={{color:'#f75c6e'}}>Logout</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialogSlide;
