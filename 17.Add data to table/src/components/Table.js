import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export const Table = ({ data, deleteData }) => {
  const sortedData = data.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );

  return sortedData.map((data, index) => (
    <tr key={data.number}>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.phone}</td>
      <td className="delete-btn" onClick={() => deleteData(index)}>
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};
