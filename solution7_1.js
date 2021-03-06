      function myFunction() {

            var checkInDate = "2011/10/28";
            var checkOutDate = "2011/11/07";
            var checkIn = checkInDate.split("/");
            var checkOut = checkOutDate.split("/");

            var Checkin_Day = new Date(checkIn[0] + "/" + checkIn[1] + "/" + checkIn[2]);
            var Checkout_Day = new Date(checkOut[0] + "/" + checkOut[1] + "/" + checkOut[2]);
            var temp_checkoutday =  new Date(checkOut[0] + "/" + checkOut[1] + "/" + checkOut[2]);
            temp_checkoutday.setDate(temp_checkoutday.getDate() - 1);
            var timeDiff = Math.abs(temp_checkoutday.getTime() - Checkin_Day.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            var output = [];

            var array = [{"name":"Sea View Villa","seasons":[{"one":{"start":"03-01","end":"09-30","rate":"$165"}},{"two":{"start":"10-01","end":"02-28","rate":"$180"}}],"cleaning fee":"$100"},{"name":"Leilani Breeze","rate":"$118","cleaning fee":"$75"},{"name":"Lava Rock Lodge","rate":"$145","cleaning fee":"$75"},{"name":"Hale Aloha","seasons":[{"one":{"start":"07-01","end":"10-31","rate":"$215"}},{"two":{"start":"11-01","end":"03-15","rate":"$270"}},{"three":{"start":"03-16","end":"06-30","rate":"$230"}}]},{"name":"Little Piece of Paradise","seasons":[{"one":{"start":"12-01","end":"02-28","rate":"$200"}},{"two":{"start":"03-01","end":"11-30","rate":"$175"}}],"cleaning fee":"$60"},{"name":"White Orchid","seasons":[{"one":{"start":"10-15","end":"11-05","rate":"$180"}},{"two":{"start":"11-06","end":"01-31","rate":"$220"}},{"three":{"start":"02-01","end":"07-31","rate":"$240"}},{"four":{"start":"08-01","end":"10-14","rate":"$200"}}],"cleaning fee":"$120"},{"name":"Hale Io","seasons":[{"one":{"start":"09-01","end":"01-31","rate":"$115"}},{"two":{"start":"02-01","end":"07-31","rate":"$95"}},{"three":{"start":"08-01","end":"08-31","rate":"$85"}}],"cleaning fee":"$75"}];

          
            for (var i = 0; i < array.length; i++) {
                var rental = {};
                rental.totalcost = 0;
                var cost = 0;
                rental.name = array[i].name;
                

                //cost calculation for the case in which the hotel has no seasons
                if (!array[i].hasOwnProperty("seasons")) {
                    var rate = array[i].rate.split("$");
                    var clean = 0;
                    if ( array[i].hasOwnProperty("cleaning fee")){
                        clean = parseFloat(array[i]["cleaning fee"].substring(1));
                    }

                    cost = ( diffDays * rate[1] + clean ) * 1.0411416;
                    rental.totalcost = cost;
                //cost calculation for the case in which the hotel has separate seasons 
                } else {
                        for (var j = 0; j < array[i].seasons.length; j++) { // we loop through the seasons of the hotel
                                for (var key in array[i].seasons[j]) {
                                    var startDate = array[i].seasons[j][key].start.split("-");
                                    var endDate = array[i].seasons[j][key].end.split("-");

                                    var Start_Date = new Date(checkIn[0] + "/" + startDate[0] + "/" + startDate[1]);
                                    if (endDate[0]<startDate[0]){  //the case in which the endDate, is next year
                                        var End_Date = new Date((parseFloat(checkOut[0])+1)  + "/" + endDate[0] + "/" + endDate[1]);
                                    } else {
                                        var End_Date = new Date(checkOut[0] + "/" + endDate[0] + "/" + endDate[1]);
                                    }

                                    var tempdate_start = new Date();
                                    var tempdate_finish = new Date();

                                    if ( Checkin_Day >= Start_Date && Checkin_Day <= End_Date) {
                                        tempdate_start =  new Date(Checkin_Day.getTime());
                                    } else if ( Checkin_Day < Start_Date && Checkout_Day > Start_Date ){
                                        tempdate_start =  new Date(Start_Date.getTime());
                                        tempdate_start.setDate(tempdate_start.getDate() - 1);
                                    }


                                    if ( Checkout_Day <= End_Date && Checkout_Day >= Start_Date) {
                                        tempdate_finish =  new Date(Checkout_Day.getTime());
                                        tempdate_finish.setDate(tempdate_finish.getDate() - 1);
                                    } else if ( Checkout_Day > End_Date && Checkin_Day < End_Date ){
                                        tempdate_finish =  new Date(End_Date.getTime());
                                    }

                                    var rate = array[i].seasons[j][key].rate.split("$");


                                    //check if hotel has cleaning fee
                                    var clean = 0;
                                    if ( array[i].hasOwnProperty("cleaning fee")){
                                        clean = parseFloat(array[i]["cleaning fee"].substring(1));
                                    }


                                    //calculation of the days the client stayed in this season and of the cost for this season
                                    var days = Math.ceil(   Math.abs( tempdate_finish.getTime() - tempdate_start.getTime() ) / (1000 * 3600 * 24));
                                    cost =  (days) * rate[1];
                                    rental.totalcost += cost;

                                }
                        }
                                rental.totalcost = ( rental.totalcost + clean ) * 1.0411416;
                }
                output.push(rental);
            }

            //show the result on the page in the format asked
            var answer = "";
            for (var i = 0 ; i < output.length ; i ++) {
                answer = answer + output[i].name+": $"+output[i].totalcost.toFixed(2);
                answer = answer + "<br>";
            }
            document.getElementById("answer").innerHTML = answer;

        }