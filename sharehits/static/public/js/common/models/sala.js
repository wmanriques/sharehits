angular.module("models.sala",[])
   .factory("Sala",[function () {
      return {
         "salas" : [
               {
                  id:21,
                  nombre:"sala 1",
                  tags:["as","sadsa","dasda","das"]
               },
               {
                  id:213,
                  nombre:"sala 2",
                  tags:["as","sadsa","dasda","das"]
               },
               {
                  id:1,
                  nombre:"sala 3",
                  tags:["as","sadsa","dasda","das"]
               }
         ]
      };
   }]);
