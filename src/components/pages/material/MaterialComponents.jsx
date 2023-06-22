import { Badge, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const MaterialComponents = () => {
  return (
    <div style={{ padding: "100px" }}>
      <Button size="large" variant="outlined" fullWidth={true}>
        Sumar
      </Button>
      <Button color="secondary" variant="outlined" startIcon={<DeleteIcon />}>
        Borrar
      </Button>

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Badge badgeContent={12} color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
};

export default MaterialComponents;
