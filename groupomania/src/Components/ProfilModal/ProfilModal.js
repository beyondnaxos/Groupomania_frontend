import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const userId = props.userId
    const token = props.token
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteAccount = (e) => {
        e.preventDefault()
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const response = axios.delete(`http://localhost:8080/api/auth/users/${userId}`, config)
        console.log(response)
        localStorage.removeItem('token')
       
        window.location.reload()

    }



    return (
        <div>
            <Button onClick={handleOpen}>Update Profil</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update your Profil
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <div>
                        <button
                            onClick={deleteAccount}
                        >Delete account</button>
                        <button>Update</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}