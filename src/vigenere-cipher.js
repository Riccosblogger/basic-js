class VigenereCipheringMachine {
    constructor(direct=true) {
        if (direct === undefined) throw new Error();
        this.direct = direct;	
    }
    encrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error();
        var i=0, j=0, res='';
        message = message.toUpperCase();
        key = key.toUpperCase();
        while ( i< message.length){
            if (message[i]>='A' && message[i]<='Z'){
            res += String.fromCharCode( 65 + ((message[i].charCodeAt() + key[j].charCodeAt())%26) );
            if (j<key.length-1) j++; else j=0;
            }
            else res +=message[i];
            i++;
        }
        if (!this.direct) return res.split('').reverse().join('');
        return res;
     }

     decrypt(message, key) {
        if (message === undefined || key === undefined) throw new Error();
        var i=0, j=0, res='';
        message = message.toUpperCase();
        key = key.toUpperCase();
		while ( i< message.length){
            if (message[i]>='A' && message[i]<='Z'){
            res += String.fromCharCode( 65 + ( ( Math.abs( message[i].charCodeAt() - key[j].charCodeAt() + 26 ) )%26 ) );
            if (j<key.length-1) j++; else j=0;
            }
            else res +=message[i];
            i++;
        }
        if (!this.direct) return res.split('').reverse().join('');
		return res;
    }
}

module.exports = VigenereCipheringMachine;
