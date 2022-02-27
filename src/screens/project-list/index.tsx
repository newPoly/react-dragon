import React from "react";
import { cleanObject, useMount, useDebounce } from "../../utils";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { useHttp } from "utils/http";

//使用js时，大部分的错误都是在 run-time（运行时） 发现的
//希望在静态代码中，就能找到其中一些错误 -> 强类型语言（微软开发的TS诞生）
// const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 1000);

  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
  }, [debouncedParam]);
  useMount(() => {
    // client('users').then(setUsers);
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
