import React from "react";
import Title from "../../components/title/title.component";
import DoughnutChart from "../../components/donut-chart/donut-chart.component";
import "./home.component.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Header from "../../components/header/header.component";

const Home = () => {
  const useStyles = makeStyles((theme) => {
    return {
      card: {
        padding: theme.spacing(2),
        textAlign: "center",
        height: "483px",
      },
      header: {
        textAlign: "start",
        padding: theme.spacing(2),
        fontSize: "24px",
        backgroundColor: "teal",
        color: "white",
      },
    };
  });

  const classes = useStyles();

  return (
    <div className="home-main-container">
      <div className="dashboard-main-container">
        <div className="dashboard-container">
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.header}>
                  <Header></Header>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.card}>
                  <Title title={"My Approvals"} subTitle={"This Month"}></Title>
                  <DoughnutChart></DoughnutChart>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.card}>
                  <Title title={"My Requests"} subTitle={"This Month"}></Title>
                  <DoughnutChart></DoughnutChart>
                    
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.card}>
                  <Header></Header>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.card}>
                  <Header></Header>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
