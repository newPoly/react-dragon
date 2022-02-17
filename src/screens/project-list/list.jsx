import React from 'react';
export const List = ({list}) => {
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(pr)
      }
    </tbody>
  </table>
}