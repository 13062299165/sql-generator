declare namespace FieldType {
  //增加词库
  type AddRequest = {
    name: string;
    content: string;
  };
  //获取列表
  type listRequest = {
    content: string;
    current: number;
    fieldName: string;
    name: string;
    pageSize: number;
    reviewStatus: number;
    searchName: string;
    sortField: string;
    sortOrder: string;
    userId: number;
  };

  type updateRequest = {
    content: string;
    fieldName: string;
    id: number;
    name: string;
    reviewMessage: string;
    reviewStatus: number;
  };
}
