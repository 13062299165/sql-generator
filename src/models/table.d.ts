declare namespace TableType {
  //增加词库
  type AddRequest = {
    name: string;
    content: string;
  };
  //获取列表
  type listRequest = {
    content: string;
    current: number;
    name: string;
    pageSize: number;
    reviewStatus: number;
    sortField: string;
    sortOrder: string;
    userId: number;
  };

  type updateRequest = {
    content: string;
    id: number;
    name: string;
    reviewMessage: string;
    reviewStatus: number;
  };
}
