import React from 'react';
import {useEffect, useState} from 'react';

export const SearchPanel = ({param, setParam}) => {
  const [users, setUsers] = useState([]);

  return <from>
    <div>
      {/* setParam(Object.assign({}, param, {name: evt.target.value})) */}
      <input type="text" value={param.name} onChange={ evt => setParam({
        ...param,
        name: evt.target.value
      })}/>
      <select value={param.personId} onChange={evt => setParam({
        ...param,
        personId: evt.target.value
      })}>
        <option value={''}>负责人</option>
        {
          users.map(user => <option value={user.id}>{user.name}</option>)
        }
      </select>
    </div>
  </from>
}