declare namespace ReportType {
  type AddRequest = {
    content: string;
    reportedId: number;
    type: number;
  };

  type UpdateRequest = {
    id: number;
    status: number;
    type: number;
  };

  type ListRequest = {
    content: string;
    current: number;
    pageSize: number;
    reportedId: number;
    reportedUserId: number;
    sortField: string;
    sortField: string;
    sortOrder: string;
    status: number;
    type: number;
    userId: number;
  };
}
