import axios from 'axios';


test('endpoint returns Status 200 & Hello World!', () => {
  axios.get('http://localhost:3004')
    .then(res => {
      expect(res.status).toBe(200);
      expect(res.data).toBe('Hello World!');
    });
});