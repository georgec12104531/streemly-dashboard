import React, { useState } from "react";
import { connect } from "react-redux";
import { handlePriorityChange } from "../../redux/action-creators/priority-actions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import TablePaginationActions from "./table-pagination-actions/table-pagination-action.component";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import avatar from "../../icons/avatar.png";
import success from "../../icons/success.png";
import search from "../../icons/search.png";

import Button from "@material-ui/core/Button";

import "./table.style.css";

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
  head: {
    fontWeight: 600,
  },
});

const PaginationTable = ({
  data,
  customProperties: { isMyPriority },
  handlePriorityChange,
}) => {
  const classes = useStyles2();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Setting the status circle next to the days in qeueu
  const getQueueStatusClass = (days) => {
    if (!days) return "";

    if (days <= 3) {
      return "queue-status green";
    } else if (days <= 7) {
      return "queue-status orange";
    } else {
      return "queue-status red";
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>Request</TableCell>
            <TableCell className={classes.head}>Workflow</TableCell>
            <TableCell className={classes.head}>Requestor</TableCell>
            <TableCell className={classes.head} align="center">
              Status
            </TableCell>
            <TableCell className={classes.head}>Approval</TableCell>
            <TableCell className={classes.head} align="center">
              Days in Queue
            </TableCell>
            {isMyPriority ? (
              <TableCell className={classes.head}>My Priority</TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.request}</TableCell>
              <TableCell>{row.workFlow}</TableCell>
              <TableCell>
                <img
                  className="table-avatar"
                  alt={row.requestor}
                  src={avatar}
                ></img>
              </TableCell>
              <TableCell align="center">
                <Button
                  className={row.status === "open" ? "open" : "closed"}
                  variant="outlined"
                >
                  {row.status}
                </Button>
              </TableCell>
              <TableCell>
                {row.approvalStatuses.map((status, i) =>
                  status === "approved" ? (
                    <img
                      className="table-icon"
                      key={i}
                      alt="approved"
                      src={success}
                    ></img>
                  ) : (
                    <img
                      className="table-icon"
                      key={i}
                      alt="approved"
                      src={search}
                    ></img>
                  )
                )}
              </TableCell>
              <TableCell align="left">
                <div className="days-in-queue-container">
                  {row.days}
                  <div className={getQueueStatusClass(row.days)}></div>
                </div>
              </TableCell>
              {isMyPriority ? (
                <TableCell>
                  <FormControl className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={row.priority}
                      onChange={(e) =>
                        handlePriorityChange(row.id, e.target.value)
                      }
                    >
                      <MenuItem value={"low"}>Low</MenuItem>
                      <MenuItem value={"normal"}>Normal</MenuItem>
                      <MenuItem value={"high"}>High</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              ) : null}
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handlePriorityChange: (id, priority) =>
    dispatch(handlePriorityChange(id, priority)),
});

export default connect(null, mapDispatchToProps)(PaginationTable);
