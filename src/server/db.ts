import * as path from 'path';
import * as Loki from 'lokijs';
import { Pic } from '../types/pic';

export const COLLECTION_NAME = 'pics';

export const db = new Loki(path.join('data', 'db.json'), {
  autosave: true,
  autoload: true,
  autoloadCallback: () => {
    const pics = getPics();
    if (!pics) {
      db.addCollection<Pic>(COLLECTION_NAME);
    }
  }
});

export function getPics(): LokiCollection<Pic> {
  return db.getCollection<Pic>(COLLECTION_NAME);
}
