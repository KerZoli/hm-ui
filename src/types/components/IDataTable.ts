export interface IDataTableHeader {
  label: string;
  key: string;
  sortable: boolean;
}

export interface IDataTable {
  headers: IDataTableHeader[];
  items: Array<Record<IDataTableHeader['key'], unknown>>;
}

export enum SortOrderEnum {
  Asc = 'asc',
  Desc = 'desc'
}
