type BaseResponse<T> = {
  code: number;
  data: T;
  message: string;
};
type Page<T> = {
  countId: string;
  current: number;
  maxLimit: number;
  optimizeCountSql: boolean;
  orders: OrderItem[];
  pages: number;
  records: T[];
  searchCount: boolean;
  size: number;
  total: number;
};

type OrderItem = {
  asc: boolean;
  column: string;
};

type Field = {
  autoIncrement: boolean;
  comment: string;
  defaultValue?: string;
  fieldName: string;
  fieldType: string;
  mockParams?: string;
  mockType: string;
  notNull: boolean;
  onUpdate?: string;
  primaryKey: boolean;
};

type Dict = {
  content: string;
  createTime: string;
  id: number;
  isDelete: number;
  name: string;
  reviewMessage: string;
  reviewStatus: number;
  updateTime: Date;
  userId: number;
};

type TableSchema = {
  dbName: string;
  fieldList: Field[];
  mockNum: number;
  tableComment: string;
  tableName: string;
};

type UserVO = {
  createTime: Date;
  gender: MaleEnum;
  id: number;
  updateTime: string;
  userAccount: string;
  userAvatar: string;
  userName: string;
  userRole: string;
};

type GeneratorVO = {
  createSql: string;
  dataJson: string;
  dataList: Record<string, any>[];
  insertSql: string;
  javaEntityCode: string;
  javaObjectCode: string;
  tableSchema: TableSchema;
  typescriptTypeCode: string;
};

type Report = {
  content: string;
  createTime: Date;
  id: number;
  isDelete: number;
  reportedId: number;
  reportedUserId: number;
  status: number;
  type: number;
  updateTime: Date;
  userId: number;
};
