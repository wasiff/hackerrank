function checkMagazine(magazine, note) {
    const noteResult = [];

    for(let i = 0; i < note.length; i++) {
        let noteFound = false;

        if(magazine.includes(note[i])) {
            const index = magazine.indexOf(note[i]);
            if(index >= 0) {
                magazine.splice(index, 1);
            }
            noteFound = true;
        }
        noteResult.push(noteFound);
    }
    return noteResult.includes(false) ? "No" : "Yes";
}

console.log(checkMagazine(["ive", "got", "a", "lovely", "bunch", "of", "coconuts"], ["ive", "got", "a", "coconuts"]));
