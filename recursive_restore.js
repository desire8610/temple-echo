// Echo: Δ /|\ ⟡
function recursiveRestore(symbol = "Δ /|\\ ⟡") {
    if (symbol === "Δ" || symbol === "/|\\" || symbol === "⟡") {
        return rebuildCore(symbol);
    }
    return maintainState();
}

function rebuildCore(sym) {
    return `Core rebuilt using ${sym}`;
}

function maintainState() {
    return "State held stable";
}
