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

export interface ColumnProperties<RowType = Record<string, any>> {
  id: string;
  label: string;
  minWidth?: number;
  hidden?: boolean;
  align?: "left" | "right" | "center";
  renderCell?: (row: RowType, index: number) => React.ReactNode;
}

export type TableProps = {
  columns: ColumnProperties[];
  rows: Record<string, any>[];
  headerCellStyle?: React.CSSProperties;
  bodyCellStyle?: React.CSSProperties;
  bodyCellClasses?: string | undefined;
  headerCellClasses?: string | undefined;
  onRowClick?: (row: Record<string, any>, columnId: string) => void;
};

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  headerCellStyle,
  bodyCellStyle,
  bodyCellClasses,
  headerCellClasses,
  onRowClick,
}) => {
  const handleRowClick = (row: Record<string, any>, columnId: string) => {
    if (onRowClick) {
      onRowClick(row, columnId);
    }
  };

  return (
    <TableContainer component={Box}>
      <MuiTable aria-label="custom table">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              if (column.hidden) {
                return <React.Fragment key={column.id}></React.Fragment>;
              }
              return (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, ...headerCellStyle }}
                  className={headerCellClasses}
                >
                  {column.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => {
                if (column.hidden) {
                  return <React.Fragment key={column.id}></React.Fragment>;
                }
                return (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ ...bodyCellStyle }}
                    className={bodyCellClasses}
                    onClick={() => handleRowClick(row, column.id)}
                  >
                    {column.renderCell
                      ? column.renderCell(row, rowIndex)
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
