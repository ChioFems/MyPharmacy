import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment, Button } from "@mui/material";

import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  //GridToolbarQuickFilter,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const DataGridCustomToolbar = ({
  searchInput,
  setSearchInput,
  setSearch,
  searchLabel,
  addButton,
  addButtonUrl
}) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarFilterButton />
          <GridToolbarExport />
        </FlexBetween>
        <FlexBetween>
          <TextField
            label={searchLabel}
            sx={{ mb: "0.5rem", width: "12.5rem" }}
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setSearch(searchInput);
                      setSearchInput("");
                    }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box m="10px 0 0 15px">
            <Button
              component={Link}
              to={addButtonUrl}
              variant="contained"
              color="secondary"
            >
              {addButton}
            </Button>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;