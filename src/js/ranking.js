function pageTableRanking() {
    const table = document.querySelector('#ranking-table');
    const rows = table.querySelectorAll('tr:not(#ranking-header)'); // Exclude header row
    const perPage = 20; // Number of rows displayed per page

    let currentPage = 1;

    // Hide all rows except for the first page
    for (let i = perPage; i < rows.length; i++) {
        rows[i].style.display = 'none';
    }

    // Function to display the specified page
    function showPage(pageNumber) {
        currentPage = pageNumber;
        const startIndex = (pageNumber - 1) * perPage;
        const endIndex = startIndex + perPage;

        for (let i = 0; i < rows.length; i++) {
            rows[i].style.display = 'none';
        }

        for (let i = startIndex; i < endIndex && i < rows.length; i++) {
            rows[i].style.display = '';
        }
    }

    // Add click event listeners to navigation buttons
    document.getElementById('previous').addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    document.getElementById('next').addEventListener('click', () => {
        if (((currentPage - 1) * perPage) + perPage < rows.length) {
            showPage(currentPage + 1);
        }
    });

    // Show the first page initially
    showPage(currentPage);
}

async function getRanking() {
    const response = await fetch('http://sandbix.fr/grsapi/get-ranking-html', {
        method: 'POST',
        body: JSON.stringify({
            size: ""
        }),
    })
    const ranking = await response.text()
    const resultElement = document.getElementById('ranking-body')
    resultElement.innerHTML = ranking
    pageTableRanking()
}

function pageTableTournaments() {
    const table = document.querySelector('#tournament-table');
    const rows = table.querySelectorAll('tr:not(#tournaments-header)'); // Exclude header row
    const perPage = 5; // Number of rows displayed per page

    let currentPage = 1;

    // Hide all rows except for the first page
    for (let i = perPage; i < rows.length; i++) {
        rows[i].style.display = 'none';
    }

    // Function to display the specified page
    function showPage(pageNumber) {
        currentPage = pageNumber;
        const startIndex = (pageNumber - 1) * perPage;
        const endIndex = startIndex + perPage;

        for (let i = 0; i < rows.length; i++) {
            rows[i].style.display = 'none';
        }

        for (let i = startIndex; i < endIndex && i < rows.length; i++) {
            rows[i].style.display = '';
        }
    }

    // Add click event listeners to navigation buttons
    document.getElementById('previous-tournaments').addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    document.getElementById('next-tournaments').addEventListener('click', () => {
        if (((currentPage - 1) * perPage) + perPage < rows.length) {
            showPage(currentPage + 1);
        }
    });

    // Show the first page initially
    showPage(currentPage);
}

async function getTournaments() {
    const response = await fetch('http://sandbix.fr/grsapi/get-tournaments-html', {
        method: 'POST',
        body: JSON.stringify({
            size: ""
        }),
    })
    const tournaments = await response.text()
    const resultElement = document.getElementById('tournaments-body')
    resultElement.innerHTML = tournaments
    pageTableTournaments()
}

function pageTableResults() {
    const table = document.querySelector('#results-table');
    const rows = table.querySelectorAll('tr:not(#results-header)'); // Exclude header row
    const perPage = 10; // Number of rows displayed per page

    let currentPage = 1;

    // Hide all rows except for the first page
    for (let i = perPage; i < rows.length; i++) {
        rows[i].style.display = 'none';
    }

    // Function to display the specified page
    function showPage(pageNumber) {
        currentPage = pageNumber;
        const startIndex = (pageNumber - 1) * perPage;
        const endIndex = startIndex + perPage;

        for (let i = 0; i < rows.length; i++) {
            rows[i].style.display = 'none';
        }

        for (let i = startIndex; i < endIndex && i < rows.length; i++) {
            rows[i].style.display = '';
        }
    }

    // Add click event listeners to navigation buttons
    document.getElementById('previous-results').addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    document.getElementById('next-results').addEventListener('click', () => {
        if (((currentPage - 1) * perPage) + perPage < rows.length) {
            showPage(currentPage + 1);
        }
    });

    // Show the first page initially
    showPage(currentPage);
}

async function getResults(tournament_id=-1) {
    const response = await fetch('http://sandbix.fr/grsapi/get-results-html', {
        method: 'POST',
        body: JSON.stringify({
            tournament_id: tournament_id
        }),
    })
    const tournaments = await response.text()
    const response_ = await fetch('http://sandbix.fr/grsapi/get-tournament-name-html', {
        method: 'POST',
        body: JSON.stringify({
            tournament_id: tournament_id
        }),
    })
    const name = await response_.text()
    const resultElement = document.getElementById('results-body')
    resultElement.innerHTML = tournaments
    const resultElement_ = document.getElementById('tournament-result')
    resultElement_.innerHTML = name
    pageTableResults()
}

async function onLoadRanking() {
    getRanking()
}

async function onLoadResults() {
    getTournaments()
    getResults(-1)
}

async function onLoadIndex() {
    getRanking()
}