"use strict";

// Timezones

// prettier-ignore
const rawTimezonesStr =
  "Africa/Abidjan, Africa/Accra, Africa/Addis_Ababa, Africa/Algiers, Africa/Asmara, Africa/Asmera, Africa/Bamako, Africa/Bangui, Africa/Banjul, Africa/Bissau, Africa/Blantyre, Africa/Brazzaville, Africa/Bujumbura, Africa/Cairo, Africa/Casablanca, Africa/Ceuta, Africa/Conakry, Africa/Dakar, Africa/Dar_es_Salaam, Africa/Djibouti, Africa/Douala, Africa/El_Aaiun, Africa/Freetown, Africa/Gaborone, Africa/Harare, Africa/Johannesburg, Africa/Juba, Africa/Kampala, Africa/Khartoum, Africa/Kigali, Africa/Kinshasa, Africa/Lagos, Africa/Libreville, Africa/Lome, Africa/Luanda, Africa/Lubumbashi, Africa/Lusaka, Africa/Malabo, Africa/Maputo, Africa/Maseru, Africa/Mbabane, Africa/Mogadishu, Africa/Monrovia, Africa/Nairobi, Africa/Ndjamena, Africa/Niamey, Africa/Nouakchott, Africa/Ouagadougou, Africa/Porto-Novo, Africa/Sao_Tome, Africa/Timbuktu, Africa/Tripoli, Africa/Tunis, Africa/Windhoek, America/Adak, America/Anchorage, America/Anguilla, America/Antigua, America/Araguaina, America/Argentina/Buenos_Aires, America/Argentina/Catamarca, America/Argentina/ComodRivadavia, America/Argentina/Cordoba, America/Argentina/Jujuy, America/Argentina/La_Rioja, America/Argentina/Mendoza, America/Argentina/Rio_Gallegos, America/Argentina/Salta, America/Argentina/San_Juan, America/Argentina/San_Luis, America/Argentina/Tucuman, America/Argentina/Ushuaia, America/Aruba, America/Asuncion, America/Atikokan, America/Atka, America/Bahia, America/Bahia_Banderas, America/Barbados, America/Belem, America/Belize, America/Blanc-Sablon, America/Boa_Vista, America/Bogota, America/Boise, America/Buenos_Aires, America/Cambridge_Bay, America/Campo_Grande, America/Cancun, America/Caracas, America/Catamarca, America/Cayenne, America/Cayman, America/Chicago, America/Chihuahua, America/Coral_Harbour, America/Cordoba, America/Costa_Rica, America/Creston, America/Cuiaba, America/Curacao, America/Danmarkshavn, America/Dawson, America/Dawson_Creek, America/Denver, America/Detroit, America/Dominica, America/Edmonton, America/Eirunepe, America/El_Salvador, America/Ensenada, America/Fort_Nelson, America/Fort_Wayne, America/Fortaleza, America/Glace_Bay, America/Godthab, America/Goose_Bay, America/Grand_Turk, America/Grenada, America/Guadeloupe, America/Guatemala, America/Guayaquil, America/Guyana, America/Halifax, America/Havana, America/Hermosillo, America/Indiana/Indianapolis, America/Indiana/Knox, America/Indiana/Marengo, America/Indiana/Petersburg, America/Indiana/Tell_City, America/Indiana/Vevay, America/Indiana/Vincennes, America/Indiana/Winamac, America/Indianapolis, America/Inuvik, America/Iqaluit, America/Jamaica, America/Jujuy, America/Juneau, America/Kentucky/Louisville, America/Kentucky/Monticello, America/Knox_IN, America/Kralendijk, America/La_Paz, America/Lima, America/Los_Angeles, America/Louisville, America/Lower_Princes, America/Maceio, America/Managua, America/Manaus, America/Marigot, America/Martinique, America/Matamoros, America/Mazatlan, America/Mendoza, America/Menominee, America/Merida, America/Metlakatla, America/Mexico_City, America/Miquelon, America/Moncton, America/Monterrey, America/Montevideo, America/Montreal, America/Montserrat, America/Nassau, America/New_York, America/Nipigon, America/Nome, America/Noronha, America/North_Dakota/Beulah, America/North_Dakota/Center, America/North_Dakota/New_Salem, America/Nuuk, America/Ojinaga, America/Panama, America/Pangnirtung, America/Paramaribo, America/Phoenix, America/Port-au-Prince, America/Port_of_Spain, America/Porto_Acre, America/Porto_Velho, America/Puerto_Rico, America/Punta_Arenas, America/Rainy_River, America/Rankin_Inlet, America/Recife, America/Regina, America/Resolute, America/Rio_Branco, America/Rosario, America/Santa_Isabel, America/Santarem, America/Santiago, America/Santo_Domingo, America/Sao_Paulo, America/Scoresbysund, America/Shiprock, America/Sitka, America/St_Barthelemy, America/St_Johns, America/St_Kitts, America/St_Lucia, America/St_Thomas, America/St_Vincent, America/Swift_Current, America/Tegucigalpa, America/Thule, America/Thunder_Bay, America/Tijuana, America/Toronto, America/Tortola, America/Vancouver, America/Virgin, America/Whitehorse, America/Winnipeg, America/Yakutat, America/Yellowknife, Antarctica/Casey, Antarctica/Davis, Antarctica/DumontDUrville, Antarctica/Macquarie, Antarctica/Mawson, Antarctica/McMurdo, Antarctica/Palmer, Antarctica/Rothera, Antarctica/South_Pole, Antarctica/Syowa, Antarctica/Troll, Antarctica/Vostok, Arctic/Longyearbyen, Asia/Aden, Asia/Almaty, Asia/Amman, Asia/Anadyr, Asia/Aqtau, Asia/Aqtobe, Asia/Ashgabat, Asia/Ashkhabad, Asia/Atyrau, Asia/Baghdad, Asia/Bahrain, Asia/Baku, Asia/Bangkok, Asia/Barnaul, Asia/Beirut, Asia/Bishkek, Asia/Brunei, Asia/Calcutta, Asia/Chita, Asia/Choibalsan, Asia/Chongqing, Asia/Chungking, Asia/Colombo, Asia/Dacca, Asia/Damascus, Asia/Dhaka, Asia/Dili, Asia/Dubai, Asia/Dushanbe, Asia/Famagusta, Asia/Gaza, Asia/Harbin, Asia/Hebron, Asia/Ho_Chi_Minh, Asia/Hong_Kong, Asia/Hovd, Asia/Irkutsk, Asia/Istanbul, Asia/Jakarta, Asia/Jayapura, Asia/Jerusalem, Asia/Kabul, Asia/Kamchatka, Asia/Karachi, Asia/Kashgar, Asia/Kathmandu, Asia/Katmandu, Asia/Khandyga, Asia/Kolkata, Asia/Krasnoyarsk, Asia/Kuala_Lumpur, Asia/Kuching, Asia/Kuwait, Asia/Macao, Asia/Macau, Asia/Magadan, Asia/Makassar, Asia/Manila, Asia/Muscat, Asia/Nicosia, Asia/Novokuznetsk, Asia/Novosibirsk, Asia/Omsk, Asia/Oral, Asia/Phnom_Penh, Asia/Pontianak, Asia/Pyongyang, Asia/Qatar, Asia/Qostanay, Asia/Qyzylorda, Asia/Rangoon, Asia/Riyadh, Asia/Saigon, Asia/Sakhalin, Asia/Samarkand, Asia/Seoul, Asia/Shanghai, Asia/Singapore, Asia/Srednekolymsk, Asia/Taipei, Asia/Tashkent, Asia/Tbilisi, Asia/Tehran, Asia/Tel_Aviv, Asia/Thimbu, Asia/Thimphu, Asia/Tokyo, Asia/Tomsk, Asia/Ujung_Pandang, Asia/Ulaanbaatar, Asia/Ulan_Bator, Asia/Urumqi, Asia/Ust-Nera, Asia/Vientiane, Asia/Vladivostok, Asia/Yakutsk, Asia/Yangon, Asia/Yekaterinburg, Asia/Yerevan, Atlantic/Azores, Atlantic/Bermuda, Atlantic/Canary, Atlantic/Cape_Verde, Atlantic/Faeroe, Atlantic/Faroe, Atlantic/Jan_Mayen, Atlantic/Madeira, Atlantic/Reykjavik, Atlantic/South_Georgia, Atlantic/St_Helena, Atlantic/Stanley, Australia/ACT, Australia/Adelaide, Australia/Brisbane, Australia/Broken_Hill, Australia/Canberra, Australia/Currie, Australia/Darwin, Australia/Eucla, Australia/Hobart, Australia/LHI, Australia/Lindeman, Australia/Lord_Howe, Australia/Melbourne, Australia/North, Australia/NSW, Australia/Perth, Australia/Queensland, Australia/South, Australia/Sydney, Australia/Tasmania, Australia/Victoria, Australia/West, Australia/Yancowinna, Brazil/Acre, Brazil/DeNoronha, Brazil/East, Brazil/West, Canada/Atlantic, Canada/Central, Canada/Eastern, Canada/Mountain, Canada/Newfoundland, Canada/Pacific, Canada/Saskatchewan, Canada/Yukon, CET, Chile/Continental, Chile/EasterIsland, CST6CDT, Cuba, EET, Egypt, Eire, EST, EST5EDT, Etc/GMT, Etc/GMT+0, Etc/GMT+1, Etc/GMT+10, Etc/GMT+11, Etc/GMT+12, Etc/GMT+2, Etc/GMT+3, Etc/GMT+4, Etc/GMT+5, Etc/GMT+6, Etc/GMT+7, Etc/GMT+8, Etc/GMT+9, Etc/GMT-0, Etc/GMT-1, Etc/GMT-10, Etc/GMT-11, Etc/GMT-12, Etc/GMT-13, Etc/GMT-14, Etc/GMT-2, Etc/GMT-3, Etc/GMT-4, Etc/GMT-5, Etc/GMT-6, Etc/GMT-7, Etc/GMT-8, Etc/GMT-9, Etc/GMT0, Etc/Greenwich, Etc/UCT, Etc/Universal, Etc/UTC, Etc/Zulu, Europe/Amsterdam, Europe/Andorra, Europe/Astrakhan, Europe/Athens, Europe/Belfast, Europe/Belgrade, Europe/Berlin, Europe/Bratislava, Europe/Brussels, Europe/Bucharest, Europe/Budapest, Europe/Busingen, Europe/Chisinau, Europe/Copenhagen, Europe/Dublin, Europe/Gibraltar, Europe/Guernsey, Europe/Helsinki, Europe/Isle_of_Man, Europe/Istanbul, Europe/Jersey, Europe/Kaliningrad, Europe/Kiev, Europe/Kirov, Europe/Kyiv, Europe/Lisbon, Europe/Ljubljana, Europe/London, Europe/Luxembourg, Europe/Madrid, Europe/Malta, Europe/Mariehamn, Europe/Minsk, Europe/Monaco, Europe/Moscow, Europe/Nicosia, Europe/Oslo, Europe/Paris, Europe/Podgorica, Europe/Prague, Europe/Riga, Europe/Rome, Europe/Samara, Europe/San_Marino, Europe/Sarajevo, Europe/Saratov, Europe/Simferopol, Europe/Skopje, Europe/Sofia, Europe/Stockholm, Europe/Tallinn, Europe/Tirane, Europe/Tiraspol, Europe/Ulyanovsk, Europe/Uzhgorod, Europe/Vaduz, Europe/Vatican, Europe/Vienna, Europe/Vilnius, Europe/Volgograd, Europe/Warsaw, Europe/Zagreb, Europe/Zaporozhye, Europe/Zurich, Factory, GB, GB-Eire, GMT, GMT+0, GMT-0, GMT0, Greenwich, Hongkong, HST, Iceland, Indian/Antananarivo, Indian/Chagos, Indian/Christmas, Indian/Cocos, Indian/Comoro, Indian/Kerguelen, Indian/Mahe, Indian/Maldives, Indian/Mauritius, Indian/Mayotte, Indian/Reunion, Iran, Israel, Jamaica, Japan, Kwajalein, Libya, MET, Mexico/BajaNorte, Mexico/BajaSur, Mexico/General, MST, MST7MDT, Navajo, NZ, NZ-CHAT, Pacific/Apia, Pacific/Auckland, Pacific/Bougainville, Pacific/Chatham, Pacific/Chuuk, Pacific/Easter, Pacific/Efate, Pacific/Enderbury, Pacific/Fakaofo, Pacific/Fiji, Pacific/Funafuti, Pacific/Galapagos, Pacific/Gambier, Pacific/Guadalcanal, Pacific/Guam, Pacific/Honolulu, Pacific/Johnston, Pacific/Kanton, Pacific/Kiritimati, Pacific/Kosrae, Pacific/Kwajalein, Pacific/Majuro, Pacific/Marquesas, Pacific/Midway, Pacific/Nauru, Pacific/Niue, Pacific/Norfolk, Pacific/Noumea, Pacific/Pago_Pago, Pacific/Palau, Pacific/Pitcairn, Pacific/Pohnpei, Pacific/Ponape, Pacific/Port_Moresby, Pacific/Rarotonga, Pacific/Saipan, Pacific/Samoa, Pacific/Tahiti, Pacific/Tarawa, Pacific/Tongatapu, Pacific/Truk, Pacific/Wake, Pacific/Wallis, Pacific/Yap, Poland, Portugal, PRC, PST8PDT, ROC, ROK, Singapore, Turkey, UCT, Universal, US/Alaska, US/Aleutian, US/Arizona, US/Central, US/East-Indiana, US/Eastern, US/Hawaii, US/Indiana-Starke, US/Michigan, US/Mountain, US/Pacific, US/Samoa, UTC, W-SU, WET, Zulu";

// Themes

const themes = [
  {
    clock: "clock-1",
    bgColor: "#F9F5DA",
    handsColor: "#343434",
    textColor: "#ECA168",
    creditColor: "#000",
  },

  {
    clock: "clock-2",
    bgColor: "#ffcce0",
    handsColor: "#ce167a",
    textColor: "#d64a77",
    creditColor: "#000",
  },

  {
    clock: "clock-3",
    bgColor: "#fff5a4",
    handsColor: "#c60b44",
    textColor: "#505050",
    creditColor: "#000",
  },

  {
    clock: "clock-4",
    bgColor: "#a1ffdd",
    handsColor: "#0bc6a9",
    textColor: "#0AB37A",
    creditColor: "#000",
  },
];

// ----------------------------------------------------------------------------
// Selecting DOM Elements

const overlay = document.querySelector(".overlay");

// Clock
const clock = document.querySelector(".clock");

// Clock Hands
const clockInners = clock.children;
const clockHand = document.querySelectorAll(".clock__hand");
const secondHand = document.querySelector(".clock__hand--second");
const minuteHand = document.querySelector(".clock__hand--minute");
const hourHand = document.querySelector(".clock__hand--hour");

// Clock Time
const timeTextsWrapper = document.querySelector(".time");
const hourText = document.querySelector(".time__duration--hour");
const minuteText = document.querySelector(".time__duration--minute");
const secondText = document.querySelector(".time__duration--second");
const timePeriod = document.querySelector(".time__period");

//Icons
// Modify Icon
const modifyIcon = document.querySelector(".modify-icon");
const modifyIconLine1 = document.querySelector(".modify-icon__line--1");
const modifyIconLine2 = document.querySelector(".modify-icon__line--2");
const modifyIconLine3 = document.querySelector(".modify-icon__line--3");

const globeIcon = document.querySelector(".globe-icon__wrapper");
const clockIcon = document.querySelector(".clock-icon__wrapper");

// Side Navigation
const sideNav = document.querySelector(".side-nav");
const sideNavContentContainer = document.querySelector(".side-nav__content-container");
const currentTimezoneHeaderText = document.querySelector(".side-nav__sub-header__title");
const currentTimezoneText = document.querySelector(".side-nav__current-timezone");
const revertToCurrentLocationTmz = document.querySelector(".side-nav__sub-header__revert-icon");
const closeIconSideNav = document.querySelector(".side-nav__close-icon");
let connectedButton;
let activeGreenDot;

//Footer
const footerCreditText = document.querySelector(".footer__credit");

// ----------------------------------------------------------------------------
// Variables
let imgCounter, iconCounter;
imgCounter = iconCounter = 0;
let currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Timezones
const rawTimezonesArr = rawTimezonesStr.split(", ");

let timezones = [];

// States
let isTimeShown = false;

// Initialization
document.body.style.backgroundColor = themes[0].bgColor;
timeTextsWrapper.style.color = `${themes[0].textColor}`;
footerCreditText.style.color = `${themes[0].creditColor}`;
currentTimezoneText.textContent = currentTimezone.replaceAll("_", " ");

// ----------------------------------------------------------------------------
// Functions

// Categorizing Timezones
const categorizeTmzs = function (tmzs) {
  // Retrieving the categories
  let categories = [...new Set(tmzs.filter(tmz => tmz.includes("/")).map(tmz => tmz.substring(0, tmz.indexOf("/"))))];
  // categories = [...categories, "Others"];

  // Distributing timezones to their respective categories
  categories.forEach(function (_, i) {
    let tmzsGrp = tmzs.filter(tmz => tmz.startsWith(`${categories[i]}`)).map(tmz => tmz.slice(tmz.indexOf("/") + 1));
    // if (categories[i] === "Others") tmzsGrp = tmzs.filter(tmz => !tmz.includes("/"));

    timezones.push({
      category: `${categories[i]}`,
      timezones: tmzsGrp,
    });
  });
};

categorizeTmzs(rawTimezonesArr);

// Creating Timezones In The Side Navigation
const createSideNavContent = function () {
  sideNavContentContainer.innerHTML = "";

  timezones.forEach(function (tmz) {
    const sideNavContent = `
      <div class="side-nav__content side-nav__content--${tmz.category.toLowerCase()}">
        <div class="side-nav__tab side-nav__tab--${tmz.category.toLowerCase()}" data-category="${tmz.category.toLowerCase()}">
          <h2 class="heading--secondary side-nav__tab__title">${tmz.category}</h2>
          <i class="bi bi-chevron-down side-nav__tab__arrow side-nav__tab__arrow--${tmz.category.toLowerCase()} "></i>
        </div>

        <div class="side-nav__tab__content side-nav__tab__content--${tmz.category.toLowerCase()} hidden">
          ${tmz.timezones
            .map(timezone => {
              return `<p class="side-nav__text side-nav__timezone side-nav__timezone--${timezone}" data-timezone = "${tmz.category}/${timezone}">${timezone.replaceAll("_", " ")}</p>`;
            })
            .join("")}
        </div>
      </div>
    `;

    sideNavContentContainer.insertAdjacentHTML("beforeend", sideNavContent);
  });
};

createSideNavContent();

let currentActiveTmzEl = sideNavContentContainer.querySelector(`.side-nav__timezone--${currentTimezone.slice(currentTimezone.indexOf("/") + 1)}`);
let currentActiveCategoryEl = currentActiveTmzEl.closest(".side-nav__content").querySelector(".side-nav__tab__title");
let notSameCategory = true;
let notSameTargetTmz = true;

// Adding Active Classes
const addActiveTmz = function (targetCategory, targetTmz) {
  const tabActiveHTML = `<span class="side-nav__tab__title--active">Connected</span>`;
  const tmzActiveHTML = `<span class="side-nav__timezone--active"></span>`;
  // Add new active classes to a target category only if the target category is a different category than the current
  if (notSameCategory) targetCategory.insertAdjacentHTML("beforeend", tabActiveHTML);
  // Add new active classes to a target tmz only if the target tmz is a different tmz than the current
  if (notSameTargetTmz) targetTmz.insertAdjacentHTML("beforeend", tmzActiveHTML);

  // Selecting the current active elements
  connectedButton = document.querySelector(".side-nav__tab__title--active");
  activeGreenDot = document.querySelector(".side-nav__timezone--active");
};

// Remove previously active classes
const removeActiveTmz = function (currentCategory, currentTmz) {
  // Remove previously actiive category class only if the target category is a different category than the current
  if (notSameCategory) currentCategory.removeChild(currentCategory.lastChild);

  // Remove previously active timzone class only if the target tmz is a different tmz than the current
  if (notSameTargetTmz) currentTmz.removeChild(currentTmz.lastChild);
};

// Modify active classes
const modifyActiveTmz = function (currentCategory, currentTmz, targetCategory, targetTmz) {
  // Only modify the active classes changes if the target category is different than the current active category
  if (currentCategory === targetCategory) {
    notSameCategory = false;
    // Do Not make changes if the target tmz is the same one as the current tmz
    currentTmz === targetTmz ? (notSameTargetTmz = false) : (notSameTargetTmz = true);
    removeActiveTmz(currentCategory, currentTmz);
    addActiveTmz(targetCategory, targetTmz);
  } else {
    notSameCategory = notSameTargetTmz = true;
    removeActiveTmz(currentCategory, currentTmz);
    addActiveTmz(targetCategory, targetTmz);
  }

  // Change the current active elements to the targeted new one
  currentActiveTmzEl = targetTmz;
  currentActiveCategoryEl = targetTmz.closest(".side-nav__content").querySelector(".side-nav__tab__title");
};

// Initiating current timezone based on current location
const initiateActiveTmz = function () {
  addActiveTmz(currentActiveCategoryEl, currentActiveTmzEl);
};

initiateActiveTmz();

// Setting Rotation For Hands
const rotation = function (hand, ratio) {
  hand.style.transform = `translateX(-50%) rotate(${ratio * 360}deg)`;
};

// Setting Clock
const setClock = function () {
  // const currentDate = new Date(new Date().toLocaleString("en-US", { timeZone: currentTimezone }));

  // Getting Date
  const date = new Date();
  const currentDateStr = date.toLocaleString("en-GB", { timeZone: currentTimezone });
  const [dateValues, timeValues] = currentDateStr.split(", ");

  const [day, month, year] = dateValues.split("/");
  const [hours, minutes, seconds] = timeValues.split(":");

  const currentDate = new Date(new Date(+year, +month - 1, +day, +hours, +minutes, +seconds).toISOString());

  // Getting Time
  const options = {
    timeStyle: "medium",
    hour12: "true",
    timeZone: currentTimezone,
  };
  const formattedTime = new Intl.DateTimeFormat("en", options).format(date);
  const [time, dayPeriod] = formattedTime.split(" ");
  const [hourTime, minTime, secondTime] = time.split(":");

  hourText.textContent = String(hourTime).padStart(2, 0);
  minuteText.textContent = String(minTime).padStart(2, 0);
  secondText.textContent = String(secondTime).padStart(2, 0);
  timePeriod.textContent = dayPeriod;

  // Prevent hands from reverting transition just after turning 360 degree
  // if (currentDate.getSeconds() === 59) {
  //   clockHand.forEach(hand => (hand.style.transition = "all 0s"));
  //   setTimeout(() => clockHand.forEach(hand => (hand.style.transition = "all 0s")), 1500);
  // }

  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

  rotation(secondHand, secondRatio);
  rotation(minuteHand, minuteRatio);
  rotation(hourHand, hourRatio);
};

// Animating Modify Icon
const animateModifyIcon = function () {
  if (iconCounter === -1) {
    modifyIconLine1.style.left = "50%";
    modifyIconLine2.style.left = "50%";
    modifyIconLine2.style.transform = "translate(-50%, -50%) rotate(0)";
    modifyIconLine3.style.left = "50%";
    modifyIconLine3.style.opacity = "0";
    modifyIconLine3.style.transform = "translate(-50%, -50%) rotate(0)";
  }
  iconCounter++;
  if (iconCounter === 1) {
    modifyIconLine3.style.opacity = "0";
    modifyIconLine1.style.left = "43%";
    modifyIconLine2.style.left = "57%";
  } else if (iconCounter === 2) {
    modifyIconLine3.style.opacity = "1";
    modifyIconLine1.style.left = "36%";
    modifyIconLine2.style.left = "64%";
  } else if (iconCounter === 3) {
    modifyIconLine3.style.transform = "translate(-50%, -50%) rotate(-15deg)";
    modifyIconLine3.style.left = "43%";
    modifyIconLine2.style.transform = "translate(-50%, -50%) rotate(15deg)";
    iconCounter = -1;
  }
};

// Change Clock & Theme
const changeTheme = function (theme) {
  // Do not put the clock onto the top if the time display is not activated
  if (isTimeShown) clock.style.top = "0";
  else if (!isTimeShown) clock.style.top = "";
  clock.style.animation = "clockIn .2s forwards";
  setTimeout(() => {
    imgCounter !== 3 ? imgCounter++ : (imgCounter = 0);
    clock.style.backgroundImage = `url('img/${theme[imgCounter].clock}.png')`;
    [...clockInners].forEach(inner => (inner.style.backgroundColor = theme[imgCounter].handsColor));
    document.body.style.backgroundColor = theme[imgCounter].bgColor;
    clock.style.animation = "clockOut .2s forwards";
    timeTextsWrapper.style.color = `${theme[imgCounter].textColor}`;
    footerCreditText.style.color = `${theme[imgCounter].creditColor}`;
  }, 200);
};

// ----------------------------------------------------------------------------
// Functionalities

// Working Clock
setInterval(setClock, 1000);
setClock();

// Modify-Icon
modifyIcon.addEventListener("click", function () {
  // Animating Modify Icon
  animateModifyIcon();

  // Changing Theme
  changeTheme(themes);
});

//Clock-Icon
clockIcon.addEventListener("click", function () {
  timeTextsWrapper.classList.remove("hidden");
  if (!isTimeShown) {
    clock.style.animation = "moveToTop .2s forwards";
    timeTextsWrapper.style.animation = "moveToBottom .3s forwards";
    isTimeShown = true;
  } else {
    clock.style.animation = "moveBackToCenterFromTop .2s forwards";
    timeTextsWrapper.style.animation = "moveBackToCenterFromBottom .3s forwards";
    isTimeShown = false;
  }
});

// Tabbed Components

sideNavContentContainer.addEventListener("click", function (e) {
  const clickedCategory = e.target.closest(".side-nav__tab");

  // Retrieving & Setting Specific Timezone
  if (e.target.classList.contains("side-nav__timezone")) {
    // Remove previously active classes
    const targetCategory = e.target.closest(".side-nav__content").querySelector(".side-nav__tab__title");

    // Add Transition to the hands for a nice hand change movement
    clockHand.forEach(hand => (hand.style.transition = "all 0.3s"));
    setTimeout(() => clockHand.forEach(hand => (hand.style.transition = "all 0s")), 200);

    // Modify the current timezone-related text only if the targeted tmz is not the same as the current tmz
    if (e.target !== currentActiveTmzEl) {
      currentTimezoneHeaderText.textContent = "Selected Timezone: ";
      currentTimezone = e.target.dataset.timezone;
      currentTimezoneText.textContent = currentTimezone.replaceAll("_", " ");
    }

    // Modify Active Classes
    modifyActiveTmz(currentActiveCategoryEl, currentActiveTmzEl, targetCategory, e.target);

    setClock();
  }

  // Guard Clauses
  if (!clickedCategory) return;

  // Scroll down towards the current active timezone if connected span is clicked
  if (e.target.classList.contains("side-nav__tab__title--active")) {
    // Activate Clicked Category's Timezones
    document.querySelector(`.side-nav__tab__content--${clickedCategory.dataset.category}`).classList.remove("hidden");
    activeGreenDot.closest(".side-nav__timezone").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    // Change the direction of the chevron arrow of targeted category if the tab is closed initially
    if (!e.target.closest(".side-nav__tab").querySelector(".side-nav__tab__arrow").classList.contains("side-nav__tab__arrow--active"))
      document.querySelector(`.side-nav__tab__arrow--${clickedCategory.dataset.category}`).classList.add("side-nav__tab__arrow--active");
  } else {
    // Change the direction of the chevron arrow of targeted category
    document.querySelector(`.side-nav__tab__arrow--${clickedCategory.dataset.category}`).classList.toggle("side-nav__tab__arrow--active");
    // Activate Clicked Category's Timezones
    document.querySelector(`.side-nav__tab__content--${clickedCategory.dataset.category}`).classList.toggle("hidden");
  }
});

// Reverting back to current timezone based on current location

revertToCurrentLocationTmz.addEventListener("click", function () {
  // Setting timezone back to current timezone
  currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  setClock();
  currentTimezoneText.textContent = currentTimezone.replaceAll("_", " ");

  // Add Transition to the hands for a nice hand change movement
  clockHand.forEach(hand => (hand.style.transition = "all 0.3s"));
  setTimeout(() => clockHand.forEach(hand => (hand.style.transition = "all 0s")), 200);

  // Change the direction of the chevron arrows back to down
  document.querySelectorAll(".side-nav__tab__arrow").forEach(arrow => arrow.classList.remove("side-nav__tab__arrow--active"));

  // Closes all the tabs' contents
  document.querySelectorAll(`.side-nav__tab__content`).forEach(content => content.classList.add("hidden"));

  // Reverting active classes back to the default timezone based on current location
  const defaultTmz = sideNavContentContainer.querySelector(`.side-nav__timezone--${currentTimezone.slice(currentTimezone.indexOf("/") + 1)}`);
  const defaultCategory = defaultTmz.closest(".side-nav__content").querySelector(".side-nav__tab__title");

  // Modify Active Classes
  modifyActiveTmz(currentActiveCategoryEl, currentActiveTmzEl, defaultCategory, defaultTmz);

  // Reverting the scroll position of side nav content to 0
  sideNavContentContainer.scroll({
    top: 0,
    behavior: "smooth",
  });

  // Modify the current timezone-related text
  currentTimezoneHeaderText.textContent = "Current Timezone: ";

  // Animating the spin effect on the revert icon
  revertToCurrentLocationTmz.style.animation = "spin360 .3s forwards";
  setTimeout(() => (revertToCurrentLocationTmz.style.animation = ""), 600);
});

// Side Navigation

// Open side navigation
globeIcon.addEventListener("click", function () {
  // Change the direction of the chevron arrows back to down
  document.querySelectorAll(".side-nav__tab__arrow").forEach(arrow => arrow.classList.remove("side-nav__tab__arrow--active"));

  // Open side navigation
  sideNav.classList.add("side-nav__toggle");

  // Closes all the tabs' contents
  document.querySelectorAll(`.side-nav__tab__content`).forEach(content => content.classList.add("hidden"));

  // Activate background ovelay
  overlay.classList.remove("hidden");
});

// Close side navigation
closeIconSideNav.addEventListener("click", function () {
  // Close side navigation
  sideNav.classList.remove("side-nav__toggle");
  // Deactivate background overlay
  overlay.classList.add("hidden");
});

// Close side navigation by clicking the overlay area
overlay.addEventListener("click", function () {
  // Close side navigation
  sideNav.classList.remove("side-nav__toggle");
  // Deactivate background overlay
  overlay.classList.add("hidden");
});
