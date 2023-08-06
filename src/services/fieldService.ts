import { request } from '@umijs/max';
//增加词库
export const addField = async (data: FieldType.AddRequest) => {
  return request<BaseResponse<number>>('field_info/add', {
    method: 'POST',
    data,
  });
};
//删除词库
export const deleteField = async (id: number) => {
  return request<BaseResponse<boolean>>('field_info/delete', {
    method: 'POST',
    data: { id },
  });
};
//生成sql相关数据
export const generatorSql = async (id: number) => {
  return request<BaseResponse<string>>('field_info/generate/sql', {
    method: 'POST',
    data: { id },
  });
};

//根据获取词库
export const getField = async (id: number) => {
  return request<BaseResponse<Field>>('field_info/get', {
    method: 'GET',
    params: { id },
  });
};

//获取词库列表
export const getListField = async (params: FieldType.listRequest) => {
  return request<BaseResponse<Field[]>>('field_info/list', {
    method: 'GET',
    params,
  });
};

export const getListFieldByPage = async (params: FieldType.listRequest) => {
  return request<BaseResponse<Page<Field>>>('field_info/list/page', {
    method: 'GET',
    params,
  });
};

export const getMyAddFieldByPage = async (params: FieldType.listRequest) => {
  return request<BaseResponse<Page<Field>>>('field_info/my/add/list/page', {
    method: 'GET',
    params,
  });
};

export const getMyListField = async (params: FieldType.listRequest) => {
  return request<BaseResponse<Field[]>>('field_info/my/list', {
    method: 'GET',
    params,
  });
};

export const getMyListFieldByPage = async (params: FieldType.listRequest) => {
  return request<BaseResponse<Page<Field>>>('field_info/my/list/page', {
    method: 'GET',
    params,
  });
};
export const updateField = async (data: FieldType.updateRequest) => {
  return request<BaseResponse<boolean>>('field_info/update', {
    method: 'POST',
    data,
  });
};
