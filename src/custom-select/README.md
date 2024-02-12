## Variants

## Default

```jsx
import React from "react";

const dummyOption = [
  {
    id: 1,
    name: "Home Services",
  },
  {
    id: 2,
    name: "Government",
  },
  {
    id: 3,
    name: "Oil & Gas",
  },
  {
    id: 4,
    name: "Food and Beverages",
  },
  {
    id: 5,
    name: "Manufacturing",
  },
  {
    id: 6,
    name: "Digital Agencies",
  },
  {
    id: 7,
    name: "Health & Wellness",
  },
  {
    id: 8,
    name: "Sports & Fitness",
  },
];

const [selectedList, setSelectedList] = React.useState([]);

<CustomSelect
  label={"Services Required"}
  placeholder={"Select Services"}
  option={dummyOption}
  selectedlist={selectedList}
  setselectedList={setSelectedList}
/>;
```
