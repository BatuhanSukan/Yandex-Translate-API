function Translate(word,language){
    this.apikey = ""
    this.word = word;
    this.language = language;

    // XHR object
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    // Ajax işlemleri
    const endpoint = ''

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];
            
            callback(text);
        }
        else{
            callback("Bir hata oluşt",null)
        }
    }

    this.xhr.send();


};

Translate.prototype.changeParameters = function(newWord,newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}