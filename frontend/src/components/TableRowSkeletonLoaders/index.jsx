import React from "react";
import LoadingSkeletonText from "@/components/LoadingSkeletonText";

const TableRowSkeletonLoaders = () => {
  

  
  return (
    <>
      <tr>
        <td>
          <LoadingSkeletonText height="12" width="200" />
        </td>
        <td>
          <LoadingSkeletonText height="12" width="100" />
        </td>
        <td>
          <LoadingSkeletonText height="12" width="200" />
        </td>
      </tr>
      <tr>
        <td>
          <LoadingSkeletonText height="12" width="200" />
        </td>
        <td>
          <LoadingSkeletonText height="12" width="100" />
        </td>
        <td>
          <LoadingSkeletonText height="12" width="200" />
        </td>
      </tr>
    </>
  );
};

export default TableRowSkeletonLoaders;
