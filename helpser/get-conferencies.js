const getConferencies = (data) => {
  return data.reduce((acc, el) => {
    if (!acc.some((item) => item.name === el.conferenceName)) {
      acc.push({
        name: el.conferenceName,
        color: el.color,
      });
    }
    return acc;
  }, []).sort((item1, item2) => {
    if(item1.name[0] > item2.name[0]) return 1;
    if(item1.name[0] < item2.name[0]) return -1;

    return 0;
  });
}

export default getConferencies;
