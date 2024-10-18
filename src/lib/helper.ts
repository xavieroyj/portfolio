export function convertDateFormat(inputDate: string) {
    // We know the date string is going to be in the format "DD-MM-YYYY"
    // We can use the split method to split the string into an array of strings
    const [day, month, year] = inputDate.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}