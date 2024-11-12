// Supabase Requirements
const SUPABASE_URL = 'https://ksunjnmkulsnohsddvsc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdW5qbm1rdWxzbm9oc2RkdnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMDQxMzYsImV4cCI6MjA0NjU4MDEzNn0.uK6HZMrx2f0gvoPczkhFR-pYtvkVJwF5cCaZCzP08oQ';

// Delete Table Completely
async function clearTable() {
    const { data, error } = await supabase
        .from('translate')
        .delete()
        .neq('id', 0);
}

// Initialize Supabase client
supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Get data from supanase table
async function fetchData() {
    try {
        const { data, error } = await supabase.from('translate').select('time, phrase');
        if (error) {
            console.error('Error fetching data:', error);
            document.getElementById('data-display').textContent = 'Error fetching data.';
        } else {
            console.log('Data fetched successfully:', data);
            const displayDiv = document.getElementById('data-display');
            displayDiv.innerHTML = '';
            data.forEach((item) => {
                const itemDiv = document.createElement('div');
                itemDiv.innerHTML = `<strong>Time:</strong> ${item.time} <strong>Phrase:</strong> ${item.phrase}`;
                displayDiv.appendChild(itemDiv);
            });
        }
    } catch (error) {
        console.error('Unexpected error:', error);
    }
}

// Get All Creators in Project from supabase
async function fetchPersons() {
    const { data, error } = await supabase.from('person').select('name');
    displayPersons(data);    
}

// Display creators onto the frontend
function displayPersons(persons) {
    const displayDiv = document.getElementById('persons-display');
    displayDiv.innerHTML = '';
    persons.forEach(person => {
        const personDiv = document.createElement('div');
        personDiv.innerHTML = person.name;
        displayDiv.appendChild(personDiv);
    });
}

// Add data to supabase
async function insertData(phrase) {
    const now = new Date();
    const time = now.toTimeString().split(' ')[0]; //Format the time
    const { data, error } = await supabase.from('translate').insert([
        { time: time, phrase: phrase }
    ]); 
    fetchData();
}

// Copy input from 'simple words' into supabase
document.querySelector('.translate-btn').addEventListener('click', (e) => {
    const phrase = document.getElementById('simplephrase').value;
    insertData(phrase);
    document.getElementById('simplephrase').value = '';
});

document.addEventListener('DOMContentLoaded', () => {
    clearTable();
    fetchData();
});





