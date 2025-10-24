// Enhanced Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarClose = document.getElementById('navbarClose');
    const navbarMenu = document.getElementById('navbarMenu');
    const dropdowns = document.querySelectorAll('.dropdown');
    const body = document.body;
    
    // Toggle mobile menu
    function toggleMenu() {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
    
    // Close mobile menu
    function closeMenu() {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
        body.classList.remove('menu-open');
        
        // Close all dropdowns
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
    
    // Toggle menu on hamburger click
    navbarToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu on close button click
    navbarClose.addEventListener('click', function(e) {
        e.stopPropagation();
        closeMenu();
    });
    
    // Handle dropdowns on mobile
    function handleDropdowns() {
        if (window.innerWidth <= 968) {
            dropdowns.forEach(dropdown => {
                const link = dropdown.querySelector('.navbar-link');
                
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                });
            });
        }
    }
    
    // Initialize dropdown handling
    handleDropdowns();
    
    // Close mobile menu when clicking on a link (navigation)
    const navLinks = document.querySelectorAll('.navbar-link:not(.dropdown .navbar-link)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 968) {
                closeMenu();
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbarMenu.contains(e.target) && !navbarToggle.contains(e.target) && navbarMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Close menu on escape key press
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Update dropdown handling on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 968) {
            // Reset menu state on desktop
            closeMenu();
            
            // Reset dropdowns on desktop
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        } else {
            // Re-initialize dropdown handling on mobile
            handleDropdowns();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu after clicking a link
                    if (window.innerWidth <= 968) {
                        closeMenu();
                    }
                }
            }
        });
    });
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Nested auth tabs
    const authTabButtons = document.querySelectorAll('.auth-tab-btn');
    const authContents = document.querySelectorAll('.auth-content');

    
    authTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            authTabButtons.forEach(btn => btn.classList.remove('active'));
            authContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const authTabId = button.getAttribute('data-auth-tab') + 'Tab';
            document.getElementById(authTabId).classList.add('active');
        });
    });

    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.getElementById('main-nav').classList.toggle('show');
    });

    // Read More Button Functionality
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const additionalContent = this.nextElementSibling;
            const isExpanded = additionalContent.style.display === 'block';
            
            // Toggle content visibility
            additionalContent.style.display = isExpanded ? 'none' : 'block';
            
            // Update button text and icon
            this.innerHTML = isExpanded ? 
                'Read More <i class="fas fa-chevron-down"></i>' : 
                'Read Less <i class="fas fa-chevron-up"></i>';
            
            // Toggle active class
            this.classList.toggle('active');
        });
    });
});

    // ... rest of your existing prayer timetable and ayah functionality ...


// Prayer Timetable Functionality
const timetable = {
    "July": {
        "1": ["2:52", "13:31", "17:57", "22:00", "23:30"],
        "2": ["2:53", "13:31", "17:57", "22:00", "23:30"],
        "3": ["2:54", "13:31", "17:57", "21:59", "23:29"],
        "4": ["2:55", "13:31", "17:57", "21:59", "23:29"],
        "5": ["2:56", "13:31", "17:56", "21:58", "23:28"],
        "6": ["2:57", "13:31", "17:56", "21:58", "23:28"],
        "7": ["2:58", "13:32", "17:56", "21:57", "23:27"],
        "8": ["3:00", "13:32", "17:56", "21:56", "23:26"],
        "9": ["3:01", "13:32", "17:56", "21:56", "23:26"],
        "10": ["3:03", "13:32", "17:56", "21:55", "23:26"],
        "11": ["3:04", "13:32", "17:56", "21:54", "23:26"],
        "12": ["3:06", "13:32", "17:55", "21:53", "23:25"],
        "13": ["3:07", "13:32", "17:55", "21:52", "23:25"],
        "14": ["3:09", "13:32", "17:55", "21:51", "23:25"],
        "15": ["3:11", "13:33", "17:55", "21:50", "23:25"],
        "16": ["3:13", "13:33", "17:54", "21:49", "23:25"],
        "17": ["3:14", "13:33", "17:54", "21:48", "23:24"],
        "18": ["3:16", "13:33", "17:54", "21:47", "23:24"],
        "19": ["3:18", "13:33", "17:53", "21:45", "23:24"],
        "20": ["3:20", "13:33", "17:53", "21:44", "23:24"],
        "21": ["3:22", "13:33", "17:52", "21:43", "23:23"],
        "22": ["3:24", "13:33", "17:52", "21:42", "23:23"],
        "23": ["3:26", "13:33", "17:51", "21:40", "23:23"],
        "24": ["3:28", "13:33", "17:51", "21:39", "23:23"],
        "25": ["3:30", "13:33", "17:50", "21:37", "23:23"],
        "26": ["3:32", "13:33", "17:50", "21:36", "23:22"],
        "27": ["3:34", "13:33", "17:49", "21:34", "23:20"],
        "28": ["3:36", "13:33", "17:49", "21:33", "23:18"],
        "29": ["3:38", "13:33", "17:48", "21:31", "23:16"],
        "30": ["3:40", "13:33", "17:47", "21:29", "23:14"],
        "31": ["3:42", "13:33", "17:47", "21:28", "23:12"]
    },
    "August": {
        "1": ["3:44", "13:33", "17:46", "21:26", "23:10"],
        "2": ["3:46", "13:33", "17:45", "21:24", "23:08"],
        "3": ["3:49", "13:33", "17:44", "21:22", "23:05"],
        "4": ["3:51", "13:33", "17:44", "21:21", "23:03"],
        "5": ["3:53", "13:33", "17:43", "21:19", "23:01"],
        "6": ["3:55", "13:33", "17:42", "21:17", "22:59"],
        "7": ["3:57", "13:33", "17:41", "21:15", "22:57"],
        "8": ["3:59", "13:33", "17:40", "21:13", "22:54"],
        "9": ["4:01", "13:32", "17:39", "21:11", "22:52"],
        "10": ["4:04", "13:32", "17:38", "21:09", "22:50"],
        "11": ["4:06", "13:32", "17:38", "21:07", "22:47"],
        "12": ["4:08", "13:32", "17:37", "21:05", "22:45"],
        "13": ["4:10", "13:32", "17:36", "21:03", "22:43"],
        "14": ["4:12", "13:32", "17:35", "21:01", "22:40"],
        "15": ["4:14", "13:32", "17:33", "20:59", "22:38"],
        "16": ["4:16", "13:31", "17:32", "20:57", "22:35"],
        "17": ["4:19", "13:31", "17:31", "20:55", "22:33"],
        "18": ["4:21", "13:31", "17:30", "20:53", "22:30"],
        "19": ["4:23", "13:31", "17:29", "20:51", "22:28"],
        "20": ["4:25", "13:31", "17:28", "20:48", "22:26"],
        "21": ["4:27", "13:30", "17:27", "20:46", "22:23"],
        "22": ["4:29", "13:30", "17:25", "20:44", "22:21"],
        "23": ["4:31", "13:30", "17:24", "20:42", "22:18"],
        "24": ["4:33", "13:30", "17:23", "20:40", "22:16"],
        "25": ["4:35", "13:30", "17:22", "20:37", "22:13"],
        "26": ["4:37", "13:29", "17:20", "20:35", "22:11"],
        "27": ["4:39", "13:29", "17:19", "20:33", "22:08"],
        "28": ["4:41", "13:29", "17:18", "20:31", "22:06"],
        "29": ["4:43", "13:28", "17:16", "20:28", "22:03"],
        "30": ["4:45", "13:28", "17:15", "20:26", "22:00"],
        "31": ["4:47", "13:28", "17:13", "20:24", "21:58"]
    },
    "September": {
        "1": ["4:49", "13:28", "17:12", "20:21", "21:55"],
        "2": ["4:51", "13:27", "17:11", "20:19", "21:53"],
        "3": ["4:53", "13:27", "17:09", "20:17", "21:50"],
        "4": ["4:55", "13:27", "17:08", "20:14", "21:48"],
        "5": ["4:57", "13:26", "17:06", "20:12", "21:45"],
        "6": ["4:59", "13:26", "17:05", "20:09", "21:43"],
        "7": ["5:01", "13:26", "17:03", "20:07", "21:40"],
        "8": ["5:03", "13:25", "17:02", "20:05", "21:38"],
        "9": ["5:05", "13:25", "17:00", "20:02", "21:35"],
        "10": ["5:07", "13:25", "16:58", "20:00", "21:32"],
        "11": ["5:09", "13:24", "16:57", "19:57", "21:30"],
        "12": ["5:10", "13:24", "16:55", "19:55", "21:27"],
        "13": ["5:12", "13:24", "16:53", "19:52", "21:25"],
        "14": ["5:14", "13:23", "16:52", "19:50", "21:22"],
        "15": ["5:16", "13:23", "16:50", "19:48", "21:20"],
        "16": ["5:18", "13:22", "16:48", "19:45", "21:17"],
        "17": ["5:20", "13:22", "16:47", "19:43", "21:15"],
        "18": ["5:21", "13:22", "16:45", "19:40", "21:12"],
        "19": ["5:23", "13:21", "16:43", "19:38", "21:10"],
        "20": ["5:25", "13:21", "16:42", "19:35", "21:07"],
        "21": ["5:27", "13:21", "16:40", "19:33", "21:05"],
        "22": ["5:28", "13:20", "16:38", "19:30", "21:02"],
        "23": ["5:30", "13:20", "16:36", "19:28", "21:00"],
        "24": ["5:32", "13:20", "16:35", "19:25", "20:57"],
        "25": ["5:34", "13:19", "16:33", "19:23", "20:55"],
        "26": ["5:35", "13:19", "16:31", "19:20", "20:52"],
        "27": ["5:37", "13:18", "16:29", "19:18", "20:50"],
        "28": ["5:39", "13:18", "16:27", "19:16", "20:47"],
        "29": ["5:41", "13:18", "16:26", "19:13", "20:45"],
        "30": ["5:42", "13:17", "16:24", "19:11", "20:42"]
    },
    "October": {
        "1": ["5:44", "13:17", "16:22", "19:08", "20:40"],
        "2": ["5:46", "13:17", "16:20", "19:06", "20:38"],
        "3": ["5:47", "13:16", "16:18", "19:03", "20:35"],
        "4": ["5:49", "13:16", "16:17", "19:01", "20:33"],
        "5": ["5:51", "13:16", "16:15", "18:58", "20:31"],
        "6": ["5:52", "13:15", "16:13", "18:56", "20:28"],
        "7": ["5:54", "13:15", "16:11", "18:54", "20:26"],
        "8": ["5:56", "13:15", "16:09", "18:51", "20:24"],
        "9": ["5:57", "13:14", "16:07", "18:49", "20:21"],
        "10": ["5:59", "13:14", "16:06", "18:46", "20:19"],
        "11": ["6:01", "13:14", "16:04", "18:44", "20:17"],
        "12": ["6:02", "13:13", "16:02", "18:42", "20:15"],
        "13": ["6:04", "13:13", "16:00", "18:39", "20:12"],
        "14": ["6:06", "13:13", "15:58", "18:37", "20:10"],
        "15": ["6:07", "13:13", "15:57", "18:35", "20:08"],
        "16": ["6:09", "13:12", "15:55", "18:32", "20:06"],
        "17": ["6:11", "13:12", "15:53", "18:30", "20:04"],
        "18": ["6:12", "13:12", "15:51", "18:28", "20:02"],
        "19": ["6:14", "13:12", "15:50", "18:26", "20:00"],
        "20": ["6:16", "13:12", "15:48", "18:23", "19:58"],
        "21": ["6:17", "13:11", "15:46", "18:21", "19:56"],
        "22": ["6:19", "13:11", "15:44", "18:19", "19:54"],
        "23": ["6:21", "13:11", "15:43", "18:17", "19:52"],
        "24": ["6:22", "13:11", "15:41", "18:15", "19:50"],
        "25": ["6:24", "13:11", "15:39", "18:13", "19:48"],
        "26": ["5:26", "12:11", "14:38", "17:10", "18:46"],
        "27": ["5:27", "12:11", "14:36", "17:08", "18:44"],
        "28": ["5:29", "12:10", "14:34", "17:06", "18:42"],
        "29": ["5:31", "12:10", "14:33", "17:04", "18:40"],
        "30": ["5:32", "12:10", "14:31", "17:02", "18:39"],
        "31": ["5:34", "12:10", "14:30", "17:00", "18:37"]
    },
    "November": {
        "1": ["5:35", "12:10", "14:28", "16:58", "18:35"],
        "2": ["5:37", "12:10", "14:27", "16:56", "18:33"],
        "3": ["5:39", "12:10", "14:25", "16:54", "18:32"],
        "4": ["5:40", "12:10", "14:24", "16:52", "18:30"],
        "5": ["5:42", "12:10", "14:22", "16:51", "18:29"],
        "6": ["5:44", "12:10", "14:21", "16:49", "18:27"],
        "7": ["5:45", "12:10", "14:19", "16:47", "18:26"],
        "8": ["5:47", "12:10", "14:18", "16:45", "18:24"],
        "9": ["5:48", "12:11", "14:17", "16:43", "18:23"],
        "10": ["5:50", "12:11", "14:15", "16:42", "18:21"],
        "11": ["5:52", "12:11", "14:14", "16:40", "18:20"],
        "12": ["5:53", "12:11", "14:13", "16:38", "18:18"],
        "13": ["5:55", "12:11", "14:12", "16:37", "18:17"],
        "14": ["5:56", "12:11", "14:10", "16:35", "18:16"],
        "15": ["5:58", "12:11", "14:09", "16:34", "18:15"],
        "16": ["6:00", "12:12", "14:08", "16:32", "18:13"],
        "17": ["6:01", "12:12", "14:07", "16:31", "18:12"],
        "18": ["6:03", "12:12", "14:06", "16:29", "18:11"],
        "19": ["6:04", "12:12", "14:05", "16:28", "18:10"],
        "20": ["6:06", "12:12", "14:04", "16:27", "18:09"],
        "21": ["6:07", "12:13", "14:03", "16:25", "18:08"],
        "22": ["6:09", "12:13", "14:02", "16:24", "18:07"],
        "23": ["6:10", "12:13", "14:01", "16:23", "18:06"],
        "24": ["6:12", "12:14", "14:01", "16:22", "18:05"],
        "25": ["6:13", "12:14", "14:00", "16:21", "18:05"],
        "26": ["6:14", "12:14", "13:59", "16:20", "18:04"],
        "27": ["6:16", "12:15", "13:58", "16:19", "18:03"],
        "28": ["6:17", "12:15", "13:58", "16:18", "18:02"],
        "29": ["6:19", "12:15", "13:57", "16:17", "18:02"],
        "30": ["6:20", "12:16", "13:56", "16:16", "18:01"]
    },
    "December": {
        "1": ["6:21", "12:16", "13:56", "16:15", "18:01"],
        "2": ["6:22", "12:16", "13:55", "16:15", "18:00"],
        "3": ["6:24", "12:17", "13:55", "16:14", "18:00"],
        "4": ["6:25", "12:17", "13:55", "16:13", "17:59"],
        "5": ["6:26", "12:18", "13:54", "16:13", "17:59"],
        "6": ["6:27", "12:18", "13:54", "16:12", "17:59"],
        "7": ["6:28", "12:18", "13:54", "16:12", "17:58"],
        "8": ["6:29", "12:19", "13:54", "16:11", "17:58"],
        "9": ["6:30", "12:19", "13:53", "16:11", "17:58"],
        "10": ["6:31", "12:20", "13:53", "16:11", "17:58"],
        "11": ["6:32", "12:20", "13:53", "16:10", "17:58"],
        "12": ["6:33", "12:21", "13:53", "16:10", "17:58"],
        "13": ["6:34", "12:21", "13:53", "16:10", "17:58"],
        "14": ["6:35", "12:22", "13:53", "16:10", "17:58"],
        "15": ["6:36", "12:22", "13:53", "16:10", "17:58"],
        "16": ["6:37", "12:23", "13:54", "16:10", "17:58"],
        "17": ["6:38", "12:23", "13:54", "16:10", "17:58"],
        "18": ["6:38", "12:24", "13:54", "16:10", "17:58"],
        "19": ["6:39", "12:24", "13:54", "16:11", "17:59"],
        "20": ["6:40", "12:25", "13:55", "16:11", "17:59"],
        "21": ["6:40", "12:25", "13:55", "16:11", "18:00"],
        "22": ["6:41", "12:26", "13:56", "16:12", "18:00"],
        "23": ["6:41", "12:26", "13:56", "16:12", "18:00"],
        "24": ["6:42", "12:27", "13:57", "16:13", "18:01"],
        "25": ["6:42", "12:27", "13:57", "16:13", "18:02"],
        "26": ["6:42", "12:28", "13:58", "16:14", "18:02"],
        "27": ["6:43", "12:28", "13:58", "16:15", "18:03"],
        "28": ["6:43", "12:29", "13:59", "16:16", "18:04"],
        "29": ["6:43", "12:29", "14:00", "16:16", "18:04"],
        "30": ["6:43", "12:30", "14:01", "16:17", "18:05"],
        "31": ["6:43", "12:30", "14:01", "16:18", "18:06"]
    }
};

function updateTimetable() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth(); // 0-11
    const year = now.getFullYear();
    
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];
    const currentMonth = monthNames[month];
    
    document.getElementById("todayDate").textContent = now.toDateString();

    // Check if we have data for this month and day
    if (!timetable[currentMonth] || !timetable[currentMonth][day]) {
        document.getElementById("nextPrayer").textContent = "Timetable not available for this date.";
        return;
    }

    const [fajr, dhuhr, asr, maghrib, isha] = timetable[currentMonth][day];

    // Update adhan times
    document.getElementById("FajrAdhan").textContent = fajr;
    document.getElementById("DhuhrAdhan").textContent = dhuhr;
    document.getElementById("AsrAdhan").textContent = asr;
    document.getElementById("MaghribAdhan").textContent = maghrib;
    document.getElementById("IshaAdhan").textContent = isha;

    updateNextPrayer(fajr, dhuhr, asr, maghrib, isha);
}

function updateNextPrayer(fajr, dhuhr, asr, maghrib, isha) {
    const now = new Date();
    const prayers = [
        { name: "Fajr", time: fajr },
        { name: "Dhuhr", time: dhuhr },
        { name: "Asr", time: asr },
        { name: "Maghrib", time: maghrib },
        { name: "Isha", time: isha }
    ];

    // Find the next prayer
    for (const prayer of prayers) {
        const [h, m] = prayer.time.split(":").map(Number);
        const prayerTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
        
        if (now < prayerTime) {
            updateCountdown(prayerTime, prayer.name);
            return;
        }
    }

    // If all prayers have passed for today, next is Fajr tomorrow
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [h, m] = fajr.split(":").map(Number);
    const fajrTomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), h, m);
    
    updateCountdown(fajrTomorrow, "Fajr (tomorrow)");
}

function updateCountdown(targetTime, prayerName) {
    function update() {
        const now = new Date();
        const diff = Math.floor((targetTime - now) / 1000);
        
        if (diff <= 0) {
            clearInterval(interval);
            updateTimetable(); // Refresh the timetable
            return;
        }

        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        const pad = n => n.toString().padStart(2, '0');
        
        document.getElementById("nextPrayer").textContent = 
            `Next prayer: ${prayerName} in ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
    }

    update(); // Initial call
    const interval = setInterval(update, 1000); // Update every second
}

function updateHijriDate() {
    try {
        const today = new Date();
        const hijriDate = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(today);

        document.getElementById("hijriDate").textContent = `Hijri Date: ${hijriDate}`;
    } catch (error) {
        // Fallback: use a simple calculation or display a static message
        document.getElementById("hijriDate").textContent = "Hijri date not available";
    }
}

// Initialize
updateTimetable();
updateHijriDate();
// Update the timetable every minute to catch prayer time changes
setInterval(updateTimetable, 60000);

// Ayah of the Day Functionality
document.addEventListener('DOMContentLoaded', function() {
    const ayahs = [
        {
            arabic: "وَإِن تَصْبِرُوا۟ وَتَتَّقُوا۟ فَإِنَّ ذَٰلِكَ مِنْ عَزْمِ ٱلْأُمُورِ",
            translation: "And if you are patient and fear Allah, indeed, that is of the matters requiring resolve.",
            reference: "Surah Al-Imran (3:186)"
        },
        {
            arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
            translation: "Indeed, with hardship comes ease.",
            reference: "Surah Ash-Sharh (94:6)"
        },
        {
            arabic: "وَٱذْكُرُوا۟ نِعْمَةَ ٱللَّهِ عَلَيْكُمْ",
            translation: "And remember the favor of Allah upon you.",
            reference: "Surah Al-Baqarah (2:231)"
        },
        {
            arabic: "وَتَعَاوَنُوا۟ عَلَى ٱلْبِرِّ وَٱلتَّقْوَىٰ",
            translation: "And cooperate in righteousness and piety.",
            reference: "Surah Al-Ma'idah (5:2)"
        },
        {
            arabic: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱصْبِرُوا۟ وَصَابِرُوا۟",
            translation: "O you who have believed, persevere and endure.",
            reference: "Surah Al-Imran (3:200)"
        },
        {
            arabic: "وَٱلَّذِينَ جَٰهَدُوا۟ فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
            translation: "And those who strive for Us - We will surely guide them to Our ways.",
            reference: "Surah Al-Ankabut (29:69)"
        }
    ];

    // Get today's ayah based on date (consistent daily)
    function getDailyAyah() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        return ayahs[dayOfYear % ayahs.length];
    }

    // Display ayah
    function displayAyah(ayah) {
        document.getElementById('ayahArabic').textContent = ayah.arabic;
        document.getElementById('ayahTranslation').textContent = `"${ayah.translation}"`;
        document.getElementById('ayahReference').textContent = ayah.reference;
    }

    // Initial display
    displayAyah(getDailyAyah());

    // Refresh button - shows random ayah
    document.getElementById('refreshAyah').addEventListener('click', function() {
        const randomAyah = ayahs[Math.floor(Math.random() * ayahs.length)];
        displayAyah(randomAyah);
    });
});