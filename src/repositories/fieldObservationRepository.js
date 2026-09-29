const KEY = 'dhaara.field-observations.v1';

export const fieldObservationRepository = {
  list() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
  },
  save(observation) {
    const record = { ...observation, id: crypto.randomUUID(), savedAt: new Date().toISOString() };
    const records = [record, ...this.list()];
    localStorage.setItem(KEY, JSON.stringify(records));
    return record;
  },
};
