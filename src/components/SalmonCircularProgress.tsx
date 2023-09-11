import * as React from 'react'
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface PropData {
    value?: number
}

function SalmonCircularProgress(
    props: CircularProgressProps & PropData,
) {
    return (
        <Box sx={{position: 'relative', display: 'inline-flex'}}>
            <CircularProgress variant="indeterminate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {props.value}
            </Box>
        </Box>
    );
}

export default SalmonCircularProgress;