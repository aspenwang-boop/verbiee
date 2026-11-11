export const categories = [
  ['essentials', 'Essentials', '必備動詞', 10],
  ['travel', 'Travel', '旅行', 10],
  ['directions', 'Directions', '問路與移動', 15],
  ['housework', 'Housework', '做家事', 5],
  ['introductions', 'Introductions', '自我介紹', 9],
  ['routine', 'Daily routine', '一天作息', 15],
  ['interests', 'Interests', '興趣', 15],
  ['weather', 'Weather', '天氣', 2],
  ['food', 'Food & dining', '吃', 11],
  ['shopping', 'Shopping', '購物', 5],
  ['learning', 'Learning', '學習', 28],
] as const
export type Category = typeof categories[number][0]
type Pattern = 'er' | 'ir' | 're' | 'ger' | 'cer' | 'grave' | 'double' | 'yer' | 'payer' | 'irregular' | 'impersonal'
type Entry = [infinitive: string, zh: string, en: string, example: string, exampleZh: string, exampleEn: string, usage: string, pattern?: Pattern]
const entries: Record<Category | 'extension', Entry[]> = {
  essentials: [
    ['être','是；處於','to be','Nous sommes à la maison.','我們在家。','We are at home.','être à la maison · 在家','irregular'],
    ['avoir','有','to have','J’ai deux frères.','我有兩個兄弟。','I have two brothers.','avoir besoin de · 需要','irregular'],
    ['faire','做；製作','to do; to make','Je fais du vélo le dimanche.','我星期天騎腳踏車。','I ride my bike on Sundays.','faire du vélo · 騎腳踏車','irregular'],
    ['aller','去','to go','On va au marché.','我們去市場。','We are going to the market.','aller à / au / aux · 去某處','irregular'],
    ['venir','來','to come','Tu viens avec nous ?','你跟我們一起來嗎？','Are you coming with us?','venir de + infinitif · 剛做完某事','irregular'],
    ['prendre','拿；搭乘','to take','Nous prenons le métro.','我們搭地鐵。','We take the metro.','prendre le métro · 搭地鐵','irregular'],
    ['pouvoir','能；可以','can; to be able to','Vous pouvez entrer.','你們可以進來。','You can come in.','pouvoir + infinitif · 能夠做某事','irregular'],
    ['vouloir','想要','to want','Je veux apprendre le français.','我想學法文。','I want to learn French.','vouloir + infinitif · 想做某事','irregular'],
    ['devoir','必須；應該','must; to have to','Je dois travailler demain.','我明天必須工作。','I have to work tomorrow.','devoir + infinitif · 必須做某事','irregular'],
    ['falloir','需要；必須','to be necessary','Il faut réserver une table.','必須訂位。','We need to book a table.','il faut + infinitif · 有必要做某事','impersonal'],
  ],
  travel: [
    ['voyager','旅行','to travel','Nous voyageons en train.','我們搭火車旅行。','We travel by train.','voyager en train · 搭火車旅行','ger'],
    ['visiter','參觀','to visit a place','Elle visite le musée.','她參觀博物館。','She visits the museum.','visiter un lieu · 參觀某地'],
    ['partir','出發；離開','to leave; to depart','Nous partons à huit heures.','我們八點出發。','We leave at eight.','partir pour Lyon · 出發去里昂','irregular'],
    ['comparer','比較','to compare','Je compare les prix.','我比較價格。','I compare prices.','comparer les prix · 比價'],
    ['téléphoner','打電話','to call','Elle téléphone à sa mère.','她打電話給媽媽。','She calls her mother.','téléphoner à quelqu’un · 打電話給某人'],
    ['réserver','預訂','to book','Je réserve une chambre.','我預訂一間房。','I book a room.','réserver une chambre · 訂房'],
    ['contacter','聯絡','to contact','Nous contactons l’hôtel.','我們聯絡飯店。','We contact the hotel.','contacter quelqu’un · 聯絡某人'],
    ['changer','更換；改變','to change','Nous changeons de train.','我們換車。','We change trains.','changer de train · 換乘火車','ger'],
    ['remplacer','替換','to replace','On remplace la clé.','我們更換鑰匙。','We replace the key.','remplacer X par Y · 用 Y 取代 X','cer'],
    ['conduire','駕駛','to drive','Je conduis jusqu’à la gare.','我開車到車站。','I drive to the station.','conduire une voiture · 開車','irregular'],
  ],
  directions: [
    ['marcher','走路','to walk','Nous marchons jusqu’au parc.','我們走到公園。','We walk to the park.','marcher jusqu’à · 走到某處'],
    ['tourner','轉彎','to turn','Vous tournez à droite.','你向右轉。','You turn right.','tourner à droite · 右轉'],
    ['traverser','穿越','to cross','Elle traverse la rue.','她穿過馬路。','She crosses the street.','traverser la rue · 過馬路'],
    ['passer','經過；度過','to pass; to spend time','Je passe devant la gare.','我經過車站前面。','I pass in front of the station.','passer devant · 從前面經過'],
    ['entrer','進入','to enter','Nous entrons dans le magasin.','我們走進商店。','We go into the shop.','entrer dans · 進入某處'],
    ['sortir','出去；外出','to go out; to exit','Je sors du métro.','我走出地鐵站。','I come out of the metro.','sortir de · 從某處出去','irregular'],
    ['arriver','抵達','to arrive','Ils arrivent à midi.','他們中午抵達。','They arrive at noon.','arriver à la gare · 抵達車站'],
    ['remercier','感謝','to thank','Je vous remercie pour votre aide.','謝謝您的幫忙。','Thank you for your help.','remercier quelqu’un pour · 為某事感謝某人'],
    ['aider','幫助','to help','Elle aide un touriste.','她幫助一位遊客。','She helps a tourist.','aider quelqu’un à + infinitif · 幫某人做某事'],
    ['situer','定位；說明位置','to locate; to place','Je situe le musée sur la carte.','我在地圖上指出博物館的位置。','I locate the museum on the map.','se situer près de · 位在附近'],
    ['localiser','找出位置','to pinpoint','Nous localisons l’arrêt de bus.','我們找出公車站的位置。','We locate the bus stop.','localiser un lieu sur la carte · 在地圖上找位置'],
    ['chercher','尋找','to look for','Je cherche la rue Victor-Hugo.','我在找雨果街。','I am looking for Rue Victor-Hugo.','chercher quelque chose · 尋找某物'],
    ['rentrer','回家；返回','to go home; to return','Nous rentrons à la maison.','我們回家。','We go home.','rentrer chez soi · 回到自己家'],
    ['utiliser','使用','to use','J’utilise un plan du quartier.','我用一張街區地圖。','I use a map of the neighborhood.','utiliser un plan · 使用地圖'],
    ['continuer','繼續','to continue','Vous continuez tout droit.','您繼續直走。','You keep going straight.','continuer à + infinitif · 繼續做某事'],
  ],
  housework: [
    ['organiser','安排；整理','to organize','J’organise la cuisine.','我整理廚房。','I organize the kitchen.','organiser un espace · 整理空間'],
    ['nettoyer','清潔','to clean','Elle nettoie la table.','她擦桌子。','She cleans the table.','nettoyer la table · 清潔桌面','yer'],
    ['balayer','掃地','to sweep','Tu balaies le sol.','你掃地。','You sweep the floor.','balayer le sol · 掃地','payer'],
    ['ranger','收拾；歸位','to tidy; to put away','Nous rangeons les livres.','我們把書收好。','We put the books away.','ranger sa chambre · 整理房間','ger'],
    ['perdre','遺失；輸掉','to lose','Je perds souvent mes clés.','我常常弄丟鑰匙。','I often lose my keys.','perdre ses clés · 弄丟鑰匙','re'],
  ],
  introductions: [
    ["s'appeler",'叫作','to be called','Je m’appelle Léa.','我叫 Léa。','My name is Léa.','s’appeler + prénom · 名叫……','double'],
    ['parler','說；說話','to speak','Je parle un peu français.','我會說一點法文。','I speak a little French.','parler de · 談論'],
    ['travailler','工作','to work','Elle travaille dans un café.','她在咖啡館工作。','She works in a café.','travailler dans · 在某處工作'],
    ['habiter','居住','to live; to reside','J’habite à Paris.','我住在巴黎。','I live in Paris.','habiter à + ville · 住在某城市'],
    ['vivre','生活；居住','to live','Nous vivons en France.','我們住在法國。','We live in France.','vivre en France · 在法國生活','irregular'],
    ['présenter','介紹；呈現','to introduce; to present','Je présente mon ami à Julie.','我把朋友介紹給 Julie。','I introduce my friend to Julie.','présenter quelqu’un à quelqu’un · 把某人介紹給另一人'],
    ['écrire','寫','to write','J’écris un message.','我寫一則訊息。','I write a message.','écrire à quelqu’un · 寫信或訊息給某人','irregular'],
    ['épeler','逐字母拼讀','to spell out','J’épelle mon prénom.','我把我的名字逐字母拼出來。','I spell out my first name.','épeler son prénom · 拼讀自己的名字','double'],
    ['rencontrer','遇見','to meet','Elle rencontre ses voisins.','她遇見她的鄰居。','She meets her neighbors.','rencontrer quelqu’un · 遇見某人'],
  ],
  routine: [
    ['se réveiller','醒來','to wake up','Je me réveille à sept heures.','我七點醒來。','I wake up at seven.','se réveiller tôt · 早醒'],
    ['se lever','起床；站起來','to get up','Elle se lève tôt.','她很早起床。','She gets up early.','se lever tôt · 早起','grave'],
    ['se laver','洗自己；洗澡','to wash oneself','Je me lave les mains.','我洗手。','I wash my hands.','se laver les mains · 洗手'],
    ["s'habiller",'穿衣服','to get dressed','Tu t’habilles vite.','你很快就穿好衣服。','You get dressed quickly.','s’habiller vite · 快速穿衣'],
    ['mettre','放；穿上','to put; to put on','Je mets mon manteau.','我穿上外套。','I put on my coat.','mettre un manteau · 穿上外套','irregular'],
    ['se maquiller','化妝','to put on makeup','Elle se maquille le matin.','她早上化妝。','She puts on makeup in the morning.','se maquiller le matin · 早上化妝'],
    ['se raser','刮鬍子；刮毛','to shave','Il se rase devant le miroir.','他在鏡子前刮鬍子。','He shaves in front of the mirror.','se raser la barbe · 刮鬍子'],
    ['porter','穿戴；攜帶','to wear; to carry','Je porte un pull bleu.','我穿著一件藍色毛衣。','I am wearing a blue sweater.','porter des lunettes · 戴眼鏡'],
    ['apporter','帶來','to bring','J’apporte du pain.','我帶麵包來。','I bring some bread.','apporter quelque chose · 帶某物來'],
    ['se coucher','上床睡覺；躺下','to go to bed; to lie down','Nous nous couchons à dix heures.','我們十點上床睡覺。','We go to bed at ten.','se coucher tard · 晚睡'],
    ['dormir','睡覺','to sleep','Je dors huit heures par nuit.','我每晚睡八小時。','I sleep eight hours a night.','dormir huit heures · 睡八小時','irregular'],
    ['ouvrir','打開','to open','Tu ouvres la fenêtre.','你打開窗戶。','You open the window.','ouvrir la fenêtre · 開窗','irregular'],
    ['allumer','打開電源；點亮','to turn on; to light','J’allume la lumière.','我開燈。','I turn on the light.','allumer la lumière · 開燈'],
    ['fermer','關上','to close','Elle ferme la porte.','她關門。','She closes the door.','fermer la porte · 關門'],
    ['éteindre','關掉；熄滅','to turn off; to put out','Nous éteignons la lumière.','我們關燈。','We turn off the light.','éteindre la lumière · 關燈','irregular'],
  ],
  interests: [
    ['aimer','喜歡；愛','to like; to love','J’aime les films français.','我喜歡法國電影。','I like French films.','aimer + infinitif · 喜歡做某事'],
    ['adorer','非常喜歡','to love; to adore','Elle adore cuisiner.','她很喜歡做菜。','She loves cooking.','adorer + infinitif · 很喜歡做某事'],
    ['chanter','唱歌','to sing','Tu chantes sous la douche.','你洗澡時唱歌。','You sing in the shower.','chanter une chanson · 唱一首歌'],
    ['jouer','玩；演奏','to play','Il joue du piano.','他彈鋼琴。','He plays the piano.','jouer de + instrument / jouer à + jeu · 演奏樂器／玩遊戲'],
    ['danser','跳舞','to dance','Nous dansons ensemble.','我們一起跳舞。','We dance together.','danser ensemble · 一起跳舞'],
    ['nager','游泳','to swim','Nous nageons à la piscine.','我們在游泳池游泳。','We swim at the pool.','nager à la piscine · 在游泳池游泳','ger'],
    ['regarder','看；觀看','to look at; to watch','Je regarde un film.','我在看一部電影。','I am watching a film.','regarder un film · 看電影'],
    ['voir','看見；見到','to see','Je vois la mer.','我看得見海。','I can see the sea.','voir quelqu’un · 見到某人','irregular'],
    ['dessiner','畫圖','to draw','Elle dessine un chat.','她畫一隻貓。','She draws a cat.','dessiner au crayon · 用鉛筆畫圖'],
    ['courir','跑步','to run','Je cours dans le parc.','我在公園跑步。','I run in the park.','courir dans le parc · 在公園跑步','irregular'],
    ['rire','笑','to laugh','Vous riez beaucoup.','你們常常笑。','You laugh a lot.','rire de quelque chose · 因某事而笑','irregular'],
    ['sourire','微笑','to smile','Elle sourit à son ami.','她對朋友微笑。','She smiles at her friend.','sourire à quelqu’un · 對某人微笑','irregular'],
    ['se promener','散步','to take a walk','Nous nous promenons au bord de la mer.','我們在海邊散步。','We take a walk by the sea.','se promener dans le parc · 在公園散步','grave'],
    ["s'ennuyer",'覺得無聊','to get bored','Je m’ennuie dans le train.','我在火車上覺得無聊。','I get bored on the train.','s’ennuyer en attendant · 等得無聊','yer'],
    ['fumer','抽菸','to smoke','Il ne fume pas.','他不抽菸。','He does not smoke.','arrêter de fumer · 戒菸'],
  ],
  weather: [
    ['pleuvoir','下雨','to rain','Il pleut ce matin.','今天早上下雨。','It is raining this morning.','il pleut beaucoup · 雨下得很大','impersonal'],
    ['neiger','下雪','to snow','Il neige à la montagne.','山上下雪。','It is snowing in the mountains.','il neige · 下雪','impersonal'],
  ],
  food: [
    ['manger','吃','to eat','Nous mangeons à midi.','我們中午吃飯。','We eat at noon.','manger au restaurant · 在餐廳吃飯','ger'],
    ['déjeuner','吃午餐','to have lunch','Je déjeune au bureau.','我在辦公室吃午餐。','I have lunch at the office.','déjeuner à midi · 中午吃午餐'],
    ['dîner','吃晚餐','to have dinner','Nous dînons chez Paul.','我們在 Paul 家吃晚餐。','We have dinner at Paul’s.','dîner chez quelqu’un · 在某人家吃晚餐'],
    ["s'asseoir",'坐下','to sit down','Nous nous asseyons près de la fenêtre.','我們在窗邊坐下。','We sit down near the window.','s’asseoir à table · 坐到桌旁','irregular'],
    ['commencer','開始','to start','Nous commençons le repas.','我們開始用餐。','We start the meal.','commencer à + infinitif · 開始做某事','cer'],
    ['finir','結束；做完','to finish','Je finis mon repas.','我吃完這一餐。','I finish my meal.','finir de + infinitif · 做完某事','ir'],
    ['proposer','提議；提出','to suggest; to offer','Elle propose un dessert.','她提議來一份甜點。','She suggests a dessert.','proposer de + infinitif · 提議做某事'],
    ['conseiller','建議；推薦','to advise; to recommend','Le serveur conseille la soupe.','服務生推薦湯。','The waiter recommends the soup.','conseiller à quelqu’un de + infinitif · 建議某人做某事'],
    ['commander','點餐；訂購','to order','Je commande une salade.','我點一份沙拉。','I order a salad.','commander un plat · 點一道菜'],
    ['garder','保留；留著','to keep','Je garde une part pour toi.','我留一份給你。','I keep a portion for you.','garder une part · 留一份'],
    ['inviter','邀請','to invite','J’invite mes amis à dîner.','我邀請朋友吃晚餐。','I invite my friends to dinner.','inviter quelqu’un à dîner · 邀請某人吃晚餐'],
  ],
  shopping: [
    ['acheter','買','to buy','J’achète des pommes.','我買一些蘋果。','I buy some apples.','acheter quelque chose à quelqu’un · 向某人買某物，或買給某人','grave'],
    ['payer','付錢','to pay','Je paie par carte.','我刷卡付款。','I pay by card.','payer par carte · 用卡付款','payer'],
    ['coûter','價值；花費','to cost','Ce sac coûte vingt euros.','這個包包要二十歐元。','This bag costs twenty euros.','coûter vingt euros · 要二十歐元'],
    ['choisir','選擇','to choose','Nous choisissons un cadeau.','我們挑選一份禮物。','We choose a gift.','choisir un cadeau · 挑禮物','ir'],
    ['attendre','等待','to wait for','J’attends mon tour.','我等著輪到我。','I wait for my turn.','attendre quelqu’un · 等某人','re'],
  ],
  learning: [
    ['lire','閱讀','to read','Je lis un livre.','我讀一本書。','I read a book.','lire à voix haute · 朗讀','irregular'],
    ['apprendre','學習；學會','to learn','J’apprends le français.','我學法文。','I am learning French.','apprendre à + infinitif · 學會做某事','irregular'],
    ['étudier','學習；研讀','to study','Nous étudions à la bibliothèque.','我們在圖書館讀書。','We study at the library.','étudier à la bibliothèque · 在圖書館讀書'],
    ['demander','詢問；請求','to ask; to request','Je demande de l’aide.','我請求幫助。','I ask for help.','demander à quelqu’un de + infinitif · 請某人做某事'],
    ['poser','放置；提出','to put down; to ask','Tu poses une question.','你提出一個問題。','You ask a question.','poser une question · 提問'],
    ['répondre','回答','to answer','Elle répond à la question.','她回答問題。','She answers the question.','répondre à une question · 回答問題','re'],
    ['connaître','認識；熟悉','to know; to be familiar with','Je connais cette ville.','我熟悉這座城市。','I know this city.','connaître quelqu’un ou un lieu · 認識某人或熟悉某地','irregular'],
    ['savoir','知道；會','to know; to know how','Tu sais nager.','你會游泳。','You know how to swim.','savoir + infinitif · 會做某事','irregular'],
    ['comprendre','理解','to understand','Je comprends la question.','我理解這個問題。','I understand the question.','comprendre une question · 理解問題','irregular'],
    ['écouter','聆聽','to listen to','Elle écoute un podcast.','她聽一個 Podcast。','She listens to a podcast.','écouter de la musique · 聽音樂'],
    ['suivre','跟隨；修習','to follow; to take a course','Nous suivons un cours de français.','我們上法文課。','We take a French class.','suivre un cours · 上一門課','irregular'],
    ['participer','參與','to take part','Je participe à un atelier.','我參加一場工作坊。','I take part in a workshop.','participer à · 參加'],
    ['observer','觀察','to observe','Tu observes les images.','你觀察這些圖片。','You look closely at the pictures.','observer une image · 觀察圖片'],
    ['identifier','辨認；識別','to identify','J’identifie le verbe.','我找出動詞。','I identify the verb.','identifier le verbe · 辨認動詞'],
    ['exprimer','表達','to express','Elle exprime son avis.','她表達自己的看法。','She expresses her opinion.','exprimer son avis · 表達意見'],
    ['décrire','描述','to describe','Il décrit sa chambre.','他描述他的房間。','He describes his room.','décrire un lieu · 描述某地','irregular'],
    ['indiquer','指出；指示','to indicate; to show','J’indique la date sur la feuille.','我在紙上標示日期。','I indicate the date on the sheet.','indiquer le chemin · 指路'],
    ['montrer','展示；給人看','to show','Je montre ma photo à Léa.','我把照片拿給 Léa 看。','I show my photo to Léa.','montrer quelque chose à quelqu’un · 把某物給某人看'],
    ['remplir','填滿；填寫','to fill; to fill in','Vous remplissez le formulaire.','您填寫表格。','You fill in the form.','remplir un formulaire · 填表','ir'],
    ['compléter','補全；填寫','to complete','Je complète la phrase.','我把句子補完整。','I complete the sentence.','compléter une phrase · 補全句子','grave'],
    ['associer','配對；連結','to match; to associate','J’associe le mot à l’image.','我把單字和圖片配對。','I match the word with the picture.','associer X à Y · 把 X 和 Y 配對'],
    ['transformer','轉換；改造','to transform','Nous transformons la phrase.','我們改寫句子。','We transform the sentence.','transformer X en Y · 把 X 變成 Y'],
    ['informer','告知','to inform','On informe les élèves du changement.','我們通知學生有變動。','We inform the students about the change.','informer quelqu’un de · 告知某人某事'],
    ['inscrire','登記；報名','to register; to enroll','J’inscris mon fils à un cours.','我幫兒子報名一門課。','I enroll my son in a class.','s’inscrire à un cours · 自己報名課程','irregular'],
    ['penser','想；認為','to think','Je pense à mes vacances.','我在想我的假期。','I am thinking about my vacation.','penser à · 想到；penser que · 認為'],
    ['réfléchir','思考；仔細考慮','to think over; to reflect','Nous réfléchissons à la question.','我們仔細思考這個問題。','We think the question over.','réfléchir à · 思考某事','ir'],
    ['dire','說；告訴','to say; to tell','Vous dites bonjour au professeur.','你們向老師問好。','You say hello to the teacher.','dire bonjour à quelqu’un · 向某人問好','irregular'],
    ['expliquer','解釋','to explain','Elle explique la règle.','她解釋規則。','She explains the rule.','expliquer quelque chose à quelqu’un · 向某人解釋某事'],
  ],
  extension: [
    ['revenir','回來','to come back','Je reviens à six heures.','我六點回來。','I come back at six.','revenir de · 從某處回來','irregular'],
    ['devenir','成為','to become','Elle devient médecin.','她成為醫生。','She becomes a doctor.','devenir + profession · 成為某職業人士','irregular'],
    ['permettre','允許','to allow','Ce billet permet de visiter le musée.','這張票可以用來參觀博物館。','This ticket lets you visit the museum.','permettre de + infinitif · 讓人可以做某事','irregular'],
    ['remettre','放回；交還','to put back; to hand in','Je remets le livre sur la table.','我把書放回桌上。','I put the book back on the table.','remettre un objet à sa place · 把物品放回原處','irregular'],
    ['appeler','呼叫；打電話給','to call','J’appelle mon frère.','我打電話給哥哥。','I call my brother.','appeler quelqu’un · 打電話給某人','double'],
    ['entendre','聽見','to hear','J’entends la pluie.','我聽見雨聲。','I hear the rain.','entendre un bruit · 聽見聲音','re'],
  ],
}

const er = ['e', 'es', 'e', 'ons', 'ez', 'ent']
const regularEndings = {
  er, ir: ['is', 'is', 'it', 'issons', 'issez', 'issent'],
  re: ['s', 's', '', 'ons', 'ez', 'ent'],
}
// Each cell gives the stem and, after +, the ending. Suppletive forms stay whole.
const irregular: Record<string, string> = {
  être: 'suis es est sommes êtes sont',
  avoir: 'ai a+s a av+ons av+ez ont',
  faire: 'fai+s fai+s fai+t fais+ons fait+es font',
  aller: 'vais vas va all+ons all+ez vont',
  venir: 'vien+s vien+s vien+t ven+ons ven+ez vienn+ent',
  prendre: 'prend+s prend+s prend pren+ons pren+ez prenn+ent',
  pouvoir: 'peu+x peu+x peu+t pouv+ons pouv+ez peuv+ent',
  vouloir: 'veu+x veu+x veu+t voul+ons voul+ez veul+ent',
  devoir: 'doi+s doi+s doi+t dev+ons dev+ez doiv+ent',
  partir: 'par+s par+s par+t part+ons part+ez part+ent',
  sortir: 'sor+s sor+s sor+t sort+ons sort+ez sort+ent',
  dormir: 'dor+s dor+s dor+t dorm+ons dorm+ez dorm+ent',
  ouvrir: 'ouvr+e ouvr+es ouvr+e ouvr+ons ouvr+ez ouvr+ent',
  conduire: 'condui+s condui+s condui+t conduis+ons conduis+ez conduis+ent',
  vivre: 'vi+s vi+s vi+t viv+ons viv+ez viv+ent',
  écrire: 'écri+s écri+s écri+t écriv+ons écriv+ez écriv+ent',
  mettre: 'met+s met+s met mett+ons mett+ez mett+ent',
  éteindre: 'étein+s étein+s étein+t éteign+ons éteign+ez éteign+ent',
  voir: 'voi+s voi+s voi+t voy+ons voy+ez voi+ent',
  courir: 'cour+s cour+s cour+t cour+ons cour+ez cour+ent',
  rire: 'ri+s ri+s ri+t ri+ons ri+ez ri+ent',
  asseoir: 'assied+s assied+s assied assey+ons assey+ez assey+ent',
  lire: 'li+s li+s li+t lis+ons lis+ez lis+ent',
  connaître: 'connai+s connai+s connaî+t connaiss+ons connaiss+ez connaiss+ent',
  savoir: 'sai+s sai+s sai+t sav+ons sav+ez sav+ent',
  suivre: 'sui+s sui+s sui+t suiv+ons suiv+ez suiv+ent',
  dire: 'di+s di+s di+t dis+ons dit+es dis+ent',
}
const prefixes: Record<string, [prefix: string, model: string]> = {
  revenir: ['re', 'venir'], devenir: ['de', 'venir'],
  apprendre: ['ap', 'prendre'], comprendre: ['com', 'prendre'],
  permettre: ['per', 'mettre'], remettre: ['re', 'mettre'],
  sourire: ['sou', 'rire'], décrire: ['dé', 'écrire'], inscrire: ['ins', 'écrire'],
}
const wholeForms: Record<string, string> = { falloir: 'faut', pleuvoir: 'pleut', neiger: 'neige' }
export const people = ['je', 'tu', 'il / elle', 'nous', 'vous', 'ils / elles'] as const
const reflexives = ['me', 'te', 'se', 'nous', 'vous', 'se']
const elides = (form: string) => /^[aàâäeéèêëiîïoôöuùûüyhœ]/i.test(form)
export type Form = { subject: string; pronoun: string; stem: string; ending: string; full: string }
const details: Partial<Record<string, string>> = {
  être: 'Learn the six forms as whole words. They do not share a stable stem.',
  avoir: 'Notice the contrast between ai, as, a and the plural forms avons, avez, ont.',
  venir: 'Three stems: vien- for the singular, ven- for nous / vous, and vienn- for ils / elles.',
  prendre: 'The singular uses prend-, nous / vous use pren-, and ils / elles use prenn-.',
  épeler: 'Traditional forms use épell- in the singular and third-person plural. The rectified forms j’épèle, tu épèles, il épèle and ils épèlent are also accepted.',
  payer: 'Paie, paies and paient are shown here. Paye, payes and payent are also accepted.',
  balayer: 'Balaie, balaies and balaient are shown here. Balaye, balayes and balayent are also accepted.',
  "s'asseoir": 'This table uses assieds, asseyons and asseyent. The forms assois, assois, assoit, assoyons, assoyez and assoient are also accepted with the matching reflexive pronouns.',
  pleuvoir: 'In its everyday weather sense, use only il pleut.',
  ouvrir: 'A third-group verb with present endings that look like regular -er endings.',
}
const rule: Record<Pattern, string> = {
  er: 'Keep the infinitive stem and add -e, -es, -e, -ons, -ez or -ent.',
  ir: 'Use -is, -is, -it in the singular and -issons, -issez, -issent in the plural.',
  re: 'Use -s, -s, no ending, -ons, -ez and -ent.',
  ger: 'Keep an extra e before -ons so the g keeps its soft sound.',
  cer: 'Change c to ç before -ons to keep the soft c sound.',
  grave: 'The singular and third-person plural use a grave accent on the stem. Nous and vous keep the infinitive stem.',
  double: 'Double the stem’s final consonant in the singular and third-person plural. Nous and vous keep the infinitive stem.',
  yer: 'Change y to i in the singular and third-person plural. Keep y with nous and vous.',
  payer: 'The singular and third-person plural can use i or y. Nous and vous keep y.',
  irregular: 'Compare je, nous and ils to notice which stems and endings repeat.',
  impersonal: 'Use the third-person singular with impersonal il.',
}
function makeForms(base: string, pattern: Pattern, reflexive: boolean): (Form | null)[] {
  const cells = pattern === 'irregular' ? (irregular[base] ?? (() => {
    const [prefix, model] = prefixes[base]
    return irregular[model].split(' ').map(cell =>
      prefix + (base === 'décrire' || base === 'inscrire' ? cell.replace(/^é/, '') : cell)
    ).join(' ')
  })()).split(' ') : []
  return people.map((person, i) => {
    if (pattern === 'impersonal' && i !== 2) return null
    let stem = base.slice(0, -2)
    const strong = i < 3 || i === 5
    if (pattern === 'ger' && i === 3) stem += 'e'
    if (pattern === 'cer' && i === 3) stem = stem.slice(0, -1) + 'ç'
    if (pattern === 'grave' && strong) stem = stem.replace(/[eé](?=[^eé]*$)/, 'è')
    if (pattern === 'double' && strong) stem += stem.at(-1)
    if ((pattern === 'yer' || pattern === 'payer') && strong) stem = stem.slice(0, -1) + 'i'
    let ending = regularEndings[pattern === 'ir' || pattern === 're' ? pattern : 'er'][i]
    if (pattern === 'irregular') [stem, ending = ''] = cells[i].split('+')
    if (pattern === 'impersonal') [stem, ending] = [wholeForms[base], '']
    let subject: string = pattern === 'impersonal' ? 'il' : person
    const pronoun = reflexive
      ? (i < 3 || i === 5) && elides(stem) ? reflexives[i][0] + '’' : reflexives[i] + ' '
      : ''
    if (!reflexive && i === 0 && elides(stem)) subject = 'j’'
    const full = subject + (subject.endsWith('’') ? '' : ' ') + pronoun + stem + ending
    return { subject, pronoun, stem, ending, full }
  })
}

export const families = [
  { id: 'er', title: 'Regular -ER', zh: '規則 -ER', members: ['parler','aimer','travailler'], note: 'One stable stem, six reusable endings. Compare parl-, aim- and travaill-.' },
  { id: 'ir', title: 'Regular -IR', zh: '規則 -IR', members: ['finir','choisir','remplir','réfléchir'], note: 'Look for -iss- in the plural. This is the second-group pattern, shared by these -IR verbs.' },
  { id: 're', title: 'Regular -RE pattern', zh: '常見 -RE 規律', members: ['attendre','répondre','perdre','entendre'], note: 'A predictable pattern within the third group. The third-person singular has no added ending.' },
  { id: 'modals', title: 'Modal verbs', zh: '情態動詞', members: ['pouvoir','vouloir','devoir'], note: 'Pouvoir expresses ability or permission, vouloir desire, and devoir obligation. All three can precede an infinitive.' },
  { id: 'venir', title: 'Venir family', zh: 'venir 家族', members: ['venir','revenir','devenir'], note: 'Track the three stems vien-, ven- and vienn-. The prefix stays in place.' },
  { id: 'prendre', title: 'Prendre family', zh: 'prendre 家族', members: ['prendre','apprendre','comprendre'], note: 'Compare prend-, pren- and prenn-. The same changes repeat in the prefixed verbs.' },
  { id: 'mettre', title: 'Mettre family', zh: 'mettre 家族', members: ['mettre','permettre','remettre'], note: 'Use met- in the singular and mett- in the plural, keeping the prefix where present.' },
  { id: 'spelling', title: 'Spelling-change -ER', zh: '拼字變化', members: ['manger','commencer','acheter','appeler','payer'], note: 'The familiar -ER endings stay in place. The stem spelling preserves a sound or marks a vowel change.' },
  { id: 'reflexive', title: 'Reflexive verbs', zh: '反身動詞', members: ['se lever','se réveiller','se coucher'], note: 'Match the reflexive pronoun to the subject: me, te, se, nous, vous, se. Before a vowel sound, use m’, t’ or s’.' },
  { id: 'irregular', title: 'Essential irregulars', zh: '常見不規則', members: ['être','avoir','aller','faire','voir','savoir','dire'], note: 'Compare the complete forms, then use je, nous and ils as memory anchors.' },
]
export const contrasts = [
  { id: 'knowledge', title: 'Knowing', zh: '知道與熟悉', members: ['savoir','connaître'], note: 'Savoir takes a fact or an infinitive (Tu sais nager). Connaître takes someone or something familiar (Je connais cette ville).' },
  { id: 'sight', title: 'Seeing & watching', zh: '看見與觀看', members: ['voir','regarder'], note: 'Voir is perceiving by sight (Je vois la mer). Regarder is directing your attention (Je regarde un film).' },
  { id: 'leaving', title: 'Leaving & going out', zh: '出發與走出', members: ['partir','sortir'], note: 'Partir emphasizes departure (Nous partons à huit heures). Sortir emphasizes going out of a place (Je sors du métro).' },
  { id: 'sound', title: 'Listening & hearing', zh: '聆聽與聽見', members: ['écouter','entendre'], note: 'Écouter is intentional (Elle écoute un podcast). Entendre is perceiving sound (J’entends la pluie).' },
]

export const verbs = Object.entries(entries).flatMap(([category, list]) => list.map(
  ([infinitive, translation_zh, translation_en, example, exampleZh, exampleEn, usage, explicitPattern]) => {
    const pattern = explicitPattern ?? 'er'
    const base = infinitive.replace(/^(se |s')/, '')
    const reflexive = base !== infinitive
    const extension = category === 'extension'
    const group = pattern === 'ir' ? 2 : pattern === 'irregular' || pattern === 're' || (pattern === 'impersonal' && base !== 'neiger') ? 3 : 1
    const regularity = pattern === 'irregular' || (pattern === 'impersonal' && group === 3)
      ? 'irregular' as const : ['er', 'ir', 're', 'impersonal'].includes(pattern) ? 'regular' as const : 'spelling change' as const
    const tags = [`-${base.slice(-2).toUpperCase()}`, ...(reflexive ? ['Reflexive'] : []), ...(pattern === 'impersonal' ? ['Impersonal'] : [])]
    const relatedVerbs = [...new Set([...families, ...contrasts].filter(f => f.members.includes(infinitive)).flatMap(f => f.members))].filter(id => id !== infinitive)
    return {
      infinitive, translation_zh, translation_en, example, exampleZh, exampleEn, usage,
      group, regularity, pattern, extension, tags, relatedVerbs,
      categories: extension ? [] : [category as Category],
      frequencyLevel: category === 'essentials' ? 'essential' : extension ? 'extension' : 'common',
      conjugations: { present: makeForms(base, pattern, reflexive) },
      patternNote: details[infinitive] ?? rule[pattern],
    }
  },
))
export type Verb = typeof verbs[number]
export const coreVerbs = verbs.filter(verb => !verb.extension)
export const verbById = new Map(verbs.map(verb => [verb.infinitive, verb]))
export const normalize = (value: string) => value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replaceAll('’', "'").trim()
export const matches = (verb: Verb, query: string) =>
  [verb.infinitive, verb.translation_zh, verb.translation_en].some(value => normalize(value).includes(normalize(query)))
