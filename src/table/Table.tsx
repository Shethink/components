import React from "react";
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Box } from "@mui/system";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  hidden: boolean;
  align?: "left" | "right" | "center";
  renderCell?: (row: Row) => React.ReactNode;
}

interface Row {
  [key: string]: React.ReactNode;
}

export type TableProps = {
  columns: Column[];
  rows: Row[];
  headerCellStyle?: React.CSSProperties;
  bodyCellStyle?: React.CSSProperties;
}

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  headerCellStyle,
  bodyCellStyle,
}) => {
  return (
    <TableContainer component={Box}>
      <MuiTable aria-label="custom table">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              if (column.hidden) {
                return <></>;
              }
              return (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, ...headerCellStyle }}
                >
                  {column.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => {
                if (column.hidden) {
                  return <></>;
                }
                return (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ ...bodyCellStyle }}
                  >
                    {column.renderCell
                      ? column.renderCell(row)
                      : row[column.id]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
