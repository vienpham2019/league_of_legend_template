let summonerName = "TomasZamo2000";
let APIKEY = "RGAPI-8e649404-d2d9-45d9-867f-d9547e43b3aa";
let summoner_url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${APIKEY}`;

let summoner = {
  accountId: "c8YQItN2N99vLoy-Ql-up6CJLk-jyKgJojbj-HBzk0uD_h0",
  puuid:
    "Nerd69Xk-dwzPqb_XCOvaOcng1rD0J_me0eOGhnNH_XFBhjMrWdbMptL4QYpGAULFiQEuX62spJtpA",
  name: "Soda Is A Cat",
  profileIconId: 4571,
  summonerLevel: 389,
  leagueId: "1300a52f-4e9f-3a8e-8001-025af2aa82fe",
  queueType: "RANKED_TFT",
  tier: "CHALLENGER",
  rank: "I",
  summonerId: "xpMTpnI-qgE5zW89YfUTttUY3ghtSTLnuJADl333fZc0B3Y",
  summonerName: "Soda Is A Cat",
  leaguePoints: 1246,
  wins: 24,
  losses: 66,
  veteran: false,
  inactive: false,
  freshBlood: false,
  hotStreak: false,
  matchsID: [
    {
      game_datetime: 1635160875764,
      game_length: 2121.075927734375,
      tft_game_type: "standard",
      teamId: 100,

      champLevel: 18,
      championId: 24,
      championName: "Jax",

      deaths: 14,
      kills: 12,
      assists: 19,
      doubleKills: 2,
      tripleKills: 1,
      quadraKills: 0,
      pentaKills: 0,

      totalMinionsKilled: 33,

      firstBloodAssist: false,
      firstBloodKill: false,
      firstTowerAssist: false,
      firstTowerKill: false,

      goldEarned: 14122,
      goldSpent: 11933,

      item0: 3078,
      item1: 3153,
      item2: 3111,
      item3: 1057,
      item4: 3053,
      item5: 0,
      item6: 2052,

      summoner1Id: 4,
      summoner2Id: 32,

      lane: "TOP",
      role: "SUPPORT",

      magicDamageDealt: 9312,
      magicDamageTaken: 24150,

      physicalDamageDealt: 47506,
      physicalDamageTaken: 14002,

      trueDamageDealt: 878,
      trueDamageTaken: 973,

      totalDamageDealt: 57697,
      totalDamageTaken: 39126,

      timePlayed: 1269,
      totalHeal: 3553,

      spell1Casts: 54,
      spell2Casts: 59,
      spell3Casts: 37,
      spell4Casts: 10,

      win: false,
    },
  ],
  champions: [
    {
      championId: 16,
      championLevel: 7,
      championPoints: 231875,
    },
  ],
};

fetch(summoner_url)
  .then((res) => res.json())
  .then((data) => {
    let summoner_champions_url = `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${data.id}}?api_key=${APIKEY}`;
    console.log(data);
    // fetch(summoner_champions_url)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch(function (error) {
    //     console.log("Request failed", error);
    //   });
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });
