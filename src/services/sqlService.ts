import { request } from '@umijs/max';

export const downLoadDataExcel = async (data: GeneratorVO) => {
  return request<BaseResponse<any>>('sql/download/data/excel', {
    method: 'POST',
    data,
  });
};

export const GeneratorBySchema = async (data: TableSchema) => {
  return request<BaseResponse<GeneratorVO>>('sql/generate/schema', {
    method: 'POST',
    data,
  });
};

export const getSchemaByAuto = async (content: string) => {
  return request<BaseResponse<TableSchema>>('sql/get/schema/auto', {
    method: 'POST',
    data: { content },
  });
};

export const getSchemaByExcel = async (file: any) => {
  const params = new FormData();
  params.append('file', file);
  return request<BaseResponse<TableSchema>>('sql/get/schema/excel', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: params,
  });
};

export const getSchemaBySql = async (sql: string) => {
  return request<BaseResponse<TableSchema>>('sql/get/schema/sql', {
    method: 'POST',
    data: { sql },
  });
};
