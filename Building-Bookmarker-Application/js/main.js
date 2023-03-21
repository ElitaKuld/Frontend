// Listen for Form Submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
    //Prevent form from submitting
    e.preventDefault();

    // Get form values
    let siteName = document.getElementById("siteName").value;
    let siteUrl = document.getElementById("siteUrl").value;

    //Validate form
    if (!validateForm(siteName, siteUrl)) {
        return false;
    }

    let bookmark = {
        name: siteName,
        url: siteUrl
    }

    //Local Storage

    //Test if bookmarks is null
    if (localStorage.getItem("bookmarks") === null) {
        // Initiate array
        let bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to Local Storage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from local storage
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to LocalStorage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    //Clear form by resetting it
    document.getElementById("myForm").reset();

    // Re-fetch bookmarks
    fetchBookmarks();

}

function deleteBookmark(url) {
    // Get bookmarks from localStorage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Loop through the bookmarks
    for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            // Remove from array
            bookmarks.splice(i, 1);
        }
    }
    // Re-set back to LocalStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    // Re-fetch bookmarks
    fetchBookmarks();
}

//Fetch bookmarks
function fetchBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    //Get output ID
    let bookmarksResults = document.getElementById("bookmarksResults");

    //Build output
    bookmarksResults.innerHTML = "";
    for (let i = 0; i < bookmarks.length; i++) {
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;

        bookmarksResults.innerHTML += "<div class='well'>" + "<h3>" + name + "<a class='btn btn-success' target='_blank' href='" + url + "'>Visit</a>" +
            "<a onclick='deleteBookmark(\"" + url + "\")' class='btn btn-danger' href='#'>Delete</a>"
        "</h3>" +
            "</div>";
    }
}

// Validate Form
function validateForm(siteName, siteUrl) {
    if (!siteName || !siteUrl) {
        alert('Please fill in the form');
        return false;
    }

    //regex url
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }

    return true;
}