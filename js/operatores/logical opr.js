// operatores             what is does                 example                             result

// &&                       and                        true && true                           true
// ||                        or                        true || false                           true
//  !                         Not                       !true                                   false


// 1. && (AND) - બંને શરતો સાચી હોવી જરૂરી છે
let isLoggedIn = true;
let hasSubscription = true;

if (isLoggedIn && hasSubscription) {
    console.log("Access granted to premium video!"); // આ ચાલશે
}

// 2. || (OR) - બેમાંથી કોઈ એક શરત સાચી હોય તો ચાલે
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("No office today, enjoy holiday!"); // આ ચાલશે
}

// 3. ! (NOT) - ટ્રુ/ફોલ્સ ઊંધું કરે છે
let isUserBanned = false;

if (!isUserBanned) {
    console.log("User can post comments."); // જો બેન ન હોય તો ચાલશે
}