export interface Option {
  levels: {
    level1: boolean;
    level2: boolean;
    level3: boolean;
    level4: boolean;
    level5: boolean;
    level6: boolean;
    level7: boolean;
  };
  types: {
    village: boolean;
    lobby: boolean;
    event: boolean;
    highLevel: boolean;
  };
  monster: {
    normal: boolean;
    apex: boolean;
    old: boolean;
  };
  weapons: {
    greadSword: boolean;
    longSword: boolean;
    swordAndShield: boolean;
    dualBlades: boolean;
    hammer: boolean;
    huntingHorn: boolean;
    lance: boolean;
    gunlance: boolean;
    switchAxe: boolean;
    chargeBlade: boolean;
    insectGlaive: boolean;
    lightBowgun: boolean;
    heaveyBowgun: boolean;
    bow: boolean;
  };
}
