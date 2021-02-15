import { makeStyles } from '@material-ui/styles';

export default makeStyles(() =>({
    root: {
        maxWidth: '300px',
        scale: '0.5',
    },
    media: {
        height: '200px',
        paddingTop: '56.25%', //16.9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        height: '30px',
        display: 'flex',
        justifyContent: 'space-between',

    },
}))