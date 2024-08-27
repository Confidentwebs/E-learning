document.addEventListener("DOMContentLoaded", function() {
    // Simulate delay (remove this in actual implementation)
    setTimeout(function() {
        // Hide loading screen
        document.getElementById("loading-screen").style.display = "none";
        // Show content
        document.getElementById("content").style.display = "block";
    }, 2000); // Adjust the delay time as needed (in milliseconds)
});


// document.addEventListener("DOMContentLoaded", function() {
//     // Show the prompt on every reload
//     let showPrompt = prompt("Welcome to Learning Hub! This website is created to help techies find resources to learn their skills. Please note that we are only referring to the content, and we do not own the rights to it.");
// });

function toggleMenu() {
    console.log("Toggle menu function called");
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

function toggleSubMenu(event) {
    event.preventDefault(); // Prevent default behavior of link click
    var homeNavItem = event.target.parentElement;
    homeNavItem.classList.toggle('show-submenu');
}

// Close submenu when clicking outside of it
document.addEventListener('click', function(event) {
    var isClickInsideMenu = document.querySelector('.menu').contains(event.target);
    var isClickInsideHomeNavItem = document.querySelector('.menu li').contains(event.target);
    if (!isClickInsideMenu && !isClickInsideHomeNavItem) {
        document.querySelector('.menu li').classList.remove('show-submenu');
    }
});


// JavaScript for toggling submenu when clicking on the arrow
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('arrow')) {
        event.preventDefault(); // Prevent default behavior of link click
        var parentItem = event.target.parentElement.parentElement; // Get parent <li> of the arrow
        parentItem.classList.toggle('show-submenu'); // Toggle visibility of submenu
    }
});

var categoryItems = document.querySelectorAll('.category > a');
categoryItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        var categoryItem = event.target.parentElement;
        categoryItem.classList.toggle('active');
    });
});

function showHome() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
    <div>
                    <img src="LearnImage-removebg-preview.png" alt="Study Image" style="margin-left: 20%;">
                </div>
    <div>
    <h2>Welcome to EaziLearning Hub!</h2>
    <p>Our platform is dedicated to providing high-quality learning resources for various topics in technology and programming. Whether you're a beginner or an experienced developer, you'll find valuable content to enhance your skills and knowledge.</p>

    <h3>>Featured Courses</h3>
    <ul>
    <li><a href="#courses">HTML/CSS</a></li>
    <li><a href="#courses">JavaScript</a></li>
    <li><a href="#courses">Android Development</a></li>
    <li><a href="#courses">iOS Development</a></li>
    </ul>

    <h3>Learning Resources</h3>
    <p> Explore our vast collection of tutorials, articles, videos, and books curated from reputable sources to help you stay updated with industry trends.</p>

    <h3>Community</h3>
    <p>Join our vibrant community of learners where you can connect, collaborate, and share knowledge with like-minded individuals.</p>

    <h3>Upcoming Events</h3>
    <p>Don't miss out on our upcoming events, workshops, and webinars. Stay tuned for exciting learning opportunities!</p>

    <h3>Testimonials</h3>
    <p>Hear what our users have to say about their experience with EaziLearning Hub.</p>

    <h3>Get Started</h3>
    <p>Ready to embark on your learning journey? Sign up for an account, explore our courses, and unlock your potential today!</p>
</div>
    `;
}


 // Function to show page overview content
 function showPageOverview() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
    
    <h2>Welcome to EaziLearning Hub!</h2>
    <p>This is a platform dedicated to providing high-quality learning resources for various topics in technology and programming.</p>
    <p>Whether you're a beginner or an experienced developer, you'll find valuable content to enhance your skills and knowledge.</p>
    </div>
    <p>This platform is designed to cater to the diverse learning needs of individuals interested in technology and programming.</p>
    <div id="h3">
    <h3>What We Offer</h3>
    <ul>
        <li>Comprehensive courses covering various programming languages and technologies</li>
        <li>Interactive tutorials and practical exercises to reinforce learning</li>
        <li>Curated resources from reputable sources to stay updated with industry trends</li>
        <li>A supportive community where learners can connect, collaborate, and share knowledge</li>
        <li>Regularly updated content to ensure relevance and freshness</li>
    </ul></div>
    <h3>Our Mission</h3>
    <p>Our mission is to empower individuals to achieve their learning goals and advance their careers in technology. We strive to provide accessible, high-quality education that inspires lifelong learning and fosters a culture of continuous improvement.</p>
    <h3>Get Started</h3>
    <p>Ready to embark on your learning journey? Explore our courses, join our community, and unlock your potential today!</p>
</div>
            `;
}

// Function to show content overview content
function showContentOverview() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Content Overview</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}

function showWebDevelopment() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Learn Web Development</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showHtmlCss() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Learn HTML/CSS</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showJavascript() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Learn JavaScript</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showMobileAppDev() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Learn Mobile Development</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showAndroidDevevelopment() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Learn Android Development</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showIosDevelopment() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Learn iOS Development</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showYtTuts() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Youtube Videos for you</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showRecommended() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Recommended Sites</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showBooks() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Books To Read</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showAdditional() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Additional Materials</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showTechTalks() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Tech Talks</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showConference() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Tech Conferences For You</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showWebinars() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Webinars For You</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
function showBonusVideos() {
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Bonus Videos</h2>
        <p>This is the content of the content overviewgjgcvbv m.</p>
        <!-- Add more content as needed -->
    `;
}
