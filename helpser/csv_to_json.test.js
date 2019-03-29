import csvToJSON from './csv_to_json';

it(('Convert CSV string to JSON Object'), () => {
  const json = [{a:"1,2",b:"2",c:"3"}];
  expect(csvToJSON('a,b,c\n"1,2",2,3')).toEqual(json);
  expect(csvToJSON('a,b,c\r"1,2",2,3')).toEqual(json);
  expect(csvToJSON('a,b,c\r\n"1,2",2,3')).toEqual(json);
  expect(csvToJSON('a,b,c\n"1,2",2,3')).toEqual(json);
  const json1 = [{ a: "1", b: "Time, Numbers, Text", c: "3" }];
  expect(csvToJSON('a,b,c\n1,"Time, Numbers, Text",3\n\n')).toEqual(json1);
  
});
