import { useSearchParams } from "react-router-dom";
import Select from "./Select";

/* eslint-disable react/prop-types */
function SortBy({ options }) {
  const [searchParameter, setSearchParameter] = useSearchParams();
  const sortBy = searchParameter.get("sortBy") || "";

  function handleChange(e) {
    searchParameter.set("sortBy", e.target.value);
    setSearchParameter(searchParameter);
  }

  return <Select options={options} value={sortBy} type="white" onChange={handleChange} />;
}

export default SortBy;
