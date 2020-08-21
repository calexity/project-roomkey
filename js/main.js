// Set last updated date to the day of the "most recent 10pm"
// Ex: if it's now Thurs 8/20 at 10:11pm, it'll be Thurs 8/20
// Ex: if it's now Thurs 8/20 at 9:11pm, it'll be Wed 8/19
const lastUpdatedDate = new Date();
const shortFormat = { month: 'long', day: 'numeric' };
const longFormat = { ...shortFormat, year: 'numeric' };

lastUpdatedDate.setDate(lastUpdatedDate.getDate() - 1);
lastUpdatedDate.setHours(lastUpdatedDate.getHours() + 2);

// If it was gonna be Saturday, make it Friday
if (lastUpdatedDate.getDay() === 6) {
    lastUpdatedDate.setDate(lastUpdatedDate.getDate() - 1);
}
// If it was gonna be Sunday, make it Friday
if (lastUpdatedDate.getDay() === 0) {
    lastUpdatedDate.setDate(lastUpdatedDate.getDate() - 2);
}

// Update the DOM
document.querySelector('[data-last-updated="short"]').innerHTML =
    lastUpdatedDate.toLocaleDateString('en-US', shortFormat);
document.querySelector('[data-last-updated="long"]').innerHTML =
    lastUpdatedDate.toLocaleDateString('en-US', longFormat);
