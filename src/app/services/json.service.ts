import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ObjectUtil} from '@ukon1990/js-utilities';
import {Difference} from '@ukon1990/js-utilities/src/models/difference.model';

@Injectable({
  providedIn: 'root'
})
export class JSONService {

  constructor(private http: HttpClient) {
  }

  loadMockFile(version: number): Promise<any> {
    return this.http.get(`assets/${version ? 'develop' : 'discount'}.json`).toPromise();
  }

  merge(master: object, slave: object): object {
    return ObjectUtil.overwrite(slave, master, true);
  }

  getDifferences(master: object, slave: object): any {
    const diffs: Difference[] =  ObjectUtil.getDifference(master, slave);
    const obj = {};
    diffs.forEach((o: Difference) => obj[o.name] = o);
    return obj;
  }
}
