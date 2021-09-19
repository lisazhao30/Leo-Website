import './App.css';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CustomBtn from './components/CustomBtn';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Typography } from '@material-ui/core';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.wrapper}>
          <Typography variant="h4" classname={classes.bigSpace} color="primary">
            Leo, your one stop destination to all the best vegan recipes.
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Click the button below to explore the recipes!
          </Typography>
        </div>
        <div className="RecipeBtn">
          <CustomBtn txt="Explore Recipes"/>
        </div>
        <ImageSlider slides={SliderData} />
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
