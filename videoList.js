import csvToJSON from './helpser/csv_to_json';
import fetch from 'cross-fetch'

class videoList {
  constructor() {
    this.videos = [];
  }
  async fetch() {
    this.videos = await fetch('https://raw.githubusercontent.com/frontend-almanac/frontend-almanac.org/master/list.csv?1').then(data => data.text());
    this.videos = csvToJSON(this.videos);
    console.log(this.videos);
    return this.videos;
  }  
  search(search) {
    return this.videos.filter(el => {
      if (
        el.title.toUpperCase().indexOf(search.toUpperCase()) !== -1
        ||
        el.name.toUpperCase().indexOf(search.toUpperCase()) !== -1
        ||
        el.conferenceName.toUpperCase().indexOf(search.toUpperCase()) !== -1
      ) return true;
    });
  }
}

export default new videoList;
