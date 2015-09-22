        function myFunction() {

          //erases the "@" in front of the name and sorts the array
          function ready_print ( array ){
                for (var i =0; i<array.length; i++){
                  array[i] = array[i].substring(1);
                }
                array.sort();
          };

          //we find the connections
          var connectionMapper = function (currentperson , connectionType , nextconnectionType ) {
              var personObject = persons[currentperson];

               //this function will find all the other order connections except from the 1st one
              function calc () {
                    for (var i = 0; i< personObject[connectionType].length; i++){
                      for (var j = 0; j < persons [ persons[person][connectionType][i].substring(1) ]["first"].length; j++ ){
                        if ( persons[person].connections.indexOf( persons [ persons[person][connectionType][i].substring(1) ]["first"][j]  ) == -1
                              && persons [ persons[person][connectionType][i].substring(1) ]["first"][j] != "@"+person  ){
                          persons[person][nextconnectionType].push(  persons [ persons[person][connectionType][i].substring(1) ]["first"][j] );
                          persons[person].connections.push( persons [ persons[person][connectionType][i].substring(1) ]["first"][j]  );
                        }
                      }
                    }
              }

              //this function will find the 1rst order connections 
              function mention() {
                    for (var i = 0; i< persons[currentperson].mentions.length; i++){
                      if ( persons.hasOwnProperty( persons[currentperson].mentions[i].substring(1) ) ){
                        if (  persons  [  persons[currentperson].mentions[i].substring(1)  ] .mentions.indexOf( "@"+ currentperson   )>-1   ){
                          persons[currentperson].first.push(persons[currentperson].mentions[i]);
                          persons[currentperson].connections.push(persons[currentperson].mentions[i]);
                        }
                      }
                    }
              }

              if (connectionType=="mentions"){
                return mention ();
              } else {
                return calc ();
              }
          };

          var persons = {};

          var pattern = /(@)\w+/g ;


          var input = "daniella_hamill: @madelyn, @concepcion_hoppe: Power is in nature the essential measure  of right\r\nkaia_jerde: Corresponding abstract name \/cc @nella_hackett, @madelyn, @vincent\r\ndelaney_ferry: @brook_metz: I do not readily remember any poem, play, sermon, novel, or oration, that our press vents in the last few years\r\nmariana: this makes botany the most alluring of studies, and wins it from the farmer and the herb-woman :D \/cc @terrell_senger, @florence_vonrueden\r\nmariana: In nature every moment is new; the past is always swallowed and forgotten \/cc @leon_greenfelder, @darrel_skiles, @madelyn\r\nnella_hackett: @daniella_hamill, @madelyn: After graduating from college he taught school for a time, and then entered the Harvard Divinity School\r\nhilton: Nothing can bring you peace but yourself\r\nmagali: @kaia_jerde, @florence_vonrueden: The universe is fluid and volatile\r\nterrell_senger: These varieties are lost sight of at a little distance, at a little height of thought @emiliano_gaylord\r\nkaia_jerde: If the gatherer gathers too much, nature takes out of the man what she puts into his chest, swells the estate, but kills the owner \/cc\r\nterrell_senger: @nella_hackett It\'s become commonplace to criticize the \"Occupy\" movement for failing to offer an alternative vision\r\ndelaney_ferry: Chaucer\'s chief work is the \"Canterbury Tales,\" a series of  stories told by pilgrims traveling \/cc @concepcion_hoppe, @mariana, @daniella_hamill\r\nconcepcion_hoppe: The greatest of Italian poets, author of the Divina Commedia \/cc @mariana\r\nleta: Emerson here refers to the military operations carried on from 1808 to 1814 in Portugal, Spain, and ... \/cc @terrell_senger, @darrel_skiles\r\nemiliano_gaylord: If a man loses his balance and immerses himself in any trades or pleasures for their own sake, he may be a good wheel or pin, but he is ...\r\ndarrel_skiles: Society is a joint-stock company, in which the members agree, for the better securing of his bread to each shareholder \/cc @concepcion_hoppe\r\nemiliano_gaylord: The Colossus of Rhodes was a gigantic statue--over a hundred feet in height--of the Rhodian sun god \/cc @daniella_hamill, @elmo\r\nmagali: @madelyn: He carried his powerful execution into minute details, to a hair point; finishes an eyelash or a dimple as firmly as he draws a...\r\ndarrel_skiles: Each new step we take in thought reconciles twenty seemingly  discordant facts, as expressions of one law\r\nlawson_brown: The pastures are full of ghosts for me, the morning woods full of angels \/cc @emiliano_gaylord, @elmo\r\ndarrel_skiles: @lawson_brown, @brook_metz: Must we have a good understanding with one another\'s palates? as foolish people who have lived long together...\r\nelmo: Each returns to his degree in the scale of good society, porcelain remains porcelain \/cc @delaney_ferry, @magali, @terrell_senger\r\nleta: The retribution in the circumstance is seen by the understanding; it is inseparable from the thing, but is often spread over a long time\r\nlawson_brown: @leon_greenfelder: So, \'tis well; Never one object underneath the sun  Will I behold before my Sophocles: Farewell; now teach the Romans ...\r\nmagali: The swindler swindles himself\r\nconcepcion_hoppe: @magali Fran\u00C3\u00A7ois Joseph Talma was a French tragic actor, to whom Napoleon showed favor\r\ndaniella_hamill: @cruz_rice, @brook_metz, @emiliano_gaylord: It was as a record of personal experiences that he wrote in his journal: \"Shakespeare fills us...\r\nelmo: @hilton: His manner was very quiet, his smile was pleasant, but he did not like explosive laughter any better than Hawthorne did\r\ndarrel_skiles: @cruz_rice, @leon_greenfelder, @hilton: \"Blessed be nothing\" and \"The worse things are, the better they are\" are proverbs ...\r\ndaniella_hamill: @leon_greenfelder: This old proverb is quoted by Sophocles\r\nleta: Heroism feels and never reasons, and therefore is always right; and although a different breeding, different \/cc @nella_hackett, @delaney_ferry\r\nmariana: @kaia_jerde, @elmo: why?\r\ndaniella_hamill: @florence_vonrueden: Translated in the previous sentence\r\nhilton: not sure about that \/cc @emiliano_gaylord\r\nmadelyn: It began with Henry VII \/cc @nella_hackett\r\nmadelyn: @darrel_skiles, @emiliano_gaylord, @nella_hackett: To ignorance and sin it is flint\r\nleon_greenfelder: @mariana: The Shakspeare Society have inquired in all directions, advertised the missing facts, offered money for any information that will\r\nvincent: A man is reputed to have thought and eloquence; he cannot, for all that, say a word to his cousin or his uncle\r\nhilton: John Lydgate was an English poet who lived a generation later than Chaucer; in his _Troy Book_ and other poems he probably borrowed fro...\r\nnella_hackett: @brook_metz: I see\r\nflorence_vonrueden: @aomame A Persian poet of the fourteenth century\r\nvincent: @delaney_ferry, @kaia_jerde, @brook_metz: He recreates what he imitates\r\nmadelyn: The first in time and the first in importance of the influences upon  the mind is that of nature \/cc @emiliano_gaylord\r\nflorence_vonrueden: The blindness of the preacher consisted in deferring to the base estimate of the market of what constitutes a manly success \/cc @hilton\r\ndelaney_ferry: @kaia_jerde, @terrell_senger: He claps wings to the sides of all the solid old lumber of the world, and I am capable once more of ...\r\nleon_greenfelder: @mariana, @delaney_ferry: The work he is best known by is the exhaustive \"Essay on the Human Understanding,\" in which he combated the theo...\r\nkaia_jerde: We rapidly approach a brink over which no enemy can follow us \/cc @nella_hackett, @terrell_senger, @madelyn\r\nhilton: The stag in the fable admired his horns and blamed his feet, but when the hunter came, his feet saved him ... \/cc @kaia_jerde\r\nleon_greenfelder: In punishment for this Jupiter chained him to a rock and set  an eagle to prey upon his liver \/cc @nella_hackett\r\nconcepcion_hoppe: Each man\'s rank in that perfect graduation depends on some symmetry in his structure, or some agreement in ... \/cc @nella_hackett, @leta\r\nleon_greenfelder: Follow the path your genius traces like the galaxy of  heaven for you to walk in \/cc @leta, @cruz_rice\r\ndaniella_hamill: Jupiter, the supreme god of Roman mythology \/cc @emiliano_gaylord, @madelyn\r\nmariana: @nella_hackett: The same idea exalts conversation with him\r\ncruz_rice: Information about the Project Gutenberg Literary Archive  Foundation \/cc @lawson_brown, @mariana\r\nemiliano_gaylord: The prudence which secures an outward well-being is not to be studied by one set of men, whilst heroism \/cc @nella_hackett, @florence_vonrueden\r\nleta: Many economists say that what matters are questions like whether markets are competitive or monopolistic \/cc @cruz_rice, @delaney_ferry, @leon_greenfelder\r\nemiliano_gaylord: We can find these enchantments without visiting the Como  Lake, or the Madeira Islands \/cc @elmo, @lawson_brown, @vincent\r\nelmo: A boy is in the parlor what the pit is in the playhouse; independent, irresponsible, looking out from his corner ... \/cc @hilton, @magali\r\nconcepcion_hoppe: @vincent, @leon_greenfelder, @daniella_hamill: To refuse to discuss ideas such as types of capitalism deprives us of language\r\nkaia_jerde: @emiliano_gaylord After every foolish day we sleep off the fumes and furies of its hours; and though we are always engaged with particulars...\r\nhilton: You will find it interesting to read _Behavior_ in connection with this essay \/cc @brook_metz\r\nflorence_vonrueden: @elmo, @kaia_jerde, @delaney_ferry: The swallow over my window should interweave that thread or straw he carries in his bill into my web ...\r\nlawson_brown: @kaia_jerde, It is, for my money, a perfect opening: fast, funny, suspenseful\r\nleon_greenfelder: @elmo But if we explore the literature of Heroism, we shall quickly come to Plutarch, who is its Doctor and historian\r\nelmo: @lawson_brown? is a great happiness to get off without injury and heart-burning, from one who has had the ill luck to be ...\r\nemiliano_gaylord: Our housekeeping is mendicant, our arts, our occupations,  our marriages, our religion, we have not chosen, but society has chosen for us\r\nleon_greenfelder: @madelyn: What is the end sought? Plainly to secure the ends of good sense and beauty, from the intrusion of deformity or vulgarity of ...\r\nvincent: If I know your sect, I anticipate your argument \/cc @madelyn\r\ndarrel_skiles: @nella_hackett, @mariana: Here is perfect representation, at last; and now let the world of figures sit for their portraits\r\ndarrel_skiles: @magali, @leta: But though we cannot find the god under this disguise of a sutler, yet, on the other hand, we cannot forgive the poet\r\nnella_hackett: @cruz_rice: Were the ends of nature so great and cogent, as to  exact this immense sacrifice of men?\r\ndelaney_ferry: @leon_greenfelder, @emiliano_gaylord, @mariana: A play by the German poet, Goethe, founded on the belief that the imprisonment of Tasso was...\r\ndelaney_ferry: That\u00E2\u20AC\u2122s a nod to science fiction, where the archetypal marker of strangeness is two moons \/cc @leon_greenfelder\r\ncruz_rice: See note 53 @daniella_hamill, @emiliano_gaylord\r\nflorence_vonrueden: The Germans regard Goethe with the same veneration we accord to Shakespeare \/cc @nella_hackett, @magali\r\nbrook_metz: This is fundamentally a detective story, albeit a distinctly heterodox one \/cc @darrel_skiles, @madelyn\r\ndelaney_ferry: @lawson_brown: A preface or introduction";

          var array = input.split("\n");
          var all_names = [];

          for (var i = 0; i <array.length ; i++){
            //we find the name of the person who did the tweet
            var name = array[i].substring(0,array[i].indexOf(":"));

            //we add the name of the user at the array with the unique names in order to sort them later
            if (all_names.indexOf(name)==-1){
              all_names.push(name);
            }

            //We initialise the object, if there is not in the array
            if (!persons.hasOwnProperty(name)){
              persons[name] = {};
              persons[name].mentions = [];
              persons[name].first = [];
              persons[name].second = [];
              persons[name].third = [];
              persons[name].fourth = [];
              persons[name].fifth = [];
              persons[name].sixth = [];
              persons[name].connections=[];
            }

            var text = array[i].substring(array[i].indexOf(":")+1);
            var mentions = [];
            //We search the input file for mentions(@) with reqular expression of @asd12 type
             if ( !!text.match(pattern) ){
              var mentions = text.match(pattern);
            }

            //What we find, if there is not already, we add it to mentions array
            for ( var j = 0; j < mentions.length; j++){
              if  (  persons[name].mentions.indexOf(mentions[j]) == -1 ){
                persons[name].mentions.push(mentions[j]);
              }
            }
          }

          /*mentions->firstArray*/
          for (var person in persons ){
            connectionMapper(person , "mentions" , "first");
          }
          /*firstArray->secondArray*/
          for (var person in persons ){
            connectionMapper(person , "first" , "second");
          }
          /*secondArray->thirdArray*/
          for (var person in persons ){
            connectionMapper(person , "second" , "third");
          }
          /*thirdArray->fourthArray*/
          for (var person in persons ){
            connectionMapper(person , "third" , "fourth");
          }
          /*fourthArray->fifthArray*/
          for (var person in persons ){
            connectionMapper(person , "fourth" , "fifth");
          }
          /*fifthArray->sixthArray*/
          for (var person in persons ){
            connectionMapper(person , "fifth" , "sixth");
          }


          //we prepare the answer to the format asked by the exercise
          var answer = "";

          all_names.sort();

          for (var w =0; w < all_names.length; w++ ){

                person = all_names[w];
                answer = answer+person;

                ready_print(persons[person].first);
                if (persons[person].first.length>0){
                  answer = answer+"<br>"+persons[person].first.join(", ");
                }
                ready_print(persons[person].second);
                if (persons[person].second.length>0){
                  answer = answer+"<br>"+persons[person].second.join(", ");
                }
                ready_print(persons[person].third);
                if (persons[person].third.length>0){
                  answer = answer+"<br>"+persons[person].third.join(", ");
                }
                ready_print(persons[person].fourth);
                if (persons[person].fourth.length>0){
                  answer = answer+"<br>"+persons[person].fourth.join(", ");
                }
                ready_print(persons[person].fifth);
                if (persons[person].fifth.length>0){
                  answer = answer+"<br>"+persons[person].fifth.join(", ");
                }
                ready_print(persons[person].sixth);
                if (persons[person].sixth.length>0){
                  answer = answer+"<br>"+persons[person].sixth.join(", ");
                }

                answer = answer+"<br>";
                answer = answer+"<br>";

          }

            document.getElementById("answer").innerHTML = answer;

        }
