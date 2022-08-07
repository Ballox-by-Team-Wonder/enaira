import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';


export function Select({ label, value, handleChange, list }) {
   
    return (
        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel id="demo-simple-select-label">{ label }</InputLabel>
            <MuiSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={label}
                value={value}
                onChange={handleChange}
                variant="filled"
            >
                {/* <MenuItem value="">
                    <em>None</em>
                </MenuItem> */}
                
                { list.map((item, idx) => (
                    <MenuItem 
                        key={idx}
                        value={item.value}
                    >
                        { item.name }
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
}
