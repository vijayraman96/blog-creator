import React, {useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import memories from './images/memories.png';
import Form from './components/Form/Form'; 
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {createList} from './reducers/posts';
import {fetchData} from './reducers/posts';
import { selectPost } from './reducers/posts';
import {useSelector, useDispatch} from 'react-redux';


const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const nameList = useSelector(state => state.createPost.value);
  // console.log(nameList);
  console.log('vijay');
  
  const theme = createTheme({});
  // console.log(fetchPosts());
  let data = useSelector(state => state.createPost.value);
  // console.log(data);
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])
  console.log(nameList);
  const submitButton = () => {
    
    
  }
  return (
    <Container maxWidth='lg'>
      <ThemeProvider theme={theme}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="logo" height="60"></img>
        </AppBar>
      </ThemeProvider>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7} >
              <Posts />
            </Grid>
            <Grid item xs={12} sm={5} >
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <button onClick={submitButton}>Click</button>
    </Container>
    
  )
}

export default App

