import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useGetUsersQuery } from '../../state/api';
import Header from '../../components/Header';
import DataGridCustomToolbar from '../../components/DataGridCustomToolbar';

const Suppliers = () => {
    const theme = useTheme();

    // values to be sent to the backend
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");

    const [searchInput, setSearchInput] = useState("");
    const { data, isLoading } = useGetUsersQuery({
        page, 
        pageSize, 
        sort:JSON.stringify(sort), 
        search,
    });
    // console.log("data", data);
    const columns = [
        {
            field: "iid",
            headerName: "ID",
            flex: 0.2,
            renderCell:(params) => params.value.length,
        },
        {
            field: "name",
            headerName: "Supplier Name",
            flex: 1,
        },
        {
            field: "companyAddress",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "contactPersonName",
            headerName: "Contact Person",
            flex: 1,
        },
        {
            field: "contactNumber",
            headerName: "Contact Number",
            flex: 0.5,
            renderCell: (params) => {return params.value.replace(/^(\d{3})(\d{3})(\d{6})/, "($1)$2-$3");},
        },
        {
            field: "contactPersonRole",
            headerName: "Conact Role",
            flex: 0.5,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            flex: 0.6,
        },
        {
            field: "status",
            headerName: "Status",
            flex: 0.5,
        },
        {
            field:<div><button>Edit</button> <button>Delete</button></div>,
            headerName: "Action",
            flex: 1,
            //sortable: false,
        },
    ];

  return <Box m="1.5rem 2.5rem">
    <Header title="SUPPLIERS" subtitle="List of all product suppliers" />
    <Box height="80vh"
        sx={{
            "& .MuiDataGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[100],
                borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme.palette.primary.light,
            },
            "& .MuiDataGrid-footerContainer": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[100],
                borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${theme.palette.secondary[200]} !important`,
            },
        }}
        >
        <DataGrid 
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.users) || []}
            columns={columns}

            rowsPerPageOptions={[10, 25, 50, 100]}
            rowCount={(data && data.total) || 0}
            pagination
            page={page}
            pageSize={pageSize}
            paginationMode='server'
            sortingMode='server'
            onPageChange={(newPage) => setPage(newPage)}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            onSortModelChange={(newSortModel) => setSort(...newSortModel)}

            components={{ Toolbar: DataGridCustomToolbar }}
            componentsProps={{
                toolbar: { searchInput, setSearchInput, setSearch },
            }}
        />
    </Box>
  </Box>;
};

export default Suppliers;