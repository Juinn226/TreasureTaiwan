// ==================== 景點資料 (Locations Data) ====================
const locations = [
  {
    id: 1,
    name: "正濱漁港彩色屋",
    city: "基隆市",
    region: "基隆市中正區",
    lat: 25.152,
    lng: 121.761,
    image: "images/zhengbin_harbor.png",
    hint: "北部靠海的小漁港，整排彩色建築非常有名。",
    intro: "正濱漁港位於基隆市中正區，是早期重要漁港，近年因彩色屋整修成為打卡勝地，被稱為「台版威尼斯」。"
  },
  {
    id: 2,
    name: "高美濕地",
    city: "台中市",
    region: "台中市清水區",
    lat: 24.324,
    lng: 120.563,
    image: "images/gaomei_wetland.png",
    hint: "中部著名的賞夕陽景點，常能看到風車與倒影。",
    intro: "高美濕地位於台中市清水區，是重要生態保護區，以廣闊潮間帶、風車及絕美夕陽景色聞名。"
  },
  {
    id: 3,
    name: "玉山主峰",
    city: "南投縣",
    region: "南投縣信義鄉",
    lat: 23.471,
    lng: 120.957,
    image: "images/yushan_peak.png",
    hint: "台灣第一高峰，也是許多登山客的夢想清單。",
    intro: "玉山主峰為台灣最高峰，海拔 3952 公尺，位於南投縣與嘉義縣交界，是玉山國家公園的重要象徵。"
  },
  {
    id: 4,
    name: "野柳地質公園",
    city: "新北市",
    region: "新北市萬里區",
    lat: 25.206,
    lng: 121.693,
    image: "images/yehliu_geo.png",
    hint: "女王頭、岩石奇景是這裡的代表畫面。",
    intro: "野柳地質公園位於新北市萬里區，以女王頭、燭台石等各種奇岩景觀著稱，是北海岸最具代表性的地標之一。"
  },
  {
    id: 5,
    name: "駁二藝術特區",
    city: "高雄市",
    region: "高雄市鹽埕區",
    lat: 22.619,
    lng: 120.279,
    image: "images/pier2_art.png",
    hint: "由老倉庫改造而成的港邊藝術空間。",
    intro: "駁二藝術特區位於高雄港旁，原為老舊倉庫區，經改造成為結合展覽、市集與裝置藝術的創意園區。"
  },
  {
    id: 6,
    name: "阿里山森林鐵路",
    city: "嘉義縣",
    region: "嘉義縣阿里山鄉",
    lat: 23.508,
    lng: 120.802,
    image: "images/alishan_railway.png",
    hint: "小火車穿梭在高山森林與櫻花之間。",
    intro: "阿里山森林鐵路是台灣著名登山鐵道，連結嘉義市與阿里山，沿途可欣賞雲海、森林與高山景色。"
  },
  {
    id: 7,
    name: "日月潭拉魯島",
    city: "南投縣",
    region: "南投縣魚池鄉",
    lat: 23.865,
    lng: 120.915,
    image: "images/lalu_island.png",
    hint: "位於台灣最大淡水湖中央的一座小島。",
    intro: "拉魯島位於日月潭中央，是邵族的聖地，過去曾為「光華島」，現為重要自然與文化象徵。"
  },
  {
    id: 8,
    name: "九份老街",
    city: "新北市",
    region: "新北市瑞芳區",
    lat: 25.110,
    lng: 121.845,
    image: "images/jiufen_old_street.png",
    hint: "山城紅燈籠與老街階梯，是拍照的經典畫面。",
    intro: "九份位於新北市瑞芳區，昔日為金礦山城，現以茶館、老街與山海景觀成為知名觀光景點。"
  },
  {
    id: 9,
    name: "清水斷崖",
    city: "花蓮縣",
    region: "花蓮縣秀林鄉",
    lat: 24.181,
    lng: 121.672,
    image: "images/qingshui_cliff.png",
    hint: "峭壁直接面向大海，是東部經典海岸線景點。",
    intro: "清水斷崖位於蘇花公路沿線，是近乎垂直落入太平洋的大理石峭壁，被列為台灣八景之一。"
  },
  {
    id: 10,
    name: "武陵農場",
    city: "台中市",
    region: "台中市和平區",
    lat: 24.384,
    lng: 121.298,
    image: "images/wuling_farm.png",
    hint: "春季賞櫻名所，秋冬也能看到絕美高山景色。",
    intro: "武陵農場位於台中市和平區，海拔約 1700 公尺，以櫻花、楓紅及高山農作著稱，是四季皆宜的旅遊地。"
  },
  {
    id: 11,
    name: "三仙台跨海步橋",
    city: "台東縣",
    region: "台東縣成功鎮",
    lat: 23.123,
    lng: 121.415,
    image: "images/sanxiantai_bridge.png",
    hint: "八拱形跨海步橋連接離岸小島，是東海岸代表景點。",
    intro: "三仙台位於台東縣成功鎮，以獨特拱橋與離岸小島聞名，相傳與八仙之一的傳說相關。"
  },
  {
    id: 12,
    name: "井仔腳瓦盤鹽田",
    city: "台南市",
    region: "台南市北門區",
    lat: 23.269,
    lng: 120.124,
    image: "images/jingzijiao_salt.png",
    hint: "傍晚時分常能拍到鹽田與倒影畫面。",
    intro: "井仔腳瓦盤鹽田是台南北門早期曬鹽場，保留古老瓦盤鹽田景觀，現為熱門攝影與體驗景點。"
  },
  {
    id: 13,
    name: "十分瀑布",
    city: "新北市",
    region: "新北市平溪區",
    lat: 25.049,
    lng: 121.786,
    image: "images/shifen_falls.png",
    hint: "被稱為「台版尼加拉瀑布」，水流呈現寬闊瀑幕。",
    intro: "十分瀑布位於新北市平溪區，是台灣最著名的瀑布之一，周邊也有老街與鐵道景觀。"
  },
  {
    id: 14,
    name: "國立中正紀念堂",
    city: "台北市",
    region: "台北市中正區",
    lat: 25.036,
    lng: 121.519,
    image: "images/cksm_hall.png",
    hint: "藍頂白牆的大型建築，周邊有廣場與花園。",
    intro: "中正紀念堂位於台北市中正區，是重要紀念建築與藝文、集會場所，周邊有自由廣場與公園。"
  },
  {
    id: 15,
    name: "迪化街商圈",
    city: "台北市",
    region: "台北市大同區",
    lat: 25.057,
    lng: 121.511,
    image: "images/dihua_street.png",
    hint: "老街、南北貨與年貨大街是這裡的關鍵字。",
    intro: "迪化街位於大稻埕商圈，是台北保留最完整的老商街之一，以南北貨、中藥材與老建築著稱。"
  },
  {
    id: 16,
    name: "安平古堡",
    city: "台南市",
    region: "台南市安平區",
    lat: 22.999,
    lng: 120.160,
    image: "images/anping_fort.png",
    hint: "由荷蘭人興建的古城堡，見證台灣早期歷史。",
    intro: "安平古堡原為荷蘭人建造的熱蘭遮城，是台灣最早的西式城堡之一，也是台南重要歷史景點。"
  },
  {
    id: 17,
    name: "國立故宮博物院",
    city: "台北市",
    region: "台北市士林區",
    lat: 25.102,
    lng: 121.548,
    image: "images/npm_taipei.png",
    hint: "收藏大量中國古文物的博物館。",
    intro: "國立故宮博物院位於台北市士林區，是世界重要博物館之一，以豐富的中國書畫、瓷器與文物收藏聞名。"
  },
  {
    id: 18,
    name: "高雄流行音樂中心",
    city: "高雄市",
    region: "高雄市鹽埕區",
    lat: 22.616,
    lng: 120.298,
    image: "images/kaohsiung_music_center.png",
    hint: "位於愛河與港邊的新地標，造型相當前衛。",
    intro: "高雄流行音樂中心座落於愛河出海口附近，是結合表演、展演與觀光的新興音樂場館。"
  },
  {
    id: 19,
    name: "龜山島",
    city: "宜蘭縣",
    region: "宜蘭縣頭城鎮",
    lat: 24.848,
    lng: 121.95,
    image: "images/guishan_island.png",
    hint: "遠望像一隻浮在海面的烏龜，是東北角的代表景色。",
    intro: "龜山島位於宜蘭外海，是一座火山島，因外型酷似烏龜而得名，亦是賞鯨與登島旅遊的重要景點。"
  },
  {
    id: 20,
    name: "澎湖玄武岩自然保留區",
    city: "澎湖縣",
    region: "澎湖縣",
    lat: 23.565,
    lng: 119.565,
    image: "images/penghu_columnar_basalt.png",
    hint: "整片柱狀節理玄武岩，常出現在海岸與懸崖邊。",
    intro: "澎湖玄武岩自然保留區涵蓋多個離島，是世界少見的大規模玄武岩地形，柱狀節理壯觀。"
  },
  {
    id: 21,
    name: "七美雙心石滬",
    city: "澎湖縣",
    region: "澎湖縣七美鄉",
    lat: 23.201,
    lng: 119.425,
    image: "images/double_heart_chimei.png",
    hint: "兩個相連的心形石滬，是熱門打卡地標。",
    intro: "雙心石滬位於澎湖七美島，是傳統石滬漁法留下的地景，因外觀如雙心而成為浪漫象徵。"
  },
  {
    id: 22,
    name: "太魯閣國家公園",
    city: "花蓮縣",
    region: "花蓮縣秀林鄉",
    lat: 24.175,
    lng: 121.55,
    image: "images/taroko_gorge.png",
    hint: "峽谷、大理石峭壁與曲折公路是這裡的特色。",
    intro: "太魯閣國家公園擁有壯麗峽谷與大理石地形，立霧溪谷沿線聚集許多著名步道與景點。"
  },
  {
    id: 23,
    name: "鹿野高台熱氣球草地",
    city: "台東縣",
    region: "台東縣鹿野鄉",
    lat: 22.955,
    lng: 121.135,
    image: "images/luye_balloon.png",
    hint: "每到夏天就會出現繽紛熱氣球的高台草地。",
    intro: "鹿野高台位於台東縣鹿野鄉，是台灣國際熱氣球嘉年華的主要場地，視野遼闊。"
  },
  {
    id: 24,
    name: "汶源宮",
    city: "金門縣",
    region: "金門縣金沙鎮",
    lat: 24.487,
    lng: 118.407,
    image: "images/wenyuan_temple.png",
    hint: "位於金門的廟宇，外觀色彩繽紛，常見在明信片上。",
    intro: "汶源宮位於金門金沙鎮，是當地重要信仰中心，廟宇裝飾華麗，融合閩南與地方建築特色。"
  },
  {
    id: 25,
    name: "陽明山國家公園",
    city: "台北市",
    region: "台北市北投區",
    lat: 25.164,
    lng: 121.559,
    image: "images/yangmingshan_np.png",
    hint: "北部著名郊山，春季有花季，冬季則常起大霧。",
    intro: "陽明山國家公園橫跨台北市與新北市，以溫泉、硫磺地形與高山草原景觀著稱。"
  },
  {
    id: 26,
    name: "台北101",
    city: "台北市",
    region: "台北市信義區",
    lat: 25.033968,
    lng: 121.564468,
    image: "images/taipei101.png",
    hint: "曾經是世界最高大樓，也是台北最具代表性的地標。",
    intro: "台北101位於信義計畫區，結合辦公、購物與觀景台，是台北市最具辨識度的摩天大樓。"
  },
  {
    id: 27,
    name: "台北表演藝術中心",
    city: "台北市",
    region: "台北市士林區",
    lat: 25.088,
    lng: 121.525,
    image: "images/taipei_performance_center.png",
    hint: "外觀像一顆大球體接在建築上，非常新潮的劇場設計。",
    intro: "台北表演藝術中心位於士林，結合多功能劇場與現代建築設計，是台北新興文化地標。"
  },
  {
    id: 28,
    name: "臺北市立圖書館 北投分館",
    city: "台北市",
    region: "台北市北投區",
    lat: 25.136,
    lng: 121.506,
    image: "images/beitou_library.png",
    hint: "號稱台灣最美綠建築圖書館之一，外觀大量使用木構造。",
    intro: "北投圖書館以綠建築設計聞名，採用大量木材與自然採光，位於北投公園旁，是靜謐閱讀空間。"
  },
  {
    id: 29,
    name: "鹿港九曲巷",
    city: "彰化縣",
    region: "彰化縣鹿港鎮",
    lat: 24.056,
    lng: 120.435,
    image: "images/lukang_jiuqu_alley.png",
    hint: "巷道蜿蜒曲折，是早期為了防風、防盜而形成的街道布局。",
    intro: "九曲巷位於鹿港老街區，狹窄蜿蜒的小巷充滿歷史氣息，展現早期聚落的生活型態。"
  },
  {
    id: 30,
    name: "高雄捷運美麗島站「光之穹頂」",
    city: "高雄市",
    region: "高雄市新興區",
    lat: 22.631,
    lng: 120.302,
    image: "images/the_dome_of_light.png",
    hint: "捷運站裡的大型彩色玻璃穹頂，被評為世界最美車站之一。",
    intro: "美麗島站位於高雄市中心，「光之穹頂」是捷運站內的大型公共藝術作品，色彩繽紛、氣勢磅礡。"
  }
];



// ==================== 遊戲狀態變數 (Game State Variables) ====================
let shuffledLocations = []; // 打亂後的景點順序
let currentIndex = 0;       // 當前題目索引
let currentLocation = null; // 當前景點物件
let score = 0;              // 總分數
let hasAnswered = false;    // 標記本回合是否已作答
let timeLimit = 0;          // 本回合的時間限制 (秒, 0 為無限時間)
let timerInterval = null;   // 計時器的 Interval ID
let pendingTimeLimit = 0;   // 暫存的難度時間 (用於從難度選擇跳到遊戲說明時)

// ==================== DOM 元素選取 (DOM Element Selection) ====================

// 畫面/容器
const startScreen = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");

// 按鈕
const startBtn = document.getElementById("start-btn");
const logoHomeBtn = document.getElementById("logo-home"); 
const showHintBtn = document.getElementById("show-hint-btn"); 
const showAnswerBtn = document.getElementById("show-answer-btn"); 
const nextBtn = document.getElementById("next-btn");

// 導覽列按鈕
const navInstructionBtn = document.getElementById("nav-instruction-btn");
const navIntroBtn = document.getElementById("nav-intro-btn");
const navRecommendBtn = document.getElementById("nav-recommend-btn"); 

// Modal
const difficultyModal = document.getElementById("difficulty-modal"); 
const difficultyModalCloseBtn = document.getElementById("difficulty-modal-close-btn");
const difficultyBtns = document.querySelectorAll(".difficulty-btn"); 
const introModal = document.getElementById("intro-modal");
const introModalCloseBtn = document.getElementById("intro-modal-close-btn");
const instructionModal = document.getElementById("instruction-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const hintModal = document.getElementById("hint-modal"); 
const hintModalCloseBtn = document.getElementById("hint-modal-close-btn");
const hintModalText = document.getElementById("hint-modal-text"); 
const answerModal = document.getElementById("answer-modal"); 
const answerModalCloseBtn = document.getElementById("answer-modal-close-btn"); 
const photoModal = document.getElementById("photo-modal");
const enlargedPhoto = document.getElementById("enlarged-photo");
const recommendModal = document.getElementById("recommend-modal");
const recommendModalCloseBtn = document.getElementById("recommend-modal-close-btn");
const feedbackForm = document.getElementById("feedback-form");
const feedbackMessage = document.getElementById("feedback-message");


// 遊戲資訊顯示
const photoImg = document.getElementById("location-photo");
const roundText = document.getElementById("round-text");
const scoreText = document.getElementById("score-text");
const resultDisplayArea = document.getElementById("result-display-area"); 
const preClickArea = document.getElementById("pre-click-area"); 
const hintText = document.getElementById("hint-text"); 
const resultText = document.getElementById("result-text"); 
const answerModalTitle = document.getElementById("answer-modal-title"); 
const answerModalResult = document.getElementById("answer-modal-result"); 
const answerModalRegion = document.getElementById("answer-modal-region"); 
const answerModalIntro = document.getElementById("answer-modal-intro"); 

// 計時器
const timerContainer = document.getElementById("timer-container");
const timerText = document.getElementById("timer-text");
const timerFill = document.getElementById("timer-fill");

// 跑馬燈
const marqueeTrack = document.getElementById("marquee-track");


// ==================== 地圖初始化 (Map Initialization) ====================
// 初始化 Leaflet 地圖，設定台灣中心點與縮放等級
const map = L.map("map").setView([23.7, 121], 7); 

// 加入 OpenStreetMap 瓦片圖層
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18
}).addTo(map);

// 地圖標記圖層變數
let guessMarker = null;  // 玩家猜測標記
let answerMarker = null; // 正確答案標記
let lineLayer = null;    // 猜測點與答案點的連線

// 監聽地圖點擊事件
map.on("click", onMapClick);


// ==================== Modal 相關函式 (Modal Functions) ====================

/**
 * 關閉難度 Modal 並開始遊戲
 * @param {number} selectedTimeLimit 選擇的時間限制 (秒)
 */
function closeAndStartGame(selectedTimeLimit) {
    timeLimit = selectedTimeLimit; 
    difficultyModal.style.display = "none"; 
    instructionModal.style.display = "none"; 
    startScreen.style.display = "none"; 
    gameContainer.style.display = "flex"; 
    map.invalidateSize(); // 確保地圖能正確渲染
    startGame(); 
}

/**
 * 顯示遊戲說明 Modal，並暫存選定的難度時間
 * @param {number} selectedTimeLimit 選擇的時間限制 (秒)
 */
function showInstructionAndSetDifficulty(selectedTimeLimit) {
    pendingTimeLimit = selectedTimeLimit; 
    difficultyModal.style.display = "none"; 
    instructionModal.style.display = "flex"; 
}

function closeHintModal() {
    hintModal.style.display = "none"; 
}

/**
 * 關閉答案 Modal，並檢查是否可以點擊「下一題」
 */
function closeAnswerModalAndShowNext() {
    answerModal.style.display = "none";
    
    if (currentIndex <= shuffledLocations.length) {
        nextBtn.disabled = false; 
    }

    hasAnswered = true; // 即使關閉 Modal，作答狀態仍為 True
}

function closeIntroModal() {
    introModal.style.display = "none";
}

/**
 * 顯示景點照片放大 Modal
 */
function showPhotoModal() {
    if (currentLocation) {
        enlargedPhoto.src = currentLocation.image;
        enlargedPhoto.alt = currentLocation.name + " 放大圖";
        photoModal.style.display = "flex"; 
    }
}

function closePhotoModal() {
    photoModal.style.display = "none"; 
}

function closeRecommendModal() {
    recommendModal.style.display = "none";
}


// ==================== 計時器邏輯 (Timer Logic) ====================

/**
 * 開始計時
 */
function startTimer() {
    clearInterval(timerInterval); 

    if (timeLimit === 0) {
        timerContainer.style.display = "none"; // 無限時間模式，隱藏計時器
        return;
    }

    let timeLeft = timeLimit;
    timerContainer.style.display = "flex";
    timerText.textContent = timeLeft;
    timerFill.style.width = "100%";
    timerFill.style.backgroundColor = "#4ade80"; // 綠色
    
    // 設置計時器，每秒更新
    timerInterval = setInterval(() => {
        timeLeft--;
        const percentage = (timeLeft / timeLimit);

        timerText.textContent = timeLeft;
        timerFill.style.width = percentage * 100 + "%";

        // 根據剩餘時間百分比改變進度條顏色
        if (percentage > 0.6) {
             timerFill.style.backgroundColor = "#4ade80"; // 綠色
        } else if (percentage > 0.3) {
             timerFill.style.backgroundColor = "#facc15"; // 黃色
        } else {
             timerFill.style.backgroundColor = "#f87171"; // 紅色
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeUpAnswer(); // 時間到，強制作答失敗
        }
    }, 1000);
}

/**
 * 停止計時
 */
function stopTimer() {
    clearInterval(timerInterval);
}

/**
 * 時間到時的作答處理
 */
function timeUpAnswer() {
    if (hasAnswered) return;

    hasAnswered = true;
    stopTimer();

    clearMapLayers(); // 清除地圖上的標記

    // 顯示正確答案標記
    answerMarker = L.marker(
        [currentLocation.lat, currentLocation.lng],
        { title: currentLocation.name, icon: L.divIcon({className: 'answer-marker', html: '🟢'}) }
    ).addTo(map);

    let message = `⏳ <b>時間到！</b><br>未在時間內點擊地圖，本題 0 分。`;
    let roundScore = 0; 

    score += roundScore;
    scoreText.textContent = `總分：${score}`;

    // 調整按鈕文字
    if (currentIndex === shuffledLocations.length) {
        nextBtn.textContent = "遊戲結束";
    } else {
        nextBtn.textContent = "下一題 ▶";
    }

    preClickArea.style.display = "none"; // 隱藏提示按鈕

    // 更新答案 Modal 內容
    answerModalTitle.textContent = currentLocation.name;
    answerModalResult.innerHTML = message;
    answerModalRegion.textContent = currentLocation.region;
    answerModalIntro.textContent = currentLocation.intro;

    resultDisplayArea.style.display = "flex"; // 顯示結果區塊
    
    nextBtn.disabled = false; 
    showAnswerBtn.disabled = false; 
    
    answerModal.style.display = "flex"; // 彈出答案 Modal
}


// ==================== 事件監聽器 (Event Listeners) ====================

// 開始按鈕：開啟難度選擇 Modal
startBtn.addEventListener("click", () => {
  difficultyModal.style.display = "flex"; 
});

// 遊戲說明 Modal 關閉：從說明跳回遊戲主畫面並開始遊戲
modalCloseBtn.addEventListener("click", () => {
    instructionModal.style.display = "none";
    
    if (pendingTimeLimit >= 0) { 
        closeAndStartGame(pendingTimeLimit);
        pendingTimeLimit = -1; 
    } 
});

// 答案 Modal 關閉：執行關閉與準備下一題的邏輯
answerModalCloseBtn.addEventListener("click", closeAnswerModalAndShowNext); 

// Logo 回首頁/重置遊戲：重設所有遊戲狀態
logoHomeBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    // 隱藏遊戲畫面，顯示開始畫面
    gameContainer.style.display = "none";
    startScreen.style.display = "flex"; 
    
    // 關閉所有 Modal
    instructionModal.style.display = "none"; 
    difficultyModal.style.display = "none"; 
    closeHintModal(); 
    answerModal.style.display = "none"; 
    closeIntroModal(); 
    closePhotoModal(); 
    closeRecommendModal(); 
    
    // 重置遊戲狀態變數
    stopTimer(); 
    clearMapLayers();
    currentIndex = 0;
    score = 0;
    currentLocation = null;
    hasAnswered = false;
    timeLimit = 0; 
    pendingTimeLimit = 0; 
    scoreText.textContent = "總分：0";
    nextBtn.disabled = true;
    showAnswerBtn.disabled = true; 
    
    // 隱藏遊戲控制區
    hintText.textContent = "";
    resultText.textContent = "";
    resultDisplayArea.style.display = "none"; 
    preClickArea.style.display = "flex"; 
    document.querySelector('.control-btn-group').style.display = "flex"; 
    
    nextBtn.textContent = "下一題 ▶";

    timerContainer.style.display = "none";
});

// 提示按鈕：顯示提示 Modal
showHintBtn.addEventListener("click", () => {
    if (currentLocation) {
        hintModalText.textContent = currentLocation.hint; 
        hintModal.style.display = "flex";
    }
});

hintModalCloseBtn.addEventListener("click", closeHintModal);

// 查看答案按鈕：顯示答案 Modal
showAnswerBtn.addEventListener("click", () => {
    if (currentLocation && answerModal.style.display !== "flex") {
        answerModal.style.display = "flex"; 
    }
});

// 導覽列：遊戲說明按鈕
if (navInstructionBtn) {
    navInstructionBtn.addEventListener("click", (e) => {
        e.preventDefault();
        pendingTimeLimit = -1; // -1 表示從導覽列開啟，不影響遊戲開始
        instructionModal.style.display = "flex";
        closeIntroModal(); 
        closeRecommendModal(); 
    });
}

// 導覽列：遊戲介紹按鈕
if (navIntroBtn) {
    navIntroBtn.addEventListener("click", (e) => {
        e.preventDefault();
        introModal.style.display = "flex";
        instructionModal.style.display = "none"; 
        closeRecommendModal(); 
    });
}

if (introModalCloseBtn) {
    introModalCloseBtn.addEventListener("click", closeIntroModal);
}

// 難度 Modal 關閉按鈕
difficultyModalCloseBtn.addEventListener("click", () => {
    difficultyModal.style.display = "none";
});

// 難度按鈕群：設定難度並開啟遊戲說明
difficultyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const selectedTimeLimit = parseInt(e.target.dataset.time);
        showInstructionAndSetDifficulty(selectedTimeLimit); 
    });
});


// 下一題按鈕：開始下一回合或結束遊戲
nextBtn.addEventListener("click", nextQuestion);


// 景點照片：點擊放大
photoImg.addEventListener("click", showPhotoModal);

// 照片放大 Modal：點擊背景或照片本體關閉
photoModal.addEventListener("click", (e) => {
    if (e.target === photoModal || e.target === enlargedPhoto) {
        closePhotoModal();
    }
});

// 導覽列：景點推薦按鈕
if (navRecommendBtn) {
    navRecommendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        recommendModal.style.display = "flex";
        
        instructionModal.style.display = "none"; 
        introModal.style.display = "none"; 
        
        // 重設表單狀態
        feedbackForm.reset();
        feedbackMessage.textContent = "";
        feedbackMessage.style.display = "none";
    });
}

if (recommendModalCloseBtn) {
    recommendModalCloseBtn.addEventListener("click", closeRecommendModal);
}

// 推薦景點表單提交
if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // 模擬表單提交的延遲
        setTimeout(() => {
            feedbackMessage.textContent = `
                感謝 ${document.getElementById("player-name").value || '熱心玩家'} 推薦 
                「${document.getElementById("spot-name").value}」！
                我們會盡快評估加入題庫
            `;
            feedbackMessage.style.display = "block";
            
            // 短暫顯示後自動關閉 Modal
            setTimeout(() => {
                closeRecommendModal();
                feedbackForm.reset();
                feedbackMessage.textContent = "";
                feedbackMessage.style.display = "none";
            }, 6000); 
            
        }, 500); 
    });
}


// ==================== 遊戲核心邏輯 (Core Game Logic) ====================

/**
 * 遊戲結束並返回首頁畫面
 */
function gameOver() {
    stopTimer(); 
    
    // 隱藏遊戲畫面，顯示開始畫面
    gameContainer.style.display = "none";
    startScreen.style.display = "flex"; 
    
    // 關閉所有 Modal
    instructionModal.style.display = "none"; 
    difficultyModal.style.display = "none"; 
    closeHintModal(); 
    answerModal.style.display = "none"; 
    closeIntroModal(); 
    closePhotoModal(); 
    closeRecommendModal(); 

    // 重置遊戲狀態
    clearMapLayers();
    currentIndex = 0;
    currentLocation = null;
    hasAnswered = false;
    timeLimit = 0; 
    pendingTimeLimit = 0; 
    nextBtn.disabled = true;
    showAnswerBtn.disabled = true;
    
    score = 0; 
    scoreText.textContent = "總分：0";

    // 重置控制區顯示
    hintText.textContent = "";
    resultText.textContent = "";
    resultDisplayArea.style.display = "none"; 
    preClickArea.style.display = "flex"; 
    document.querySelector('.control-btn-group').style.display = "flex"; 
    
    nextBtn.textContent = "下一題 ▶";

    timerContainer.style.display = "none";
}

/**
 * 開始新一輪遊戲
 */
function startGame() { 
  score = 0;
  currentIndex = 0;
  scoreText.textContent = "總分：0";
  shuffledLocations = shuffle([...locations]); // 複製並打亂景點清單
  nextBtn.disabled = true;
  showAnswerBtn.disabled = true;
  
  nextQuestion();
}

/**
 * 載入下一題
 */
function nextQuestion() {
  // 檢查是否是「遊戲結束」按鈕
  if (nextBtn.textContent === "遊戲結束") {
      gameOver();
      return;
  }
  
  // 檢查是否已完成所有題目
  if (currentIndex >= shuffledLocations.length) {
    gameOver();
    return;
  }
  
  stopTimer();
  
  document.querySelector('.control-btn-group').style.display = "flex";

  clearMapLayers(); // 清除上回合的地圖標記
  currentLocation = shuffledLocations[currentIndex]; // 設置當前題目
  currentIndex++;
  
  nextBtn.textContent = "下一題 ▶";

  // 隱藏結果區，顯示點擊前的控制區
  resultDisplayArea.style.display = "none"; 
  preClickArea.style.display = "flex";
  
  nextBtn.disabled = true; // 點擊地圖前，下一題按鈕應禁用
  showAnswerBtn.disabled = true; // 點擊地圖前，查看答案按鈕應禁用
  
  resultText.textContent = ""; 
  hintText.textContent = ""; 

  // 更新照片與回合數
  photoImg.src = currentLocation.image;
  photoImg.alt = currentLocation.name;
  roundText.textContent = `第 ${currentIndex} / ${shuffledLocations.length} 題`;
  
  hasAnswered = false; // 重設作答狀態

  map.setView([23.7, 121], 7); // 重設地圖視角 (台灣中心)
  
  startTimer(); // 開始計時
}

/**
 * 處理地圖點擊事件 (玩家作答)
 * @param {object} e Leaflet 點擊事件物件
 */
function onMapClick(e) {
  if (!currentLocation || hasAnswered) return; // 沒題目或已作答則不處理

  stopTimer();

  const { lat, lng } = e.latlng;

  clearMapLayers();

  // 1. 放置玩家猜測標記 (🔴)
  guessMarker = L.marker([lat, lng], {icon: L.divIcon({className: 'guess-marker', html: '🔴'})}).addTo(map);

  // 2. 放置正確答案標記 (🟢)
  answerMarker = L.marker(
    [currentLocation.lat, currentLocation.lng],
    { title: currentLocation.name, icon: L.divIcon({className: 'answer-marker', html: '🟢'}) }
  ).addTo(map);

  // 3. 繪製連線
  lineLayer = L.polyline(
    [
      [lat, lng],
      [currentLocation.lat, currentLocation.lng]
    ],
    { dashArray: "4, 4", color: "#fb923c" } // 橘色虛線
  ).addTo(map);

  // 4. 判定縣市結果
  const nearest = getNearestLocation(lat, lng); // 找到玩家點擊位置最近的景點 (用於縣市判定)
  const guessedCity = nearest ? nearest.city : "未知";
  const correctCity = currentLocation.city;

  let message = "";
  let roundScore = 0;

  if (guessedCity === correctCity) {
    roundScore = 100;
    message = `✅ <b>答對了！</b><br>你選到的縣市是「${guessedCity}」，正確縣市也是「${correctCity}」。`;
  } else {
    roundScore = 0; 
    message = `❌ <b>答錯了！</b><br>系統判定你點到的縣市是「${guessedCity}」，但正確答案是「${correctCity}」。`;
  }

  // 5. 更新分數與顯示
  score += roundScore;
  scoreText.textContent = `總分：${score}`;
  
  if (currentIndex === shuffledLocations.length) {
    nextBtn.textContent = "遊戲結束";
  } else {
    nextBtn.textContent = "下一題 ▶";
  }

  preClickArea.style.display = "none"; // 隱藏提示按鈕
  
  hintText.textContent = ""; 
  resultText.textContent = ""; 

  // 更新答案 Modal 內容
  answerModalTitle.textContent = currentLocation.name;
  answerModalResult.innerHTML = message;
  answerModalRegion.textContent = currentLocation.region;
  answerModalIntro.textContent = currentLocation.intro;
  
  resultDisplayArea.style.display = "flex"; // 顯示結果區塊
  
  nextBtn.disabled = false; // 啟用下一題/遊戲結束
  showAnswerBtn.disabled = false; // 啟用查看答案
  
  answerModal.style.display = "flex"; // 彈出答案 Modal
  
  hasAnswered = true; // 標記已作答
}

/**
 * 透過歐幾里得距離找到點擊位置最近的景點 (用於縣市判定)
 * 注意：這只是一種簡易的「最近點」判定，並非嚴格的地理邊界判定。
 * @param {number} lat 緯度
 * @param {number} lng 經度
 * @returns {object|null} 最近的景點物件
 */
function getNearestLocation(lat, lng) {
  let best = null;
  let bestDist = Infinity;
  for (const loc of locations) {
    const dLat = lat - loc.lat;
    const dLng = lng - loc.lng;
    const dist = dLat * dLat + dLng * dLng; // 簡易的平方距離
    if (dist < bestDist) {
      bestDist = dist;
      best = loc;
    }
  }
  return best;
}

/**
 * 清除地圖上的所有標記和連線
 */
function clearMapLayers() {
  if (guessMarker) {
    map.removeLayer(guessMarker);
    guessMarker = null;
  }
  if (answerMarker) {
    map.removeLayer(answerMarker);
    answerMarker = null;
  }
  if (lineLayer) {
    map.removeLayer(lineLayer);
    lineLayer = null;
  }
}

/**
 * 隨機打亂陣列 (Fisher-Yates 演算法)
 * @param {Array} arr 要打亂的陣列
 * @returns {Array} 打亂後的陣列
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * 初始化首頁的跑馬燈
 */
function initMarquee() {
  if (!marqueeTrack) return;

  const baseList = locations; 
  const displayList = baseList.concat(baseList); // 複製一份以實現無限循環效果

  displayList.forEach((loc) => {
    const img = document.createElement("img");
    img.src = loc.image; 
    img.alt = loc.name;
    marqueeTrack.appendChild(img);
  });
}

// 啟動跑馬燈初始化
initMarquee();