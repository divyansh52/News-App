import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Electrek",
      },
      author: "Fred Lambert",
      title:
        "Tesla pushes new software update to improve Model S suspension, Autopark, and more",
      description:
        "Tesla has started pushing a new software update to its fleet of Model S electric sedans in order to improve suspension, Autopark, and more.\nSome of the improvements are expected to make it to other vehicles too.\n more…\nThe post Tesla pushes new software updat…",
      url: "https://electrek.co/2021/08/30/tesla-pushes-new-software-update-to-improve-model-s-suspension-autopark/",
      urlToImage:
        "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/09/Tesla-suspension-widget.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2021-08-30T07:01:56Z",
      content:
        "Tesla has started pushing a new software update to its fleet of Model S electric sedans in order to improve suspension, Autopark, and more.\r\nSome of the improvements are expected to make it to other … [+2006 chars]",
    },
    {
      source: {
        id: null,
        name: "Insurance Journal",
      },
      author: null,
      title: "Tesla Slams into Florida Highway Patrol Car on Autopilot",
      description:
        "A Tesla driving in autopilot mode slammed into a Florida Highway Patrol cruiser on an interstate near downtown Orlando and narrowly missed its driver, who had pulled over to assist a disabled vehicle. Earlier this month, the U.S. government opened …",
      url: "https://www.insurancejournal.com/news/southeast/2021/08/30/629321.htm",
      urlToImage: null,
      publishedAt: "2021-08-30T06:46:01Z",
      content:
        "A Tesla driving in autopilot mode slammed into a Florida Highway Patrol cruiser on an interstate near downtown Orlando and narrowly missed its driver, who had pulled over to assist a disabled vehicle… [+2324 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Alex Smith",
      title: "Should You Be Tempted To ‘Sell’ ACV Auctions (ACVA) Stock?",
      description:
        "Baron Opportunity Fund recently published its second-quarter commentary – a copy of which can be downloaded here. During the second quarter of 2021, the...",
      url: "https://finance.yahoo.com/news/tempted-sell-acv-auctions-acva-062758459.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/es4yQLYSRnt6UkatLyP96w--~B/aD0yMjg7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/d5eabfc9ea1bc4d959c731e7bec83b2b",
      publishedAt: "2021-08-30T06:27:58Z",
      content:
        "Baron Opportunity Fund recently published its second-quarter commentary a copy of which can be downloaded here. During the second quarter of 2021, the Baron Opportunity Fund returned 10.14% (institut… [+2735 chars]",
    },
    {
      source: {
        id: null,
        name: "Itc.ua",
      },
      author: "Владимир Скрипин",
      title:
        "Rivian собирается выйти на биржу в этом году и рассчитывает на оценку в 70-80 миллиардов долларов. Илон Маск вспомнил о «пузыре доткомов»",
      description:
        "Производитель электропикапов Rivian, финансируемый Amazon и Ford, на днях подал в комиссию по ценным бумагам США заявку на первичное публичное размещение акций (IPO). Причем Rivian будет проводить IPO традиционным способом, а путем слияния со SPAC-компанией, …",
      url: "https://itc.ua/news/rivian-sobiraetsya-vyjti-na-birzhu-v-etom-godu-i-rasschityvaet-na-oczenku-v-70-80-milliardov-dollarov-ilon-mask-vspomnil-o-puzyre-dotkomov/",
      urlToImage:
        "https://i1.wp.com/itc.ua/wp-content/uploads/2021/08/rivian_r1t_2.0.jpg",
      publishedAt: "2021-08-30T06:25:03Z",
      content:
        "Rivian, Amazon Ford,     (IPO). Rivian IPO , SPAC-, .\r\n . . , Bloomberg , Rivian   $70-80 . $50 , Bloomberg .   CrunchBase, Rivian $10,7 .\r\n Rivian  $2,5 .\r\n Tesla « » ( NASDAQ Composite 1996-2000 . … [+314 chars]",
    },
    {
      source: {
        id: null,
        name: "Politiken.dk",
      },
      author: null,
      title:
        "Den elektriske bilrevolution skyller igennem Europa. Men Christiansborg står bomstille",
      description: "Bilparken skal køre fuldstændig­ på el.",
      url: "https://politiken.dk/debat/art8345559/Den-elektriske-bilrevolution-skyller-igennem-Europa.-Men-Christiansborg-st%C3%A5r-bomstille",
      urlToImage:
        "https://politiken.dk/incoming/img8345750.slk27y/ALTERNATES/p16x9_960/Title%20mangler",
      publishedAt: "2021-08-30T06:16:49Z",
      content:
        "Fire milliarder kroner. Så mange penge går statskassen glip af alene i år, fordi antallet af grønne biler stiger eksplosivt, og et flertal på Christiansborg for nylig gav en klækkelig skatterabat på … [+1499 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: null,
      title:
        "एलन मस्क की Tesla के साथ नाम जुड़ते ही रॉकेट बने इन 3 कंपनियों के शेयर",
      description:
        "इलेक्ट्रिक कार कंपनी टेस्ला (Tesla) ने भारतीय बाजार में उतरने की तैयारी कर ली है। कारों की क्रिटिकल पार्ट्स की सप्लाई के लिए टेस्ला की 3 भारतीय कंपनियों से बातचीत चल रही है। इनमें Sandhar Technologies भी शामिल है। इस खबर से कंपनी के शेयरों में 13 फीसदी तक उछा…",
      url: "https://navbharattimes.indiatimes.com/business/share-market/share-news/shares-of-sandhar-tech-jumps-13-percent-as-report-suggests-company-supplying-auto-parts-to-tesla/articleshow/85758671.cms",
      urlToImage:
        "https://navbharattimes.indiatimes.com/photo/msid-85758671,imgsize-11402/pic.jpg",
      publishedAt: "2021-08-30T06:06:15Z",
      content:
        "<ul><li></li><li> 3 </li><li>Sandhar Technologies 13 </li><li> 8 </li></ul>\r\n(Tesla) 3 Sandhar Technologies Sandhar Technologies (BSE) 13 294.30 \r\n(Elon Musk) Sandhar Technologies Sona BLW Precision … [+249 chars]",
    },
    {
      source: {
        id: null,
        name: "Sputnik International",
      },
      author: "Sputnik Türkiye",
      title: "Elon Musk, Uzay İstasyonu'na karınca ve avokado taşıdı",
      description:
        "Tesla CEO'su Elon Musk'ın sahip olduğu SpaceX firması, Uluslararası Uzay İstasyonu'na avokado, limon ve dondurma gönderdi.",
      url: "https://tr.sputniknews.com/20210830/elon-musk-uzay-istasyonuna-karinca-ve-avokado-tasidi-1048437464.html",
      urlToImage:
        "https://cdntr1.img.sputniknews.com/images/sharing/article/tur/1048437464.jpg?10481869981630303182",
      publishedAt: "2021-08-30T06:00:36Z",
      content:
        "Kayt ilemi baaryla tamamlanmtr!Lütfen 'a gönderilen e-postadaki balantya tklayn\r\nRusya, ABD, Avrupa ve Ortadou bata olmak üzere dünyann dört bir yanndan son dakika haberleri, analizler ve özel dosyal… [+1265 chars]",
    },
    {
      source: {
        id: null,
        name: "Wolnemedia.net",
      },
      author: "Świadomość Związków",
      title: "Wmawianie, że ktoś jest incelem",
      description: "Feministki zaszczuwają niepotakujących im.",
      url: "https://wolnemedia.net/wmawianie-ze-ktos-jest-incelem/",
      urlToImage: null,
      publishedAt: "2021-08-30T05:57:16Z",
      content:
        "Liczba wywietle: 11\r\nModnym dzi jest wmawianie, e jeste incelem (czy, e kto nim jest – bez dowodów na to). Tej inwektywy uywa si, gdy mczyzna krytykuje jak kobiet, czy feminizm. Niewane czy susznie, … [+20238 chars]",
    },
    {
      source: {
        id: null,
        name: "EURACTIV",
      },
      author: "Kira Taylor",
      title:
        "‘Game-changer’ for geothermal energy as UK plant unlocks vast supply of lithium",
      description:
        "A geothermal power plant in the UK has discovered the highest concentration of lithium ever found in geothermal fluid, opening the door to a new business model for the renewable energy source.",
      url: "http://www.euractiv.com/section/energy/news/game-changer-for-geothermal-energy-as-uk-plant-unlocks-vast-supply-of-lithium/",
      urlToImage:
        "https://www.euractiv.com/wp-content/uploads/sites/2/2021/08/United-Downs-800x450.jpg",
      publishedAt: "2021-08-30T05:54:05Z",
      content:
        "A geothermal power plant in the UK has discovered the highest concentration of lithium ever found in geothermal fluid, opening the door to a new business model for the renewable energy source.\r\nThird… [+4574 chars]",
    },
    {
      source: {
        id: null,
        name: "N-tv.de",
      },
      author: "n-tv NACHRICHTEN",
      title: "Mit chinesischer Ausdauer: MG kehrt nach Europa zurück",
      description:
        "Eine totgesagte Marke neu zu beleben, ist ein teures Abenteuer. Doch bei MG geht man das mit Elan an und sieht dem Neustart in Kerneuropa zuversichtlich entgegen. Elektrifizierte Fahrzeuge, gute Verarbeitung und niedrige Preise sollen es richten. Noch 2021 so…",
      url: "https://www.n-tv.de/auto/MG-kehrt-nach-Europa-zurueck-article22768994.html",
      urlToImage:
        "https://bilder1.n-tv.de/img/incoming/crop22769012/555132348-cImg_16_9-w1200/mgcyberster-02.jpg",
      publishedAt: "2021-08-30T05:53:58Z",
      content:
        "Eine totgesagte Marke neu zu beleben, ist ein teures Abenteuer. Doch bei MG geht man das mit Elan an und sieht dem Neustart in Kerneuropa zuversichtlich entgegen. Elektrifizierte Fahrzeuge, gute Vera… [+6140 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: null,
      title:
        "...तो क्या भगवान कृष्ण का है कोहिनूर? महाराजा रणजीत सिंह की वह वसीयत",
      description:
        "कई अमूल्य और प्राचीन कलाकृतियां सरकार के प्रयास से दूसरे देशों से वापस लौटी हैं लेकिन सबको इंतजार कोहिनूर हीरे का है। इसे भारत लाने की मांग काफी लंबे समय से चल रही है। जब इसे भारत लाया जाए तो इसे जगन्नाथ मंदिर को देने की बात की जा रही है।",
      url: "https://navbharattimes.indiatimes.com/india/demand-to-place-kohinoor-in-jagannath-temple-bring-back-from-britain-maharaja-ranjit-singh/articleshow/85758173.cms",
      urlToImage:
        "https://navbharattimes.indiatimes.com/photo/msid-85758173,imgsize-73446/pic.jpg",
      publishedAt: "2021-08-30T05:53:47Z",
      content:
        "Curated by\r\n | . | Updated: Aug 30, 2021, 11:48 AM\r\nNavbharat Times News App: - , , , , -... NBT Web Title : demand to place kohinoor in jagannath temple bring back from britain maharaja ranjit singh… [+380 chars]",
    },
    {
      source: {
        id: null,
        name: "EURACTIV",
      },
      author: "Muhammed Magassy.",
      title: "Why Norway’s efforts to curb deforestation abroad is a PR stunt",
      description:
        "Norway’s investment of billions in fighting overseas deforestation follows the West’s hypocritical relationship with climate change, once again shifting the blame on developing nations whilst diverting attention away from the West’s culpability in environment…",
      url: "http://www.euractiv.com/section/climate-environment/opinion/why-norways-efforts-to-curb-deforestation-abroad-is-a-pr-stunt/",
      urlToImage:
        "https://www.euractiv.com/wp-content/uploads/sites/2/2021/08/Amazon-rainforest-800x450.jpg",
      publishedAt: "2021-08-30T05:48:08Z",
      content:
        "Norways investment of billions in fighting overseas deforestation follows the Wests hypocritical relationship with climate change, once again shifting the blame on developing nations whilst diverting… [+5829 chars]",
    },
    {
      source: {
        id: null,
        name: "Nyteknik.se",
      },
      author: "Henrik Samuelsson/TT",
      title: "Nu tar Volvos elbilskollega Zeekr in nytt kapital",
      description:
        "Volvo-ägaren Geelys nya elbilsmärke Zeekr har för första gången tagit in externt kapital.",
      url: "https://www.nyteknik.se/elbilar/nu-tar-volvos-elbilskollega-zeekr-in-nytt-kapital-7019835",
      urlToImage:
        "https://medier.publicwebsites.se/media/Nyteknik/3m1t7v-zeekr.jpg/binary/original/zeekr.jpg",
      publishedAt: "2021-08-30T05:45:00Z",
      content:
        "Volvo-ägaren Geelys nya elbilsmärke Zeekr har för första gången tagit in externt kapital.Inför en expansion har bland andra batteritillverkaren Catl och underhållningsbolaget Bilibili gått in med sam… [+851 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Pawan Nahar",
      title: "Talks with Tesla sparks rally in 3 auto stocks",
      description:
        "Global brokerage Nomura is bullish on Sona BLW Precision Forgings, also known as Sona Comstar. The scrip is trading about 75 per cent higher than its issue price of Rs 291.",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/these-3-auto-companies-on-a-roll-after-reported-talks-with-tesla/articleshow/85757851.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-85758191,width-1070,height-580,imgsize-292152,overlay-etmarkets/photo.jpg",
      publishedAt: "2021-08-30T05:38:15Z",
      content:
        "New Delhi: The reported talks of US electric vehicle maker Tesla with at least three Indian suppliers as part of its plan to enter the Indian market has sparked a rally in the shares of those auto co… [+1871 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Alex Smith",
      title: "Should You Be Tempted To ‘Sell’ BridgeBio Pharma (BBIO) Stock?",
      description:
        "Baron Opportunity Fund recently published its second-quarter commentary – a copy of which can be downloaded here. During the second quarter of 2021, the...",
      url: "https://finance.yahoo.com/news/tempted-sell-bridgebio-pharma-bbio-053600437.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/Vf0EAe555RrOOLvWFG8SQQ--~B/aD0yNDA7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/5660264f0a3456099ef8b99ef9659699",
      publishedAt: "2021-08-30T05:36:00Z",
      content:
        "Baron Opportunity Fund recently published its second-quarter commentary a copy of which can be downloaded here. During the second quarter of 2021, the Baron Opportunity Fund returned 10.14% (institut… [+3126 chars]",
    },
    {
      source: {
        id: null,
        name: "Blogautomobile.fr",
      },
      author: "Jean-Baptiste Passieux",
      title: "Essai : Volvo XC40 Recharge Twin. Moi Lolita",
      description:
        "J’aime Volvo, j’aime les voitures électriques. Partant de là, je devrais être aux anges après mon essai du XC40 100% électrique… J’en ressors pourtant frustré. … \nL’article Essai : Volvo XC40 Recharge Twin. Moi Lolita est apparu en premier sur BlogAutomobile.",
      url: "https://blogautomobile.fr/essai-volvo-xc40-recharge-twin-moi-lolita-346060",
      urlToImage:
        "https://cdn.blogautomobile.fr/wp-content/uploads/2021/07/IMG_8000-scaled.jpg",
      publishedAt: "2021-08-30T05:34:00Z",
      content:
        "J’aime Volvo, j’aime les voitures électriques. Partant de là, je devrais être aux anges après mon essai du XC40 100% électrique… J’en ressors pourtant frustré. Explications.\r\n“Oh là là Jean-Baptiste … [+9572 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Rama Venkat",
      title:
        "Indian shares hit record highs on metals rally, dovish Fed prospects - Reuters India",
      description:
        "Indian shares hit record highs on Monday, boosted by automobile and metals' stocks, with sentiment broadly supported by Federal Reserve Chair Jerome Powell's signal that the U.S. central bank would remain patient in winding down its stimulus.",
      url: "https://www.reuters.com/world/india/indian-shares-hit-record-highs-metals-rally-dovish-fed-prospects-2021-08-30/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=50",
      publishedAt: "2021-08-30T05:33:00Z",
      content:
        "BENGALURU, Aug 30 (Reuters) - Indian shares hit record highs on Monday, boosted by automobile and metals' stocks, with sentiment broadly supported by Federal Reserve Chair Jerome Powell's signal that… [+1895 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo Australia",
      },
      author: "Lavender Baj",
      title: "Hyundai Is Recalling A Bunch Of EVs Over Battery Issues",
      description:
        "Hyundai Australia is recalling a slew of Kona and Ioniq electric vehicles over a battery issue that was first noticed...\nThe post Hyundai Is Recalling A Bunch Of EVs Over Battery Issues appeared first on Gizmodo Australia.\n\n  Related Stories\r\n<ul><li>Hurrican…",
      url: "https://www.gizmodo.com.au/2021/08/hyundai-ev-recall-kona-ioniq/",
      urlToImage:
        "https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/08/30/4A3FD731_ADB8_4484_848A_8340603372E2.0.jpeg?ar=16%3A9&auto=format&fit=crop&q=80&w=1280&nr=20",
      publishedAt: "2021-08-30T05:21:41Z",
      content:
        "Hyundai Australia is recalling a slew of Kona and Ioniq electric vehicles over a battery issue that was first noticed back in March 2021.\r\nA total of 615 Hyundai Konas and 208 Hyundai Ioniqs have bee… [+1959 chars]",
    },
    {
      source: {
        id: null,
        name: "EL PAÍS",
      },
      author: "Miguel Moreno Mendieta",
      title: "Duelo al sol de dos estrellas de Wall Street: Wood vs. Burry",
      description: "Su visión sobre Tesla o los tipos de interés es antagónica",
      url: "https://cincodias.elpais.com/cincodias/2021/08/27/fondos_y_planes/1630064421_046422.html",
      urlToImage:
        "https://d500.epimg.net/cincodias/imagenes/2021/08/27/fondos_y_planes/1630064421_046422_1630064765_rrss_normal.jpg",
      publishedAt: "2021-08-30T05:13:24Z",
      content:
        "El enfrentamiento entre Cathie Wood y Michael Burry ha sido la comidilla del verano en Wall Street. Son dos de los gestores de fondos más mediáticos del mundo y la disputa no ha quedado solo en palab… [+5353 chars]",
    },
    {
      source: {
        id: null,
        name: "Pythonlibrary.org",
      },
      author: "Mike",
      title: "PyDev of the Week: Joshua Ebner",
      description:
        "This week we welcome Joshua Ebner (@Josh_Ebner) as our PyDev of the Week. Joshua trains people in data science at Sharp Sight. Let’s take some time to get to know Joshua better! Can you tell us a little about yourself (hobbies, education, etc): Professionally…",
      url: "https://www.blog.pythonlibrary.org/2021/08/30/pydev-of-the-week-joshua-ebner/",
      urlToImage: null,
      publishedAt: "2021-08-30T05:05:16Z",
      content:
        "This week we welcome Joshua Ebner (@Josh_Ebner) as our PyDev of the Week. Joshua trains people in data science at Sharp Sight. \r\nLet’s take some time to get to know Joshua better!\r\nCan you tell us a … [+11694 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h1>News Monkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  // if imageToUrl is null show a particular image else show the specific image
                  imageUrl={
                    element.urlToImage == null
                      ? "https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/08/30/4A3FD731_ADB8_4484_848A_8340603372E2.0.jpeg?ar=16%3A9&auto=format&fit=crop&q=80&w=1280&nr=20"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
