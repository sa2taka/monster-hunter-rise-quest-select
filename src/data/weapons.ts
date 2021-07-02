export interface Weapon {
  name: string;
  image: string;
}

export const Weapons = [
  {
    name: '大剣',
    image: '大剣.png',
  },
  {
    name: '太刀',
    image: '太刀.png',
  },
  {
    name: '片手剣',
    image: '片手剣.png',
  },
  {
    name: '双剣',
    image: '双剣.png',
  },
  {
    name: 'ハンマー',
    image: 'ハンマー.png',
  },
  {
    name: '狩猟笛',
    image: '狩猟笛.png',
  },
  {
    name: 'ランス',
    image: 'ランス.png',
  },
  {
    name: 'ガンランス',
    image: 'ガンランス.png',
  },
  {
    name: 'スラッシュアックス',
    image: 'スラアク.png',
  },
  {
    name: 'チャージアックス',
    image: 'チャアク.png',
  },
  {
    name: '操虫棍',
    image: '操虫棍.png',
  },
  {
    name: 'ライトボウガン',
    image: 'ライト.png',
  },
  {
    name: 'ヘビィボウガン',
    image: 'ヘビィ.png',
  },
  {
    name: '弓',
    image: '弓.png',
  },
] as const;
