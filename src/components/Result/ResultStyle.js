import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: "center",
        marginTop: "15px"
    },
    margin: {
        marginTop: "30px",
    },
    btn: {
        background: 'linear-gradient(45deg, #0a9396 30%,  #2a9d8f  90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});
export default useStyles;