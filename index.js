 let data = [
            {"principal": 2500, "time": 1.8},
            {"principal": 1000, "time": 5},
            {"principal": 3000, "time": 1},
            {"principal": 2000, "time": 3},
        ];
        
        //rates
        function interestCalculator(arr) {
            let interestData = [];

            for(let i = 0; i < arr.length; i++) {
                let obj = arr[i]

            if(obj.principal >= 2500 && obj.time > 1 && obj.time < 3) {
                 obj.rate = 3;
            } else if(obj.principal >= 2500 && obj.time >= 3) {
                 obj.rate = 4;
            } else if(obj.principal < 2500 && obj.time <= 1) {
                 obj.rate = 2;
            } else {
                 obj.rate = 1;
            }
            obj.interest = (obj.principal * obj.time * obj.rate) / 100;
            interestData.push(obj)
         }
         console.log(interestData);
         return interestData;
       }
         
         interestCalculator(data);
