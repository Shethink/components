```jsx
const columns = [
  { id: "id", label: "ID", minWidth: 100, hidden: true },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "age", label: "Age", minWidth: 100, align: "right" },
  {
    id: "city",
    label: "City",
    minWidth: 100,
    align: "center",
    renderCell: (row) => {
      return <>{row.city}</>;
    },
  },
];

// Sample data for rows
const rows = [
  { id: 1, name: "John Doe", age: 30, city: "New York" },
  { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
  { id: 3, name: "Alice Johnson", age: 35, city: "Chicago" },
  { id: 4, name: "Bob Brown", age: 40, city: "Houston" },
];
<>
  <Table rows={rows} columns={columns} />
</>;
```
