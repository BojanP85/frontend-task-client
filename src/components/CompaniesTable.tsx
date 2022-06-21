import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import date from "date-and-time";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { getCompanyState } from "../redux/selectors/company";
import { getCompanies, getCompanyId } from "../redux/slice/company";
import {
  EmptyTableMsgStyle,
  PaginationStyle,
  SelectNumberOfRowsStyle,
  SkeletonStyle,
  TableBodyCellStyle,
  TableCellSkeletonStyle,
  TableContainerStyle,
  TableHeadCellStyle,
  TableHeadStyle,
  TableStyle,
  TableTitleStyle,
  TableWrapperStyle,
} from "../styles/mui";
import CustomTooltip from "./CustomTooltip";
import InputFieldsContainer from "./InputFieldsContainer";

const CompaniesTable = ({ drawerWidth }: { drawerWidth: number }) => {
  const dispatch = useDispatch();
  const { companies, loading } = useSelector(getCompanyState);

  const [numberOfRows, setNumberOfRows] = useState("10");
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState("");

  const { fetchLoading } = loading;

  useEffect(() => {
    dispatch(getCompanies({ page, numberOfRows }));
  }, [dispatch, page, numberOfRows]);

  const handleNumberOfRowsChange = (event: SelectChangeEvent) => {
    setNumberOfRows(event.target.value as string);
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleDeleteCompany = (id: string) => {
    setDeleteId(id);
    dispatch(getCompanyId(id));
  };

  return (
    <Box
      component="main"
      sx={{
        ...TableWrapperStyle,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Typography variant="h6" noWrap component="div" sx={TableTitleStyle}>
        Lista preduzeća
      </Typography>

      {/* INPUT FIELDS CONTAINER */}
      <InputFieldsContainer />

      {/* TABLE */}
      <TableContainer component={Paper} sx={TableContainerStyle}>
        <Table sx={TableStyle} aria-label="simple table">
          <TableHead sx={TableHeadStyle}>
            <TableRow>
              <TableCell sx={{ ...TableHeadCellStyle, paddingLeft: 0 }}>
                <div className="table-head-cell-content">
                  Preduzeće
                  <img
                    src={require("../assets/icons/arrows_down_up.png")}
                    alt="Sort"
                  />
                </div>
              </TableCell>
              <TableCell sx={TableHeadCellStyle}>
                <div className="table-head-cell-content">
                  Email
                  <img
                    src={require("../assets/icons/arrows_down_up.png")}
                    alt="Sort"
                  />
                </div>
              </TableCell>
              <TableCell sx={TableHeadCellStyle}>
                <div className="table-head-cell-content">
                  Kreirao
                  <img
                    src={require("../assets/icons/arrows_down_up.png")}
                    alt="Sort"
                  />
                </div>
              </TableCell>
              <TableCell sx={TableHeadCellStyle}>
                <div className="table-head-cell-content">
                  Ažurirao
                  <img
                    src={require("../assets/icons/arrows_down_up.png")}
                    alt="Sort"
                  />
                </div>
              </TableCell>
              <TableCell sx={TableHeadCellStyle}>
                <div className="table-head-cell-content">
                  Datum
                  <img
                    src={require("../assets/icons/arrows_down_up.png")}
                    alt="Sort"
                  />
                </div>
              </TableCell>
              <TableCell sx={TableHeadCellStyle} />
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Handling empty companies list */}
            {!companies.length && (
              <TableRow>
                <TableCell colSpan={6} sx={EmptyTableMsgStyle}>
                  Za ovu stranu nije pronađen sadržaj.
                </TableCell>
              </TableRow>
            )}

            {/* Conditional rendering based on fetchLoading state */}
            {fetchLoading
              ? Array(6)
                  .fill(1)
                  .map((_, index) => (
                    <TableRow key={index}>
                      <TableCell colSpan={6} sx={TableCellSkeletonStyle}>
                        <Skeleton
                          sx={SkeletonStyle}
                          variant="rectangular"
                          height={36.5}
                        />
                      </TableCell>
                    </TableRow>
                  ))
              : companies.map((company) => (
                  <TableRow
                    key={company.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      [`& .${tableCellClasses.root}`]: {
                        borderBottom: "none",
                      },
                      "& tbody tr:last-child th, & tbody tr:last-child td": {
                        border: 0,
                      },
                    }}
                  >
                    {deleteId === company.id ? (
                      <TableCell colSpan={6} sx={TableCellSkeletonStyle}>
                        <Skeleton
                          sx={SkeletonStyle}
                          variant="rectangular"
                          height={36.5}
                        />
                      </TableCell>
                    ) : (
                      <>
                        <TableCell
                          sx={{
                            ...TableBodyCellStyle,
                            fontWeight: "800",
                            paddingLeft: 0,
                          }}
                        >
                          <div className="table-body-cell-content">
                            <img
                              className="company-img"
                              src={require("../assets/images/company_pic.png")}
                              alt="Company pic"
                            />
                            {company.name}
                          </div>
                        </TableCell>
                        <TableCell sx={TableBodyCellStyle}>
                          {company.email}
                        </TableCell>
                        <TableCell sx={TableBodyCellStyle}>
                          <div className="table-body-cell-content">
                            <img
                              className="company-img"
                              src={require("../assets/images/company_pic.png")}
                              alt="Company pic"
                            />
                            {company.createdBy}
                          </div>
                        </TableCell>
                        <TableCell sx={TableBodyCellStyle}>
                          <div className="table-body-cell-content">
                            <img
                              className="company-img"
                              src={require("../assets/images/company_pic.png")}
                              alt="Company pic"
                            />

                            {company.updatedBy}
                          </div>
                        </TableCell>
                        <TableCell sx={TableBodyCellStyle}>
                          {date.format(
                            new Date(company.date),
                            "DD MMM YYYY, hh:mm A"
                          )}
                        </TableCell>
                        <TableCell sx={TableBodyCellStyle}>
                          <div className="table-body-cell-content">
                            <CustomTooltip
                              company={company}
                              handleDeleteCompany={() =>
                                handleDeleteCompany(company.id)
                              }
                            >
                              <img
                                className="dots"
                                src={require("../assets/icons/dots.png")}
                                alt="Dots icon"
                              />
                            </CustomTooltip>
                          </div>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <div className="select-number-of-rows-container">
          <span className="show-number-of-rows-label">Show result:</span>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={numberOfRows}
            defaultValue="5"
            onChange={handleNumberOfRowsChange}
            sx={SelectNumberOfRowsStyle}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </div>
        <Pagination
          sx={PaginationStyle}
          onChange={handlePageChange}
          count={10}
          page={page}
          shape="rounded"
        />
      </div>
    </Box>
  );
};

export default CompaniesTable;
