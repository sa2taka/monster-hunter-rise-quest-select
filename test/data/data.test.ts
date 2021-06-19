import { Monsters } from '../../src/data/monster';
import { RawQuests } from '../../src/data/quest';

import fs from 'fs';

describe('data', () => {
  function uniq<T>(array: T[]): T[] {
    const knownElements = new Set<T>();
    for (const elem of array) {
      knownElements.add(elem);
    }
    return Array.from(knownElements);
  }
  it("should all monster include quest's monsters", () => {
    const questMonsters = uniq(RawQuests.flatMap((q) => q.monsters));
    const targetMonsters = Monsters.map((m) => m.name);

    const monstersOnlyIncludesQuest = questMonsters.filter(
      (qm) => !targetMonsters.includes(qm)
    );
    const monstersOnlyTargets = targetMonsters.filter(
      (tm) => !questMonsters.includes(tm)
    );

    expect(monstersOnlyIncludesQuest).toHaveLength(0);
    expect(monstersOnlyTargets).toHaveLength(0);
  });

  it('should all monster have image', () => {
    const targetMonsters = Monsters.map((m) => m.image);

    fs.readdir('./public/monsters', (err, files) => {
      if (err) throw err;
      const fileList = files.filter((file) => /.*\.png$/.test(file));
      const monstersOnlyTargets = targetMonsters.filter(
        (tm) => !fileList.includes(tm)
      );
      expect(monstersOnlyTargets).toHaveLength(0);
    });
  });
});
