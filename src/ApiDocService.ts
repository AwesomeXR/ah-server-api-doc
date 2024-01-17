import { BaseService, getOwnPropertyEntries, getRouterMeta } from 'ah-server';
import { generateRouterMetaInfo, IRouterMetaExt } from './router';
import * as _ from 'lodash';

export class ApiDocService extends BaseService {
  getApiDoc(opt: { version: string; services: { url: string }[] }) {
    const list: IRouterMetaExt[] = [];

    this.app.controllers.forEach(c => {
      getOwnPropertyEntries(c).forEach(([pName]) => {
        const rMeta = getRouterMeta(c, pName);
        if (!rMeta) return;

        list.push({ ...rMeta, controller: c, handlerName: pName });
      });
    });

    const info = generateRouterMetaInfo(list, opt);

    return info;
  }
}
