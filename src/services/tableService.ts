import { request } from '@umijs/max';
//增加词库
export const addTable = async (data: TableType.AddRequest) => {
  return request<BaseResponse<number>>('table_info/add', {
    method: 'POST',
    data,
  });
};
//删除词库
export const deleteTable = async (id: number) => {
  return request<BaseResponse<boolean>>('table_info/delete', {
    method: 'POST',
    data: { id },
  });
};
//生成sql相关数据
export const generatorSql = async (id: number) => {
  return request<BaseResponse<string>>('table_info/generate/sql', {
    method: 'POST',
    data: { id },
  });
};

//根据获取词库
export const getTable = async (id: number) => {
  return request<BaseResponse<TableSchema>>('table_info/get', {
    method: 'GET',
    params: { id },
  });
};

//获取词库列表
export const getListTable = async (params: TableType.listRequest) => {
  return request<BaseResponse<TableSchema[]>>('table_info/list', {
    method: 'GET',
    params,
  });
};

export const getListTableByPage = async (params: TableType.listRequest) => {
  return request<BaseResponse<Page<TableSchema>>>('table_info/list/page', {
    method: 'GET',
    params,
  });
};

export const getMyAddTableByPage = async (params: TableType.listRequest) => {
  return request<BaseResponse<Page<TableSchema>>>(
    'table_info/my/add/list/page',
    {
      method: 'GET',
      params,
    },
  );
};

export const getMyListTable = async (params: TableType.listRequest) => {
  return request<BaseResponse<TableSchema[]>>('table_info/my/list', {
    method: 'GET',
    params,
  });
};

export const getMyListTableByPage = async (params: TableType.listRequest) => {
  return request<BaseResponse<Page<TableSchema>>>('table_info/my/list/page', {
    method: 'GET',
    params,
  });
};
export const updateTable = async (data: TableType.updateRequest) => {
  return request<BaseResponse<boolean>>('table_info/update', {
    method: 'POST',
    data,
  });
};
