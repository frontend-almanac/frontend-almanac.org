import csvToJSON from '../helpser/csv_to_json';
import fetch from 'cross-fetch'
import cache from '../helpser/cache';
import mergeConferenceInfo from '../helpser/mergeConferenceInfo';
import { conferencies } from '../options';

class videoList {
  constructor() {
    this.videos = [];
    this.cacheFetch = cache(fetch);
    this.version = 2;
  }
  async fetch() {
    this.videos = await this.cacheFetch('https://raw.githubusercontent.com/frontend-almanac/frontend-almanac.org/master/list.csv?' + this.version);
    this.videos = csvToJSON(this.videos).sort((first, second) => {
      if (first.year > second.year) return 1;
      if (first.year < second.year) return -1;
      return 0;
    });
    return mergeConferenceInfo(this.videos, conferencies);
  }  
  search(search) {
    return this.videos.filter(el => {
      if (
        el.title.toUpperCase().indexOf(search.toUpperCase()) !== -1
        ||
        el.name.toUpperCase().indexOf(search.toUpperCase()) !== -1
        ||
        el.conferenceName.toUpperCase().indexOf(search.toUpperCase()) !== -1
        ||
        el.year.toUpperCase().indexOf(search.toUpperCase()) !== -1
      ) return true;
    });
  }
}

export default new videoList;
