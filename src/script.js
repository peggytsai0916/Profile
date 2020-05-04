var RESOURCES = {
		 
			Advanced: "熟練",
			Intermediate: "普通",
			Novice: "用過",
};
var ResumeData = {
	Name: "蔡佩均",
	EnglishName:"Peggy Tsai",
  Email:"405630236@s05.tku.edu.tw",
  Phone:"0909-xxxxxx",
  Facebook:"蔡佩均(Tsai Pei Jiun)",
  Title: "軟體工程師",
  Summary: "喜歡冒險、嘗試新事物、熱愛挑戰自我，因此在求學的過程中參與許多的活動來充實自我。過程裡讓我逐漸發現自己喜歡與團隊討論所激發的點子，並且愛上看到自己作品的成就感！",
  TKUIM: "淡江大學資訊管理學系",
  Grade:"應屆畢業生",
  Titansoft:"新加坡商鈦坦科技",
  TitansoftPosition:"實習工程師",
  TitansoftDatil:"協助建立與改善公司內部系統",
  JunyiAcademy: "均一平台教育基金會",
  JunyiAcademyPosition:" 使用者關係維護實習生",
  JunyiChange: "利用資訊的背景協助公司改善流程，減少夥伴 30 % 的工作時間",
  JunyiTravel:"獨自舉辦 2019 員工旅遊，帶領 40 位夥伴至苗栗，活動滿意度高達九成",
  IndependentStudy:"Memory Maker",
  IndependentStudyPosition:"組長",
  IndependentStudyDetail:"照片會透過機器學習去裁切出 865 張圖片，將評分高的照片推薦給使用者，讓使用者可以拍下一張照片就擁有更多選擇。在這個專案裏頭是負責領導組員一起完成、督促大家的進度，順利在時程內完成專案。過程中曾遇到緊急狀態，透過與組員的討論以及判斷，最終都順利解決。",
  Club: "TEDxTKU 2018",
  ClubPosition:" 活動部部長",
  ClubDatil:"領導團隊 15 位夥伴完成 100 人年會，負責項目包含策劃活動展區、安排活動動線與人員，並將新興議題帶入校園，榮獲淡江國際處年度活動之ㄧ，從中也獲得專案管理能力以及如何將資源最佳化。",
  JilinUniversity:"長春吉林大學北國風情冬令營",
  JilinUniversityDatil:"以各個面向討論兩岸經濟發展與商業結構，讓兩岸能夠在學術的領域上表達意見。",
  XJTU:"西安交通大學暑期交流營",
  XJYUDatil:"與當地學生探討「一帶一路」的發展與規模，並認識不同的教育模式。",
  Representative:"淡江大學代表學生",
 
}
var vm = new Vue({
	el: "#app",
	data: {
		Resume: ResumeData,
    LanguageData:[
        {desc:"中文"},
        {desc:"英文"}
      ],
    SkillData:[
      {desc:"Java"},
      {desc:"C#"},
      {desc:"HTML"},
      {desc:"CSS"},
      {desc:"Vue"},
      {desc:"JavaScript"},
      {desc:"Swift"},
      {desc:"SQL"},
    ],
    AwardData:[
      {desc:"第24屆大專院校資訊應用服務創新競賽 產學合作組 第二名"},
      {desc:"淡江大學 校內專題競賽 優良"},
      {desc:"淡江iOS App創新賽 第二名"}
    ],
	},
  methods:{
    
  }
});