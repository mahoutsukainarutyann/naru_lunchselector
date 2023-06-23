function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function selectLunch() {
    var lunches = [
      "カレーライス",
      "ラーメン",
      "サンドイッチ",
      "うどん",
      "ほうれん草",
      "焼きそばパン",
      "メロンぱん",
      "スモークターキーレッグ",
      "クリームパン",
      "リトルグリーンマン",
      "マグロ",
      "カツオ",
      "つけ麺",
      "刺身",
      "クロワッサン",
      "ピザ",
      "寿司",
      "ハンバーガー",
      "お弁当",
      "焼肉",
      "パスタ",
      "天丼",
      "そば",
      "カツ丼",
      "お寿司",
      "カルボナーラ",
      "おにぎり",
      "焼きそば",
      "キムタク",
      "キムチ",
      "ウイダー",
      "ナポリタン",
      "じゃがりこ",
      "ねぎ",
      "鯖の味噌煮",
      "バニラアイス"
    ];
  
    var drink = [
      "ブラックサンダーフラッペ",
      "いちごみるく",
      "Qooスッキリしろぶどう",
      "カルピス",
      "メロンフロート",
      "コカコーラゼロ",
      "Qooリンゴジュース",
      "カルピスソーダ",
      "ブラックコーヒー",
      "クリームソーダ",
      "抹茶アイスクリーム",
      "コーラ",
      "白湯",
      "野菜ジュース",
      "富士山の天然水",
      "紅茶",
      "ほうじ茶",
      "三ツ矢サイダー",
      "トマト缶",
      "コンソメ",
      "牛乳",
      "モンスター",
      "レモン",
      "みかん",
      "はちみつ",
      "綾鷹"
    ];
  
    shuffleArray(lunches);
    shuffleArray(drink);
  
    var selectedLunch = lunches[0];
    var selectedDrink = drink[0];
  
    var resultElement = document.getElementById("result");
    resultElement.textContent = "今日の昼ごはんは「" + selectedLunch + "」とドリンクは「" + selectedDrink + "」です！";
  }
  