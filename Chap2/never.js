function oldEnough(age) {
    if (age > 59) {
        throw Error("too old!");
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
oldEnough(65);
