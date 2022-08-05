import { HTTP_STATUS } from '../../constants/http-status.constant'
import CircularProgress from '@mui/material/CircularProgress';


export function Button({ children, type, status, className, ...props }) {
    const disabled = status === HTTP_STATUS.PENDING

    return (
        <button 
            type={type}  
            className={`btn btn-primary ${className}`}
            disabled={disabled}
            { ...props }
        >
            { disabled 
                ? <CircularProgress 
                    size={25} 
                    sx={{ color: 'white'}} 
                    /> 
                : children 
            }
        </button>
    )
}