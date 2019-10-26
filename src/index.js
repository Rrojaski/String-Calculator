import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

// React Material Components
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import ListIcon from "@material-ui/icons/List";

// functions
import { calc } from "./math";

// styles
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./styles.scss";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 40,
    marginRight: theme.spacing(2)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    marginBottom: theme.spacing(4)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  demo: {
    marginBottom: theme.spacing(4)
  },
  answerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: theme.spacing(2, 4),
    height: 200,
    textAlign: "right",
    //border: "1px solid #fff",
    borderRadius: 5,
    marginBottom: theme.spacing(5)
  },
  input: {
    width: "80%"
  },
  submit: {},
  footer: {
    padding: theme.spacing(6)
  }
}));

function App() {
  const classes = useStyles();
  const [state, setState] = useState({
    currentValue: "",
    currentAnswer: "",
    valueHistory: []
  });

  const handleSubmit = e => {
    e.preventDefault();
    const results = calc(state.currentValue);
    setState({
      ...state,
      currentAnswer: results,
      currentValue: "",
      valueHistory: [...state.valueHistory, results]
    });

    console.log(state);
  };

  const handleChange = string => {
    const regex = /[0-9\+\-\/\*]/g;
    const input = string.target.value.match(regex).join("");
    setState(Object.assign({}, state, { currentValue: input }));
  };

  const valueHistoryArray = state.valueHistory.map(item => {
    return <Typography variant="h6">{item}</Typography>;
  });

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        32
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <ListIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              String Calculator
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.root}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                String Calculator
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                This app allows you to type in and run any math problem
                involving multiplication, division (as true division), addition,
                or subtraction.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Packages
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      About
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Typography
            className={classes.demo}
            align="center"
            variant="h4"
            id="answer"
          >
            Demo
          </Typography>
          <Container className={classes.calculatorGrid} maxWidth="sm">
            <Card className={classes.answerBox}>
              {state.valueHistory.length > 0 ? valueHistoryArray : ""}
              <Typography id="currentAnswer" variant="h5" id="answer">
                {state.currentAnswer}
              </Typography>
            </Card>
            {/* End hero unit */}
            <form onSubmit={e => handleSubmit(e)} className={classes.form}>
              <TextField
                onChange={handleChange}
                value={state.currentValue}
                label="String of numbers"
                id="input"
                margin="normal"
                type="text"
                inputProps={{ "aria-label": "bare" }}
                className={classes.input}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                =
              </Button>
            </form>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Copyright
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Made with love by Roman Rojas
          </Typography>
        </footer>
        {/* End footer */}
      </ThemeProvider>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
