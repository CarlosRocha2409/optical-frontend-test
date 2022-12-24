export interface IPaginationResponse<T> {
  page: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  totalItems: number;
  itemsPerPage: number;
  items: T[];
}
