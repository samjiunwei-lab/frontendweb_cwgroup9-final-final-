/* ==========================================================================
   UTAR E-Sports Club - Shared Team Data
   Single source of truth for every game's team roster. Both teams.html
   (hover-preview badges) and team-detail.html read from this same esportsData
   object, so they can never drift out of sync again.
   Load this script BEFORE teams.js / team-detail.js in the HTML.
   ========================================================================== */

const esportsData = {
  valorant: {
    name: "Valorant",
    teams: [
      { 
        name: "Paper Rex", 
        country: "Singapore", 
        region: "VCT Pacific", 
        site: "https://pprx.team", 
        logo: "images/teams/paper-rex.webp", 
        desc: "Known for their ultra-aggressive playstyle and W-gaming philosophy.", 
        achievement: "2026 Masters London semi-finalist", 
        members: 6, 
        socials: { 
          twitter: "https://twitter.com/pprxteam", 
          instagram: "https://www.instagram.com/pprxteam", 
          youtube: "https://www.youtube.com/@PaperRex", 
          facebook: "https://www.facebook.com/pprxteam" 
        }
      },
      { 
        name: "Fnatic", 
        country: "United Kingdom", 
        region: "VCT EMEA", 
        site: "https://fnatic.com", 
        logo: "images/teams/fnatic.png", 
        desc: "Multiple VCT trophy winners with elite strategic coordination.", 
        achievement: "Three straight Masters/Champions runner-up finishes (2025)", 
        members: 6, 
        socials: { 
          facebook: "https://www.facebook.com/fnatic", 
          twitter: "https://twitter.com/fnatic", 
          instagram: "https://www.instagram.com/fnatic", 
          youtube: "https://www.youtube.com/c/fnatic" 
        } 
      },
      { 
        name: "Sentinels", 
        country: "United States", 
        region: "VCT Americas", 
        site: "https://sentinels.gg", 
        logo: "images/teams/sentinels.webp", 
        desc: "One of the most iconic powerhouses in North American esports.", 
        achievement: "2021 VCT Champions", 
        members: 6, 
        socials: { 
          twitter: "https://twitter.com/Sentinels", 
          instagram: "https://www.instagram.com/sentinels", 
          youtube: "https://www.youtube.com/@Sentinels" 
        } 
      },
      { 
        name: "NRG", 
        country: "United States", 
        region: "VCT Americas", 
        site: "https://nrg.gg", 
        logo: "images/teams/nrg.webp", 
        desc: "Franchise Americas roster that surged to the top of the global rankings in 2026.", 
        achievement: "#1 VALORANT Global Power Rankings, 2026 VCT Champions", 
        members: 6, 
        socials: { 
          twitter: "https://twitter.com/NRGgg", 
          instagram: "https://www.instagram.com/nrggg", 
          youtube: "https://www.youtube.com/@NRG" 
        } 
      },
      { 
        name: "T1", 
        country: "South Korea", 
        region: "VCT Pacific", 
        site: "https://t1.gg", 
        logo: "images/teams/t1.png", 
        desc: "Legacy Korean organization fielding a consistently disciplined Pacific roster.", 
        achievement: "2026 VCT Pacific Kickoff qualifier", 
        members: 6, 
        socials: { 
          twitter: "https://twitter.com/T1", 
          instagram: "https://www.instagram.com/t1", 
          youtube: "https://www.youtube.com/@T1" 
        } 
      },
      { 
        name: "Team Liquid", 
        country: "Netherlands", 
        region: "VCT EMEA", 
        site: "https://teamliquid.com", 
        logo: "images/teams/teamliquid.png", 
        desc: "Dutch-rooted EMEA franchise squad known for disciplined executes.", 
        achievement: "2026 Masters Santiago qualifier", 
        members: 6, 
        socials: { 
          facebook: "https://www.facebook.com/teamliquid", 
          twitter: "https://twitter.com/TeamLiquid", 
          instagram: "https://www.instagram.com/teamliquid", 
          youtube: "https://www.youtube.com/@teamliquid" 
        } 
      }
    ]
  },
  lol: {
    name: "League of Legends",
    teams: [
      { 
        name: "T1", 
        country: "South Korea", 
        region: "LCK", 
        site: "https://t1.gg", 
        logo: "images/teams/t1.png", 
        desc: "The most decorated esports organization in League of Legends history.", 
        achievement: "5x World Champions", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/T1", 
          instagram: "https://www.instagram.com/t1", 
          youtube: "https://www.youtube.com/@T1" 
        } 
      },
      { 
        name: "Gen.G Esports", 
        country: "South Korea", 
        region: "LCK", 
        site: "https://geng.gg", 
        logo: "images/teams/gen-g-esports.jpg", 
        desc: "Dominant domestic champions consistently fighting for global titles.", 
        achievement: "2024 Esports World Cup champions", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/GenG", 
          instagram: "https://www.instagram.com/geng", 
          youtube: "https://www.youtube.com/@GenG" 
        } 
      },
      { 
        name: "G2 Esports", 
        country: "Germany", 
        region: "LEC", 
        site: "https://g2esports.com", 
        logo: "images/teams/g2-esports.png", 
        desc: "Europe's premiere team famous for high creativity and clutch plays.", 
        achievement: "18x LEC champions, most titled Western org", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/G2esports", 
          instagram: "https://www.instagram.com/g2esports", 
          youtube: "https://www.youtube.com/@G2esports" 
        } 
      },
      { 
        name: "Hanwha Life Esports", 
        country: "South Korea", 
        region: "LCK", 
        site: "https://hle.kr/en", 
        logo: "images/teams/hanhaw-life-esports.jpeg", 
        desc: "Rising LCK powerhouse after signing Worlds 2025 Finals MVP Gumayusi and star jungler Kanavi.", 
        achievement: "2026 LCK top-three contender", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/HLEofficial", 
          instagram: "https://www.instagram.com/hleofficial", 
          youtube: "https://www.youtube.com/HanwhaLifeEsports", 
          facebook: "https://www.facebook.com/HLE.lol/" 
        }
      },
      { 
        name: "Bilibili Gaming", 
        country: "China", 
        region: "LPL", 
        site: "https://www.weibo.com/u/5926660141", 
        logo: "images/teams/bilibili-gaming.png", 
        desc: "Chinese LPL franchise that broke through as a Split champion in 2025.", 
        achievement: "2025 LPL Split 3 champions", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/BilibiliGaming", 
          instagram: "https://www.instagram.com/bilibiligaming.official", 
          youtube: "https://www.youtube.com/@BilibiliGaming" 
        }
      }
    ]
  },
  identity: {
    name: "Identity V",
    teams: [
      { 
        name: "ZETA DIVISION", 
        country: "Japan", 
        region: "IJL (Japan)", 
        site: "https://zetadivision.com", 
        logo: "images/teams/zeta-division.webp", 
        desc: "Undisputed champions with top-tier Hunter and Survivor rosters.", 
        achievement: "Multiple-time IJL champions", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/zetadivision", 
          instagram: "https://www.instagram.com/zetadivision", 
          youtube: "https://www.youtube.com/@ZETADIVISION" 
        }
      },
      { 
        name: "Wolves Esports", 
        country: "China", 
        region: "IVL (China)", 
        site: "https://wolves-esports.com", 
        logo: "images/teams/wolves-esports.webp", 
        desc: "A top Chinese powerhouse competing in the official IVL circuit.", 
        achievement: "2026 IVL Summer playoff contender", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/WolvesEsports", 
          instagram: "https://www.instagram.com/wolvesesports", 
          youtube: "https://www.youtube.com/@WolvesEsports", 
          facebook: "https://www.facebook.com/WolvesEsports" 
        }
      },
      { 
        name: "FunPlus Phoenix Zhuque", 
        country: "China", 
        region: "IVL (China)", 
        site: "https://weibo.com/u/7457169296", 
        logo: "images/teams/funplus-phoenix-zhuque.png", 
        desc: "FPX's dedicated Identity V roster fighting near the top of the IVL standings.", 
        achievement: "2026 IVL Summer roster", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/FPX_Esports", 
          instagram: "https://www.instagram.com/fpx.esports"
 
        }
      },
      { 
        name: "DOU5", 
        country: "China", 
        region: "IVL (China)", 
        site: "https://weibo.com/u/7316769015", 
        logo: "images/teams/dou5.png", 
        desc: "Consistent IVL mainstay known for methodical Hunter drafting.", 
        achievement: "2026 IVL Summer competitor", 
        members: 5, 
        socials: { 
          twitter: "https://x.com/DOU5CLUB",
          weibo: "https://weibo.com/u/7316769015" 
        }
      },
      { 
        name: "Miracle Crown", 
        country: "China", 
        region: "IVL (China)", 
        site: "https://weibo.com/u/7351516434", 
        logo: "images/teams/miracle-crown.png", 
        desc: "An IVL franchise club rebuilding its roster ahead of the Call of the Abyss qualifiers.", 
        achievement: "2026 IVL Summer competitor", 
        members: 5, 
        socials: { 
          twitter: "https://x.com/MRC_IDV",
          weibo: "https://weibo.com/u/7351516434" 
        }
      }
    ]
  },
  csgo: {
    name: "Counter-Strike 2",
    teams: [
      { 
        name: "Natus Vincere", 
        country: "Ukraine", 
        region: "Europe", 
        site: "https://navi.gg", 
        logo: "images/teams/natus-vincere.png", 
        desc: "Legendary CS organization with multiple Major championship wins.", 
        achievement: "Multiple-time CS Major champions", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/natusvincere", 
          instagram: "https://www.instagram.com/natusvincere", 
          youtube: "https://www.youtube.com/@natusvincere" 
        } 
      },
      { 
        name: "FaZe Clan", 
        country: "United States", 
        region: "International", 
        site: "https://fazeclan.com", 
        logo: "images/teams/faze-clan.png", 
        desc: "A global esports and lifestyle brand dominant in FPS games.", 
        achievement: "2022 CS:GO Major champions", 
        members: 5, 
        socials: { 
          facebook: "https://www.facebook.com/FaZeClan", 
          twitter: "https://twitter.com/FaZeClan", 
          instagram: "https://www.instagram.com/fazeclan", 
          youtube: "https://www.youtube.com/@FaZeClan" 
        } 
      },
      { 
        name: "Team Vitality", 
        country: "France", 
        region: "Europe", 
        site: "https://vitality.gg", 
        logo: "images/teams/team-vitality.jpg", 
        desc: "French powerhouse with world-class mechanical talent led by ZywOo.", 
        achievement: "Back-to-back 2025 Major champions (Austin & Budapest)", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/TeamVitality", 
          instagram: "https://www.instagram.com/teamvitality", 
          youtube: "https://www.youtube.com/@TeamVitality" 
        } 
      },
      { 
        name: "Team Spirit", 
        country: "Serbia", 
        region: "Europe", 
        site: "https://teamspirit.gg/", 
        logo: "images/teams/team-spirit.jpg", 
        desc: "Consistent top-three global contender with a disciplined tactical identity.", 
        achievement: "IEM Cologne 2026 champions", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/Team__Spirit", 
          instagram: "https://www.instagram.com/team.spirit", 
          youtube: "https://www.youtube.com/@TeamSpirit", 
          facebook: "https://www.facebook.com/teamspiritesports" 
        }
      },
      { 
        name: "The MongolZ", 
        country: "Mongolia", 
        region: "Asia", 
        site: "https://x.com/1mongolz", 
        logo: "images/teams/the-mongolz.png", 
        desc: "Mongolia's breakout squad that stormed into the world's top five.", 
        achievement: "Consistent top-5 world ranking through 2025-26", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/1mongolz", 
          instagram: "https://www.instagram.com/themongolz", 
          facebook: "https://www.facebook.com/themongolz" 
        }
      },
      { 
        name: "Team Falcons", 
        country: "Saudi Arabia", 
        region: "International", 
        site: "https://www.teamfalcons.sa/", 
        logo: "images/teams/team-falcons.jpg", 
        desc: "Saudi-backed super-team built for both LAN dominance and viewership.", 
        achievement: "Top-3 CS2 world ranking, 2026", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/TeamFalconsGG", 
          instagram: "https://www.instagram.com/teamfalcons", 
          youtube: "https://www.youtube.com/@TeamFalconsGG" 
        }
      }
    ]
  },
  dota2: {
    name: "Dota 2",
    teams: [
      { 
        name: "Team Spirit", 
        country: "Russia", 
        region: "Eastern Europe", 
        site: "https://teamspirit.gg", 
        logo: "images/teams/team-spirit.jpg", 
        desc: "Two-time International champions legendary for late-game comebacks.", 
        achievement: "2x TI Champions (2021, 2023)", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/Team_Spirit", 
          instagram: "https://www.instagram.com/team.spirit", 
          youtube: "https://www.youtube.com/@TeamSpirit", 
          facebook: "https://www.facebook.com/teamspiritesports" 
        } 
      },
      { 
        name: "Team Liquid", 
        country: "Netherlands", 
        region: "Western Europe", 
        site: "https://teamliquid.com", 
        logo: "images/teams/teamliquid.png", 
        desc: "Consistent Tier-1 Dota squad fighting for Aegis of Champions.", 
        achievement: "2026 BLAST Slam VI champions", 
        members: 5, 
        socials: { 
          facebook: "https://www.facebook.com/teamliquid", 
          twitter: "https://twitter.com/TeamLiquid", 
          instagram: "https://www.instagram.com/teamliquid", 
          youtube: "https://www.youtube.com/@teamliquid" 
        } 
      },
      { 
        name: "Team Falcons", 
        country: "Saudi Arabia", 
        region: "International", 
        site: "https://www.teamfalcons.sa/", 
        logo: "images/teams/team-falcons.jpg", 
        desc: "Saudi-backed tri-core lineup that dominates the mid game before opponents recover.", 
        achievement: "TI 2025 Champions", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/TeamFalconsGG", 
          instagram: "https://www.instagram.com/teamfalcons", 
          youtube: "https://www.youtube.com/@TeamFalconsGG" 
        }
      },
      { 
        name: "Tundra Esports", 
        country: "United Kingdom", 
        region: "Western Europe", 
        site: "https://tundraesports.com", 
        logo: "images/teams/tundra-esports.jpg", 
        desc: "The most consistent team of 2025, competitive from early to late game.", 
        achievement: "Most Tier-1 event wins in 2025 (5 titles)", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/TundraEsports", 
          instagram: "https://www.instagram.com/tundraesports", 
          youtube: "https://www.youtube.com/@TundraEsports", 
          facebook: "https://www.facebook.com/tundraesports" 
        }
      },
      { 
        name: "PARIVISION", 
        country: "Ukraine", 
        region: "Eastern Europe", 
        site: "https://parivision.gg", 
        logo: "images/teams/parivision.jpg", 
        desc: "Fast-rising roster entering TI 2026 as the bookmakers' favorite.", 
        achievement: "2026 Esports World Cup champions", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/parivisiongg", 
          instagram: "https://www.instagram.com/parivision.gg", 
          youtube: "https://www.youtube.com/@parivisiongg" 
        }
      }
    ]
  },
  mobile: {
    name: "Mobile Legends: Bang Bang",
    teams: [
      { 
        name: "ONIC Esports", 
        country: "Indonesia", 
        region: "MPL Indonesia", 
        site: "https://onicesports.id", 
        logo: "images/teams/onic-esports.jpg", 
        desc: "The dominant forces of Southeast Asian MLBB competition.", 
        achievement: "Multiple-time MPL ID & M-Series champions", 
        members: 6, 
        socials: { 
          twitter: "https://twitter.com/ONICesports", 
          instagram: "https://www.instagram.com/onicesports" 
        } 
      },
      { 
        name: "RRQ Hoshi", 
        country: "Indonesia", 
        region: "MPL Indonesia", 
        site: "https://teamrrq.com", 
        logo: "images/teams/rrq-hoshi.jpg", 
        desc: "One of MLBB's most popular and historically successful sides.", 
        achievement: "M3 World Champions", 
        members: 6, 
        socials: { 
          twitter: "https://twitter.com/teamrrqofficial", 
          instagram: "https://www.instagram.com/teamrrq", 
          youtube: "https://www.youtube.com/@TeamRRQ", 
          facebook: "https://www.facebook.com/TeamRRQ" 
        }
      },
      { 
        name: "Team Liquid PH", 
        country: "Philippines", 
        region: "MPL Philippines", 
        site: "https://teamliquid.com", 
        logo: "images/teams/teamliquid.png", 
        desc: "Reigning MPL Philippines champions with a deep rotation of talent.", 
        achievement: "MPL Philippines Season 17 champions", 
        members: 6, 
        socials: { 
          twitter: "https://twitter.com/TeamLiquid", 
          instagram: "https://www.instagram.com/teamliquid", 
          youtube: "https://www.youtube.com/@teamliquid", 
          facebook: "https://www.facebook.com/teamliquid" 
        }
      },
      { 
        name: "Selangor Red Giants", 
        country: "Malaysia", 
        region: "MPL Malaysia", 
        site: "https://selangorfc.com", 
        logo: "images/teams/selangor-red-giants.png", 
        desc: "Malaysia's flagship MLBB org and the region's first international MLBB champion.", 
        achievement: "2024 MLBB Mid-Season Cup champions", 
        members: 6, 
        socials: { 
          instagram: "https://www.instagram.com/selangoredgiants", 
          facebook: "https://www.facebook.com/selangoredgiants", 
          youtube: "https://www.youtube.com/@selangoredgiants" 
        }
      },
      { 
        name: "Blacklist International", 
        country: "Philippines", 
        region: "MPL Philippines", 
        site: "https://tier.one", 
        logo: "images/teams/blacklist-international.webp", 
        desc: "One of the most storied MPL Philippines rosters of the modern era.", 
        achievement: "M4 World Champions", 
        members: 6, 
        socials: { 
          twitter: "https://twitter.com/BlacklistINTL", 
          instagram: "https://www.instagram.com/blacklistintl", 
          youtube: "https://www.youtube.com/@BlacklistInternational", 
          facebook: "https://www.facebook.com/BlacklistINTL" 
        }
      }
    ]
  },
  pubg: {
    name: "PUBG Mobile",
    teams: [
      { 
        name: "Alpha7 Esports", 
        country: "Brazil", 
        region: "Americas", 
        site: "https://a7esports.com.br", 
        logo: "images/teams/alpha7-esports.webp", 
        desc: "Global PMGC champions known for incredible firepower.", 
        achievement: "PMGC 2025 World Champions", 
        members: 4, 
        socials: { 
          twitter: "https://twitter.com/Alpha7eSports", 
          instagram: "https://www.instagram.com/alpha7esports", 
          facebook: "https://www.facebook.com/alpha7esports" 
        }
      },
      { 
        name: "Vampire Esports", 
        country: "Thailand", 
        region: "Southeast Asia", 
        site: "https://vampireesports.com", 
        logo: "images/teams/vampire-esports.png", 
        desc: "Dominant force across Southeast Asian PMWI championships and PMGC host nation invitee.", 
        achievement: "PMGC 2025 Grand Finals qualifier", 
        members: 4, 
        socials: { 
          twitter: "https://twitter.com/Vampire_Esports", 
          instagram: "https://www.instagram.com/vampireesports.official", 
          facebook: "https://www.facebook.com/VampireEsportsOfficial" 
        }
      },
      { 
        name: "DRX", 
        country: "South Korea", 
        region: "Korea", 
        site: "https://drx.gg", 
        logo: "images/teams/drx.webp", 
        desc: "Disciplined Korean powerhouse known for calculated rotations and clean fights.", 
        achievement: "Top-4 finish at PMWC 2024 & 2025", 
        members: 4, 
        socials: { 
          twitter: "https://twitter.com/DRXGlobal", 
          instagram: "https://www.instagram.com/drxglobal", 
          youtube: "https://www.youtube.com/@DRXGlobal" 
        }
      },
      { 
        name: "Regnum Carya Esports", 
        country: "Turkey", 
        region: "Europe", 
        site: "https://www.regnumcaryaesports.com", 
        logo: "images/teams/regnum-carya-esports.webp", 
        desc: "Turkish roster built around aggressive attacking players.", 
        achievement: "PMSL Europe Fall 2025 champions", 
        members: 4, 
        socials: { 
          twitter: "https://twitter.com/regnumcaryaesp", 
          instagram: "https://www.instagram.com/regnumcaryaesports" 
        }
      },
      { 
        name: "Team Falcons", 
        country: "Saudi Arabia", 
        region: "Middle East", 
        site: "https://falcons.gg", 
        logo: "images/teams/team-falcons.jpg", 
        desc: "Saudi-backed roster reinforced by the former Nigma Galaxy lineup.", 
        achievement: "PMGC 2025 Group Stage qualifier", 
        members: 4, 
        socials: { 
          twitter: "https://twitter.com/TeamFalconsGG", 
          instagram: "https://www.instagram.com/teamfalcons", 
          youtube: "https://www.youtube.com/@TeamFalconsGG" 
        } 
      }
    ]
  },
  minecraft: {
    name: "Minecraft",
    teams: [
      { 
        name: "Complexity Gaming", 
        country: "United States", 
        region: "Americas", 
        site: "https://complexity.gg", 
        logo: "images/teams/complexity-gaming.png", 
        desc: "Hosts and competitors in speedrunning and MC Championship events.", 
        achievement: "Recurring MC Championship participant org", 
        members: 4, 
        socials: { 
          twitter: "https://twitter.com/compLexity", 
          instagram: "https://www.instagram.com/complexitygaming" 
        } 
      },
      { 
        name: "Luminosity Gaming", 
        country: "Canada", 
        region: "North America", 
        site: "https://luminosity.gg", 
        logo: "images/teams/luminosity-gaming.jpg", 
        desc: "Home to top content creators and competitive Minecraft stars.", 
        achievement: "Recurring MC Championship participant org", 
        members: 4, 
        socials: { 
          twitter: "https://twitter.com/LuminosityGam", 
          instagram: "https://www.instagram.com/luminosity" 
        } 
      },
      { 
        name: "100 Thieves", 
        country: "United States", 
        region: "Americas", 
        site: "https://100thieves.com", 
        logo: "images/teams/100-thieves.webp", 
        desc: "Lifestyle esports org backing creators across MC Championship and Ender Cup events.", 
        achievement: "MCC Ender Cup participant org", 
        members: 4, 
        socials: { 
          twitter: "https://twitter.com/100Thieves", 
          instagram: "https://www.instagram.com/100thieves", 
          youtube: "https://www.youtube.com/@100Thieves" 
        } 
      },
      { 
        name: "OpTic Gaming", 
        country: "United States", 
        region: "Americas", 
        site: "https://opticgaming.com", 
        logo: "images/teams/optic-gaming.webp", 
        desc: "Iconic North American org with creators active in the MCC circuit.", 
        achievement: "Recurring MC Championship participant org", 
        members: 4, 
        socials: { 
          twitter: "https://twitter.com/OpTicGaming", 
          instagram: "https://www.instagram.com/opticgaming", 
          youtube: "https://www.youtube.com/@OpTicGaming" 
        } 
      }
    ]
  },
  brawl: {
    name: "Brawl Stars",
    teams: [
      { 
        name: "Crazy Raccoon", 
        country: "Japan", 
        region: "East Asia", 
        site: "https://crazyraccoon.jp", 
        logo: "images/teams/crazy-raccoon.webp", 
        desc: "Brawl Stars World Finals champions with insane mechanics.", 
        achievement: "Brawl Stars World Finals 2025 Champions", 
        members: 3, 
        socials: { 
          twitter: "https://twitter.com/crazyraccoon406", 
          instagram: "https://www.instagram.com/crazy_raccoon_official", 
          youtube: "https://www.youtube.com/@crazyraccoon6143" 
        }
      },
      { 
        name: "SK Gaming", 
        country: "Germany", 
        region: "EMEA", 
        site: "https://sk-gaming.com", 
        logo: "images/teams/sk-gaming.png", 
        desc: "Longstanding European org competing in BSC monthly finals.", 
        achievement: "2025 EMEA regional leaderboard top-5", 
        members: 3, 
        socials: { 
          twitter: "https://twitter.com/SKGaming", 
          instagram: "https://www.instagram.com/sk_gaming" 
        } 
      },
      { 
        name: "HMBLE", 
        country: "Italy", 
        region: "EMEA", 
        site: "https://hmble.it", 
        logo: "images/teams/hmble.jpg", 
        desc: "Reigning-form EMEA squad and back-to-back World Finals grand finalist.", 
        achievement: "Brawl Stars World Finals 2024 Champions", 
        members: 3, 
        socials: { 
          twitter: "https://twitter.com/HMBLE_gg", 
          instagram: "https://www.instagram.com/hmble_gg", 
          youtube: "https://www.youtube.com/@hmble_gg" 
        }
      },
      { 
        name: "Tribe Gaming", 
        country: "United States", 
        region: "North America", 
        site: "https://tribegaming.gg", 
        logo: "images/teams/tribe-gaming.png", 
        desc: "Dominant 2025 North American squad, winning four Monthly Finals.", 
        achievement: "NA regional #1, 2025 Brawl Stars Championship", 
        members: 3, 
        socials: { 
          twitter: "https://twitter.com/TribeGaming", 
          instagram: "https://www.instagram.com/tribegaming", 
          youtube: "https://www.youtube.com/@TribeGaming", 
          facebook: "https://www.facebook.com/TribeGaming" 
        }
      }
    ]
  },
  hok: {
    name: "Honor of Kings",
    teams: [
      { 
        name: "AG Super Play", 
        country: "China", 
        region: "KPL (China)", 
        site: "https://weibo.com/agcwh", 
        logo: "images/teams/ag-super-play.png", 
        desc: "Fan-favorite franchise with immense legacy in KPL history.", 
        achievement: "Defending Honor of Kings World Cup champions", 
        members: 5, 
        socials: { 
          instagram: "https://www.instagram.com/aghokggy" 
        }
      },
      { 
        name: "Kuaishou Gaming", 
        country: "China", 
        region: "KPL (China)", 
        site: "https://weibo.com/6134425922", 
        logo: "images/teams/kuaishou-gaming.png", 
        desc: "2026's breakout KPL squad, built around a rookie-heavy young core.", 
        achievement: "2026 KPL Spring champions", 
        members: 5, 
        socials: { 
      
        }
      },
      { 
        name: "Weibo Gaming", 
        country: "China", 
        region: "KPL (China)", 
        site: "https://weibo.com/tbgclub", 
        logo: "images/teams/weibo-gaming.png", 
        desc: "Consistent KPL finalist with one of the league's deepest rosters.", 
        achievement: "2025 KPL Grand Finals runner-up", 
        members: 5, 
        socials: { 
    
          twitter: "https://x.com/WeiboGamingLoL"
          
        }
      },
      { 
        name: "Wolves", 
        country: "China", 
        region: "KPL (China)", 
        site: "https://wolves-esports.com", 
        logo: "images/teams/wolves-esports.webp", 
        desc: "Chengdu-based KPL club and multi-season playoff mainstay.", 
        achievement: "2026 KPL Summer Grand Finalist", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/WolvesEsports", 
          instagram: "https://www.instagram.com/wolvesesports", 
          youtube: "https://www.youtube.com/@WolvesEsports" 
        }
      },
      { 
        name: "S8UL Esports", 
        country: "India", 
        region: "Global (KWC)", 
        site: "https://s8ul.gg", 
        logo: "images/teams/s8ul-esports.png", 
        desc: "One of India's debut representatives on the Honor of Kings global stage.", 
        achievement: "2026 Honor of Kings World Cup debutant", 
        members: 5, 
        socials: { 
          twitter: "https://twitter.com/S8ULesports", 
          instagram: "https://www.instagram.com/s8ul.esports", 
          youtube: "https://www.youtube.com/@S8UL" 
        }
      }
    ]
  }
};