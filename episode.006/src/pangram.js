export default function pangram(str){
    const isFound = new Set();
    const strLower = str.toLowerCase();

    for (const char of strLower)
    {
        if (char.match(/[a-z]/)) {
            isFound.add(char)
        }
    }
    return isFound.size != 26 ?  false :  true;
}