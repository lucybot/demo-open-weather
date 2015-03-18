<%-
Lucy.code.request({
  protocol: 'http',
  domain: "api.openweathermap.org",
  path: "data/2.5/weather",
  query: {
    q: {answer: 'city'},
    units: 'imperial'
  }
})
%>
