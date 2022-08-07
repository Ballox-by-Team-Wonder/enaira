import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';


export function Select({ label, value, handleChange }) {
   
    return (
        <FormControl fullWidth style={{ marginBottom: '15px' }}>
            <InputLabel id="demo-simple-select-label">{ label }</InputLabel>

            <MuiSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={label}
                value={value}
                onChange={handleChange}
            >
                <MenuItem value="bvn">BVN</MenuItem>
                <MenuItem value="nin" disabled>National Identity Number</MenuItem>
                <MenuItem value="votersCard" disabled>Voters card</MenuItem>
                <MenuItem value="passport" disabled>International Passport</MenuItem>
                
            </MuiSelect>
        </FormControl>
    );
}
