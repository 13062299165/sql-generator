declare namespace UserType {
  type MaleEnum = 'Male' | 'Female';

  /*
        增加用户与删除用户
    */
  type AddRequest = {
    gender: MaleEnum;
    userAccount: string;
    userAvatar: string;
    userName: string;
    userPassword: string;
    userRole: string;
  };

  type DeleteRequest = {
    id: number;
  };

  /*
        获取用户数据
    */
  type GetIDRequest = {
    id: boolean;
  };

  type ListRequest = Partial<{
    createTime: Date;
    current: number;
    gender: MaleEnum;
    id: number;
    pageSize: number;
    sortField: string;
    sortOrder: string;
    updateTime: string;
    userAccount: string;
    userAvatar: string;
    userName: string;
    userRole: 'admin' | 'user';
  }>;

  /**
   * 登录注册登出
   */
  type LoginRequest = {
    userAccount: string;
    userPassword: string;
  };

  type RegisterRequest = {
    checkPassword: string;
    userAccount: string;
    userName: string;
    userPassword: string;
  };
}
