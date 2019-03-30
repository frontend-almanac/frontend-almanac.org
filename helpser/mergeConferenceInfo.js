export default function mergeConferenceInfo(data, options) {
  return data.map(el => {
    const info = options[el.conferenceName];
    if (info) {
      el.color = info.color;
    }
    return el;
  });
}
