import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    heading: {
        color: '#ff5400',
        paddingTop: "100px"
    },
    flex: {
        display: 'flex',
        justifyContent: "center",
        marginTop: "35px"
    },
    form: {
        width: "680px",
    },
    btn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    margin : {
        marginTop: "20px",
    },
    footer:{
        color: '#888',
        paddingTop: "210px"
    }
});
export default useStyles;