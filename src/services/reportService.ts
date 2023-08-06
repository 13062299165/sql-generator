import { request } from '@umijs/max';
//增加词库
export const addReport = async (data: ReportType.AddRequest) => {
  return request<BaseResponse<number>>('report_info/add', {
    method: 'POST',
    data,
  });
};
//删除词库
export const deleteReport = async (id: number) => {
  return request<BaseResponse<boolean>>('report_info/delete', {
    method: 'POST',
    data: { id },
  });
};

//根据获取词库
export const getReport = async (id: number) => {
  return request<BaseResponse<Report>>('report_info/get', {
    method: 'GET',
    params: { id },
  });
};

//获取词库列表
export const getListReport = async (params: ReportType.ListRequest) => {
  return request<BaseResponse<Report[]>>('report_info/list', {
    method: 'GET',
    params,
  });
};

export const getListReportByPage = async (params: ReportType.ListRequest) => {
  return request<BaseResponse<Page<Report>>>('report_info/list/page', {
    method: 'GET',
    params,
  });
};

export const updateReport = async (data: ReportType.UpdateRequest) => {
  return request<BaseResponse<boolean>>('report_info/update', {
    method: 'POST',
    data,
  });
};
