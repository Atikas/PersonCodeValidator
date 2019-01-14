var PersonCodeValidator = function ( personCode ) {
    let len = personCode.length;
    if (len != 11) return false;

    let _personCode = personCode;
    let _personCodeArray = _personCode.split('');

    let kodoKontrolinisSkaitmuo = KodoDedamujuSumosSkaiciavimas() % 11;
    if (kodoKontrolinisSkaitmuo == 10)
    {
        kodoKontrolinisSkaitmuo = KodoDedamujuSumosSkaiciavimas_JeiModulineDalybaLygi10() % 11;
    }
    let lastNumber = Number(_personCodeArray[10]);
    isValid = kodoKontrolinisSkaitmuo ==  lastNumber? true : false;
    if (isValid === true) console.log('Asmens kodas teisingas');
    else console.log('Klaidingas asmens kodas');

    return isValid;

    function KodoDedamujuSumosSkaiciavimas() {
        return Number(_personCodeArray[0]) * 1 + 
               Number(_personCodeArray[1]) * 2 + 
               Number(_personCodeArray[2]) * 3 + 
               Number(_personCodeArray[3]) * 4 + 
               Number(_personCodeArray[4]) * 5 + 
               Number(_personCodeArray[5]) * 6 +
               Number(_personCodeArray[6]) * 7 + 
               Number(_personCodeArray[7]) * 8 + 
               Number(_personCodeArray[8]) * 9 + 
               Number(_personCodeArray[9]) * 1;
    }
    function KodoDedamujuSumosSkaiciavimas_JeiModulineDalybaLygi10() {
        return Number(_personCodeArray[0]) * 3 + 
               Number(_personCodeArray[1]) * 4 + 
               Number(_personCodeArray[2]) * 5 + 
               Number(_personCodeArray[3]) * 6 + 
               Number(_personCodeArray[4]) * 7 + 
               Number(_personCodeArray[5]) * 8 + 
               Number(_personCodeArray[6]) * 9 +
               Number(_personCodeArray[7]) * 1 + 
               Number(_personCodeArray[8]) * 2 + 
               Number(_personCodeArray[9]) * 3;
    }
}
