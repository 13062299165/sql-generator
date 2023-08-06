import { request } from '@umijs/max';
//增加用户
export const addUser = async (data: UserType.AddRequest) => {
  return request<BaseResponse<number>>('user/add', {
    method: 'POST',
    data,
  });
};
//删除用户
export const deleteUser = async (id: number) => {
  return request<BaseResponse<boolean>>('user/delete', {
    method: 'POST',
    data: { id },
  });
};

//根据id获取用户
export const getUser = async (id: number) => {
  return request<BaseResponse<UserVO>>('user/get', {
    method: 'GET',
    params: { id },
  });
};

export const getLoginUser = async () => {
  return request<BaseResponse<UserVO>>('user/login', {
    method: 'GET',
  });
};

//获取词库列表
export const getListUser = async (params: UserType.ListRequest) => {
  return request<BaseResponse<UserVO[]>>('user/list', {
    method: 'GET',
    params,
  });
};

export const getListUserByPage = async (params: UserType.ListRequest) => {
  return request<BaseResponse<Page<UserVO>>>('user/list/page', {
    method: 'GET',
    params,
  });
};

export const login = async (data: UserType.LoginRequest) => {
  return request<BaseResponse<UserVO>>('user/login', {
    method: 'POST',
    data,
  });
};

export const logout = async () => {
  return request<BaseResponse<boolean>>('user/logout', {
    method: 'GET',
  });
};

export const register = async (data: UserType.RegisterRequest) => {
  return request<BaseResponse<number>>('user/register', {
    method: 'POST',
    data,
  });
};

export const update = async (data: UserVO) => {
  return request<BaseResponse<boolean>>('user/update', {
    method: 'POST',
    data,
  });
};
