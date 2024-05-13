import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};
export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};
export type TResponse = {
  data?: any;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};
export type TResponseRedux = TResponse & BaseQueryApi;
