export default class Service {
    constructor() {
        this._apiBase = 'http://api.cinemate.cc'; 
    }

    getResource = async (url='https://anapioficeandfire.com/api/characters/583') => {
        const res = await fetch(`${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await console.log(res.json());
    }

    getFilms(year) {
        return this.getResource(`/movie.list?apikey=APIKEY&year=${year}&format=json`)
    }
}