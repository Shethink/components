## Variants

## Default

```jsx
import React from "react";

const dummyOption = [
  {
    id: 1,
    name: "Raman",
  },
  {
    id: 2,
    name: "Kunal",
  },
  {
    id: 3,
    name: "Dummy",
  },
];

const [selectedList, setSelectedList] = React.useState([]);
<CustomSelect
  option={dummyOption}
  selectedlist={selectedList}
  setselectedList={setSelectedList}
/>;
```
