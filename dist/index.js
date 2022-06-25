"use strict";
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(20);
kgToLbs('20kg');
//# sourceMappingURL=index.js.map