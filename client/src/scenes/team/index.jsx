import React, { useState } from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { AdminPanelSettingsOutlined, DeleteOutline, EditOutlined, LockOpenOutlined, SecurityOutlined, ListAltOutlined } from "@mui/icons-material";
import Header from "../../components/Header";
import DataGridCustomToolbar from "../../components/DataGridCustomToolbar";
import { useGetUsersQuery } from '../../state/api';
import { Link } from 'react-router-dom';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const searchLabel = "Search Member...";
  const addButton = "New Member";
  const addButtonUrl = "/team/addTeam";
  const editButtonUrl = "/team/editTeam/id={id}";

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  
  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetUsersQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  //console.log("data", data);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      //field: "profilePicture" + "fullName",
      field: "fullName",
      headerName: "User Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.6,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
    },
    {
      field: "AccessLevel",
      headerName: "Access Level",
      headerAlign: "center",
      flex: 1,
      renderCell: ({ row: { roleId } }) => {
        return (
          <Box
            width="75%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              roleId === "admin"
                ? colors.greenAccent[600]
                : roleId === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {roleId === "admin" && <AdminPanelSettingsOutlined />}
            {roleId === "manager" && <SecurityOutlined />}
            {roleId === "pharmacist" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {roleId}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "Action",
      headerName: "Action",
      headerAlign: "center",
      sortable: "false",
      flex: 0.7,
      renderCell: ({ row: {} }) => {
        return (
          <Box>
            <IconButton component={Link} to={editButtonUrl}>
              <ListAltOutlined />
            </IconButton>
            <IconButton color="success" component={Link} to={editButtonUrl}>
              <EditOutlined />
            </IconButton>
            <IconButton color="error">
              <DeleteOutline />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px 20px 5px 20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="1px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          // loading={isLoading || !data}
          // getRowId={(row) => row._id}
          rows={mockDataTeam}
          columns={columns}
          // server side pagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          rowCount={(data && data.total) || 0}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: {
              searchInput,
              setSearchInput,
              setSearch,
              searchLabel,
              addButton,
              addButtonUrl,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;