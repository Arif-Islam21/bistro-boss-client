import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const UpdateItem = () => {
  const items = useLoaderData();
  console.log(items);

  return (
    <div>
      <SectionTitle
        heading={"update item"}
        subHeading={"Refresh your recipe"}
      />
    </div>
  );
};

export default UpdateItem;
