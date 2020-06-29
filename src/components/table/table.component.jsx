import React, { useState } from "react";
import { connect } from "react-redux";
import { handlePriorityChange } from "../../redux/action-creators/priority-actions";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import avatar from "../../icons/avatar.png";
import success from "../../icons/success.png";
import search from "../../icons/search.png";

import Button from "@material-ui/core/Button";

import "./table.style.css";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

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
            <TableCell className={classes.head} align="left">
              Request
            </TableCell>
            <TableCell className={classes.head} align="left">
              Workflow
            </TableCell>
            <TableCell className={classes.head} align="left">
              Requestor
            </TableCell>
            <TableCell className={classes.head} align="left">
              Status
            </TableCell>
            <TableCell className={classes.head} align="left">
              Approval
            </TableCell>
            <TableCell className={classes.head} align="left">
              Days in Queue
            </TableCell>
            {isMyPriority ? (
              <TableCell className={classes.head} align="left">
                My Priority
              </TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row, i) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.request}</TableCell>
              <TableCell align="left">{row.workFlow}</TableCell>
              <TableCell align="left">
                <img
                  className="table-avatar"
                  alt={row.requestor}
                  src={avatar}
                ></img>
              </TableCell>
              <TableCell align="left">
                <Button
                  className={row.status === "open" ? "open" : "closed"}
                  variant="outlined"
                >
                  {row.status}
                </Button>
              </TableCell>
              <TableCell align="left">
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
                <TableCell align="left">
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
