
    module.exports = {
      async redirects() {
        return [{"source":"/hello","permanent":false},{"source":123,"destination":"/another","permanent":false},{"source":"/hello","destination":"/another","statusCode":"301"},{"source":"/hello","destination":"/another","statusCode":404},{"source":"/hello","destination":"/another","permanent":"yes"},{"source":"/hello/world/(.*)","destination":"/:0","permanent":true},null,"string"]
      }
    }
  