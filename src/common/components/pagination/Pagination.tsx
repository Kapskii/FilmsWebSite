import Pagination from "@mui/material/Pagination";
import { ChangeEvent } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

type PropsType = {
  pagesCount: number;
  callBack: (event: ChangeEvent<unknown>, page: number) => void;
};

export const PaginationRanges = (props: PropsType) => {
  const { pagesCount } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF4500",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Pagination
        sx={{
          ".MuiButtonBase-root": {
            color: "#ffffff",
          },
        }}
        size="large"
        count={pagesCount}
        siblingCount={1}
        color="primary"
        onChange={props.callBack}
      />
    </ThemeProvider>
  );
};
