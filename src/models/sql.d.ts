declare namespace SqlType {
  //用于发起请求的数据库格式

  type GetBySqlRequest = {
    sql: string;
  };

  type GetByFileRequest = {
    file: string;
  };

  type GetAutoRequest = {
    content: string;
  };
}
