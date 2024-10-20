export function convertDateFormat(inputDate: Date): string {
    // We know the date string is going to be in the format "DD-MM-YYYY"
    // We can use the split method to split the string into an array of strings
    const date = new Date(inputDate)

    return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}