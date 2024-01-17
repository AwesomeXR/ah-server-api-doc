import { IBaseExtension } from 'ah-server';
import { ApiDocService } from './ApiDocService';
import { Schema } from 'ah-api-type';

declare module 'ah-server' {
  interface IService {
    apiDoc: ApiDocService;
  }

  interface IRouterMeta {
    description?: string;
    tags?: string[];
    response?: {
      examples?: { name: string; data: any }[];
      schema?: Schema;
    };
  }
}

export class ApiDocExtension implements IBaseExtension {
  service = { apiDoc: ApiDocService };
}
