export function filterComments(text: string): string {
    let filtered;
    //block comments
    filtered = text.replace(/(\/\*)([\S\s]*?)(\*\/)/g, "");
    //regular comments
    filtered = filtered.replace(/(\/\/)(.*?)(?=\r\n)/g, "");

    return filtered;
}
