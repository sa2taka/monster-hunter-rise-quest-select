import { Monsters } from '../../src/data/monster';
import { Quests } from '../../src/data/quest';

describe('data', () => {
  function uniq<T>(array: T[]): T[] {
    const knownElements = new Set<T>();
    for (const elem of array) {
      knownElements.add(elem);
    }
    return Array.from(knownElements);
  }
  it("should all monster includes quest's monsters", () => {
    const questMonsters = uniq(Quests.flatMap((q) => q.monsters));
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
});
