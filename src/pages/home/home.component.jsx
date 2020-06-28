import React from "react";
import { connect } from "react-redux";
import Title from "../../components/title/title.component";
import DoughnutChart from "../../components/donut-chart/donut-chart.component";
import Panel from "../../components/panel/panel.component";
import Header from "../../components/header/header.component";
import PaginationTable from "../../components/table/table.component";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  getListTypeTotalCountForDonutChart,
  getListTypeApprovalStatusCountForDonutChart,
  getListTypeApprovalStatusCountForPanel,
} from "../../mapper-service/mapper-service";

import "./home.component.css";

const Home = ({ approvals }) => {
  const useStyles = makeStyles((theme) => {
    return {
      card: {
        padding: theme.spacing(2),
        textAlign: "center",
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
                  <Title title={"My Approvals"} subTitle={"this Month"}></Title>
                  <DoughnutChart
                    chartData={{
                      totals: getListTypeTotalCountForDonutChart(
                        approvals,
                        "myApprovals"
                      ),
                      approvalStatusTotals: getListTypeApprovalStatusCountForDonutChart(
                        approvals,
                        "myApprovals"
                      ),
                    }}
                  ></DoughnutChart>
                  <Panel
                    data={getListTypeApprovalStatusCountForPanel(
                      approvals,
                      "myApprovals"
                    )}
                  ></Panel>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.card}>
                  <Title title={"My Requests"} subTitle={"this Month"}></Title>
                  <DoughnutChart
                    chartData={{
                      totals: getListTypeTotalCountForDonutChart(
                        approvals,
                        "myRequests"
                      ),
                      approvalStatusTotals: getListTypeApprovalStatusCountForDonutChart(
                        approvals,
                        "myRequests"
                      ),
                    }}
                  ></DoughnutChart>
                  <Panel
                    data={getListTypeApprovalStatusCountForPanel(
                      approvals,
                      "myRequests"
                    )}
                  ></Panel>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.card}>
                  <h6>Table Title</h6>
                  <PaginationTable data={approvals}></PaginationTable>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.card}></Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  approvals: state.approvals,
});

export default connect(mapStateToProps, null)(Home);
