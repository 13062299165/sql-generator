import { request } from '@umijs/max';
//增加词库
export const addDict = async (data: DictType.AddRequest) => {
  return request<BaseResponse<number>>('dict/add', {
    method: 'POST',
    data,
  });
};
//删除词库
export const deleteDict = async (id: number) => {
  return request<BaseResponse<boolean>>('dict/delete', {
    method: 'POST',
    data: { id },
  });
};
//生成sql相关数据
export const generatorSql = async (id: number) => {
  return request<BaseResponse<GeneratorVO>>('dict/generate/sql', {
    method: 'POST',
    data: { id },
  });
};

//根据获取词库
export const getDict = async (id: number) => {
  return request<BaseResponse<Dict>>('dict/get', {
    method: 'GET',
    params: { id },
  });
};

//获取词库列表
export const getListDict = async (params: DictType.listRequest) => {
  return request<BaseResponse<Dict[]>>('dict/list', {
    method: 'GET',
    params,
  });
};

export const getListDictByPage = async (params: DictType.listRequest) => {
  return request<BaseResponse<Page<Dict>>>('dict/list/page', {
    method: 'GET',
    params,
  });
};

export const getMyAddDictByPage = async (params: DictType.listRequest) => {
  return request<BaseResponse<Page<Dict>>>('dict/my/add/list/page', {
    method: 'GET',
    params,
  });
};

export const getMyListDict = async (params: DictType.listRequest) => {
  return request<BaseResponse<Dict[]>>('dict/my/list', {
    method: 'GET',
    params,
  });
};

export const getMyListDictByPage = async (params: DictType.listRequest) => {
  return request<BaseResponse<Page<Dict>>>('dict/my/list/page', {
    method: 'GET',
    params,
  });
};
export const updateDict = async (data: DictType.updateRequest) => {
  return request<BaseResponse<boolean>>('dict/update', {
    method: 'POST',
    data,
  });
};
