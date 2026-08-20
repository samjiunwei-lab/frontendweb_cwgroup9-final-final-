// ==========================================
// Tournament Data 
// Extracted into a separate file because:
// 1. tournament-details.html uses it to render tournament details dynamically.
// 2. userinfo.html uses it to convert tournament IDs from user registration records into readable match names and dates.
// ==========================================
const tournamentsData = {
    // The key, "pubg-terengganu" was the unique Tournament ID
    "pubg-terengganu": {
        game: "PUBG Mobile", gameLabel: "PUBG MOBILE", // gameLabel is used for tags/badges
        title: "MEL26 State League - PUBGM Terengganu",
        prize: "RM 3,000 Prize Pool",
        date: "30 August 2026", time: "12:00 AM +08",
        format: "4 vs 4", formatSub: "Squad registration allowed",
        map: "Erangel", mapSub: "Classic Battle Royale",
        host: "UTAR E-Sports Club", hostFollowers: "341 Followers",
        hostLogo: "images tournament-poster/esportlogo.jpg",
        region: "Terengganu, Malaysia",
        banner: "images tournament-poster/pubg-1.jpg",
        description: "The Terengganu leg of the MEL26 State League brings together the state's top PUBG Mobile squads for a shot at qualifying for the national finals. Teams battle across multiple maps in a points-based format, with the top squads advancing to the playoffs.",
        rules: [
            "Each squad must consist of exactly 4 registered players plus 1 optional substitute.",
            "Teaming with opponents or third-party assistance results in immediate disqualification.",
            "All players must check in at least 30 minutes before the scheduled start time.",
            "Emulator use is strictly prohibited; mobile devices only.",
            "Match results are final once confirmed by the tournament admin."
        ],
        prizes: [ ["1st Place", "RM 1,500"], ["2nd Place", "RM 900"], ["3rd Place", "RM 600"] ],
        schedule: [
            "Registration closes — 29 August 2026, 11:59 PM",
            "Check-in opens — 30 August 2026, 11:30 PM",
            "Group Stage — 30 August 2026, 12:00 AM",
            "Finals — 30 August 2026, 8:00 PM"
        ],
        // Registration tracking and status
        registered: 0, capacity: 128, status: "open", // status can be "open" or "closed"
        contactEmail: "esports.terengganu@utar.edu.my", contactDiscord: "discord.gg/utar-esports"
    },

    "pubg-sarawak": {
        game: "PUBG Mobile", gameLabel: "PUBG MOBILE",
        title: "MEL26 State League - PUBGM Sarawak",
        prize: "RM 3,000 Prize Pool",
        date: "21 August 2026", time: "12:00 AM +08",
        format: "4 vs 4", formatSub: "Squad registration allowed",
        map: "Miramar", mapSub: "Classic Battle Royale",
        host: "UTAR E-Sports Club", hostFollowers: "341 Followers",
        hostLogo: "images tournament-poster/esportlogo.jpg",
        region: "Sarawak, Malaysia",
        banner: "images tournament-poster/pubg-2.jpg",
        description: "Sarawak squads compete for state supremacy in this leg of the MEL26 State League. With 45 teams already locked in, expect a fiercely contested points race across the group stage before the top rosters meet in the grand finals.",
        rules: [
            "Each squad must consist of exactly 4 registered players plus 1 optional substitute.",
            "Teaming with opponents or third-party assistance results in immediate disqualification.",
            "All players must check in at least 30 minutes before the scheduled start time.",
            "Emulator use is strictly prohibited; mobile devices only.",
            "Match results are final once confirmed by the tournament admin."
        ],
        prizes: [ ["1st Place", "RM 1,500"], ["2nd Place", "RM 900"], ["3rd Place", "RM 600"] ],
        schedule: [
            "Registration closes — 18 August 2026, 11:59 PM",
            "Check-in opens — 21 August 2026, 11:30 PM",
            "Group Stage — 21 August 2026, 12:00 AM",
            "Finals — 23 August 2026, 8:00 PM"
        ],
        registered: 45, capacity: 128, status: "open",
        contactEmail: "esports.sarawak@utar.edu.my", contactDiscord: "discord.gg/utar-esports"
    },

    "pubg-sabah": {
        game: "PUBG Mobile", gameLabel: "PUBG MOBILE",
        title: "MEL26 State League - PUBGM Sabah",
        prize: "RM 3,000 Prize Pool",
        date: "11 August 2026", time: "12:00 AM +08",
        format: "4 vs 4", formatSub: "Squad registration allowed",
        map: "Sanhok", mapSub: "Classic Battle Royale",
        host: "UTAR E-Sports Club", hostFollowers: "341 Followers",
        hostLogo: "images tournament-poster/esportlogo.jpg",
        region: "Sabah, Malaysia",
        banner: "images tournament-poster/pubg-3.webp",
        description: "Registration is almost full for the Sabah leg of the MEL26 State League. With 112 of 128 slots taken, this is shaping up to be the most competitive regional bracket yet, with several returning champion squads confirmed.",
        rules: [
            "Each squad must consist of exactly 4 registered players plus 1 optional substitute.",
            "Teaming with opponents or third-party assistance results in immediate disqualification.",
            "All players must check in at least 30 minutes before the scheduled start time.",
            "Emulator use is strictly prohibited; mobile devices only.",
            "Match results are final once confirmed by the tournament admin."
        ],
        prizes: [ ["1st Place", "RM 1,500"], ["2nd Place", "RM 900"], ["3rd Place", "RM 600"] ],
        schedule: [
            "Registration closes — 08 August 2026, 11:59 PM",
            "Check-in opens — 11 August 2026, 11:30 PM",
            "Group Stage — 11 August 2026, 12:00 AM",
            "Finals — 13 August 2026, 8:00 PM"
        ],
        registered: 112, capacity: 128, status: "open",
        contactEmail: "esports.sabah@utar.edu.my", contactDiscord: "discord.gg/utar-esports"
    },

    "lol-semifinals": {
        game: "League of Legends", gameLabel: "LEAGUE OF LEGENDS",
        title: "UTAR Collegiate Championship - Semi Finals",
        prize: "RM 5,000 Prize Pool",
        date: "05 September 2026", time: "2:00 PM +08",
        format: "5 vs 5", formatSub: "Team registration only",
        map: "Summoner's Rift", mapSub: "Tournament Draft",
        host: "UTAR E-Sports Club", hostFollowers: "341 Followers",
        hostLogo: "images tournament-poster/esportlogo.jpg",
        region: "National (Malaysia)",
        banner: "images tournament-poster/lol-1.jpg",
        description: "The semi-final stage of the UTAR Collegiate Championship — the top 16 teams from the regular season face off in a best-of-three bracket. Registration is full; spectator seating and livestream details will be announced closer to the date.",
        rules: [
            "Rosters are locked; no substitutions after the group stage without admin approval.",
            "Matches are best-of-three, tournament draft pick/ban.",
            "Each team must have a designated team captain present in the pre-match lobby.",
            "Disconnects are handled per official Riot tournament ruleset pause procedures.",
            "Unsportsmanlike conduct may result in forfeiture of the match."
        ],
        prizes: [ ["1st Place", "RM 2,500"], ["2nd Place", "RM 1,500"], ["3rd Place", "RM 1,000"] ],
        schedule: [
            "Team check-in — 05 September 2026, 1:00 PM",
            "Semi Final 1 — 05 September 2026, 2:00 PM",
            "Semi Final 2 — 05 September 2026, 5:00 PM",
            "Grand Final — 12 September 2026, 3:00 PM"
        ],
        registered: 16, capacity: 16, status: "closed", // Event is full, so status is closed
        contactEmail: "esports.lol@utar.edu.my", contactDiscord: "discord.gg/utar-esports"
    },

    "lol-World Championship 2026": {
        game: "League of Legends", gameLabel: "LEAGUE OF LEGENDS",
        title: "League of Legends World Championship 2026",
        prize: "RM 88,888 Prize Pool",
        date: "03 December 2026", time: "8:00 PM +08",
        format: "5 vs 5", formatSub: "Team registration only",
        map: "Summoner's Rift", mapSub: "Tournament Draft",
        host: "Riot Games", hostFollowers: "3 Billion Followers",
        hostLogo: "images tournament-poster/lollogo-2.png",
        region: "World (Singapore)",
        banner: "images tournament-poster/lol-2.webp",
        description: "The League of Legends World Championship 2026 of the Riot Games Championship — the top 16 teams from the regular season face off in a best-of-three bracket. Registration is full; spectator seating and livestream details will be announced closer to the date.",
        rules: [
            "Rosters are locked; no substitutions after the group stage without admin approval.",
            "Matches are best-of-three, tournament draft pick/ban.",
            "Each team must have a designated team captain present in the pre-match lobby.",
            "Disconnects are handled per official Riot tournament ruleset pause procedures.",
            "Unsportsmanlike conduct may result in forfeiture of the match."
        ],
        prizes: [ ["1st Place", "RM 58,888"], ["2nd Place", "RM 20,000"], ["3rd Place", "RM 10,000"] ],
        schedule: [
            "Team check-in — 03 December 2026, 18:00 PM",
            "Semi Final 1 — 03 December 2026, 20:00 PM",
            "Semi Final 2 — 03 December 2026, 22:00 PM",
            "Grand Final — 09 December 2026, 3:00 PM"
        ],
        registered: 160, capacity: 160, status: "closed",
        contactEmail: "riot.lol@gmail.com", contactDiscord: "discord.gg/Riot-Games"
    },

    "valorant-groupa": {
        game: "VALORANT", gameLabel: "VALORANT",
        title: "VCT Campus Open - Group Stage A",
        prize: "RM 1,500 Prize Pool",
        date: "12 September 2026", time: "10:00 AM +08",
        format: "5 vs 5", formatSub: "Team registration only",
        map: "Ascent", mapSub: "Standard Competitive",
        host: "UTAR E-Sports Club", hostFollowers: "341 Followers",
        hostLogo: "images tournament-poster/esportlogo.jpg",
        region: "Klang Valley, Malaysia",
        banner: "images tournament-poster/valorant-1.jpg",
        description: "Group Stage A of the VCT Campus Open kicks off the road to the national campus finals. Eight teams are already confirmed, competing round-robin for the two qualification spots into the playoff bracket.",
        rules: [
            "Each roster consists of 5 starters and up to 2 substitutes.",
            "Maps are picked using standard competitive veto procedure.",
            "All players must be currently enrolled university students with valid ID.",
            "Cheating software or hardware of any kind results in a permanent ban.",
            "Match disputes must be raised within 10 minutes of the match ending."
        ],
        prizes: [ ["1st Place", "RM 800"], ["2nd Place", "RM 450"], ["3rd Place", "RM 250"] ],
        schedule: [
            "Registration closes — 08 September 2026, 11:59 PM",
            "Check-in opens — 12 September 2026, 9:30 AM",
            "Round Robin — 12 September 2026, 10:00 AM",
            "Playoffs — 19 September 2026, 10:00 AM"
        ],
        registered: 24, capacity: 32, status: "open",
        contactEmail: "esports.valorant@utar.edu.my", contactDiscord: "discord.gg/utar-esports"
    },

    "mlbb-clash": {
        game: "Mobile Legends: Bang Bang", gameLabel: "MOBILE LEGENDS",
        title: "Moonton Student Clash Night",
        prize: "RM 1,000 Prize Pool",
        date: "28 August 2026", time: "8:00 PM +08",
        format: "5 vs 5", formatSub: "Team registration only",
        map: "Land of Dawn", mapSub: "Ranked Rules",
        host: "UTAR E-Sports Club", hostFollowers: "341 Followers",
        hostLogo: "images tournament-poster/esportlogo.jpg",
        region: "National (Malaysia)",
        banner: "images tournament-poster/mlbb-1.jpg",
        description: "A single-night knockout clash for Mobile Legends squads, run in partnership with Moonton's student community program. Fast-paced, single-elimination format designed to crown a champion in one evening.",
        rules: [
            "Each team fields 5 starters with 1 optional substitute.",
            "Single elimination — one loss and you're out.",
            "Draft pick mode, mirror match rule applies.",
            "Players must join the official Discord voice channel during their match.",
            "No-shows after a 10-minute grace period forfeit the match."
        ],
        prizes: [ ["1st Place", "RM 550"], ["2nd Place", "RM 300"], ["3rd Place", "RM 150"] ],
        schedule: [
            "Registration closes — 26 August 2026, 11:59 PM",
            "Check-in opens — 28 August 2026, 7:30 PM",
            "Knockout Rounds — 28 August 2026, 8:00 PM",
            "Grand Final — 28 August 2026, 11:00 PM"
        ],
        registered: 58, capacity: 64, status: "open",
        contactEmail: "esports.mlbb@utar.edu.my", contactDiscord: "discord.gg/utar-esports"
    },

    "idv-abyss": {
        game: "Identity V", gameLabel: "Identity V",
        title: "Identity V's Call of the Abyss V",
        prize: "RM 1,000 Prize Pool",
        date: "28 December 2026", time: "2:00 PM +08",
        format: "5 vs 5", formatSub: "Team registration only",
        map: "Tournament Map Pool", mapSub: "Custom Match Rules",
        host: "UTAR E-Sports Club", hostFollowers: "341 Followers",
        hostLogo: "images tournament-poster/esportlogo.jpg",
        region: "National (Japan)",
        banner: "images tournament-poster/idv-1.webp",
        description: "Join the official Identity V's Call of the Abyss V tournament hosted by UTAR E-Sports Club! Assemble your squad of 5 (1 Hunter & 4 Survivors) to compete for a total prize pool of RM 1,000. Test your strategies, outsmart your opponents, and rise to the top in this thrilling knockout tournament.",
        rules: [
            "Each team fields 5 starters (1 Hunter + 4 Survivors) with 1 optional substitute.",
            "Single elimination one loss and you're out.",
            "Draft pick mode, character bans, and custom match rules apply.",
            "Players must join the official Discord voice channel during their match.",
            "No-shows after a 10-minute grace period forfeit the match."
        ],
        prizes: [ ["1st Place", "RM 550"], ["2nd Place", "RM 300"], ["3rd Place", "RM 150"] ],
        schedule: [
            "Registration closes — 28 December 2026, 02:00 PM",
            "Check-in opens — 28 December 2026, 02:00 PM",
            "Knockout Rounds — 28 December 2026, 06:00 PM",
            "Grand Final — 28 December 2026, 10:00 PM"
        ],
        registered: 58, capacity: 64, status: "open",
        contactEmail: "esports.idv@utar.edu.my", contactDiscord: "discord.gg/utar-esports"
    },

     "hok-invi": {
         game: "Honor of Kings", gameLabel: "Honor of Kings",
         title: "Honor of Kings Invitational S1",
         prize: "RM 1,000 Prize Pool",
         date: "20 August 2026", time: "8:00 PM +08",
         format: "5 vs 5", formatSub: "Team registration only",
         map: "Land of Dawn", mapSub: "Ranked Rules",
         host: "UTAR E-Sports Club", hostFollowers: "341 Followers",
         hostLogo: "images/esportlogo.jpg",
         region: "National (Singapore)",
         banner: "images/hok-1.jpg",
         description: "A single-night knockout clash for Honor of Kings squads, run in partnership with Moonton's student community program. Fast-paced, single-elimination format designed to crown a champion in one evening.",
         rules: [
             "Each team fields 5 starters with 1 optional substitute.",
             "Single elimination — one loss and you're out.",
             "Draft pick mode, mirror match rule applies.",
             "Players must join the official Discord voice channel during their match.",
             "No-shows after a 10-minute grace period forfeit the match."
         ],
         prizes: [ ["1st Place", "RM 5500"], ["2nd Place", "RM 3000"], ["3rd Place", "RM 1500"] ],
         schedule: [
             "Registration closes — 19 August 2026, 11:59 PM",
             "Check-in opens — 20 August 2026, 7:30 PM",
             "Knockout Rounds — 20 August 2026, 8:00 PM",
             "Grand Final — 20 August 2026, 11:00 PM"
         ],
         registered: 38, capacity: 64, status: "open",
         contactEmail: "esports.hok@utar.edu.my", contactDiscord: "discord.gg/utar-esports"
     }
};