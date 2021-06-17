export interface Quest {
  name: string;
  level: number;
  type: '里' | '集会所' | 'イベント' | '高難度';
  monsters: string[];
}

export const Quests: Quest[] = [
  {
    name: '三位一体の薙ぎ鎌',
    level: 2,
    type: '里',
    monsters: ['オサイズチ'],
  },

  {
    name: '食べ盛りの青熊獣',
    level: 2,
    type: '里',
    monsters: ['アオアシラ'],
  },

  {
    name: '眠気をうちやぶれ!',
    level: 2,
    type: '里',
    monsters: ['ドスバギィ'],
  },

  {
    name: '食べないで白兎獣',
    level: 2,
    type: '里',
    monsters: ['ウルクスス'],
  },

  {
    name: '変幻の唐傘',
    level: 3,
    type: '里',
    monsters: ['アケノシルム'],
  },

  {
    name: '丸呑み河童蛙',
    level: 3,
    type: '里',
    monsters: ['ヨツミワドウ'],
  },

  {
    name: '砂原の大泥棒',
    level: 3,
    type: '里',
    monsters: ['クルルヤック'],
  },

  {
    name: '泥沼の土砂竜',
    level: 3,
    type: '里',
    monsters: ['ボルボロス'],
  },

  {
    name: '毒霧に濡れた水没林',
    level: 3,
    type: '里',
    monsters: ['ドスフロギィ'],
  },

  {
    name: '海綿質素材が作る砂漠の未来',
    level: 3,
    type: '里',
    monsters: ['ロアルドロス'],
  },

  {
    name: '顔のないバケモノ退治?',
    level: 3,
    type: '里',
    monsters: ['フルフル'],
  },

  {
    name: '山林の荒法師',
    level: 4,
    type: '里',
    monsters: ['ビシュテンゴ'],
  },

  {
    name: '黄泉路への歌声',
    level: 4,
    type: '里',
    monsters: ['イソネミクニ'],
  },

  {
    name: '吹き荒ぶ銀世界',
    level: 4,
    type: '里',
    monsters: ['ベリオロス'],
  },

  {
    name: '女王様のお通りだ',
    level: 4,
    type: '里',
    monsters: ['リオレイア'],
  },

  {
    name: '宙を駆ける白き影',
    level: 4,
    type: '里',
    monsters: ['トビカガチ'],
  },

  {
    name: '赤熱の輪舞曲',
    level: 4,
    type: '里',
    monsters: ['ラングロトラ'],
  },

  {
    name: '夜泣く岩石',
    level: 4,
    type: '里',
    monsters: ['バサルモス'],
  },

  {
    name: 'ドクターの孤独な毒研究',
    level: 4,
    type: '里',
    monsters: ['プケプケ'],
  },

  {
    name: 'ぶちかませ巴戦',
    level: 4,
    type: '里',
    monsters: ['アオアシラ', 'ヨツミワドウ'],
  },

  {
    name: '唐傘の妖怪',
    level: 1,
    type: '集会所',
    monsters: ['アケノシルム'],
  },

  {
    name: '真夜中のクルルヤック退治',
    level: 1,
    type: '集会所',
    monsters: ['クルルヤック'],
  },

  {
    name: '寒冷群島のカマイタチ',
    level: 1,
    type: '集会所',
    monsters: ['オサイズチ'],
  },

  {
    name: '眠狗竜、寒冷群島に現る',
    level: 1,
    type: '集会所',
    monsters: ['ドスバギィ'],
  },

  {
    name: '迫る雪玉にご注意を',
    level: 1,
    type: '集会所',
    monsters: ['ウルクスス'],
  },

  {
    name: '大社跡を駆ける毒狗竜',
    level: 1,
    type: '集会所',
    monsters: ['ドスフロギィ'],
  },

  {
    name: 'ハチミツ争奪戦!',
    level: 1,
    type: '集会所',
    monsters: ['アオアシラ'],
  },

  {
    name: '丸呑み力士',
    level: 2,
    type: '集会所',
    monsters: ['ヨツミワドウ'],
  },

  {
    name: 'しっぽでぐるぐる',
    level: 2,
    type: '集会所',
    monsters: ['ビシュテンゴ'],
  },

  {
    name: '本気のプケプケ観察',
    level: 2,
    type: '集会所',
    monsters: ['プケプケ'],
  },

  {
    name: '水没する水没林',
    level: 2,
    type: '集会所',
    monsters: ['ロアルドロス'],
  },

  {
    name: 'かたーいアタマのボルボロス',
    level: 2,
    type: '集会所',
    monsters: ['ボルボロス'],
  },

  {
    name: '迫り来る白い影',
    level: 2,
    type: '集会所',
    monsters: ['フルフル'],
  },

  {
    name: '砂原転がるラングロトラ',
    level: 2,
    type: '集会所',
    monsters: ['ラングロトラ'],
  },

  {
    name: '振り向けばバサルモス',
    level: 2,
    type: '集会所',
    monsters: ['バサルモス'],
  },

  {
    name: '女王様になる方法',
    level: 2,
    type: '集会所',
    monsters: ['リオレイア'],
  },

  {
    name: '兎と蛙のぶつかり稽古',
    level: 2,
    type: '集会所',
    monsters: ['ウルクスス', 'ヨツミワドウ'],
  },

  {
    name: '水の獣と火の竜と',
    level: 2,
    type: '集会所',
    monsters: ['ロアルドロス', 'リオレイア'],
  },

  {
    name: '悪逆無道',
    level: 5,
    type: '里',
    monsters: ['マガイマガド'],
  },

  {
    name: '疾風迅竜',
    level: 5,
    type: '里',
    monsters: ['ナルガクルガ'],
  },

  {
    name: '帯電雷狼竜',
    level: 5,
    type: '里',
    monsters: ['ジンオウガ'],
  },

  {
    name: '夜の砂漠の追跡者',
    level: 5,
    type: '里',
    monsters: ['アンジャナフ'],
  },

  {
    name: '月夜に舞う',
    level: 5,
    type: '里',
    monsters: ['タマミツネ'],
  },

  {
    name: 'リオレウス警報発令中',
    level: 5,
    type: '里',
    monsters: ['リオレウス'],
  },

  {
    name: 'ビリビリorスヤスヤ?',
    level: 5,
    type: '里',
    monsters: ['フルフル', 'イソネミクニ'],
  },

  {
    name: '砂原騒然',
    level: 5,
    type: '里',
    monsters: ['クルルヤック', 'アンジャナフ'],
  },

  {
    name: '隠し味はうたた寝?の巻',
    level: 5,
    type: '里',
    monsters: ['イソネミクニ'],
  },

  {
    name: '灼熱の大一番',
    level: 5,
    type: '里',
    monsters: ['ヨツミワドウ', 'ラングロトラ'],
  },

  {
    name: '鬼火',
    level: 3,
    type: '集会所',
    monsters: ['マガイマガド'],
  },

  {
    name: '眠りへのいざない',
    level: 3,
    type: '集会所',
    monsters: ['イソネミクニ'],
  },

  {
    name: '氷雪ファイター',
    level: 3,
    type: '集会所',
    monsters: ['ゴシャハギ'],
  },

  {
    name: '飛電、地を跳ねる',
    level: 3,
    type: '集会所',
    monsters: ['トビカガチ'],
  },

  {
    name: '泥、ドロ、オロミドロ',
    level: 3,
    type: '集会所',
    monsters: ['オロミドロ'],
  },

  {
    name: '溶岩洞の暴れん坊',
    level: 3,
    type: '集会所',
    monsters: ['アンジャナフ'],
  },

  {
    name: '闇夜を奔る双星',
    level: 3,
    type: '集会所',
    monsters: ['ナルガクルガ'],
  },

  {
    name: '泡狐に魅せられて',
    level: 3,
    type: '集会所',
    monsters: ['タマミツネ'],
  },

  {
    name: '王者、溶岩洞に降り立つ',
    level: 3,
    type: '集会所',
    monsters: ['リオレウス'],
  },

  {
    name: '水月に雷鳴',
    level: 3,
    type: '集会所',
    monsters: ['ジンオウガ'],
  },

  {
    name: '白騎士 対 狩人',
    level: 3,
    type: '集会所',
    monsters: ['ベリオロス'],
  },

  {
    name: '友に向けられた咆哮',
    level: 3,
    type: '集会所',
    monsters: ['ティガレックス'],
  },

  {
    name: '鋭い角にご注意を',
    level: 3,
    type: '集会所',
    monsters: ['ディアブロス'],
  },

  {
    name: 'テールxテール',
    level: 3,
    type: '集会所',
    monsters: ['ビシュテンゴ', 'オロミドロ'],
  },

  {
    name: '荒レ狂ウモノタチ',
    level: 3,
    type: '集会所',
    monsters: ['ティガレックス', 'ゴシャハギ'],
  },

  {
    name: '災禍の中でも美しく',
    level: 3,
    type: '集会所',
    monsters: ['ボルボロス', 'トビカガチ', 'マガイマガド'],
  },

  {
    name: '青いヌシ',
    level: 4,
    type: '集会所',
    monsters: ['ヌシ・アオアシラ'],
  },

  {
    name: '取り巻くつむじ風',
    level: 4,
    type: '集会所',
    monsters: ['オサイズチ'],
  },

  {
    name: 'グルメ・モンスターズ',
    level: 4,
    type: '集会所',
    monsters: ['アオアシラ', 'クルルヤック'],
  },

  {
    name: '寒地にて舟を漕ぐ',
    level: 4,
    type: '集会所',
    monsters: ['ドスバギィ'],
  },

  {
    name: '傘鳥円舞',
    level: 4,
    type: '集会所',
    monsters: ['アケノシルム'],
  },

  {
    name: '大場所・寒冷群島',
    level: 4,
    type: '集会所',
    monsters: ['ヨツミワドウ'],
  },

  {
    name: '可愛いものにも牙はある',
    level: 4,
    type: '集会所',
    monsters: ['ウルクスス'],
  },

  {
    name: 'ある夜フルフルを狩る',
    level: 4,
    type: '集会所',
    monsters: ['フルフル'],
  },

  {
    name: '不穏の沼影',
    level: 5,
    type: '集会所',
    monsters: ['ジュラトドス'],
  },

  {
    name: '水と共に生きるもの',
    level: 5,
    type: '集会所',
    monsters: ['ロアルドロス'],
  },

  {
    name: '泥の中でも立ち上がれ',
    level: 5,
    type: '集会所',
    monsters: ['ボルボロス'],
  },

  {
    name: '砂原の魔球にご注意を',
    level: 5,
    type: '集会所',
    monsters: ['ラングロトラ'],
  },

  {
    name: '一柿入魂',
    level: 5,
    type: '集会所',
    monsters: ['ビシュテンゴ'],
  },

  {
    name: 'それは血となり毒となる',
    level: 5,
    type: '集会所',
    monsters: ['プケプケ'],
  },

  {
    name: '岩の上にも三年',
    level: 5,
    type: '集会所',
    monsters: ['バサルモス'],
  },

  {
    name: '女王に魅せられて',
    level: 5,
    type: '集会所',
    monsters: ['リオレイア'],
  },

  {
    name: '妖艶なる舞',
    level: 6,
    type: '集会所',
    monsters: ['タマミツネ'],
  },

  {
    name: '山河に一閃、響く雷鳴',
    level: 6,
    type: '集会所',
    monsters: ['ジンオウガ'],
  },

  {
    name: '冥途へ誘う歌声',
    level: 6,
    type: '集会所',
    monsters: ['イソネミクニ'],
  },

  {
    name: '琥珀色の牙を研ぐ',
    level: 6,
    type: '集会所',
    monsters: ['ベリオロス'],
  },

  {
    name: '頭上を飛び跳ねる脅威',
    level: 6,
    type: '集会所',
    monsters: ['トビカガチ'],
  },

  {
    name: '猛追、蛮顎竜',
    level: 6,
    type: '集会所',
    monsters: ['アンジャナフ'],
  },

  {
    name: '赤き双眸、夜陰を断つ',
    level: 6,
    type: '集会所',
    monsters: ['ナルガクルガ'],
  },

  {
    name: '天上に紅蓮咲く',
    level: 6,
    type: '集会所',
    monsters: ['リオレウス'],
  },

  {
    name: '風神',
    level: 6,
    type: '集会所',
    monsters: ['イブシマキヒコ'],
  },

  {
    name: '火吹き御前',
    level: 7,
    type: '集会所',
    monsters: ['ヤツカダキ'],
  },

  {
    name: '雪鬼獣がやってくる',
    level: 7,
    type: '集会所',
    monsters: ['ゴシャハギ'],
  },

  {
    name: '鬼火を纏いしモノ',
    level: 7,
    type: '集会所',
    monsters: ['マガイマガド'],
  },

  {
    name: '泥海へ手招く',
    level: 7,
    type: '集会所',
    monsters: ['オロミドロ'],
  },

  {
    name: '地底を駆ける角竜',
    level: 7,
    type: '集会所',
    monsters: ['ディアブロス'],
  },

  {
    name: '轟轟たる咆哮',
    level: 7,
    type: '集会所',
    monsters: ['ティガレックス'],
  },

  {
    name: '悪鬼羅刹',
    level: 7,
    type: '集会所',
    monsters: ['ラージャン'],
  },

  {
    name: '雷神',
    level: 7,
    type: '集会所',
    monsters: ['ナルハタタヒメ'],
  },

  {
    name: '泥土の隠者',
    level: 6,
    type: '里',
    monsters: ['オロミドロ'],
  },

  {
    name: '彷徨える雪鬼獣',
    level: 6,
    type: '里',
    monsters: ['ゴシャハギ'],
  },

  {
    name: '轟く声',
    level: 6,
    type: '里',
    monsters: ['ティガレックス'],
  },

  {
    name: 'ねじれた欲望',
    level: 6,
    type: '里',
    monsters: ['ディアブロス'],
  },

  {
    name: '大社跡での肝試し',
    level: 6,
    type: '里',
    monsters: ['マガイマガド', 'ジンオウガ'],
  },

  {
    name: '電光雷轟、夢幻泡影',
    level: 6,
    type: '里',
    monsters: ['トビカガチ', 'タマミツネ'],
  },

  {
    name: '天空の王者、大地の暴君',
    level: 6,
    type: '里',
    monsters: ['リオレウス', 'ティガレックス'],
  },

  {
    name: '高難度：いざ挑め、覇者の行列',
    level: 6,
    type: '高難度',
    monsters: ['ラージャン', 'バゼルギウス', 'マガイマガド'],
  },

  {
    name: 'たまごだんご争奪戦！の巻',
    level: 4,
    type: '集会所',
    monsters: ['クルルヤック'],
  },

  {
    name: '会得せよ！片手剣の型',
    level: 4,
    type: '集会所',
    monsters: ['アケノシルム'],
  },

  {
    name: '理解せよ！狩猟笛の型',
    level: 4,
    type: '集会所',
    monsters: ['オサイズチ', 'ヨツミワドウ'],
  },

  {
    name: '変幻せよ！剣斧の型',
    level: 4,
    type: '集会所',
    monsters: ['ウルクスス', 'フルフル'],
  },

  {
    name: '学べ！軽弩の型',
    level: 4,
    type: '集会所',
    monsters: ['ドスバギィ', 'ドスフロギィ'],
  },

  {
    name: '毒の錦を纏う',
    level: 4,
    type: '集会所',
    monsters: ['ドスフロギィ'],
  },

  {
    name: '青くて丸い愛しいあの子',
    level: 4,
    type: '集会所',
    monsters: ['アオアシラ'],
  },

  {
    name: '不穏の沼影',
    level: 5,
    type: '集会所',
    monsters: ['ジュラトドス'],
  },

  {
    name: '見極めよ！大剣の型',
    level: 5,
    type: '集会所',
    monsters: ['ビシュテンゴ'],
  },

  {
    name: '体で覚えよ！ハンマーの型',
    level: 5,
    type: '集会所',
    monsters: ['プケプケ', 'ボルボロス'],
  },

  {
    name: '心得よ！ランスの型',
    level: 5,
    type: '集会所',
    monsters: ['リオレイア'],
  },

  {
    name: '一体となれ！盾斧の型',
    level: 5,
    type: '集会所',
    monsters: ['ロアルドロス', 'ジュラトドス'],
  },

  {
    name: '狙い穿て！重弩の型',
    level: 5,
    type: '集会所',
    monsters: ['バサルモス', 'ラングロトラ'],
  },

  {
    name: '寒地を呑み込む影',
    level: 5,
    type: '集会所',
    monsters: ['フルフル', 'ヨツミワドウ'],
  },

  {
    name: 'かけっこ泥んこ大騒ぎ！の巻',
    level: 6,
    type: '集会所',
    monsters: ['ナルガクルガ', 'ジュラトドス'],
  },

  {
    name: '研ぎ澄ませ！太刀の型',
    level: 6,
    type: '集会所',
    monsters: ['ジンオウガ', 'タマミツネ'],
  },

  {
    name: '乱れ裂け！双剣の型',
    level: 6,
    type: '集会所',
    monsters: ['アンジャナフ', 'リオレイア'],
  },

  {
    name: '磨け！ 銃槍の型',
    level: 6,
    type: '集会所',
    monsters: ['ベリオロス'],
  },

  {
    name: '修練せよ！操虫棍の型',
    level: 6,
    type: '集会所',
    monsters: ['イソネミクニ', 'アケノシルム'],
  },

  {
    name: '鍛えよ！弓の型',
    level: 6,
    type: '集会所',
    monsters: ['トビカガチ'],
  },

  {
    name: '英俊豪傑',
    level: 6,
    type: '集会所',
    monsters: ['アンジャナフ', 'タマミツネ', 'ジンオウガ'],
  },

  {
    name: '火加減注意！紫炎と火球の巻',
    level: 7,
    type: '集会所',
    monsters: ['リオレウス', 'マガイマガド'],
  },

  {
    name: 'うさ団子貫く四つの角！の巻',
    level: 7,
    type: '集会所',
    monsters: ['ディアブロス'],
  },

  {
    name: '大社跡の大騒動',
    level: 7,
    type: '集会所',
    monsters: ['オロミドロ', 'タマミツネ'],
  },

  {
    name: '猛き力は大地が如く',
    level: 7,
    type: '集会所',
    monsters: ['ゴシャハギ', 'ヨツミワドウ'],
  },

  {
    name: '激突・激烈・激励の乱',
    level: 7,
    type: '集会所',
    monsters: ['ディアブロス', 'アンジャナフ'],
  },

  {
    name: '乱暴者たちにご注意を',
    level: 7,
    type: '集会所',
    monsters: ['ラージャン', 'ジンオウガ'],
  },

  {
    name: '方々から迫る脅威',
    level: 7,
    type: '集会所',
    monsters: ['ヤツカダキ', 'フルフル'],
  },

  {
    name: '疾風怒濤の大舞台',
    level: 7,
    type: '集会所',
    monsters: ['トビカガチ', 'ナルガクルガ', 'ティガレックス'],
  },

  {
    name: '古の幻影',
    level: 7,
    type: '集会所',
    monsters: ['オオナズチ'],
  },

  {
    name: '嵐に舞う黒い影',
    level: 7,
    type: '集会所',
    monsters: ['クシャルダオラ'],
  },

  {
    name: '帝国の王',
    level: 7,
    type: '集会所',
    monsters: ['テオ・テスカトル'],
  },

  {
    name: '猛き炎と、闊歩する強者ども',
    level: 7,
    type: '集会所',
    monsters: ['リオレイア', 'ティガレックス', 'ヤツカダキ'],
  },

  {
    name: '猛き炎よ、怒髪を鎮めよ',
    level: 7,
    type: '集会所',
    monsters: ['ラージャン'],
  },

  {
    name: '降り注ぐ爆鱗の矢・爆鱗竜、再び飛来す',
    level: 7,
    type: '集会所',
    monsters: ['バゼルギウス'],
  },

  {
    name: '牛飲馬食、ヌシ・アオアシラ',
    level: 7,
    type: '集会所',
    monsters: ['ヌシ・アオアシラ'],
  },

  {
    name: '優美高妙、ヌシ・リオレイア',
    level: 7,
    type: '集会所',
    monsters: ['ヌシ・リオレイア'],
  },

  {
    name: '千紫万紅、ヌシ・タマミツネ',
    level: 7,
    type: '集会所',
    monsters: ['ヌシ・タマミツネ'],
  },

  {
    name: 'ウツシ教官の挑戦状・其の一',
    level: 7,
    type: '集会所',
    monsters: ['オロミドロ', 'ジンオウガ'],
  },

  {
    name: 'ウツシ教官の挑戦状・其の二',
    level: 7,
    type: '集会所',
    monsters: ['ゴシャハギ', 'ラージャン'],
  },

  {
    name: 'ウツシ教官の挑戦状・其の三',
    level: 7,
    type: '集会所',
    monsters: ['マガイマガド', 'ナルガクルガ'],
  },

  {
    name: '溶岩洞の巨大ガマ',
    level: 6,
    type: 'イベント',
    monsters: ['ヨツミワドウ'],
  },

  {
    name: '影の迅竜',
    level: 7,
    type: 'イベント',
    monsters: ['ナルガクルガ'],
  },

  {
    name: '称号・モノノフの心',
    level: 3,
    type: 'イベント',
    monsters: ['ゴシャハギ', 'マガイマガド'],
  },

  {
    name: '急いては熊を仕損じる',
    level: 7,
    type: 'イベント',
    monsters: ['ヌシ・アオアシラ'],
  },

  {
    name: '人魚竜は妖麗に舞う',
    level: 7,
    type: 'イベント',
    monsters: ['イソネミクニ'],
  },

  {
    name: 'ウツシ教官の挑戦状・其の四',
    level: 7,
    type: '集会所',
    monsters: ['ティガレックス', 'アンジャナフ'],
  },

  {
    name: 'ウツシ教官の挑戦状・其の五',
    level: 7,
    type: '集会所',
    monsters: ['ヤツカダキ', 'リオレウス'],
  },

  {
    name: '百竜ノ淵源',
    level: 7,
    type: '集会所',
    monsters: ['イブシマキヒコ', '百竜ノ淵源ナルハタタヒメ'],
  },

  {
    name: '奇しき赫耀・彼方より来たる凶星',
    level: 7,
    type: '集会所',
    monsters: ['奇しき赫耀のバルファルク'],
  },

  {
    name: '為虎添翼、ヌシ・リオレウス',
    level: 7,
    type: '集会所',
    monsters: ['ヌシ・リオレウス'],
  },

  {
    name: '痛烈無比、ヌシ・ディアブロス',
    level: 7,
    type: '集会所',
    monsters: ['ヌシ・ディアブロス'],
  },

  {
    name: '電光雷轟、ヌシ・ジンオウガ',
    level: 7,
    type: '集会所',
    monsters: ['ヌシ・ジンオウガ'],
  },

  {
    name: '高難度：災禍を纏うもの',
    level: 7,
    type: '高難度',
    monsters: ['マガイマガド', 'バゼルギウス'],
  },

  {
    name: '高難度：竜獣戯画',
    level: 7,
    type: '高難度',
    monsters: ['ゴシャハギ', 'ティガレックス', 'タマミツネ'],
  },

  {
    name: '高難度：嵐ト炎ヲ司ルモノ',
    level: 7,
    type: '高難度',
    monsters: ['クシャルダオラ', 'テオ・テスカトル'],
  },

  {
    name: '高難度：鬼はいずこ',
    level: 7,
    type: '高難度',
    monsters: ['オオナズチ', 'ラージャン'],
  },

  {
    name: '高難度：凶星、業火の地に降る',
    level: 7,
    type: '高難度',
    monsters: ['奇しき赫耀のバルファルク', 'ヤツカダキ'],
  },

  {
    name: '高難度：猛者たちの酒宴',
    level: 7,
    type: '高難度',
    monsters: ['リオレウス', 'ディアブロス', 'マガイマガド'],
  },

  {
    name: '雪風に舞う朱の唐傘',
    level: 4,
    type: 'イベント',
    monsters: ['アケノシルム'],
  },

  {
    name: '称号・シノビの心',
    level: 7,
    type: 'イベント',
    monsters: ['トビカガチ', 'ベリオロス', 'ナルガクルガ'],
  },
];
