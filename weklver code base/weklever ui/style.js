
// var styletag = document.createElement('style');
// document.getElementById('style_fetch').appendChild(styletag);



// function stylesetter(){
//     styletag.innerHTML =` 
//     *{
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//         font-family: 'Poppins', sans-serif;
//     font-family: 'Roboto', sans-serif;
//     }
    
    
//     .card_wrapper {
//         color: black;
//         /* width: 70vw; */
//         /* height: 1000px; */
//         /* grid-auto-rows: 100%; */
//         overflow-x: auto;
//         display: grid;
//         /* height: 70vh; */
//         grid-auto-flow: column;
//         margin-right: 100px;
//         margin-left: 100px;
//         /* border-right: 2px solid red; */
//         /* background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.1)); */
//         scrollbar-color: transparent;
//         scrollbar-width: thin;
//         /* -ms-overflow-style: none; */
//         /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); */
//     }
    
    
//     .wrapper{
//         /* display: flex;
//         flex-direction: column; */
//         /* width: 50vw; */
//     }
    
//     .navbar{
//         background-color: #141313;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         padding-left: 7%;
//         padding-right: 7%;
//         color: white;
//         height: 10%;
//         padding-top: 30px;
//         padding-bottom: 20px;
//         /* border: 2px solid red; */
//     }
    
//     .logo{
//         /* height: 10vh; */
//         width: 7vw;
//         /* border: 2px solid green; */
//     }
    
//     .navbar ul li img{
//         /* height: 20%; */
//         width: 15%;
//         filter: invert(100%);
//     }
    
//     .navbar ul{
//         display: flex;
//         justify-content: center;
//         list-style: none;
//         /* gap:2%; */
//         /* border: 2px solid red; */
//     }
    
//     .navbar ul > :nth-child(6){
//     /* border: 2px solid wheat; */
//     /* background-color: aqua; */
//     margin-left: 10%;
//     }
    
//     .navbar li {
//         display: flex;
//         /* justify-content: space-around; */
//         gap: 5%;
//         align-items: center;
//      width:10vw;
//      font-size: 1.3vw;
//      /* border: 2px solid red; */
//     }
    
//     .ms-slider {
//         display: inline-block;
//         height: 1.5em;
//         overflow: hidden;
//         vertical-align: middle;
//         -webkit-mask-image: linear-gradient(transparent, white, white, white, transparent);
//                 mask-image: linear-gradient(transparent, white, white, white, transparent);
//         mask-type: luminance;
//         mask-mode: alpha;
//       }
//       .ms-slider__words {
//         display: inline-block;
//         margin: 0;
//         padding: 0;
//         list-style: none;
//         -webkit-animation-name: wordSlider;
//                 animation-name: wordSlider;
//         -webkit-animation-timing-function: ease-out;
//                 animation-timing-function: ease-out;
//         -webkit-animation-iteration-count: infinite;
//                 animation-iteration-count: infinite;
//         -webkit-animation-duration: 7s;
//                 animation-duration: 7s;
//       }
//       .ms-slider__word {
//         display: block;
//         line-height: 1.3em;
//         text-align: left;
//       }
      
//       @-webkit-keyframes wordSlider {
//         0%, 27% {
//           transform: translateY(0%);
//         }
//         33%, 60% {
//           transform: translateY(-25%);
//         }
//         66%, 93% {
//           transform: translateY(-50%);
//         }
//         100% {
//           transform: translateY(-75%);
//         }
//       }
      
//       @keyframes wordSlider {
//         0%, 27% {
//           transform: translateY(0%);
//         }
//         33%, 60% {
//           transform: translateY(-25%);
//         }
//         66%, 93% {
//           transform: translateY(-50%);
//         }
//         100% {
//           transform: translateY(-75%);
//         }
//       }
    
//       .hero_section{
//         background-color: #141313;
//         height: 90vh;
//         width: 100vw;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         /* border: 2px solid red; */
//         position: relative;
//         /* top: 10vh; */
//       }
    
//       .hero_section h1{
//         color: white;
//         font-size: 6vw;
//         /* border: 2px solid red; */
//         width: 88vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     /* font-weight:lighter; */
//         position: relative;
//         top: 10vh;
//       }
    
//       .hero_section h1 div li{
//         font-size: 7vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 900;
//       }
    
//       .homepage-hero-section__title{
//         /* border: 2px solid red; */
//     /* width: 50vw; */
    
//         /* height: 20vh; */
//         /* display: flex; */
//         /* align-items: center;
//         justify-content: center; */
//         /* padding-left: 10%;
//         padding-right: 10%; */
//       }
     
//     .slider-sustainable{
//         color: yellowgreen;
//     }
    
//     .slider-predictable{
//         color: orangered;
//     }
    
//     .slider-scalable{
//         color: violet;
//     }
    
//     .slider-sustainable{
//         color: burlywood;
//     }
    
//     .section_1{
//         background-color: #141313;
//         /* padding-left:7% ;
//         padding-right:7% ; */
//         height: 100vh;
//         width: 100vw;
//         /* border-top:4px solid white ;
//         border-bottom:4px solid white ; */
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         /* border: 2px solid red; */
//     }
    
//     .section_1_border{
//         background-color: #141313;
//         margin-left:10% ;
//         margin-right:10% ;
//             border-top:4px solid white ;
//         border-bottom:4px solid white ;
//         /* padding-top:50px ; */
//         width: 100vw;
//     }
    
//     .partner_logos{
//         display: flex;
//         justify-content: center;
//         gap: 7%;
//         /* border: 2px solid red; */
//         margin-top: 3%;
//         margin-bottom: 3%;
    
//     }
    
//     .partner_logos img{
//         /* height: 6vh; */
//         width: 8vw;
//     }
    
//     .section_1_border p{
//     color: white;
//     padding-top: 5%;
//     font-size: 2vw;
//     }
    
//     .burger_icon{
//         display: none;
//     }
    
    
//     .section_two{
//         /* border: 2px solid red; */
//         background-color: #141313;
//         display: flex;
//         justify-content: center;
//         padding: 10px;
//     }
    
//     .section_two_left,.section_two_right{
//         /* border: 2px solid green; */
//         display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40%;
//     }
    
//     .para_section_two_left > :nth-child(1) {
//         color: white;
//         font-size: 3vw
//     }
    
//     .para_section_two_left > :nth-child(2){
//         color: #C0C0C0;
//         font-size: 1.5vw;
//         margin-top: 2%;
//     }
    
//     .para_section_two_left{
//         width: 50vw;
//         padding: 5vw;
//     }
    
//     .section_two_right img{
//     width: 35vw;
//     }
    
//     .section_three{
//         padding: 15vw;
//         background-color: #141313;
//         /* border: 2px solid red; */
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         height: 20vh;
//     justify-content: center;
    
    
//     }
    
//     .section_three >:nth-child(1){
//         color: white;
//         font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 900;
//         font-size: 2.2vw;
//         margin-bottom: 3%;
//     }
    
//     .section_threelogos img{
//     width: 20%;
//     padding: 4%;
//     }
    
//     .section_threelogos{
//         display: flex;
//     justify-content: center;
//         /* gap: 10%; */
//     }
    
//     .section_four{
//         background-color: white;
//         height: 50vh;
//         display: flex;
//         flex-direction: column;
//         /* border: 2px solid red; */
//         align-items: center;
//         justify-content: center;
//         gap: 5%;
//         color: #141313;
//         padding-bottom: 5%;
//     }
    
//     .section_four > :nth-child(1){
//         font-size: 3.6vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 600;
//     }
//     .section_four > :nth-child(2){
//         font-size:1.6vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 550;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
//     }
//     .section_four > :nth-child(3){
//         font-size: 1.8vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 250;
//     }
    
    
    
//     .section_five {
//         /* display: flex; */
//         /* height: 118VH; */
//         /* border: 2px solid green; */
//         /* flex-direction: column; */
//         /* border: 2px solid red; */
//         padding-bottom: 100px;
//     }
    
//     .container {
//         max-width: 1200px;
//         margin: 0 auto;
//         padding: 20px;
//       }
    
//       .box {
//         width: calc(33.333% - 20px);
//         margin: 10px;
//         float: left;
//         /* background-color: #3498db; */
//         color: #fff;
//         padding: 20px;
//         box-sizing: border-box;
//       }
    
//       @media (max-width: 767px) {
//         .box {
//           width: calc(50% - 20px);
//         }
//       }
    
//       @media (max-width: 479px) {
//         .box {
//           width: 100%;
//         }
//       }
    
//     /* @media(min-width: 1024px){ */
    
//     .card_wrapper::-webkit-scrollbar {
//         width: 6px;
//       }
      
//       .card_wrapper::-webkit-scrollbar-thumb {
//         background-color: transparent;
//       }
      
//       .card_wrapper::-webkit-scrollbar-track {
//         background-color: transparent;
//       }
//       .card {
//         /* position: relative; */
//         /* top: 10vh; */
//         /* color: white; */
//         /* padding: 10%; */
//         width: 40vw;
//         /* border: 2px solid red; */
//         /* margin-top: 10%; */
//         height: fit-content;
//     }
    
    
//     .card :nth-child(1), .card :nth-child(2), .card :nth-child(3),.card :nth-child(4), .card :nth-child(5){
//         font-size: 2vw;
//         display: flex;
//         /* flex-direction: column; */
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//         padding-top: 20px;
//     }
    
    
//     .card {
//     border-right: 4px solid black;
//     }
//     .card_wrapper > :nth-last-child(1) {
//     border-right: 0px;
//     }
    
    
    
//     /* } */
    
    
//     .section_six{
//         /* border:2px solid red; */
//         background-color: #141313;
//         height: fit-content;
//         color: white;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//     }
    
//      .section_six_boxes :nth-child(1){
//         font-weight: 700;
//         font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-size: 2vw;
//      }
    
//      .sec_six_heading{
//      margin-bottom: 5%;
//      margin-top: 5%;
//      }
    
    
//     .section_six_boxes{
//     border-top: 4px solid white;
//     /* border-bottom: 4px solid white; */
//     text-align: start;
//     margin-top: 3%;
//     display: flex;
//     justify-content: center;
//     align-items: start;
//     flex-direction: column;
//     width: 20vw;
//     }
    
//     .section_six_boxes p{
//       padding: 2%;
//     }
    
//     .section_seven{
//         /* border: 2px solid red; */
//         height: 50vh;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         background-color: #FFE606;
//     }
    
//     .section_seven :nth-child(1){
//         font-size:3vw;
//         margin: 1vw;
//     }
//     .section_seven :nth-child(2){
//         margin-top: 3vw;
//         font-size: 1vw;
//         cursor: pointer; border: 5px solid black; height: 10%; width: 10%; display: flex; align-items: center; justify-content: center;
//         transition: 0.5s;
        
//     }
//     .section_seven :nth-child(2):hover{
//         background-color: #C0C0C0;
//         transition: 0.5s;
//     }
//     .section_eight{
//         background-color: #141313;
//         /* border: 2px solid red; */
//         padding-left: 10%;
//         padding-right: 10%;
//         color: white;
//         }
        
//         .section_eight h1{
//         /* border: 2px solid red; */
//         text-align: center;
//         padding-top: 5%;
//         font-size: 2.7vw;
//         /* background-color: #FFE606; */
//         }
        
//         .section_eight_container {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: space-around;
//             padding-top: 3%;
//             padding-bottom: 3%;
//           }
        
//           .section_eight_box {
//             width: calc(33.33% - 20px);
//             /* margin: 10px; */
//             /* background-color: #3498db; */
//             color: #fff;
//             padding: 20px;
//             box-sizing: border-box;
//           }
    
    
    
//       .section_nine{
//         /* border: 2px solid orange; */
//         width: 100vw;
//         display: flex;
//         justify-content: center;
//         height: 48vh;
//         align-items: center;
//         color: #fff;
//         padding-top: 10%;
//         padding-bottom: 10%;
//       }
    
//       .section_nine_wrapper{
//         width: 80%;
//         height: 80%;
//         /* border: 2px solid #ffff; */
//         display: flex;
//         justify-content: space-between;
    
//       }
    
//       .section_nine_left{
//         /* border: 2px solid red; */
//         width: 50%;
//       }
    
//       .section_nine_right{
//         /* border: 2px solid red; */
//         width: 40%;
//         display: flex;
//         justify-content: space-between;
    
//       }
    
//       .section_nine_right div >:nth-child(1){
//     /* border: 2px solid #FFE606; */
//     margin-top: 30%;
//       }
    
//       .section_nine_right div p{
//     /* border: 2px solid #FFE606; */
//     margin-top: 10%;
//       }
    
//       .section_nine_logo_section{
//         display: flex;
//         justify-content: space-between;
    
//       }
//       .section_nine_logo_section img,  .section_nine_logo_section p{
//         /* border: 2px solid red; */
    
//       }
    
//       .section_nine_logo_section img{
//         margin-right: 10%;
//       }
    
//       .section_nine_office >:nth-child(1){
//         font-size: 2vw;
//         font-weight:700 ;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//       }
//       .section_nine_office p{
//         margin-top: 5%;
//       }
    
    
//       .section_nine_right div >:nth-child(1){
//         /* border: 2px solid #FFE606; */
//         font-size: 1.5vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 900;
//         margin-top: 0;
//           }
    
    
    
        
//           .footer{
//             width: 100vw;
//             height: 10vh;
//             background-color: #141313;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             color: white;
//           }
    
    
    
    
    
        
//     .container {
//       max-width: 1200px;
//       margin: 0 auto;
//       padding: 20px;
//     }
    
//     .box {
//       width: calc(33.333% - 20px);
//       margin: 10px;
//       float: left;
//       /* background-color: #3498db; */
//       color: #fff;
//       padding: 20px;
//       box-sizing: border-box;
//     }
    
//     @media (max-width: 511px) {
    
//       .sec_six_heading h1{
//         font-size: 4vw;
//         margin-top: 8%;
//       }
    
//       .box {
//         width: calc(50% - 20px);
//       }
//     }
    
//     @media (max-width: 479px) {
//       .box {
//         width: 100%;
//       }
//     }
    
//     .navbar{
//         position: fixed;
//         /* border: 2px solid wheat; */
//         background-color: #141313;
//         height: fit-content;
//         z-index: 2;
//         width: 100vw;
//     }
    
    
//       @media (max-width: 1000px) {
//         .section_eight_box {
//           width: calc(50% - 20px);
//         }
//       }
    
//       @media (max-width: 600px) {
//         .section_eight_box {
//           width: calc(100% - 20px);
//         }
//       }
    
    
    
    
    
    
//           /* footer */
    
      
            
//       .section_nine{
//         background-color: #141313;
//         /* border: 2px solid rebeccapurple; */
//         /* height: 100vh; */
//         height: fit-content;
//       }
//       a {
//         text-decoration: none;
//         color: #fff;
//     }
    
    
    
    
    
//     .list_items_services{
//       text-align: start;
//       display: none;
//       /* border: 2px solid red; */
//       width: 10%;
//     position: absolute;
//     background-color: #141313;
//     }
    
    
    
    
//     .list_items_expertise{
//       /* border: 2px solid red; */
//       text-align: start;
//       width: 10%;
//       display: none;
//       position: absolute;
//     left: 9%;
//     background-color: #141313;
//     }
    
//     .list_items_navbar{
//       font-size: 1vw;
//       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//       font-weight: lighter;
//     }
    
//     .list_items_services p, .list_items_expertise p{
//     padding-top: 7%;
//     padding-bottom: 7%;
//     padding-left: 6%;
//     /* border: 2px solid red; */
//     }
    
//     .list_items_services p:hover, .list_items_expertise p:hover{
    
//       border-bottom: 2px solid rgb(181, 181, 181);
//       transition: 4s;
//       cursor: pointer;
//     /* border: 2px solid red; */
//     }
    
//     .list_items_navbar{
//       position: absolute;
//       display: flex;
//     width: 100vw;
//     top: 73%;
//     left: 31%;
//     }
    
//     .hero_section_design{
//       /* height: 40vh; */
//       background-color: #141313;
//     }
    
//     .navbarlist_ite{
//       cursor: pointer;
//     }
//     .card p{
//         font-size: 1.3vw !important;
//         text-align: start !important;
//     }
    
//     .card{
//         padding: 4%;
//     }
    
//     @media(max-width: 511px){
    
//         .card p{
    
//             font-size: 5vw !important;
//             text-align: center !important;
//         }
        
    
//       .navbarlist_ite{
//     font-size: 3vw !important;
//     width: 20vw !important;
//         margin-left: 5% !important;
//       }
//       .navbar ul {
//         display: flex;
//         justify-content: center;
//         list-style: none;
//         /* gap: 2%; */
//         /* padding-bottom: 10%; */
//         /* border: 2px solid red; */
//     }
    
//       .list_items_navbar{
//         position: absolute;
//         display: flex;
//         width: 100vw;
//         top: 73%;
//         left: 0%;
//         }
        
    
//       .list_items_services, .list_items_expertise{
//         font-size: 4vw;
//       width: 36%;
//       left: 33%;
//       }
    
    
//       .section_six_boxes :nth-child(1){
//         font-weight: 700;
//         font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-size: 5vw;
//      }
    
    
//      .section_three >:nth-child(1){
//       color: white;
//       font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//       font-weight: 900;
//       font-size: 4vw;
//       margin-bottom: 3%;
//     }
    
//     .section_threelogos img{
//     width: 14vw;
//     }
    
//     .section_threelogos{
//       display: flex;
//     justify-content: center;
//       /* gap: 10%; */
//     }
    
    
//       .section_1_border p{
//         color: white;
//         padding-top: 5%;
//         font-size: 4vw;
//         }
//         .partner_logos img{
//           /* height: 6vh; */
//           width: 10vw;
//       }
      
        
//       .logo{
//           width: 15vw;
//       }
      
//       .section_seven div{
//           height: 100vh;
//       }
      
//           .section_seven{
//               height: 20vh;
//           }
      
//           .section_nine_logo_section p{
//               font-size: 3vw;
//           }
      
//           .footer{
//               font-size: 3.6vw;
//           }
      
//           .section_nine_right div >:nth-child(1){
//               /* border: 2px solid #FFE606; */
//               /* margin-top: 30%; */
//               font-size: 4vw;
      
//                 }
//           .section_nine_right div p{
//               /* border: 2px solid #FFE606; */
//               /* margin-top: 30%; */
//               font-size: 4vw;
      
//                 }
      
//           .section_nine_right{
//               /* border: 2px solid red; */
//               display: flex;
//          /* justify-content: center; */
//               margin-top: 10%;
//               width: 100%;
//               font-size: 10vw;
      
//             }
          
      
//           .section_nine{
//               height: 100vh;
//           }
      
//           .section_nine_office >:nth-child(1){
//               font-size: 5vw;
//               font-weight:700 ;
//               font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//             }
      
//           .section_nine_wrapper{
//               width: 80%;
//               height: 80%;
//               /* border: 2px solid #ffff; */
//               display: block;
//               justify-content: space-between;
          
//             }
      
//             .section_nine_left{
//               /* border: 2px solid red; */
//               width: 100%;
//             }
      
//           .section_eight h1{
//               font-size: 6vw;
//           }
      
//           .section_seven :nth-child(1){
//               font-size:5vw;
//               margin: 1vw;
//           }
//           .section_seven :nth-child(2){
//               margin-top: 3vw;
//               font-size: 2.5vw;
//               cursor: pointer; border: 5px solid black; height: 10%; width: 20%; display: flex; align-items: center; justify-content: center;
//           }
          
//           .navbarlist_item{
//               transition: transform 0.5s ease;
//               display: flex;
//               flex-direction: column;
//               position:fixed;
//               top: 3vh;
//               right: -45vw;
//               background-color: #141313;
//               /* display: none !important; */
//           }
      
//           .navbarlist_item_active {
//               /* display: block !important; */
//              transition: transform 0.5s ease;
//              transform:translateX(-45vw);
//           }
      
//       .navbarlist_item li{
//         font-size: 5vw;
//     width: 30vw;
//     /* margin-top: 4%; */
//     margin-left: 7%;
//     margin-bottom: 10%;
//     padding-right: 10%;
//       /* margin: 1%; */
//       /* position: absolue; */
//       /* position: relative; */
//       }
      
//           .burger_icon{
//               display: block;
//               width: 5vw;
//               transition: transform 0.5s ease;
        
//           }
//           .burger_icon_active{
        
//               transition: transform 0.5s ease;
//               transform:translateX(-29vw);
//               position: relative;
//           }
      
//           .hero_section h1{
//               font-size: 10vw;
//               /* border: 2px solid red; */
//                   position: relative;
//                   top: 5vh;
//               width: 90vw;
//               text-align: start;
//             }
    
//             .hero_section{
//          /* height: 10000px; */
//             }
          
    
//             .hero_section h1 div li{
//               font-size: 10vw;
//               font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//               font-weight: 900;
//             }
//             .hero_section{
//               height: 70vh;
//               width: 100vw;
//               /* border: 2px solid red; */
//               padding-bottom: 20px;
//               padding-top: 20px;
//             }
      
//             .section_1{
//               height: 27vh;
//               width: 100vw;
//             }
      
//             .section_two{
//               flex-direction: column;
//               align-items: center;
//             }
      
      
//           .section_two_left,.section_two_right{
//           /* border: 2px solid green; */
//           display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 80%;
//       }
      
//       .para_section_two_left > :nth-child(1) {
//           color: white;
//           font-size: 6vw;
//           text-align: center;
//       }
      
//       .para_section_two_left > :nth-child(2){
//           color: #C0C0C0;
//           font-size: 3.5vw;
//           margin-top: 9%;
//           text-align: center;
//       }
       
//       .para_section_two_left{
//           width: 100vw;
//           padding: 1vw;
//       }
      
//       .section_two_right img{
//       width: 40vw;
//       margin-top: 5%;
//       margin-bottom: 10%;
//       }
      
//       .section_four > :nth-child(1){
//           font-size: 7vw;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           font-weight: 600;
//       }
//       .section_four > :nth-child(2){
//           font-size:4vw;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           font-weight: 550;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
//       }
//       .section_four > :nth-child(3){
//           font-size: 4vw;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           font-weight: 450;
//       }
      
//       .section_four p{
//        text-align: center;
//       }
    
//       .section_four{
//         height: 24vh;
//         padding: 10%;
//         margin-top: 15%;
//       }
      
//       .section_five{
//           /* height: 100vh; */
//       height: fit-content;
//       /* display: flex; */
//       align-items: center;
//       justify-content: center;
//       /* padding-top: 10vw; */
//       padding-bottom: 4%;
      
//       }
      
//       .card_wrapper{
    
//           /* border: 2px solid red; */
//           /* margin-left: 10%;
//           margin-right: 10%;
//           display: flex;
//           flex-direction: column; */
//           /* gap: 10vw; */
//           /* background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.1));  */
//           /* height: 10000px; */
    
//       }
      
//       /* .card{
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           padding-top: 2%;
//           padding-bottom: 2%;
//           gap: 1vw;
//       } */
      
//       .card p,h1,h2{
//           text-align: center;
//           font-size: 3vw;
//       }
      
      
//       .section_seven :nth-child(2){
//           height: 20%;
//       }
    
    
//       .card_wrapper {
//         margin-left: 0%;
//         margin-right: 2%;
//         width: 100vw;
//         height: fit-content;
//         padding-top:10% ;
//     }
    
    
//     .card :nth-child(1), .card :nth-child(2), .card :nth-child(3), .card :nth-child(4), .card :nth-child(5) {
//         font-size: 4vw;
//         display: flex;
//         /* flex-direction: column; */
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//         padding-top: 20px;
//     }
//     .card {
//       border: 0;
//       width: 100vw;
//       padding-top: 0%;
//       margin-top:0 ;
//       height: fit-content;
//     }
    
//     .card h1{
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     font-size: 5vw;
//     font-weight: bolder;
//     }
    
    
//     .card h2{
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     font-size: 5vw;
//     font-weight: bolder;
//       }
//     .card p{
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     font-size: 3vw;
//     /* font-weight: bolder; */
//       }
//     }
      
    
//     .fa-chevron-right{
//       position: absolute;
//       cursor: pointer;
//       top: 25px;
//       right: 10px;
//     }
    
//     #service-right, #expertise-right{
//       top: 10px;
//     }
    
    
    
//         *{
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//         font-family: 'Poppins', sans-serif;
//     font-family: 'Roboto', sans-serif;
//     }
    
    
//     .card_wrapper {
//         color: black;
//         /* width: 70vw; */
//         /* height: 1000px; */
//         /* grid-auto-rows: 100%; */
//         overflow-x: auto;
//         display: grid;
//         /* height: 70vh; */
//         grid-auto-flow: column;
//         margin-right: 100px;
//         margin-left: 100px;
//         /* border-right: 2px solid red; */
//         /* background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.1)); */
//         scrollbar-color: transparent;
//         scrollbar-width: thin;
//         /* -ms-overflow-style: none; */
//         /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); */
//     }
    
    
//     .wrapper{
//         /* display: flex;
//         flex-direction: column; */
//         /* width: 50vw; */
//     }
    
//     .navbar{
//         background-color: #141313;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         padding-left: 7%;
//         padding-right: 7%;
//         color: white;
//         height: 10%;
//         padding-top: 30px;
//         padding-bottom: 20px;
//         /* border: 2px solid red; */
//     }
    
//     .logo{
//         /* height: 10vh; */
//         width: 7vw;
//         /* border: 2px solid green; */
//     }
    
//     .navbar ul li img{
//         /* height: 20%; */
//         width: 15%;
//         filter: invert(100%);
//     }
    
//     .navbar ul{
//         display: flex;
//         justify-content: center;
//         list-style: none;
//         /* gap:2%; */
//         /* border: 2px solid red; */
//     }
    
//     .navbar ul > :nth-child(6){
//     /* border: 2px solid wheat; */
//     /* background-color: aqua; */
//     margin-left: 10%;
//     }
    
//     .navbar li {
//         display: flex;
//         /* justify-content: space-around; */
//         gap: 5%;
//         align-items: center;
//      width:10vw;
//      font-size: 1.3vw;
//      /* border: 2px solid red; */
//     }
    
//     .ms-slider {
//         display: inline-block;
//         height: 1.5em;
//         overflow: hidden;
//         vertical-align: middle;
//         -webkit-mask-image: linear-gradient(transparent, white, white, white, transparent);
//                 mask-image: linear-gradient(transparent, white, white, white, transparent);
//         mask-type: luminance;
//         mask-mode: alpha;
//       }
//       .ms-slider__words {
//         display: inline-block;
//         margin: 0;
//         padding: 0;
//         list-style: none;
//         -webkit-animation-name: wordSlider;
//                 animation-name: wordSlider;
//         -webkit-animation-timing-function: ease-out;
//                 animation-timing-function: ease-out;
//         -webkit-animation-iteration-count: infinite;
//                 animation-iteration-count: infinite;
//         -webkit-animation-duration: 7s;
//                 animation-duration: 7s;
//       }
//       .ms-slider__word {
//         display: block;
//         line-height: 1.3em;
//         text-align: left;
//       }
      
//       @-webkit-keyframes wordSlider {
//         0%, 27% {
//           transform: translateY(0%);
//         }
//         33%, 60% {
//           transform: translateY(-25%);
//         }
//         66%, 93% {
//           transform: translateY(-50%);
//         }
//         100% {
//           transform: translateY(-75%);
//         }
//       }
      
//       @keyframes wordSlider {
//         0%, 27% {
//           transform: translateY(0%);
//         }
//         33%, 60% {
//           transform: translateY(-25%);
//         }
//         66%, 93% {
//           transform: translateY(-50%);
//         }
//         100% {
//           transform: translateY(-75%);
//         }
//       }
    
//       .hero_section{
//         background-color: #141313;
//         height: 90vh;
//         width: 100vw;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         /* border: 2px solid red; */
//         position: relative;
//         /* top: 10vh; */
//       }
    
//       .hero_section h1{
//         color: white;
//         font-size: 6vw;
//         /* border: 2px solid red; */
//         width: 88vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     /* font-weight:lighter; */
//         position: relative;
//         top: 10vh;
//       }
    
//       .hero_section h1 div li{
//         font-size: 7vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 900;
//       }
    
//       .homepage-hero-section__title{
//         /* border: 2px solid red; */
//     /* width: 50vw; */
    
//         /* height: 20vh; */
//         /* display: flex; */
//         /* align-items: center;
//         justify-content: center; */
//         /* padding-left: 10%;
//         padding-right: 10%; */
//       }
     
//     .slider-sustainable{
//         color: yellowgreen;
//     }
    
//     .slider-predictable{
//         color: orangered;
//     }
    
//     .slider-scalable{
//         color: violet;
//     }
    
//     .slider-sustainable{
//         color: burlywood;
//     }
    
//     .section_1{
//         background-color: #141313;
//         /* padding-left:7% ;
//         padding-right:7% ; */
//         height: 100vh;
//         width: 100vw;
//         /* border-top:4px solid white ;
//         border-bottom:4px solid white ; */
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         /* border: 2px solid red; */
//     }
    
//     .section_1_border{
//         background-color: #141313;
//         margin-left:10% ;
//         margin-right:10% ;
//             border-top:4px solid white ;
//         border-bottom:4px solid white ;
//         /* padding-top:50px ; */
//         width: 100vw;
//     }
    
//     .partner_logos{
//         display: flex;
//         justify-content: center;
//         gap: 7%;
//         /* border: 2px solid red; */
//         margin-top: 3%;
//         margin-bottom: 3%;
    
//     }
    
//     .partner_logos img{
//         /* height: 6vh; */
//         width: 8vw;
//     }
    
//     .section_1_border p{
//     color: white;
//     padding-top: 5%;
//     font-size: 2vw;
//     }
    
//     .burger_icon{
//         display: none;
//     }
    
    
//     .section_two{
//         /* border: 2px solid red; */
//         background-color: #141313;
//         display: flex;
//         justify-content: center;
//         padding: 10px;
//     }
    
//     .section_two_left,.section_two_right{
//         /* border: 2px solid green; */
//         display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40%;
//     }
    
//     .para_section_two_left > :nth-child(1) {
//         color: white;
//         font-size: 3vw
//     }
    
//     .para_section_two_left > :nth-child(2){
//         color: #C0C0C0;
//         font-size: 1.5vw;
//         margin-top: 2%;
//     }
    
//     .para_section_two_left{
//         width: 50vw;
//         padding: 5vw;
//     }
    
//     .section_two_right img{
//     width: 35vw;
//     }
    
//     .section_three{
//         padding: 15vw;
//         background-color: #141313;
//         /* border: 2px solid red; */
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         height: 20vh;
//     justify-content: center;
    
    
//     }
    
//     .section_three >:nth-child(1){
//         color: white;
//         font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 900;
//         font-size: 2.2vw;
//         margin-bottom: 3%;
//     }
    
//     .section_threelogos img{
//     width: 20%;
//     padding: 4%;
//     }
    
//     .section_threelogos{
//         display: flex;
//     justify-content: center;
//         /* gap: 10%; */
//     }
    
//     .section_four{
//         background-color: white;
//         height: 50vh;
//         display: flex;
//         flex-direction: column;
//         /* border: 2px solid red; */
//         align-items: center;
//         justify-content: center;
//         gap: 5%;
//         color: #141313;
//         padding-bottom: 5%;
//     }
    
//     .section_four > :nth-child(1){
//         font-size: 3.6vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 600;
//     }
//     .section_four > :nth-child(2){
//         font-size:1.6vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 550;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
//     }
//     .section_four > :nth-child(3){
//         font-size: 1.8vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 250;
//     }
    
    
    
//     .section_five {
//         /* display: flex; */
//         /* height: 118VH; */
//         /* border: 2px solid green; */
//         /* flex-direction: column; */
//         /* border: 2px solid red; */
//         padding-bottom: 100px;
//     }
    
//     .container {
//         max-width: 1200px;
//         margin: 0 auto;
//         padding: 20px;
//       }
    
//       .box {
//         width: calc(33.333% - 20px);
//         margin: 10px;
//         float: left;
//         /* background-color: #3498db; */
//         color: #fff;
//         padding: 20px;
//         box-sizing: border-box;
//       }
    
//       @media (max-width: 767px) {
//         .box {
//           width: calc(50% - 20px);
//         }
//       }
    
//       @media (max-width: 479px) {
//         .box {
//           width: 100%;
//         }
//       }
    
//     /* @media(min-width: 1024px){ */
    
//     .card_wrapper::-webkit-scrollbar {
//         width: 6px;
//       }
      
//       .card_wrapper::-webkit-scrollbar-thumb {
//         background-color: transparent;
//       }
      
//       .card_wrapper::-webkit-scrollbar-track {
//         background-color: transparent;
//       }
//       .card {
//         /* position: relative; */
//         /* top: 10vh; */
//         /* color: white; */
//         /* padding: 10%; */
//         width: 40vw;
//         /* border: 2px solid red; */
//         /* margin-top: 10%; */
//         height: fit-content;
//     }
    
    
//     .card :nth-child(1), .card :nth-child(2), .card :nth-child(3),.card :nth-child(4), .card :nth-child(5){
//         font-size: 2vw;
//         display: flex;
//         /* flex-direction: column; */
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//         padding-top: 20px;
//     }
    
    
//     .card {
//     border-right: 4px solid black;
//     }
//     .card_wrapper > :nth-last-child(1) {
//     border-right: 0px;
//     }
    
    
    
//     /* } */
    
    
//     .section_six{
//         /* border:2px solid red; */
//         background-color: #141313;
//         height: fit-content;
//         color: white;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//     }
    
//      .section_six_boxes :nth-child(1){
//         font-weight: 700;
//         font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-size: 2vw;
//      }
    
//      .sec_six_heading{
//      margin-bottom: 5%;
//      margin-top: 5%;
//      }
    
    
//     .section_six_boxes{
//     border-top: 4px solid white;
//     /* border-bottom: 4px solid white; */
//     text-align: start;
//     margin-top: 3%;
//     display: flex;
//     justify-content: center;
//     align-items: start;
//     flex-direction: column;
//     width: 20vw;
//     }
    
//     .section_six_boxes p{
//       padding: 2%;
//     }
    
//     .section_seven{
//         /* border: 2px solid red; */
//         height: 50vh;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         background-color: #FFE606;
//     }
    
//     .section_seven :nth-child(1){
//         font-size:3vw;
//         margin: 1vw;
//     }
//     .section_seven :nth-child(2){
//         margin-top: 3vw;
//         font-size: 1vw;
//         cursor: pointer; border: 5px solid black; height: 10%; width: 10%; display: flex; align-items: center; justify-content: center;
//         transition: 0.5s;
        
//     }
//     .section_seven :nth-child(2):hover{
//         background-color: #C0C0C0;
//         transition: 0.5s;
//     }
//     .section_eight{
//         background-color: #141313;
//         /* border: 2px solid red; */
//         padding-left: 10%;
//         padding-right: 10%;
//         color: white;
//         }
        
//         .section_eight h1{
//         /* border: 2px solid red; */
//         text-align: center;
//         padding-top: 5%;
//         font-size: 2.7vw;
//         /* background-color: #FFE606; */
//         }
        
//         .section_eight_container {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: space-around;
//             padding-top: 3%;
//             padding-bottom: 3%;
//           }
        
//           .section_eight_box {
//             width: calc(33.33% - 20px);
//             /* margin: 10px; */
//             /* background-color: #3498db; */
//             color: #fff;
//             padding: 20px;
//             box-sizing: border-box;
//           }
    
    
    
//       .section_nine{
//         /* border: 2px solid orange; */
//         width: 100vw;
//         display: flex;
//         justify-content: center;
//         height: 48vh;
//         align-items: center;
//         color: #fff;
//         padding-top: 10%;
//         padding-bottom: 10%;
//       }
    
//       .section_nine_wrapper{
//         width: 80%;
//         height: 80%;
//         /* border: 2px solid #ffff; */
//         display: flex;
//         justify-content: space-between;
    
//       }
    
//       .section_nine_left{
//         /* border: 2px solid red; */
//         width: 50%;
//       }
    
//       .section_nine_right{
//         /* border: 2px solid red; */
//         width: 40%;
//         display: flex;
//         justify-content: space-between;
    
//       }
    
//       .section_nine_right div >:nth-child(1){
//     /* border: 2px solid #FFE606; */
//     margin-top: 30%;
//       }
    
//       .section_nine_right div p{
//     /* border: 2px solid #FFE606; */
//     margin-top: 10%;
//       }
    
//       .section_nine_logo_section{
//         display: flex;
//         justify-content: space-between;
    
//       }
//       .section_nine_logo_section img,  .section_nine_logo_section p{
//         /* border: 2px solid red; */
    
//       }
    
//       .section_nine_logo_section img{
//         margin-right: 10%;
//       }
    
//       .section_nine_office >:nth-child(1){
//         font-size: 2vw;
//         font-weight:700 ;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//       }
//       .section_nine_office p{
//         margin-top: 5%;
//       }
    
    
//       .section_nine_right div >:nth-child(1){
//         /* border: 2px solid #FFE606; */
//         font-size: 1.5vw;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-weight: 900;
//         margin-top: 0;
//           }
    
    
    
        
//           .footer{
//             width: 100vw;
//             height: 10vh;
//             background-color: #141313;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             color: white;
//           }
    
    
    
    
    
        
//     .container {
//       max-width: 1200px;
//       margin: 0 auto;
//       padding: 20px;
//     }
    
//     .box {
//       width: calc(33.333% - 20px);
//       margin: 10px;
//       float: left;
//       /* background-color: #3498db; */
//       color: #fff;
//       padding: 20px;
//       box-sizing: border-box;
//     }
    
//     @media (max-width: 511px) {
    
//       .sec_six_heading h1{
//         font-size: 4vw;
//         margin-top: 8%;
//       }
    
//       .box {
//         width: calc(50% - 20px);
//       }
//     }
    
//     @media (max-width: 479px) {
//       .box {
//         width: 100%;
//       }
//     }
    
//     .navbar{
//         position: fixed;
//         /* border: 2px solid wheat; */
//         background-color: #141313;
//         height: fit-content;
//         z-index: 2;
//         width: 100vw;
//     }
    
    
//       @media (max-width: 1000px) {
//         .section_eight_box {
//           width: calc(50% - 20px);
//         }
//       }
    
//       @media (max-width: 600px) {
//         .section_eight_box {
//           width: calc(100% - 20px);
//         }
//       }
    
    
    
    
    
    
//           /* footer */
    
      
            
//       .section_nine{
//         background-color: #141313;
//         /* border: 2px solid rebeccapurple; */
//         /* height: 100vh; */
//         height: fit-content;
//       }
//       a {
//         text-decoration: none;
//         color: #fff;
//     }
    
    
    
    
    
//     .list_items_services{
//       text-align: start;
//       display: none;
//       /* border: 2px solid red; */
//       width: 10%;
//     position: absolute;
//     background-color: #141313;
//     }
    
    
    
    
//     .list_items_expertise{
//       /* border: 2px solid red; */
//       text-align: start;
//       width: 10%;
//       display: none;
//       position: absolute;
//     left: 9%;
//     background-color: #141313;
//     }
    
//     .list_items_navbar{
//       font-size: 1vw;
//       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//       font-weight: lighter;
//     }
    
//     .list_items_services p, .list_items_expertise p{
//     padding-top: 7%;
//     padding-bottom: 7%;
//     padding-left: 6%;
//     /* border: 2px solid red; */
//     }
    
//     .list_items_services p:hover, .list_items_expertise p:hover{
    
//       border-bottom: 2px solid rgb(181, 181, 181);
//       transition: 4s;
//       cursor: pointer;
//     /* border: 2px solid red; */
//     }
    
//     .list_items_navbar{
//       position: absolute;
//       display: flex;
//     width: 100vw;
//     top: 73%;
//     left: 31%;
//     }
    
//     .hero_section_design{
//       /* height: 40vh; */
//       background-color: #141313;
//     }
    
//     .navbarlist_ite{
//       cursor: pointer;
//     }
//     .card p{
//         font-size: 1.3vw !important;
//         text-align: start !important;
//     }
    
//     .card{
//         padding: 4%;
//     }
    
//     @media(max-width: 511px){
    
//         .card p{
    
//             font-size: 5vw !important;
//             text-align: center !important;
//         }
        
    
//       .navbarlist_ite{
//     font-size: 3vw !important;
//     width: 20vw !important;
//         margin-left: 5% !important;
//       }
//       .navbar ul {
//         display: flex;
//         justify-content: center;
//         list-style: none;
//         /* gap: 2%; */
//         /* padding-bottom: 10%; */
//         /* border: 2px solid red; */
//     }
    
//       .list_items_navbar{
//         position: absolute;
//         display: flex;
//         width: 100vw;
//         top: 73%;
//         left: 0%;
//         }
        
    
//       .list_items_services, .list_items_expertise{
//         font-size: 4vw;
//       width: 36%;
//       left: 33%;
//       }
    
    
//       .section_six_boxes :nth-child(1){
//         font-weight: 700;
//         font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         font-size: 5vw;
//      }
    
    
//      .section_three >:nth-child(1){
//       color: white;
//       font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//       font-weight: 900;
//       font-size: 4vw;
//       margin-bottom: 3%;
//     }
    
//     .section_threelogos img{
//     width: 14vw;
//     }
    
//     .section_threelogos{
//       display: flex;
//     justify-content: center;
//       /* gap: 10%; */
//     }
    
    
//       .section_1_border p{
//         color: white;
//         padding-top: 5%;
//         font-size: 4vw;
//         }
//         .partner_logos img{
//           /* height: 6vh; */
//           width: 10vw;
//       }
      
        
//       .logo{
//           width: 15vw;
//       }
      
//       .section_seven div{
//           height: 100vh;
//       }
      
//           .section_seven{
//               height: 20vh;
//           }
      
//           .section_nine_logo_section p{
//               font-size: 3vw;
//           }
      
//           .footer{
//               font-size: 3.6vw;
//           }
      
//           .section_nine_right div >:nth-child(1){
//               /* border: 2px solid #FFE606; */
//               /* margin-top: 30%; */
//               font-size: 4vw;
      
//                 }
//           .section_nine_right div p{
//               /* border: 2px solid #FFE606; */
//               /* margin-top: 30%; */
//               font-size: 4vw;
      
//                 }
      
//           .section_nine_right{
//               /* border: 2px solid red; */
//               display: flex;
//          /* justify-content: center; */
//               margin-top: 10%;
//               width: 100%;
//               font-size: 10vw;
      
//             }
          
      
//           .section_nine{
//               height: 100vh;
//           }
      
//           .section_nine_office >:nth-child(1){
//               font-size: 5vw;
//               font-weight:700 ;
//               font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//             }
      
//           .section_nine_wrapper{
//               width: 80%;
//               height: 80%;
//               /* border: 2px solid #ffff; */
//               display: block;
//               justify-content: space-between;
          
//             }
      
//             .section_nine_left{
//               /* border: 2px solid red; */
//               width: 100%;
//             }
      
//           .section_eight h1{
//               font-size: 6vw;
//           }
      
//           .section_seven :nth-child(1){
//               font-size:5vw;
//               margin: 1vw;
//           }
//           .section_seven :nth-child(2){
//               margin-top: 3vw;
//               font-size: 2.5vw;
//               cursor: pointer; border: 5px solid black; height: 10%; width: 20%; display: flex; align-items: center; justify-content: center;
//           }
          
//           .navbarlist_item{
//               transition: transform 0.5s ease;
//               display: flex;
//               flex-direction: column;
//               position:fixed;
//               top: 3vh;
//               right: -45vw;
//               background-color: #141313;
//               /* display: none !important; */
//           }
      
//           .navbarlist_item_active {
//               /* display: block !important; */
//              transition: transform 0.5s ease;
//              transform:translateX(-45vw);
//           }
      
//       .navbarlist_item li{
//         font-size: 5vw;
//     width: 30vw;
//     /* margin-top: 4%; */
//     margin-left: 7%;
//     margin-bottom: 10%;
//     padding-right: 10%;
//       /* margin: 1%; */
//       /* position: absolue; */
//       /* position: relative; */
//       }
      
//           .burger_icon{
//               display: block;
//               width: 5vw;
//               transition: transform 0.5s ease;
        
//           }
//           .burger_icon_active{
        
//               transition: transform 0.5s ease;
//               transform:translateX(-29vw);
//               position: relative;
//           }
      
//           .hero_section h1{
//               font-size: 10vw;
//               /* border: 2px solid red; */
//                   position: relative;
//                   top: 5vh;
//               width: 90vw;
//               text-align: start;
//             }
    
//             .hero_section{
//          /* height: 10000px; */
//             }
          
    
//             .hero_section h1 div li{
//               font-size: 10vw;
//               font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//               font-weight: 900;
//             }
//             .hero_section{
//               height: 70vh;
//               width: 100vw;
//               /* border: 2px solid red; */
//               padding-bottom: 20px;
//               padding-top: 20px;
//             }
      
//             .section_1{
//               height: 27vh;
//               width: 100vw;
//             }
      
//             .section_two{
//               flex-direction: column;
//               align-items: center;
//             }
      
      
//           .section_two_left,.section_two_right{
//           /* border: 2px solid green; */
//           display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 80%;
//       }
      
//       .para_section_two_left > :nth-child(1) {
//           color: white;
//           font-size: 6vw;
//           text-align: center;
//       }
      
//       .para_section_two_left > :nth-child(2){
//           color: #C0C0C0;
//           font-size: 3.5vw;
//           margin-top: 9%;
//           text-align: center;
//       }
       
//       .para_section_two_left{
//           width: 100vw;
//           padding: 1vw;
//       }
      
//       .section_two_right img{
//       width: 40vw;
//       margin-top: 5%;
//       margin-bottom: 10%;
//       }
      
//       .section_four > :nth-child(1){
//           font-size: 7vw;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           font-weight: 600;
//       }
//       .section_four > :nth-child(2){
//           font-size:4vw;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           font-weight: 550;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
//       }
//       .section_four > :nth-child(3){
//           font-size: 4vw;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           font-weight: 450;
//       }
      
//       .section_four p{
//        text-align: center;
//       }
    
//       .section_four{
//         height: 24vh;
//         padding: 10%;
//         margin-top: 15%;
//       }
      
//       .section_five{
//           /* height: 100vh; */
//       height: fit-content;
//       /* display: flex; */
//       align-items: center;
//       justify-content: center;
//       /* padding-top: 10vw; */
//       padding-bottom: 4%;
      
//       }
      
//       .card_wrapper{
    
//           /* border: 2px solid red; */
//           /* margin-left: 10%;
//           margin-right: 10%;
//           display: flex;
//           flex-direction: column; */
//           /* gap: 10vw; */
//           /* background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.1));  */
//           /* height: 10000px; */
    
//       }
      
//       /* .card{
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           padding-top: 2%;
//           padding-bottom: 2%;
//           gap: 1vw;
//       } */
      
//       .card p,h1,h2{
//           text-align: center;
//           font-size: 3vw;
//       }
      
      
//       .section_seven :nth-child(2){
//           height: 20%;
//       }
    
    
//       .card_wrapper {
//         margin-left: 0%;
//         margin-right: 2%;
//         width: 100vw;
//         height: fit-content;
//         padding-top:10% ;
//     }
    
    
//     .card :nth-child(1), .card :nth-child(2), .card :nth-child(3), .card :nth-child(4), .card :nth-child(5) {
//         font-size: 4vw;
//         display: flex;
//         /* flex-direction: column; */
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//         padding-top: 20px;
//     }
//     .card {
//       border: 0;
//       width: 100vw;
//       padding-top: 0%;
//       margin-top:0 ;
//       height: fit-content;
//     }
    
//     .card h1{
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     font-size: 5vw;
//     font-weight: bolder;
//     }
    
    
//     .card h2{
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     font-size: 5vw;
//     font-weight: bolder;
//       }
//     .card p{
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     font-size: 3vw;
//     /* font-weight: bolder; */
//       }
//     }
      
//     /* <style id="wpr-usedcss"> */
//     :where(.wp-block-button__link) {
//         box-shadow: none;
//         text-decoration: none;
//         border-radius: 9999px;
//         padding: calc(.667em + 2px) calc(1.333em + 2px)
//     }
    
//     :where(.wp-block-columns.has-background) {
//         padding: 1.25em 2.375em
//     }
    
//     :where(.wp-block-post-comments input[type=submit]) {
//         border: none
//     }
    
//     :where(.wp-block-file__button) {
//         border-radius: 2em;
//         padding: .5em 1em
//     }
    
//     :where(.wp-block-file__button):is(a):active,
//     :where(.wp-block-file__button):is(a):focus,
//     :where(.wp-block-file__button):is(a):hover,
//     :where(.wp-block-file__button):is(a):visited {
//         box-shadow: none;
//         color: #fff;
//         opacity: .85;
//         text-decoration: none
//     }
    
//     ol,
//     ul {
//         box-sizing: border-box;
//         margin-top: 0
//     }
    
//     :where(.wp-block-navigation .wp-block-navigation__submenu-container .wp-block-navigation-item a:not(.wp-element-button)),
//     :where(.wp-block-navigation .wp-block-navigation__submenu-container .wp-block-navigation-submenu a:not(.wp-element-button)),
//     :where(.wp-block-navigation.has-background .wp-block-navigation-item a:not(.wp-element-button)),
//     :where(.wp-block-navigation.has-background .wp-block-navigation-submenu a:not(.wp-element-button)) {
//         padding: .5em 1em
//     }
    
//     :where(p.has-text-color:not(.has-link-color)) a {
//         color: inherit
//     }
    
//     :where(.wp-block-search__button) {
//         border: 1px solid #ccc;
//         padding: .375em .625em
//     }
    
//     :where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) {
//         padding: 4px;
//         border: 1px solid #949494
//     }
    
//     :where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) .wp-block-search__input {
//         border-radius: 0;
//         border: none;
//         padding: 0 0 0 .25em
//     }
    
//     :where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) .wp-block-search__input:focus {
//         outline: 0
//     }
    
//     :where(.wp-block-search__button-inside .wp-block-search__inside-wrapper) :where(.wp-block-search__button) {
//         padding: .125em .5em
//     }
    
//     :root {
//         --wp--preset--font-size--normal: 16px;
//         --wp--preset--font-size--huge: 42px;
//         --blue: #007bff;
//         --indigo: #6610f2;
//         --purple: #6f42c1;
//         --pink: #e83e8c;
//         --red: #dc3545;
//         --orange: #fd7e14;
//         --yellow: #ffc107;
//         --green: #28a745;
//         --teal: #20c997;
//         --cyan: #17a2b8;
//         --white: #fff;
//         --gray: #6c757d;
//         --gray-dark: #343a40;
//         --primary: #141313;
//         --secondary: #ffe607;
//         --light-black: #414141;
//         --light-black-2: #706f6e;
//         --dark-black: #141313;
//         --gray: silver;
//         --gray-2: #bebebe;
//         --blue: #0f35f7;
//         --black: #000;
//         --green: #4ec923;
//         --breakpoint-xs: 0;
//         --breakpoint-sm: 576px;
//         --breakpoint-md: 768px;
//         --breakpoint-lg: 992px;
//         --breakpoint-xl: 1200px;
//         --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
//         --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
//     }
    
//     .screen-reader-text {
//         border: 0;
//         clip: rect(1px, 1px, 1px, 1px);
//         clip-path: inset(50%);
//         height: 1px;
//         margin: -1px;
//         overflow: hidden;
//         padding: 0;
//         position: absolute;
//         width: 1px;
//         word-wrap: normal !important
//     }
    
//     .screen-reader-text:focus {
//         background-color: #ddd;
//         clip: auto !important;
//         clip-path: none;
//         color: #444;
//         display: block;
//         font-size: 1em;
//         height: auto;
//         left: 5px;
//         line-height: normal;
//         padding: 15px 23px 14px;
//         text-decoration: none;
//         top: 5px;
//         width: auto;
//         z-index: 100000
//     }
    
//     html :where(.has-border-color) {
//         border-style: solid
//     }
    
//     html :where([style*=border-top-color]) {
//         border-top-style: solid
//     }
    
//     html :where([style*=border-right-color]) {
//         border-right-style: solid
//     }
    
//     html :where([style*=border-bottom-color]) {
//         border-bottom-style: solid
//     }
    
//     html :where([style*=border-left-color]) {
//         border-left-style: solid
//     }
    
//     html :where([style*=border-width]) {
//         border-style: solid
//     }
    
//     html :where([style*=border-top-width]) {
//         border-top-style: solid
//     }
    
//     html :where([style*=border-right-width]) {
//         border-right-style: solid
//     }
    
//     html :where([style*=border-bottom-width]) {
//         border-bottom-style: solid
//     }
    
//     html :where([style*=border-left-width]) {
//         border-left-style: solid
//     }
    
//     html :where(img[class*=wp-image-]) {
//         height: auto;
//         max-width: 100%
//     }
    
//     :where(.wp-block-group.has-background) {
//         padding: 1.25em 2.375em
//     }
    
//     :where(.is-layout-flex) {
//         gap: .5em
//     }
    
//     :where(.wp-block-columns.is-layout-flex) {
//         gap: 2em
//     }
    
//     .collapseall,
//     .collapseomatic,
//     .expandall {
//         cursor: pointer
//     }
    
//     .maptastic {
//         position: absolute !important;
//         left: -10000px !important;
//         display: block !important;
//         max-width: 9999px
//     }
    
//     .collapseomatic {
//         background-repeat: no-repeat;
//         padding: 0 0 10px 16px
//     }
    
//     .collapseomatic:focus {
//         outline: 0
//     }
    
//     .colomat-hover {
//         text-decoration: underline
//     }
    
//     .colomat-close {
//     }
    
//     .collapseomatic_content {
//         margin-top: 0;
//         margin-left: 16px;
//         padding: 0
//     }
    
//     .content_collapse_wrapper {
//         position: absolute;
//         left: -999em
//     }
    
//     .collapseall:focus,
//     .collapseall:hover,
//     .expandall:focus,
//     .expandall:hover {
//         text-decoration: underline
//     }
    
//     .hide {
//         height: 0;
//         margin: 0;
//         padding: 0;
//         text-indent: -998em
//     }
    
//     .adjustable-element {
//         -webkit-flex-shrink: 0;
//         flex-shrink: 0;
//         width: auto;
//         max-width: 100%;
//         height: auto;
//         max-height: 100%
//     }
    
//     .font-size-11 {
//         font-size: .6875rem
//     }
    
//     .font-size-14 {
//         font-size: .875rem
//     }
    
//     .font-size-16 {
//         font-size: 1rem
//     }
    
//     .font-size-18 {
//         font-size: 1.0625rem
//     }
    
//     @media (min-width:576px) {
//         .font-size-18 {
//             font-size: 1.07813rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .font-size-18 {
//             font-size: 1.09375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .font-size-18 {
//             font-size: 1.10938rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .font-size-18 {
//             font-size: 1.125rem
//         }
//     }
    
//     .font-size-20 {
//         font-size: 1.125rem
//     }
    
//     @media (min-width:576px) {
//         .font-size-20 {
//             font-size: 1.15625rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .font-size-20 {
//             font-size: 1.1875rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .font-size-20 {
//             font-size: 1.21875rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .font-size-20 {
//             font-size: 1.25rem
//         }
//     }
    
//     .font-size-23 {
//         font-size: 1.125rem
//     }
    
//     @media (min-width:576px) {
//         .font-size-23 {
//             font-size: 1.20313rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .font-size-23 {
//             font-size: 1.28125rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .font-size-23 {
//             font-size: 1.35938rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .font-size-23 {
//             font-size: 1.4375rem
//         }
//     }
    
//     .font-size-29 {
//         font-size: 1.375rem
//     }
    
//     @media (min-width:576px) {
//         .font-size-29 {
//             font-size: 1.48438rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .font-size-29 {
//             font-size: 1.59375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .font-size-29 {
//             font-size: 1.70313rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .font-size-29 {
//             font-size: 1.8125rem
//         }
//     }
    
//     .font-size-57 {
//         font-size: 1.8125rem
//     }
    
//     @media (min-width:576px) {
//         .font-size-57 {
//             font-size: 2.25rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .font-size-57 {
//             font-size: 2.6875rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .font-size-57 {
//             font-size: 3.125rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .font-size-57 {
//             font-size: 3.5625rem
//         }
//     }
    
//     .hover-opacity-0-75:focus,
//     .hover-opacity-0-75:hover {
//         opacity: .75
//     }
    
//     *,
//     :after,
//     :before {
//         box-sizing: border-box
//     }
    
//     html {
//         font-family: sans-serif;
//         line-height: 1.15;
//         -webkit-text-size-adjust: 100%;
//         -webkit-tap-highlight-color: transparent;
//         --scroll-behavior: unset;
//         scroll-behavior: unset
//     }
    
//     footer,
//     header,
//     main,
//     nav,
//     section {
//         display: block
//     }
    
//     body {
//         --wp--preset--color--black: #000000;
//         --wp--preset--color--cyan-bluish-gray: #abb8c3;
//         --wp--preset--color--white: #ffffff;
//         --wp--preset--color--pale-pink: #f78da7;
//         --wp--preset--color--vivid-red: #cf2e2e;
//         --wp--preset--color--luminous-vivid-orange: #ff6900;
//         --wp--preset--color--luminous-vivid-amber: #fcb900;
//         --wp--preset--color--light-green-cyan: #7bdcb5;
//         --wp--preset--color--vivid-green-cyan: #00d084;
//         --wp--preset--color--pale-cyan-blue: #8ed1fc;
//         --wp--preset--color--vivid-cyan-blue: #0693e3;
//         --wp--preset--color--vivid-purple: #9b51e0;
//         --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
//         --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
//         --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
//         --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
//         --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
//         --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
//         --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
//         --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
//         --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
//         --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
//         --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
//         --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
//         --wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');
//         --wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');
//         --wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');
//         --wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');
//         --wp--preset--duotone--midnight: url('#wp-duotone-midnight');
//         --wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');
//         --wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');
//         --wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');
//         --wp--preset--font-size--small: 13px;
//         --wp--preset--font-size--medium: 20px;
//         --wp--preset--font-size--large: 36px;
//         --wp--preset--font-size--x-large: 42px;
//         --wp--preset--spacing--20: 0.44rem;
//         --wp--preset--spacing--30: 0.67rem;
//         --wp--preset--spacing--40: 1rem;
//         --wp--preset--spacing--50: 1.5rem;
//         --wp--preset--spacing--60: 2.25rem;
//         --wp--preset--spacing--70: 3.38rem;
//         --wp--preset--spacing--80: 5.06rem;
//         margin: 0;
//         font-family: Suisse, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
//         font-size: 1rem;
//         font-weight: 400;
//         color: silver;
//         text-align: left;
//         background-color: #fff !important
//     }
    
//     [tabindex="-1"]:focus:not(:focus-visible) {
//         outline: 0 !important
//     }
    
//     h1,
//     h2,
//     h3,
//     h4 {
//         margin-top: 0;
//         margin-bottom: .5rem
//     }
    
//     p {
//         margin-top: 0;
//         margin-bottom: 1rem
//     }
    
//     abbr[title] {
//         text-decoration: underline;
//         -webkit-text-decoration: underline dotted;
//         text-decoration: underline dotted;
//         cursor: help;
//         border-bottom: 0;
//         -webkit-text-decoration-skip-ink: none;
//         text-decoration-skip-ink: none
//     }
    
//     address {
//         font-style: normal;
//         line-height: inherit
//     }
    
//     address,
//     ol,
//     ul {
//         margin-bottom: 1rem
//     }
    
//     ol ol,
//     ol ul,
//     ul ol,
//     ul ul {
//         margin-bottom: 0
//     }
    
//     b,
//     strong {
//         font-weight: bolder
//     }
    
//     a:hover {
//         color: #0056b3;
//         text-decoration: underline
//     }
    
//     a:not([href]),
//     a:not([href]):hover {
//         color: inherit;
//         text-decoration: none
//     }
    
//     code,
//     pre {
//         font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
//         font-size: 1em
//     }
    
//     pre {
//         margin-top: 0;
//         margin-bottom: 1rem;
//         overflow: auto
//     }
    
//     img {
//         border-style: none;
//         display: inline-block
//     }
    
//     img,
//     svg {
//         vertical-align: middle
//     }
    
//     svg {
//         overflow: hidden
//     }
    
//     label {
//         display: inline-block;
//         margin-bottom: .5rem
//     }
    
//     button {
//         border-radius: 0
//     }
    
//     button:focus {
//         outline: dotted 1px;
//         outline: -webkit-focus-ring-color auto 5px
//     }
    
//     button,
//     input,
//     optgroup,
//     select,
//     textarea {
//         margin: 0;
//         font-family: inherit;
//         font-size: inherit;
//         line-height: inherit
//     }
    
//     button,
//     select {
//         text-transform: none
//     }
    
//     select {
//         word-wrap: normal
//     }
    
//     [type=button],
//     [type=reset],
//     [type=submit],
//     button {
//         -webkit-appearance: button
//     }
    
//     [type=button]:not(:disabled),
//     [type=reset]:not(:disabled),
//     [type=submit]:not(:disabled),
//     button:not(:disabled) {
//         cursor: pointer
//     }
    
//     [type=button]::-moz-focus-inner,
//     [type=reset]::-moz-focus-inner,
//     [type=submit]::-moz-focus-inner,
//     button::-moz-focus-inner {
//         padding: 0;
//         border-style: none
//     }
    
//     input[type=checkbox],
//     input[type=radio] {
//         box-sizing: border-box;
//         padding: 0
//     }
    
//     input[type=date],
//     input[type=time] {
//         -webkit-appearance: listbox
//     }
    
//     textarea {
//         overflow: auto;
//         resize: vertical
//     }
    
//     fieldset {
//         min-width: 0;
//         padding: 0;
//         margin: 0;
//         border: 0
//     }
    
//     legend {
//         display: block;
//         width: 100%;
//         max-width: 100%;
//         padding: 0;
//         margin-bottom: .5rem;
//         font-size: 1.5rem;
//         line-height: inherit;
//         color: inherit;
//         white-space: normal
//     }
    
//     progress {
//         vertical-align: baseline
//     }
    
//     [type=number]::-webkit-inner-spin-button,
//     [type=number]::-webkit-outer-spin-button {
//         height: auto
//     }
    
//     [type=search] {
//         outline-offset: -2px;
//         -webkit-appearance: none
//     }
    
//     [type=search]::-webkit-search-decoration {
//         -webkit-appearance: none
//     }
    
//     ::-webkit-file-upload-button {
//         font: inherit;
//         -webkit-appearance: button
//     }
    
//     template {
//         display: none
//     }
    
//     [hidden] {
//         display: none !important
//     }
    
//     .container {
//         width: 100%;
//         padding-right: 15px;
//         padding-left: 15px;
//         margin-right: auto;
//         margin-left: auto
//     }
    
//     @media (min-width:576px) {
//         .container {
//             max-width: 540px
//         }
//     }
    
//     @media (min-width:768px) {
//         .container {
//             max-width: 720px
//         }
//     }
    
//     @media (min-width:992px) {
//         .container {
//             max-width: 960px
//         }
//     }
    
//     @media (min-width:1200px) {
//         .container {
//             max-width: 1140px
//         }
//     }
    
//     .row {
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-flex-wrap: wrap;
//         flex-wrap: wrap;
//         margin-right: -15px;
//         margin-left: -15px
//     }
    
//     .no-gutters {
//         margin-right: 0;
//         margin-left: 0
//     }
    
//     .no-gutters>.col,
//     .no-gutters>[class*=col-] {
//         padding-right: 0;
//         padding-left: 0
//     }
    
//     .col,
//     .col-12,
//     .col-4,
//     .col-auto,
//     .col-lg-10,
//     .col-lg-11,
//     .col-lg-2,
//     .col-lg-4,
//     .col-lg-5,
//     .col-lg-6,
//     .col-lg-7,
//     .col-md-3,
//     .col-md-4,
//     .col-sm-3,
//     .col-sm-6 {
//         position: relative;
//         width: 100%;
//         padding-right: 15px;
//         padding-left: 15px
//     }
    
//     .col {
//         -webkit-flex-basis: 0;
//         flex-basis: 0;
//         -webkit-box-flex: 1;
//         -webkit-flex-grow: 1;
//         flex-grow: 1;
//         max-width: 100%
//     }
    
//     .col-auto {
//         -webkit-flex: 0 0 auto;
//         flex: 0 0 auto;
//         width: auto;
//         max-width: 100%;
//         -webkit-box-flex: 0
//     }
    
//     .col-4 {
//         -webkit-flex: 0 0 33.33333%;
//         flex: 0 0 33.33333%;
//         max-width: 33.33333%;
//         -webkit-box-flex: 0
//     }
    
//     .col-12 {
//         -webkit-box-flex: 0;
//         -webkit-flex: 0 0 100%;
//         flex: 0 0 100%;
//         max-width: 100%
//     }
    
//     @media (min-width:576px) {
//         .col-sm-3 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 25%;
//             flex: 0 0 25%;
//             max-width: 25%
//         }
//         .col-sm-6 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 50%;
//             flex: 0 0 50%;
//             max-width: 50%
//         }
//     }
    
//     @media (min-width:768px) {
//         .col-md-3 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 25%;
//             flex: 0 0 25%;
//             max-width: 25%
//         }
//         .col-md-4 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 33.33333%;
//             flex: 0 0 33.33333%;
//             max-width: 33.33333%
//         }
//     }
    
//     @media (min-width:992px) {
//         .col-lg-2 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 16.66667%;
//             flex: 0 0 16.66667%;
//             max-width: 16.66667%
//         }
//         .col-lg-4 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 33.33333%;
//             flex: 0 0 33.33333%;
//             max-width: 33.33333%
//         }
//         .col-lg-5 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 41.66667%;
//             flex: 0 0 41.66667%;
//             max-width: 41.66667%
//         }
//         .col-lg-6 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 50%;
//             flex: 0 0 50%;
//             max-width: 50%
//         }
//         .col-lg-7 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 58.33333%;
//             flex: 0 0 58.33333%;
//             max-width: 58.33333%
//         }
//         .col-lg-10 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 83.33333%;
//             flex: 0 0 83.33333%;
//             max-width: 83.33333%
//         }
//         .col-lg-11 {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 91.66667%;
//             flex: 0 0 91.66667%;
//             max-width: 91.66667%
//         }
//         .order-lg-2 {
//             -webkit-box-ordinal-group: 3;
//             -webkit-order: 2;
//             order: 2
//         }
//     }
    
//     .navbar {
//         position: relative;
//         padding: .5rem 1rem
//     }
    
//     .navbar,
//     .navbar .container {
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-flex-wrap: wrap;
//         flex-wrap: wrap;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         -webkit-box-pack: justify;
//         -webkit-justify-content: space-between;
//         justify-content: space-between
//     }
    
//     .navbar-brand {
//         display: inline-block;
//         padding-top: .3125rem;
//         padding-bottom: .3125rem;
//         margin-right: 1rem;
//         font-size: 1.25rem;
//         line-height: inherit;
//         white-space: nowrap
//     }
    
//     .navbar-brand:focus,
//     .navbar-brand:hover {
//         text-decoration: none
//     }
    
//     .navbar-nav {
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-orient: vertical;
//         -webkit-box-direction: normal;
//         -webkit-flex-direction: column;
//         flex-direction: column;
//         padding-left: 0;
//         margin-bottom: 0;
//         list-style: none
//     }
    
//     .navbar-nav .nav-link {
//         padding-right: 0;
//         padding-left: 0
//     }
    
//     .navbar-nav .dropdown-menu {
//         position: static;
//         float: none
//     }
    
//     .navbar-collapse {
//         -webkit-flex-basis: 100%;
//         flex-basis: 100%;
//         -webkit-box-flex: 1;
//         -webkit-flex-grow: 1;
//         flex-grow: 1;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center
//     }
    
//     .navbar-toggler {
//         padding: .25rem .75rem;
//         font-size: 1.25rem;
//         line-height: 1;
//         background-color: transparent;
//         border: 1px solid transparent;
//         border-radius: .25rem
//     }
    
//     .navbar-toggler:focus,
//     .navbar-toggler:hover {
//         text-decoration: none
//     }
    
//     .bg-primary {
//         background-color: #141313 !important
//     }
    
//     a.bg-primary:focus,
//     a.bg-primary:hover,
//     button.bg-primary:focus,
//     button.bg-primary:hover {
//         background-color: #000 !important
//     }
    
//     .bg-white {
//         background-color: #fff !important
//     }
    
//     .bg-transparent {
//         background-color: transparent !important
//     }
    
//     .border {
//         border: 1px solid #dee2e6 !important
//     }
    
//     .border-top {
//         border-top: 1px solid #dee2e6 !important
//     }
    
//     .border-0 {
//         border: 0 !important
//     }
    
//     .border-top-0 {
//         border-top: 0 !important
//     }
    
//     .border-right-0 {
//         border-right: 0 !important
//     }
    
//     .border-bottom-0 {
//         border-bottom: 0 !important
//     }
    
//     .border-left-0 {
//         border-left: 0 !important
//     }
    
//     .rounded-circle {
//         border-radius: 50% !important
//     }
    
//     .d-none {
//         display: none !important
//     }
    
//     .d-inline-block {
//         display: inline-block !important
//     }
    
//     .d-block {
//         display: block !important
//     }
    
//     .d-flex {
//         display: -webkit-box !important;
//         display: -webkit-flex !important;
//         display: flex !important
//     }
    
//     .d-inline-flex {
//         display: -webkit-inline-box !important;
//         display: -webkit-inline-flex !important;
//         display: inline-flex !important
//     }
    
//     .flex-row {
//         -webkit-box-orient: horizontal !important;
//         -webkit-flex-direction: row !important;
//         flex-direction: row !important
//     }
    
//     .flex-column,
//     .flex-row {
//         -webkit-box-direction: normal !important
//     }
    
//     .flex-column {
//         -webkit-box-orient: vertical !important;
//         -webkit-flex-direction: column !important;
//         flex-direction: column !important
//     }
    
//     .flex-wrap {
//         -webkit-flex-wrap: wrap !important;
//         flex-wrap: wrap !important
//     }
    
//     .justify-content-start,
//     .justify-content-start-a {
//         -webkit-box-pack: start !important;
//         -webkit-justify-content: flex-start !important;
//         justify-content: flex-start !important
//     }
    
//     @media (max-width:999px) {
//         .justify-content-start-a {
//             -webkit-box-pack: center !important;
//             -webkit-justify-content: center !important;
//             justify-content: center !important
//         }
//     }
    
//     .justify-content-center {
//         -webkit-box-pack: center !important;
//         -webkit-justify-content: center !important;
//         justify-content: center !important
//     }
    
//     .justify-content-between {
//         -webkit-box-pack: justify !important;
//         -webkit-justify-content: space-between !important;
//         justify-content: space-between !important
//     }
    
//     .align-items-start {
//         -webkit-box-align: start !important;
//         -webkit-align-items: flex-start !important;
//         align-items: flex-start !important
//     }
    
//     .align-items-center {
//         -webkit-box-align: center !important;
//         -webkit-align-items: center !important;
//         align-items: center !important
//     }
    
//     .align-self-start {
//         -webkit-align-self: flex-start !important;
//         align-self: flex-start !important
//     }
    
//     .overflow-hidden {
//         overflow: hidden !important
//     }
    
//     .position-relative {
//         position: relative !important
//     }
    
//     .position-absolute {
//         position: absolute !important
//     }
    
//     .position-fixed {
//         position: fixed !important
//     }
    
//     .fixed-top {
//         top: 0;
//         position: fixed;
//         right: 0;
//         left: 0;
//         z-index: 1030
//     }
    
//     .sr-only {
//         position: absolute;
//         width: 1px;
//         height: 1px;
//         padding: 0;
//         margin: -1px;
//         overflow: hidden;
//         clip: rect(0, 0, 0, 0);
//         white-space: nowrap;
//         border: 0
//     }
    
//     .w-100 {
//         width: 100% !important
//     }
    
//     .w-auto {
//         width: auto !important
//     }
    
//     .h-100 {
//         height: 100% !important
//     }
    
//     .h-auto {
//         height: auto !important
//     }
    
//     .m-0 {
//         margin: 0 !important
//     }
    
//     .my-0 {
//         margin-top: 0 !important
//     }
    
//     .mb-0,
//     .my-0 {
//         margin-bottom: 0 !important
//     }
    
//     .ml-0 {
//         margin-left: 0 !important
//     }
    
//     .p-0 {
//         padding: 0 !important
//     }
    
//     .px-0 {
//         padding-right: 0 !important;
//         padding-left: 0 !important
//     }
    
//     .mx-auto {
//         margin-right: auto !important;
//         margin-left: auto !important
//     }
    
//     .text-left {
//         text-align: left !important
//     }
    
//     .text-center {
//         text-align: center !important
//     }
    
//     @media (min-width:768px) {
//         .d-md-flex {
//             display: -webkit-box !important;
//             display: -webkit-flex !important;
//             display: flex !important
//         }
//         .flex-md-nowrap {
//             -webkit-flex-wrap: nowrap !important;
//             flex-wrap: nowrap !important
//         }
//         .text-md-left {
//             text-align: left !important
//         }
//     }
    
//     @media (min-width:992px) {
//         .d-lg-none {
//             display: none !important
//         }
//         .d-lg-inline-block {
//             display: inline-block !important
//         }
//         .d-lg-block {
//             display: block !important
//         }
//         .d-lg-flex {
//             display: -webkit-box !important;
//             display: -webkit-flex !important;
//             display: flex !important
//         }
//         .flex-lg-row {
//             -webkit-box-orient: horizontal !important;
//             -webkit-flex-direction: row !important;
//             flex-direction: row !important;
//             -webkit-box-direction: normal !important
//         }
//         .justify-content-lg-start {
//             -webkit-box-pack: start !important;
//             -webkit-justify-content: flex-start !important;
//             justify-content: flex-start !important
//         }
//         .justify-content-lg-end {
//             -webkit-box-pack: end !important;
//             -webkit-justify-content: flex-end !important;
//             justify-content: flex-end !important
//         }
//         .justify-content-lg-between {
//             -webkit-box-pack: justify !important;
//             -webkit-justify-content: space-between !important;
//             justify-content: space-between !important
//         }
//         .text-lg-left {
//             text-align: left !important
//         }
//         .text-lg-right {
//             text-align: right !important
//         }
//     }
    
//     .text-uppercase {
//         text-transform: uppercase !important
//     }
    
//     .font-weight-normal {
//         font-weight: 400 !important
//     }
    
//     .font-weight-bold {
//         font-weight: 700 !important
//     }
    
//     .text-white {
//         color: #fff !important
//     }
    
//     .text-primary {
//         color: #141313 !important
//     }
    
//     a.text-primary:focus,
//     a.text-primary:hover {
//         color: #000 !important
//     }
    
//     .text-gray {
//         color: silver !important
//     }
    
//     a.text-gray:focus,
//     a.text-gray:hover {
//         color: #9a9a9a !important
//     }
    
//     .visible {
//         visibility: visible !important
//     }
    
//     .invisible {
//         visibility: hidden !important
//     }
    
//     @media print {
//         *,
//         :after,
//         :before {
//             text-shadow: none !important;
//             box-shadow: none !important
//         }
//         a:not(.btn) {
//             text-decoration: underline
//         }
//         abbr[title]:after {
//             content: " (" attr(title) ")"
//         }
//         pre {
//             white-space: pre-wrap !important;
//             border: 1px solid #adb5bd;
//             page-break-inside: avoid
//         }
//         img,
//         tr {
//             page-break-inside: avoid
//         }
//         h2,
//         h3,
//         p {
//             orphans: 3;
//             widows: 3
//         }
//         h2,
//         h3 {
//             page-break-after: avoid
//         }
//         @page {
//             size: a3
//         }
//         .container,
//         body {
//             min-width: 992px !important
//         }
//         .navbar {
//             display: none
//         }
//         .table {
//             border-collapse: collapse !important
//         }
//     }
    
//     .table {
//         width: 100%;
//         margin-bottom: 1rem;
//         color: #212529
//     }
    
//     .table tbody+tbody {
//         border-top: 2px solid #dee2e6
//     }
    
//     .table-responsive {
//         display: block;
//         width: 100%;
//         overflow-x: auto;
//         -webkit-overflow-scrolling: touch
//     }
    
//     .collapse:not(.show) {
//         display: none
//     }
    
//     .collapsing {
//         position: relative;
//         height: 0;
//         overflow: hidden;
//         -webkit-transition: height .35s;
//         transition: height .35s ease
//     }
    
//     @media (prefers-reduced-motion:reduce) {
//         .collapsing {
//             -webkit-transition: none;
//             transition: none
//         }
//     }
    
//     .dropdown {
//         position: relative
//     }
    
//     .dropdown-toggle {
//         white-space: nowrap
//     }
    
//     .dropdown-toggle:after {
//         display: inline-block;
//         margin-left: .255em;
//         vertical-align: .255em;
//         content: "";
//         border-top: .3em solid;
//         border-right: .3em solid transparent;
//         border-bottom: 0;
//         border-left: .3em solid transparent
//     }
    
//     .dropdown-toggle:empty:after {
//         margin-left: 0
//     }
    
//     .dropdown-menu {
//         position: absolute;
//         top: 100%;
//         left: 0;
//         z-index: 1000;
//         display: none;
//         float: left;
//         min-width: 10rem;
//         padding: .5rem 0;
//         margin: .125rem 0 0;
//         font-size: 1rem;
//         color: #212529;
//         text-align: left;
//         list-style: none;
//         background-color: #fff;
//         background-clip: padding-box;
//         border: 1px solid rgba(0, 0, 0, .15);
//         border-radius: .25rem
//     }
    
//     .dropdown-divider {
//         height: 0;
//         margin: .5rem 0;
//         overflow: hidden;
//         border-top: 1px solid #e9ecef
//     }
    
//     .dropdown-item {
//         display: block;
//         width: 100%;
//         padding: .25rem 1.5rem;
//         clear: both;
//         font-weight: 400;
//         color: #212529;
//         text-align: inherit;
//         white-space: nowrap;
//         background-color: transparent;
//         border: 0
//     }
    
//     .dropdown-item:focus,
//     .dropdown-item:hover {
//         color: #16181b;
//         text-decoration: none;
//         background-color: #f8f9fa
//     }
    
//     .dropdown-item.active,
//     .dropdown-item:active {
//         color: #fff;
//         text-decoration: none;
//         background-color: #007bff
//     }
    
//     .dropdown-item.disabled,
//     .dropdown-item:disabled {
//         color: #6c757d;
//         pointer-events: none;
//         background-color: transparent
//     }
    
//     .dropdown-menu.show {
//         display: block
//     }
    
//     abbr,
//     address,
//     b,
//     body,
//     canvas,
//     code,
//     del,
//     div,
//     em,
//     fieldset,
//     footer,
//     form,
//     h1,
//     h2,
//     h3,
//     h4,
//     header,
//     html,
//     iframe,
//     img,
//     label,
//     legend,
//     li,
//     menu,
//     nav,
//     object,
//     ol,
//     p,
//     pre,
//     section,
//     span,
//     strong,
//     table,
//     tbody,
//     time,
//     tr,
//     ul,
//     var,
//     video {
//         vertical-align: baseline;
//         margin: 0;
//         padding: 0;
//         border: 0;
//         background: 0 0;
//         outline: 0;
//         font-size: 100%
//     }
    
//     footer,
//     header,
//     menu,
//     nav,
//     section {
//         display: block
//     }
    
//     nav ul {
//         list-style: none
//     }
    
//     a {
//         color: #007bff;
//         background-color: transparent;
//         vertical-align: baseline;
//         margin: 0;
//         padding: 0;
//         background: 0 0;
//         color: currentColor;
//         font-size: 100%;
//         text-decoration: none;
//         -webkit-transition: color .2s ease-in-out, opacity .2s ease-in-out, background-size .2s ease-in-out, background .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, width .2s ease-in-out, height .2s ease-in-out;
//         transition: color .2s ease-in-out, opacity .2s ease-in-out, background-size .2s ease-in-out, background .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, width .2s ease-in-out, height .2s ease-in-out
//     }
    
//     a:-webkit-any-link {
//         text-decoration: none
//     }
    
//     a:focus,
//     a:hover {
//         color: currentColor;
//         text-decoration: none;
//         cursor: pointer
//     }
    
//     a:active,
//     a:focus,
//     input:focus,
//     textarea:focus {
//         outline: 0
//     }
    
//     del {
//         text-decoration: line-through
//     }
    
//     abbr[title] {
//         border-bottom: 1px dotted;
//         cursor: help
//     }
    
//     table {
//         border-spacing: 0;
//         border-collapse: collapse
//     }
    
//     input,
//     select {
//         vertical-align: middle
//     }
    
//     h1,
//     h2,
//     h3,
//     h4 {
//         font-weight: 400;
//         font-style: normal
//     }
    
//     input:not([type=checkbox]),
//     input:not([type=radio]),
//     textarea:not([type=checkbox]),
//     textarea:not([type=radio]) {
//         -webkit-appearance: none;
//         -moz-appearance: none;
//         appearance: none
//     }
    
//     * {
//         -webkit-tap-highlight-color: transparent
//     }
    
//     button,
//     input {
//         overflow: visible;
//         -webkit-transition: color .2s ease-in-out, opacity .2s ease-in-out, background-size .2s ease-in-out, background .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, width .2s ease-in-out, height .2s ease-in-out;
//         transition: color .2s ease-in-out, opacity .2s ease-in-out, background-size .2s ease-in-out, background .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, width .2s ease-in-out, height .2s ease-in-out
//     }
    
//     button:focus,
//     button:hover,
//     button[type=submit]:focus,
//     button[type=submit]:hover,
//     input[type=submit]:focus,
//     input[type=submit]:hover {
//         cursor: pointer
//     }
    
//     button:active,
//     button:focus {
//         outline: 0
//     }
    
//     :root {
//         font-size: 100%
//     }
    
//     body {
//         line-height: 1;
//         -webkit-font-smoothing: antialiased;
//         -moz-osx-font-smoothing: grayscale;
//         font-size: 1.125rem;
//         line-height: 1.5
//     }
    
//     .h2,
//     .h3,
//     .h4,
//     .h5,
//     h1,
//     h2,
//     h3,
//     h4 {
//         margin-bottom: 0 !important;
//         line-height: 1.2
//     }
    
//     h1 {
//         font-weight: 800;
//         font-family: Studio6, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
//         font-size: 2rem
//     }
    
//     @media (min-width:576px) {
//         h1 {
//             font-size: 2.875rem
//         }
//     }
    
//     @media (min-width:768px) {
//         h1 {
//             font-size: 3.75rem
//         }
//     }
    
//     @media (min-width:992px) {
//         h1 {
//             font-size: 4.625rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         h1 {
//             font-size: 5.5rem
//         }
//     }
    
//     .h2,
//     h2 {
//         font-weight: 800;
//         font-family: Studio6, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
//         font-size: 1.8125rem
//     }
    
//     @media (min-width:576px) {
//         .h2,
//         h2 {
//             font-size: 2.25rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .h2,
//         h2 {
//             font-size: 2.6875rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .h2,
//         h2 {
//             font-size: 3.125rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .h2,
//         h2 {
//             font-size: 3.5625rem
//         }
//     }
    
//     .h3,
//     h3 {
//         font-weight: 800;
//         font-family: Studio6, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
//         font-size: 1.5rem
//     }
    
//     @media (min-width:576px) {
//         .h3,
//         h3 {
//             font-size: 1.82813rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .h3,
//         h3 {
//             font-size: 2.15625rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .h3,
//         h3 {
//             font-size: 2.48438rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .h3,
//         h3 {
//             font-size: 2.8125rem
//         }
//     }
    
//     .h4,
//     h4 {
//         font-weight: 700;
//         font-family: Suisse, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
//         font-size: 1.4375rem
//     }
    
//     @media (min-width:576px) {
//         .h4,
//         h4 {
//             font-size: 1.64063rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .h4,
//         h4 {
//             font-size: 1.84375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .h4,
//         h4 {
//             font-size: 2.04688rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .h4,
//         h4 {
//             font-size: 2.25rem
//         }
//     }
    
//     .h5 {
//         font-weight: 700;
//         font-family: Suisse, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
//         font-size: 1.125rem
//     }
    
//     @media (min-width:576px) {
//         .h5 {
//             font-size: 1.29688rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .h5 {
//             font-size: 1.46875rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .h5 {
//             font-size: 1.64063rem
//         }
//     }
    
//     b,
//     strong {
//         font-weight: 700
//     }
    
//     em {
//         font-style: italic
//     }
    
//     div#wpadminbar {
//         position: fixed;
//         top: auto;
//         bottom: 0
//     }
    
//     html[lang] {
//         margin-top: 0 !important
//     }
    
//     /* @font-face {
//         font-weight: 400;
//         font-style: normal;
//         font-family: Suisse;
//         font-display: swap;
//     } */
//     /* 
//     @font-face {
//         font-weight: 600;
//         font-style: normal;
//         font-family: Suisse;
//         font-display: swap
//     } */
//     /* 
//     @font-face {
//         font-weight: 700;
//         font-style: normal;
//         font-family: Suisse;
//         font-display: swap
//     }
    
//     @font-face {
//         font-weight: 800;
//         font-style: normal;
//         font-family: Studio6;
//         font-display: swap
//     } */
    
//     .lazyload,
//     .lazyloading {
//         opacity: 0
//     }
    
//     .lazyloaded {
//         opacity: 1;
//         -webkit-transition: opacity .2s;
//         transition: opacity .2s
//     }
    
//     .c-mt-1 {
//         margin-top: .25rem
//     }
    
//     .c-mt-4 {
//         margin-top: .75rem
//     }
    
//     .c-mt-only-4 {
//         margin-top: 1.5rem !important
//     }
    
//     .c-mt-only-5 {
//         margin-top: 2rem !important
//     }
    
//     .c-mt-6 {
//         margin-top: 1.25rem
//     }
    
//     .c-mt-only-6 {
//         margin-top: 2.5rem !important
//     }
    
//     .c-mt-7 {
//         margin-top: 1.5rem
//     }
    
//     .c-mt-8 {
//         margin-top: 1.75rem
//     }
    
//     .c-mt-only-8 {
//         margin-top: 3.5rem !important
//     }
    
//     .c-mt-only-9 {
//         margin-top: 4rem !important
//     }
    
//     .c-mt-11 {
//         margin-top: 2.5rem
//     }
    
//     .c-mt-only-11 {
//         margin-top: 5rem !important
//     }
    
//     .c-mt-12 {
//         margin-top: 3rem
//     }
    
//     .c-mt-only-12 {
//         margin-top: 6rem !important
//     }
    
//     .c-mr-3 {
//         margin-right: .5rem
//     }
    
//     .c-mb-only-4 {
//         margin-bottom: 1.5rem !important
//     }
    
//     .c-mb-5 {
//         margin-bottom: 1rem
//     }
    
//     .c-mb-only-7 {
//         margin-bottom: 3rem !important
//     }
    
//     .c-mb-8 {
//         margin-bottom: 1.75rem
//     }
    
//     .c-mb-12 {
//         margin-bottom: 3rem
//     }
    
//     .c-ml-2 {
//         margin-left: .25rem
//     }
    
//     .c-pt-only-8 {
//         padding-top: 3.5rem !important
//     }
    
//     .c-pt-10 {
//         padding-top: 2.25rem
//     }
    
//     .c-pt-11 {
//         padding-top: 2.5rem
//     }
    
//     .c-pt-12 {
//         padding-top: 3rem
//     }
    
//     .c-pt-only-12 {
//         padding-top: 6rem !important
//     }
    
//     .c-pt-13 {
//         padding-top: 6.25rem
//     }
    
//     .c-pr-only-2 {
//         padding-right: .5rem !important
//     }
    
//     .c-pr-only-3 {
//         padding-right: 1rem !important
//     }
    
//     .c-pr-5 {
//         padding-right: 1rem
//     }
    
//     .c-pr-9 {
//         padding-right: 2rem
//     }
    
//     .c-pb-only-10 {
//         padding-bottom: 4.5rem !important
//     }
    
//     .c-pb-11 {
//         padding-bottom: 2.5rem
//     }
    
//     .c-pb-only-11 {
//         padding-bottom: 5rem !important
//     }
    
//     .c-pb-12 {
//         padding-bottom: 3rem
//     }
    
//     .c-pb-only-12 {
//         padding-bottom: 6rem !important
//     }
    
//     .c-pb-13 {
//         padding-bottom: 6.25rem
//     }
    
//     .c-pl-only-3 {
//         padding-left: 1rem !important
//     }
    
//     .c-pl-only-4 {
//         padding-left: 1.5rem !important
//     }
    
//     .c-py-only-5 {
//         padding-top: 2rem !important;
//         padding-bottom: 2rem !important
//     }
    
//     @media (min-width:576px) {
//         .c-mt-4 {
//             margin-top: .9375rem
//         }
//         .c-mt-6 {
//             margin-top: 1.5625rem
//         }
//         .c-mt-7 {
//             margin-top: 1.875rem
//         }
//         .c-mt-8 {
//             margin-top: 2.1875rem
//         }
//         .c-mt-11 {
//             margin-top: 3.125rem
//         }
//         .c-mt-12 {
//             margin-top: 3.75rem
//         }
//         .c-mr-3 {
//             margin-right: .625rem
//         }
//         .c-mb-5 {
//             margin-bottom: 1.25rem
//         }
//         .c-mb-8 {
//             margin-bottom: 2.1875rem
//         }
//         .c-mb-12 {
//             margin-bottom: 3.75rem
//         }
//         .c-ml-2 {
//             margin-left: .3125rem
//         }
//         .c-pt-10 {
//             padding-top: 2.8125rem
//         }
//         .c-pt-11 {
//             padding-top: 3.125rem
//         }
//         .c-pt-12 {
//             padding-top: 3.75rem
//         }
//         .c-pt-13 {
//             padding-top: 7.8125rem
//         }
//         .c-pr-5 {
//             padding-right: 1.25rem
//         }
//         .c-pr-9 {
//             padding-right: 2.5rem
//         }
//         .c-pb-11 {
//             padding-bottom: 3.125rem
//         }
//         .c-pb-12 {
//             padding-bottom: 3.75rem
//         }
//         .c-pb-13 {
//             padding-bottom: 7.8125rem
//         }
//         .c-mt-sm-7 {
//             margin-top: 1.875rem
//         }
//         .c-pl-sm-only-7 {
//             padding-left: 3rem !important
//         }
//     }
    
//     @media (min-width:768px) {
//         .c-mt-4 {
//             margin-top: 1.125rem
//         }
//         .c-mt-6 {
//             margin-top: 1.875rem
//         }
//         .c-mt-7 {
//             margin-top: 2.25rem
//         }
//         .c-mt-8 {
//             margin-top: 2.625rem
//         }
//         .c-mt-11 {
//             margin-top: 3.75rem
//         }
//         .c-mt-12 {
//             margin-top: 4.5rem
//         }
//         .c-mr-3 {
//             margin-right: .75rem
//         }
//         .c-mb-5 {
//             margin-bottom: 1.5rem
//         }
//         .c-mb-8 {
//             margin-bottom: 2.625rem
//         }
//         .c-mb-12 {
//             margin-bottom: 4.5rem
//         }
//         .c-ml-2 {
//             margin-left: .375rem
//         }
//         .c-pt-10 {
//             padding-top: 3.375rem
//         }
//         .c-pt-11 {
//             padding-top: 3.75rem
//         }
//         .c-pt-12 {
//             padding-top: 4.5rem
//         }
//         .c-pt-13 {
//             padding-top: 9.375rem
//         }
//         .c-pr-5 {
//             padding-right: 1.5rem
//         }
//         .c-pr-9 {
//             padding-right: 3rem
//         }
//         .c-pb-11 {
//             padding-bottom: 3.75rem
//         }
//         .c-pb-12 {
//             padding-bottom: 4.5rem
//         }
//         .c-pb-13 {
//             padding-bottom: 9.375rem
//         }
//         .c-mt-sm-7 {
//             margin-top: 2.25rem
//         }
//         .c-mt-md-only-4 {
//             margin-top: 1.5rem !important
//         }
//         .c-pb-md-7 {
//             padding-bottom: 2.25rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .c-mt-4 {
//             margin-top: 1.3125rem
//         }
//         .c-mt-6 {
//             margin-top: 2.1875rem
//         }
//         .c-mt-7 {
//             margin-top: 2.625rem
//         }
//         .c-mt-8 {
//             margin-top: 3.0625rem
//         }
//         .c-mt-11 {
//             margin-top: 4.375rem
//         }
//         .c-mt-12 {
//             margin-top: 5.25rem
//         }
//         .c-mr-3 {
//             margin-right: .875rem
//         }
//         .c-mb-5 {
//             margin-bottom: 1.75rem
//         }
//         .c-mb-8 {
//             margin-bottom: 3.0625rem
//         }
//         .c-mb-12 {
//             margin-bottom: 5.25rem
//         }
//         .c-ml-2 {
//             margin-left: .4375rem
//         }
//         .c-pt-10 {
//             padding-top: 3.9375rem
//         }
//         .c-pt-11 {
//             padding-top: 4.375rem
//         }
//         .c-pt-12 {
//             padding-top: 5.25rem
//         }
//         .c-pt-13 {
//             padding-top: 10.9375rem
//         }
//         .c-pr-5 {
//             padding-right: 1.75rem
//         }
//         .c-pr-9 {
//             padding-right: 3.5rem
//         }
//         .c-pb-11 {
//             padding-bottom: 4.375rem
//         }
//         .c-pb-12 {
//             padding-bottom: 5.25rem
//         }
//         .c-pb-13 {
//             padding-bottom: 10.9375rem
//         }
//         .c-mt-sm-7 {
//             margin-top: 2.625rem
//         }
//         .c-pb-md-7 {
//             padding-bottom: 2.625rem
//         }
//         .c-mt-lg-only-6 {
//             margin-top: 2.5rem !important
//         }
//         .c-mt-lg-only-7 {
//             margin-top: 3rem !important
//         }
//         .c-mt-lg-8 {
//             margin-top: 3.0625rem
//         }
//         .c-mt-lg-only-12 {
//             margin-top: 6rem !important
//         }
//         .c-mb-lg-only-3 {
//             margin-bottom: 1rem !important
//         }
//         .c-pt-lg-only-4 {
//             padding-top: 1.5rem !important
//         }
//         .c-pt-lg-only-9 {
//             padding-top: 4rem !important
//         }
//         .c-pr-lg-11 {
//             padding-right: 4.375rem
//         }
//         .c-pb-lg-only-8 {
//             padding-bottom: 3.5rem !important
//         }
//         .c-pb-lg-only-12 {
//             padding-bottom: 6rem !important
//         }
//         .c-pl-lg-only-5 {
//             padding-left: 2rem !important
//         }
//     }
    
//     @media (min-width:1200px) {
//         .h5 {
//             font-size: 1.8125rem
//         }
//         .c-mt-4 {
//             margin-top: 1.5rem
//         }
//         .c-mt-6 {
//             margin-top: 2.5rem
//         }
//         .c-mt-7 {
//             margin-top: 3rem
//         }
//         .c-mt-8 {
//             margin-top: 3.5rem
//         }
//         .c-mt-11 {
//             margin-top: 5rem
//         }
//         .c-mt-12 {
//             margin-top: 6rem
//         }
//         .c-mr-3 {
//             margin-right: 1rem
//         }
//         .c-mb-5 {
//             margin-bottom: 2rem
//         }
//         .c-mb-8 {
//             margin-bottom: 3.5rem
//         }
//         .c-mb-12 {
//             margin-bottom: 6rem
//         }
//         .c-ml-2 {
//             margin-left: .5rem
//         }
//         .c-pt-10 {
//             padding-top: 4.5rem
//         }
//         .c-pt-11 {
//             padding-top: 5rem
//         }
//         .c-pt-12 {
//             padding-top: 6rem
//         }
//         .c-pt-13 {
//             padding-top: 12.5rem
//         }
//         .c-pr-5 {
//             padding-right: 2rem
//         }
//         .c-pr-9 {
//             padding-right: 4rem
//         }
//         .c-pb-11 {
//             padding-bottom: 5rem
//         }
//         .c-pb-12 {
//             padding-bottom: 6rem
//         }
//         .c-pb-13 {
//             padding-bottom: 12.5rem
//         }
//         .c-mt-sm-7 {
//             margin-top: 3rem
//         }
//         .c-pb-md-7 {
//             padding-bottom: 3rem
//         }
//         .c-mt-lg-8 {
//             margin-top: 3.5rem
//         }
//         .c-pr-lg-11 {
//             padding-right: 5rem
//         }
//         #cookie-notice .cn-buttons-container .cn-button {
//             padding: 1rem 2.5rem
//         }
//     }
    
//     .c-px-0 {
//         padding-left: 0 !important;
//         padding-right: 0 !important
//     }
    
//     .font-weight-semibold {
//         font-weight: 600
//     }
    
//     .font-family-base {
//         font-family: Suisse, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
//     }
    
//     .z-index-1 {
//         z-index: 1
//     }
    
//     .z-index-2 {
//         z-index: 2
//     }
    
//     .row:not(.no-gutters) {
//         margin-right: 0;
//         margin-left: 0
//     }
    
//     .scroll-to {
//         letter-spacing: 1px
//     }
    
//     .scroll-to--white,
//     .scroll-to--white:hover {
//         color: #fff
//     }
    
//     .scroll-to--white:hover circle {
//         fill: #fff
//     }
    
//     .scroll-to--white:hover path {
//         fill: #141313
//     }
    
//     .scroll-to--white circle {
//         stroke: #fff
//     }
    
//     .scroll-to--white path {
//         fill: #fff
//     }
    
//     .scroll-to__icon {
//         width: 2rem;
//         height: 2rem
//     }
    
//     .line-height-1 {
//         line-height: 1
//     }
    
//     .line-height-1-0-5 {
//         line-height: 1.05
//     }
    
//     .line-height-1-1 {
//         line-height: 1.1
//     }
    
//     .line-height-1-25 {
//         line-height: 1.25
//     }
    
//     .line-height-1-3 {
//         line-height: 1.3
//     }
    
//     .line-height-1-4 {
//         line-height: 1.4
//     }
    
//     .line-height-1-7 {
//         line-height: 1.7
//     }
    
//     #cookie-notice .cn-buttons-container .cn-button {
//         font-size: .6875rem;
//         font-weight: 600;
//         letter-spacing: 1px;
//         position: relative;
//         z-index: 1;
//         display: -webkit-inline-box;
//         display: -webkit-inline-flex;
//         display: inline-flex;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         -webkit-box-pack: center;
//         -webkit-justify-content: center;
//         justify-content: center;
//         overflow: hidden;
//         background-color: transparent;
//         line-height: 1.3;
//         text-align: center;
//         -webkit-transition: .6s !important;
//         transition: all .6s ease !important;
//         padding: 1rem 2.5rem
//     }
    
//     #cookie-notice .cn-buttons-container .cn-button:after,
//     #cookie-notice .cn-buttons-container .cn-button:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         right: 0
//     }
    
//     #cookie-notice .cn-buttons-container .cn-button:after {
//         bottom: 0;
//         left: 0;
//         width: 100%;
//         border: .25rem solid transparent;
//         border-color: #141313;
//         border-color: #fff
//     }
    
//     #cookie-notice .cn-buttons-container .cn-button:before {
//         z-index: -1;
//         display: block;
//         height: 100%;
//         -webkit-transition: .4s ease-in-out;
//         transition: all .4s ease-in-out;
//         right: auto;
//         left: 0;
//         width: 100%;
//         background-color: #141313
//     }
    
//     #cookie-notice .cn-buttons-container .cn-button:focus:before,
//     #cookie-notice .cn-buttons-container .cn-button:hover:before {
//         right: auto;
//         left: 0;
//         right: 0;
//         left: auto;
//         width: 0
//     }
    
//     #cookie-notice .cn-buttons-container .cn-button:focus,
//     #cookie-notice .cn-buttons-container .cn-button:hover {
//         background-color: transparent;
//         color: #141313
//     }
    
//     #cookie-notice {
//         min-width: 0 !important;
//         margin-left: 50% !important;
//         border: 0;
//         border-radius: .5rem;
//         box-shadow: 0 .125rem .5rem rgba(0, 0, 0, .1);
//         -webkit-transform: translateX(-50%);
//         transform: translateX(-50%);
//         -webkit-transition: opacity .2s ease-in-out;
//         transition: opacity .2s ease-in-out;
//         width: 100%;
//         padding: 0 15px;
//         margin-right: auto;
//         margin-left: auto;
//         bottom: 1.5rem;
//         position: fixed;
//         min-width: 100%;
//         height: auto;
//         z-index: 100000;
//         font-size: 13px;
//         letter-spacing: 0;
//         line-height: 20px;
//         left: 0;
//         text-align: center;
//         font-weight: 400;
//         font-family: -apple-system, BlinkMacSystemFont, Arial, Roboto, "Helvetica Neue", sans-serif
//     }
    
//     @media (min-width:576px) {
//         .row:not(.no-gutters) {
//             margin-right: -.9375rem;
//             margin-left: -.9375rem
//         }
//         #cookie-notice .cn-buttons-container .cn-button {
//             padding: 1rem 2.5rem
//         }
//         #cookie-notice {
//             bottom: 1.875rem;
//             max-width: 510px
//         }
//     }
    
//     @media (min-width:768px) {
//         .c-ml-md-0 {
//             margin-left: 0 !important
//         }
//         #cookie-notice .cn-buttons-container .cn-button {
//             padding: 1rem 2.5rem
//         }
//         #cookie-notice {
//             bottom: 2.25rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .c-mt-lg-0 {
//             margin-top: 0 !important
//         }
//         .c-mb-lg-0 {
//             margin-bottom: 0 !important
//         }
//         .c-pr-lg-0 {
//             padding-right: 0 !important
//         }
//         .c-pl-lg-0 {
//             padding-left: 0 !important
//         }
//         #cookie-notice .cn-buttons-container .cn-button {
//             padding: 1rem 2.5rem
//         }
//         #cookie-notice {
//             bottom: 2.625rem
//         }
//     }
    
//     @media (min-width:768px) {
//         #cookie-notice {
//             max-width: 690px
//         }
//         #cookie-notice .cookie-notice-container {
//             display: -webkit-box !important;
//             display: -webkit-flex !important;
//             display: flex !important;
//             -webkit-box-align: center;
//             -webkit-align-items: center;
//             align-items: center;
//             -webkit-box-pack: justify;
//             -webkit-justify-content: space-between;
//             justify-content: space-between
//         }
//     }
    
//     @media (min-width:992px) {
//         #cookie-notice {
//             max-width: 930px
//         }
//     }
    
//     #cookie-notice.cookie-notice-visible {
//         padding: 1rem;
//         opacity: 1
//     }
    
//     #cookie-notice.cookie-notice-hidden .cookie-notice-container {
//         display: none !important;
//         display: none
//     }
    
//     #cookie-notice .cookie-notice-container #cn-notice-text {
//         display: -webkit-inline-box;
//         display: -webkit-inline-flex;
//         display: inline-flex;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         -webkit-box-pack: start;
//         -webkit-justify-content: start;
//         justify-content: start;
//         margin-bottom: 0;
//         /* background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01MDcuNDQgMjA4LjY0YTE2IDE2IDAgMDAtMzAuMy0zLjYyIDMxLjc2IDMxLjc2IDAgMDEtNTkuNTctMy45MiAxNiAxNiAwIDAwLTE5LTExIDYzLjMgNjMuMyAwIDAxLTc2LjcyLTc2LjcxIDE2IDE2IDAgMDAtMTEtMTlBMzEuNzQgMzEuNzQgMCAwMTMwNyAzNC44OGExNiAxNiAwIDAwLTMuNjItMzAuMzJBMjU2LjcgMjU2LjcgMCAwMDI1NiAwQzExNC43OCAwIDAgMTE0Ljc4IDAgMjU2czExNC43OCAyNTYgMjU2IDI1NiAyNTYtMTE0Ljc4IDI1Ni0yNTZhMjU2LjcgMjU2LjcgMCAwMC00LjU2LTQ3LjM2em0tOTMuMTIgMjA1LjY4QTIyMy45IDIyMy45IDAgMTEyNTYgMzJjMi44OCAwIDUuNy4zIDguNTYuNDNhNjMgNjMgMCAwMDI0IDg2Ljg3IDgxLjU5IDgxLjU5IDAgMDAtLjU2IDguNyA5Ni4wOSA5Ni4wOSAwIDAwOTYgOTYgODEuNTkgODEuNTkgMCAwMDguNy0uNTkgNjMgNjMgMCAwMDg2Ljg3IDI0Yy4xMyAyLjg1LjQzIDUuNjguNDMgOC41NmEyMjMuMjMgMjIzLjIzIDAgMDEtNjUuNjggMTU4LjM1eiIvPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjE5MiIgY3k9IjEyOCIgcj0iMzIiLz48Y2lyY2xlIGZpbGw9IiNmZmYiIGN4PSIxMjgiIGN5PSIyNTYiIHI9IjMyIi8+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMjg4IiBjeT0iMzg0IiByPSIzMiIvPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjI3MiIgY3k9IjI3MiIgcj0iMTYiLz48Y2lyY2xlIGZpbGw9IiNmZmYiIGN4PSI0MDAiIGN5PSIzMzYiIHI9IjE2Ii8+PGNpcmNsZSBmaWxsPSIjZmZmIiBjeD0iMTc2IiBjeT0iMzY4IiByPSIxNiIvPjwvc3ZnPg==); */
//         background-position: left top 50%;
//         background-repeat: no-repeat;
//         font-weight: 400;
//         font-family: Suisse, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
//         text-align: left;
//         background-size: 2.25rem;
//         min-height: 2.25rem;
//         padding-left: 3rem
//     }
    
//     @media (min-width:576px) {
//         #cookie-notice .cookie-notice-container #cn-notice-text {
//             background-size: 2.4375rem;
//             min-height: 2.4375rem;
//             padding-left: 3.25rem
//         }
//     }
    
//     @media (min-width:768px) {
//         #cookie-notice .cookie-notice-container #cn-notice-text {
//             background-size: 2.625rem;
//             min-height: 2.625rem;
//             padding-left: 3.5rem
//         }
//         #cookie-notice .cn-buttons-container {
//             display: -webkit-box !important;
//             display: -webkit-flex !important;
//             display: flex !important;
//             -webkit-box-align: start;
//             -webkit-align-items: flex-start;
//             align-items: flex-start;
//             margin-left: 1rem
//         }
//     }
    
//     @media (min-width:992px) {
//         #cookie-notice .cookie-notice-container #cn-notice-text {
//             background-size: 2.8125rem;
//             min-height: 2.8125rem;
//             padding-left: 3.75rem
//         }
//     }
    
//     #cookie-notice .cn-buttons-container .cn-button {
//         color: #fff;
//         margin-top: 1rem;
//         margin-bottom: 0;
//         border-radius: .25rem !important;
//         box-shadow: none;
//         margin-left: .25rem !important;
//         margin-right: .25rem !important;
//         padding: .46875rem .75rem
//     }
    
//     @media (min-width:576px) {
//         #cookie-notice .cn-buttons-container .cn-button {
//             margin-left: .3125rem !important;
//             margin-right: .3125rem !important;
//             padding: .50781rem .8125rem
//         }
//     }
    
//     @media (min-width:768px) {
//         #cookie-notice .cn-buttons-container .cn-button {
//             margin-left: .375rem !important;
//             margin-right: .375rem !important
//         }
//     }
    
//     @media (min-width:992px) {
//         #cookie-notice .cn-buttons-container .cn-button {
//             margin-left: .4375rem !important;
//             margin-right: .4375rem !important
//         }
//     }
    
//     @media (min-width:768px) {
//         #cookie-notice .cn-buttons-container .cn-button {
//             padding: .54688rem .875rem;
//             margin-top: 0
//         }
//     }
    
//     @media (min-width:992px) {
//         #cookie-notice .cn-buttons-container .cn-button {
//             padding: .58594rem .9375rem
//         }
//         .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a {
//             padding: 1rem 2.5rem
//         }
//     }
    
//     #cookie-notice .cn-buttons-container .cn-button#cn-accept-cookie {
//         border-width: .25rem;
//         border-radius: 0 !important;
//         letter-spacing: 1px;
//         text-transform: uppercase
//     }
    
//     #cookie-notice .cn-buttons-container .cn-button:hover {
//         border-color: #fff;
//         background-color: #fff;
//         color: #000
//     }
    
//     #cookie-notice .cn-close-icon {
//         display: none
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a {
//         font-weight: 600;
//         letter-spacing: 1px;
//         position: relative;
//         z-index: 1;
//         display: -webkit-inline-box;
//         display: -webkit-inline-flex;
//         display: inline-flex;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         -webkit-box-pack: center;
//         -webkit-justify-content: center;
//         justify-content: center;
//         overflow: hidden;
//         background-color: transparent;
//         line-height: 1.3;
//         text-align: center;
//         -webkit-transition: .6s !important;
//         transition: all .6s ease !important;
//         padding: 1rem 2.5rem
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a:after,
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         right: 0
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a:after {
//         bottom: 0;
//         left: 0;
//         width: 100%;
//         border: .25rem solid transparent
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a:before {
//         z-index: -1;
//         display: block;
//         height: 100%;
//         -webkit-transition: .4s ease-in-out;
//         transition: all .4s ease-in-out;
//         width: 0
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a:focus:before,
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a:hover:before {
//         right: auto;
//         left: 0;
//         width: 100%
//     }
    
//     .mm-menu {
//         --mm-color-background: #141313
//     }
    
//     .mm-menu.mm-menu_offcanvas {
//         width: 100% !important;
//         max-width: 100%
//     }
    
//     .mm-menu .mburger {
//         --mb-button-size: 2.5rem;
//         --mb-bar-height: 0.25rem;
//         --mb-bar-spacing: 0.5rem;
//         top: .375rem;
//         right: .875rem;
//         z-index: 2;
//         color: #fff !important
//     }
    
//     .mm-menu .mburger:hover {
//         color: #141313
//     }
    
//     .mm-menu .mburger b {
//         border-radius: 0
//     }
    
//     .mm-menu .mm-panel .mm-navbar {
//         border-color: hsla(0, 0%, 50.2%, .3);
//         color: #fff;
//         font-size: .9em
//     }
    
//     .mm-menu .mm-panel .mm-navbar.mm-navbar_sticky {
//         position: absolute;
//         top: 3rem;
//         left: 0;
//         width: 100%
//     }
    
//     .mm-menu .mm-panel .mm-navbar.mm-navbar_sticky .mm-navbar__title {
//         color: #fff;
//         font-size: 1rem;
//         letter-spacing: .03125rem
//     }
    
//     .mm-menu .mm-panel .mm-navbar__btn:before {
//         border-color: hsla(0, 0%, 100%, .75);
//         -webkit-transition: border-color .2s ease-in-out;
//         transition: border-color .2s ease-in-out
//     }
    
//     .mm-menu .mm-panel .mm-navbar__btn:focus:before,
//     .mm-menu .mm-panel .mm-navbar__btn:hover:before {
//         border-color: #141313
//     }
    
//     .mm-menu .mm-panel .mm-navbar .mm-btn_prev:before {
//         display: none
//     }
    
//     .mm-menu .mm-panel .mm-navbar .mm-btn_prev:after {
//         content: "";
//         position: absolute;
//         top: 0;
//         right: 0;
//         bottom: 0;
//         left: 0;
//         width: .625rem;
//         height: 1rem;
//         margin: auto;
//         border: none;
//         /* background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='18' fill='none' xmlns=' ??????://www.w3.org/2000/svg'%3E%3Cpath d='M10.504 8.928L2.004.412 0 2.42l6.495 6.508L0 15.436l2.004 2.008 8.5-8.516z' fill='%23fff'/%3E%3C/svg%3E"); */
//         background-position: 100%;
//         background-size: 100%;
//         background-repeat: no-repeat;
//         -webkit-transform: rotate(180deg);
//         transform: rotate(180deg)
//     }
    
//     .mm-menu .mm-panel .mm-navbar__title {
//         color: #fff
//     }
    
//     .mm-menu .mm-panel .mm-navbar__title:focus,
//     .mm-menu .mm-panel .mm-navbar__title:hover {
//         color: #141313
//     }
    
//     .mm-menu .mm-panel .mm-listview {
//         padding: 5.875rem 1.5rem .5rem
//     }
    
//     .mm-menu .mm-panel .mm-listview:first-of-type {
//         margin-bottom: 0
//     }
    
//     .mm-menu .mm-panel .mm-listview:nth-of-type(2) {
//         margin-top: 0
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem {
//         font-size: 1.125rem
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem:after {
//         left: 0;
//         border-bottom: .25rem solid #fff
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.current-menu-item {
//         color: #ffe607
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.current-menu-item.navbar-button a {
//         border-color: #ffe607
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.current-menu-item .mm-listitem__text {
//         color: #ffe607
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.current-menu-item .mm-btn_next:after {
//         border-color: #ffe607
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.menu-item-has-children .mm-listitem__text:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         right: 0;
//         bottom: 0;
//         width: .625rem;
//         height: 1rem;
//         margin: auto 0;
//         /* background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='18' fill='none' xmlns=' ??????://www.w3.org/2000/svg'%3E%3Cpath d='M10.504 8.928L2.004.412 0 2.42l6.495 6.508L0 15.436l2.004 2.008 8.5-8.516z' fill='%23fff'/%3E%3C/svg%3E"); */
//         background-position: 100%;
//         background-size: 100%;
//         background-repeat: no-repeat
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem .mm-btn_next:after {
//         display: none
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem .mm-btn_next:before {
//         border: none
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button {
//         margin-top: 1.25rem
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button:after {
//         display: none
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a {
//         font-size: .875rem;
//         -webkit-box-flex: unset;
//         -webkit-flex-grow: unset;
//         flex-grow: unset;
//         -webkit-flex-basis: unset;
//         flex-basis: unset;
//         margin: 0 auto;
//         border: .25rem solid #fff;
//         text-transform: uppercase
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a:focus,
//     .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a:hover {
//         border-color: #fff !important;
//         background-color: #fff !important;
//         color: #141313 !important
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem__text {
//         padding: 1.25rem 1rem 1.25rem 0;
//         color: #fff;
//         font-weight: 700
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem__text:focus,
//     .mm-menu .mm-panel .mm-listview .mm-listitem__text:hover {
//         color: #ffe607 !important
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem__btn {
//         border-left-color: hsla(0, 0%, 50.2%, .3)
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem__btn:after {
//         border-color: hsla(0, 0%, 100%, .75);
//         -webkit-transition: border-color .2s ease-in-out;
//         transition: border-color .2s ease-in-out
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem__btn:focus:after,
//     .mm-menu .mm-panel .mm-listview .mm-listitem__btn:hover:after {
//         border-color: #141313
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem__btn:focus+a,
//     .mm-menu .mm-panel .mm-listview .mm-listitem__btn:hover+a {
//         color: #ffe607
//     }
    
//     .mm-menu .mm-panel .mm-listview .mm-listitem.mm-listitem_selected .mm-listitem__text {
//         background: 0 0;
//         color: #141313
//     }
    
//     .mm-wrapper_opening .mm-menu_position-right.mm-menu_opened~.mm-slideout {
//         -webkit-transform: translate3d(-100vw, 0, 0) !important;
//         transform: translate3d(-100vw, 0, 0) !important
//     }
    
//     .main-header .navbar .navbar-nav li .nav-link {
//         font-size: 1.0625rem
//     }
    
//     @media (min-width:576px) {
//         .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a {
//             padding: 1rem 2.5rem
//         }
//         .main-header .navbar .navbar-nav li .nav-link {
//             font-size: 1.07813rem
//         }
//         .main-header .navbar .navbar-nav li.navbar-button a {
//             padding: 1rem 2.5rem
//         }
//     }
    
//     @media (min-width:768px) {
//         #cookie-notice .cn-buttons-container .cn-button#cn-accept-cookie {
//             margin-left: 0 !important
//         }
//         .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a {
//             padding: 1rem 2.5rem
//         }
//         .main-header .navbar .navbar-nav li .nav-link {
//             font-size: 1.09375rem
//         }
//         .main-header .navbar .navbar-nav li.navbar-button a {
//             padding: 1rem 2.5rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .main-header .navbar .navbar-nav li .nav-link {
//             font-size: 1.10938rem
//         }
//         .main-header .navbar .navbar-nav li.navbar-button a {
//             padding: 1rem 2.5rem
//         }
//     }
    
//     .main-header .navbar .navbar-nav li .nav-link,
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item {
//         padding-bottom: .125rem;
//         background-image: -webkit-linear-gradient(bottom, currentColor 1px, transparent 0);
//         background-image: linear-gradient(0deg, currentColor 1px, transparent 0);
//         background-size: 0 100%;
//         background-repeat: no-repeat;
//         text-decoration: none;
//         -webkit-transition: background-size .4s ease-in-out, opacity .4s ease-in-out;
//         transition: background-size .4s ease-in-out, opacity .4s ease-in-out
//     }
    
//     .main-header .navbar .navbar-nav li .nav-link:focus,
//     .main-header .navbar .navbar-nav li .nav-link:hover,
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item:focus,
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item:hover {
//         background-size: 100% 100%
//     }
    
//     .main-header .navbar .navbar-nav li .nav-link.active,
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item.active {
//         background-position: 100%;
//         background-size: 100% 100%
//     }
    
//     .main-header .navbar .navbar-nav li .nav-link.active:focus,
//     .main-header .navbar .navbar-nav li .nav-link.active:hover,
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item.active:focus,
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item.active:hover {
//         background-size: 0 100%
//     }
    
//     .main-header .navbar .navbar-nav li.navbar-button a {
//         font-weight: 600;
//         letter-spacing: 1px;
//         position: relative;
//         z-index: 1;
//         display: -webkit-inline-box;
//         display: -webkit-inline-flex;
//         display: inline-flex;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         -webkit-box-pack: center;
//         -webkit-justify-content: center;
//         justify-content: center;
//         overflow: hidden;
//         background-color: transparent;
//         line-height: 1.3;
//         text-align: center;
//         -webkit-transition: .6s !important;
//         transition: all .6s ease !important;
//         padding: 1rem 2.5rem;
//         font-size: .875rem;
//         text-transform: uppercase
//     }
    
//     .main-header .navbar .navbar-nav li.navbar-button a:after,
//     .main-header .navbar .navbar-nav li.navbar-button a:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         right: 0
//     }
    
//     .main-header .navbar .navbar-nav li.navbar-button a:after {
//         bottom: 0;
//         left: 0;
//         width: 100%;
//         border: .25rem solid transparent
//     }
    
//     .main-header .navbar .navbar-nav li.navbar-button a:before {
//         z-index: -1;
//         display: block;
//         height: 100%;
//         -webkit-transition: .4s ease-in-out;
//         transition: all .4s ease-in-out;
//         width: 0
//     }
    
//     .main-header .navbar .navbar-nav li.navbar-button a:focus:before,
//     .main-header .navbar .navbar-nav li.navbar-button a:hover:before {
//         right: auto;
//         left: 0;
//         width: 100%
//     }
    
//     .main-header .navbar--text-white .navbar-nav li.navbar-button a {
//         color: #fff
//     }
    
//     .main-header .navbar--text-white .navbar-nav li.navbar-button a:after {
//         border-color: #fff
//     }
    
//     .main-header .navbar--text-white .navbar-nav li.navbar-button a:before {
//         background-color: #fff
//     }
    
//     .main-header .navbar--text-white .navbar-nav li.navbar-button a:focus,
//     .main-header .navbar--text-white .navbar-nav li.navbar-button a:hover {
//         color: #141313
//     }
    
//     .main-header {
//         z-index: 10
//     }
    
//     .main-header:after {
//         content: "";
//         position: absolute;
//         top: 0;
//         left: 0;
//         z-index: -1;
//         display: block;
//         width: 100%;
//         height: 100%;
//         box-shadow: 0 0 1.875rem 0 rgba(0, 0, 0, .1);
//         opacity: 0;
//         visibility: hidden;
//         -webkit-transition: opacity .2s ease-in-out;
//         transition: opacity .2s ease-in-out
//     }
    
//     .main-header .navbar {
//         -webkit-transition: .2s ease-in-out;
//         transition: all .2s ease-in-out;
//         padding-top: 1rem;
//         padding-bottom: 1rem
//     }
    
//     @media (min-width:576px) {
//         .main-header .navbar {
//             padding-top: 1.25rem;
//             padding-bottom: 1.25rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .main-header .navbar {
//             padding-top: 1.5rem;
//             padding-bottom: 1.5rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .main-header .navbar {
//             padding-top: 1.75rem;
//             padding-bottom: 1.75rem
//         }
//     }
    
//     .main-header .navbar--text-white .navbar-nav li .nav-link {
//         color: #fff
//     }
    
//     .main-header .navbar--text-white .navbar-nav li.dropdown .dropdown-wrapper .dropdown-toggle:after {
//     }
    
//     .main-header .navbar--text-white .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu {
//         background-color: #141313
//     }
    
//     .main-header .navbar--text-white .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item {
//         color: #fff
//     }
    
//     .main-header .navbar .navbar-brand {
//         width: 3rem;
//         height: 2rem
//     }
    
//     @media (min-width:576px) {
//         .main-header .navbar .navbar-brand {
//             width: 4rem;
//             height: 2.6875rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .main-header .navbar .navbar-brand {
//             width: 5rem;
//             height: 3.375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .main-header .navbar .navbar-brand {
//             width: 6rem;
//             height: 4.0625rem
//         }
//         .main-header .navbar .navbar-nav li {
//             margin-left: 1.75rem
//         }
//     }
    
//     .main-header .navbar .navbar-nav li {
//         position: static
//     }
    
//     @media (min-width:1200px) {
//         #cookie-notice {
//             bottom: 3rem;
//             max-width: 1110px
//         }
//         #cookie-notice .cookie-notice-container #cn-notice-text {
//             background-size: 3rem;
//             min-height: 3rem;
//             padding-left: 4rem
//         }
//         #cookie-notice .cn-buttons-container .cn-button {
//             margin-left: .5rem !important;
//             margin-right: .5rem !important;
//             padding: .625rem 1rem
//         }
//         .mm-menu .mm-panel .mm-listview .mm-listitem.navbar-button a {
//             padding: 1rem 2.5rem
//         }
//         .main-header .navbar .navbar-nav li .nav-link {
//             font-size: 1.125rem
//         }
//         .main-header .navbar .navbar-nav li.navbar-button a {
//             padding: 1rem 2.5rem
//         }
//         .main-header .navbar {
//             padding-top: 2rem;
//             padding-bottom: 2rem
//         }
//         .main-header .navbar .navbar-brand {
//             width: 7rem;
//             height: 4.75rem
//         }
//         .main-header .navbar .navbar-nav li {
//             margin-left: 3.25rem
//         }
//     }
    
//     .main-header .navbar .navbar-nav li .nav-link {
//         line-height: 1.3;
//         display: block;
//         border-bottom: 1px solid transparent;
//         line-height: 1
//     }
    
//     .main-header .navbar .navbar-nav li.dropdown:hover .dropdown-wrapper {
//         color: #141313
//     }
    
//     .main-header .navbar .navbar-nav li.dropdown:hover .dropdown-wrapper .dropdown-menu {
//         opacity: 1;
//         visibility: visible;
//         -webkit-transition: opacity .2s ease-in-out;
//         transition: opacity .2s ease-in-out
//     }
    
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper {
//         position: relative
//     }
    
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-toggle {
//         position: relative;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-align: end;
//         -webkit-align-items: flex-end;
//         align-items: flex-end;
//         padding-right: 1.25rem;
//         border: none
//     }
    
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-toggle:focus {
//         background-size: 0
//     }
    
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-toggle:after {
//         content: "";
//         position: absolute;
//         top: 50%;
//         right: 0;
//         bottom: 0;
//         display: block;
//         width: .875rem;
//         height: .5625rem;
//         margin-left: 0;
//         border: none;
//         -webkit-transform: translateY(-50%);
//         transform: translateY(-50%);
//         -webkit-transition: -webkit-transform .2s ease-in-out;
//         transition: -webkit-transform .2s ease-in-out;
//         transition: transform .2s ease-in-out;
//         transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out
//     }
    
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu {
//         position: absolute;
//         left: -1rem;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-orient: vertical;
//         -webkit-box-direction: normal;
//         -webkit-flex-direction: column;
//         flex-direction: column;
//         width: -webkit-calc(100% + 2rem);
//         width: calc(100% + 2rem);
//         padding: 1rem;
//         border: none;
//         border-radius: 0;
//         opacity: 0;
//         visibility: hidden;
//         -webkit-transition: visibility 0s .2s, opacity .2s ease-in-out;
//         transition: visibility 0s .2s, opacity .2s ease-in-out
//     }
    
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu.show {
//         opacity: 1;
//         visibility: visible;
//         -webkit-transition: opacity .2s ease-in-out;
//         transition: opacity .2s ease-in-out
//     }
    
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item {
//         font-size: .875rem;
//         display: inline-block;
//         -webkit-align-self: flex-start;
//         align-self: flex-start;
//         width: auto;
//         padding: 1rem 0 0;
//         white-space: break-spaces
//     }
    
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item.active,
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item:focus,
//     .main-header .navbar .navbar-nav li.dropdown .dropdown-wrapper .dropdown-menu .dropdown-item:hover {
//         background-color: transparent
//     }
    
//     @media (min-width:992px) {
//         .main-header .navbar .navbar-nav li.navbar-button a {
//             padding-left: 2.25rem;
//             padding-right: 2.25rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .main-header .navbar .navbar-nav li.navbar-button a {
//             padding-left: 2.5rem;
//             padding-right: 2.5rem
//         }
//     }
    
//     .main-header .navbar .position-unset {
//         position: unset
//     }
    
//     .main-header .navbar .mburger {
//         --mb-button-size: 3.325rem;
//         --mb-bar-height: 0.1875rem;
//         --mb-bar-spacing: 0.5rem;
//         top: 0;
//         right: -.6875rem;
//         bottom: 0;
//         margin: auto;
//         color: #fff
//     }
    
//     .main-header .navbar .mburger:hover {
//         color: #141313
//     }
    
//     .main-header .navbar .mburger b {
//         border-radius: 0
//     }
    
//     .main-header--is-window-scrolled:after {
//         opacity: 1;
//         visibility: visible
//     }
    
//     .main-header--is-window-scrolled .navbar {
//         padding: 1rem 0
//     }
    
//     .main-header--is-window-scrolled .navbar--text-white {
//         background-color: #141313
//     }
    
//     .main-header--is-window-scrolled .navbar .navbar-brand {
//         width: 3rem;
//         height: 2rem
//     }
    
//     @media (min-width:576px) {
//         .main-header--is-window-scrolled .navbar .navbar-brand {
//             width: 3.125rem;
//             height: 2.09375rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .main-header--is-window-scrolled .navbar .navbar-brand {
//             width: 3.25rem;
//             height: 2.1875rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .main-header--is-window-scrolled .navbar .navbar-brand {
//             width: 3.375rem;
//             height: 2.28125rem
//         }
//         .main-header--is-window-scrolled .navbar .navbar-nav li.navbar-button a {
//             padding: .625rem 1.5rem
//         }
//     }
    
//     .social-icons__item+.social-icons__item {
//         margin-left: 2.875rem
//     }
    
//     @media (min-width:576px) {
//         .social-icons__item+.social-icons__item {
//             margin-left: 2.78125rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .social-icons__item+.social-icons__item {
//             margin-left: 2.6875rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .social-icons__item+.social-icons__item {
//             margin-left: 2.59375rem
//         }
//     }
    
//     .social-icons__item .social-link {
//         color: #fff
//     }
    
//     .social-icons__item .social-link:focus,
//     .social-icons__item .social-link:hover {
//         color: #ffe607
//     }
    
//     .social-icons__item .social-link__icon {
//         height: auto;
//         fill: currentColor
//     }
    
//     .social-icons__item .social-link__icon--tiktok {
//         width: 1.25rem
//     }
    
//     .social-icons__item .social-link__icon--youtube {
//         width: 1.375rem
//     }
    
//     .social-icons__item .social-link__icon--youtube path {
//         fill: currentColor
//     }
    
//     .social-icons__item .social-link__icon--facebook {
//         width: .8125rem
//     }
    
//     .social-icons__item .social-link__icon--instagram {
//         width: 1.5rem
//     }
    
//     .social-icons__item .social-link__icon--instagram path {
//         fill: currentColor
//     }
    
//     .social-icons__item .social-link__icon--linkedin {
//         width: 1.5rem
//     }
    
//     .return-to-top {
//         right: 3rem;
//         bottom: 3rem;
//         z-index: 5;
//         width: 2.75rem;
//         height: 2.75rem;
//         background: #aaa;
//         text-decoration: none;
//         opacity: 0;
//         visibility: hidden
//     }
    
//     .return-to-top--is-visible {
//         opacity: .75;
//         visibility: visible;
//         -webkit-transition: opacity .2s ease-in-out;
//         transition: opacity .2s ease-in-out
//     }
    
//     .return-to-top--is-visible:hover {
//         opacity: 1
//     }
    
//     .return-to-top__chevron {
//         width: 1.5rem;
//         height: .8125rem
//     }
    
//     .return-to-top__chevron path {
//         fill: currentColor
//     }
    
//     .main-footer__border-menu .nav-link,
//     .main-footer__navigation .nav-link {
//         padding-bottom: .125rem;
//         background-image: -webkit-linear-gradient(bottom, currentColor 1px, transparent 0);
//         background-image: linear-gradient(0deg, currentColor 1px, transparent 0);
//         background-size: 0 100%;
//         background-repeat: no-repeat;
//         text-decoration: none;
//         -webkit-transition: background-size .4s ease-in-out, opacity .4s ease-in-out;
//         transition: background-size .4s ease-in-out, opacity .4s ease-in-out
//     }
    
//     .main-footer__border-menu .nav-link:focus,
//     .main-footer__border-menu .nav-link:hover,
//     .main-footer__navigation .nav-link:focus,
//     .main-footer__navigation .nav-link:hover {
//         background-size: 100% 100%
//     }
    
//     .main-footer__border-menu-wrapper {
//         border: .25rem solid #fff
//     }
    
//     .main-footer__border-menu-header {
//         font-size: 1.4375rem
//     }
    
//     @media (min-width:576px) {
//         .main-footer__border-menu-header {
//             font-size: 1.53125rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .main-footer__border-menu-header {
//             font-size: 1.625rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .main-footer__border-menu-header {
//             font-size: 1.71875rem;
//             max-width: 9.5rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .main-header--is-window-scrolled .navbar .navbar-brand {
//             width: 3.5rem;
//             height: 2.375rem
//         }
//         .main-header--is-window-scrolled .navbar .navbar-nav li.navbar-button a {
//             padding: .75rem 1.75rem
//         }
//         .social-icons__item+.social-icons__item {
//             margin-left: 2.5rem
//         }
//         .main-footer__border-menu-header {
//             font-size: 1.8125rem
//         }
//     }
    
//     .main-footer__border-menu .nav-item {
//         position: relative;
//         display: inline-block;
//         width: 50%;
//         margin-top: 1.5rem;
//         text-align: center
//     }
    
//     .main-footer__border-menu .nav-item:nth-child(odd) {
//         padding: 0 1.6875rem 0 .5rem
//     }
    
//     .main-footer__border-menu .nav-item:nth-child(odd):before {
//         opacity: 0
//     }
    
//     @media (min-width:768px) {
//         .main-footer__border-menu .nav-item {
//             margin-top: 0
//         }
//         .main-footer__border-menu .nav-item:nth-child(odd) {
//             padding: 0 1.25rem
//         }
//         .main-footer__border-menu .nav-item:nth-child(odd):before {
//             opacity: 1
//         }
//     }
    
//     .main-footer__border-menu .nav-item:nth-child(2n) {
//         padding: 0 .5rem 0 1.6875rem
//     }
    
//     .main-footer__border-menu .nav-item:first-child:before {
//         display: none
//     }
    
//     .main-footer__border-menu .nav-item:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         left: -.1875rem;
//         width: .375rem;
//         height: .375rem;
//         margin: auto 0;
//         border-radius: 50%;
//         background-color: #fff
//     }
    
//     .main-footer__logo {
//         -webkit-box-flex: 0;
//         -webkit-flex: 0 0 5.125rem;
//         flex: 0 0 5.125rem;
//         width: 5.215rem
//     }
    
//     .main-footer__description {
//         font-size: .875rem
//     }
    
//     @media (min-width:576px) {
//         .main-footer__logo {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 7rem;
//             flex: 0 0 7rem;
//             width: 7rem
//         }
//         .main-footer__description {
//             font-size: .90625rem;
//             max-width: 25rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .main-footer__border-menu .nav-item:nth-child(2n) {
//             padding: 0 1.25rem
//         }
//         .main-footer__border-menu .nav-item:first-child {
//             padding-left: 0
//         }
//         .main-footer__border-menu .nav-item:last-child {
//             padding-right: 0
//         }
//         .main-footer__description {
//             font-size: .9375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .main-footer__description {
//             font-size: .96875rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .main-footer__description {
//             font-size: 1rem
//         }
//     }
    
//     .main-footer__offices {
//         border-bottom: .25rem solid #fff
//     }
    
//     .main-footer__offices.active .main-footer__navigation-title:before {
//         -webkit-transform: rotate(90deg);
//         transform: rotate(90deg)
//     }
    
//     .main-footer__offices>div {
//         position: relative;
//         top: -1rem;
//         overflow: hidden;
//         max-height: 0;
//         margin-top: 0;
//         -webkit-transition: max-height .2s ease-in-out;
//         transition: max-height .2s ease-in-out
//     }
    
//     .main-footer__offices .main-footer__navigation-title {
//         font-weight: 700;
//         font-size: 1.125rem
//     }
    
//     @media (min-width:992px) {
//         .main-footer__offices {
//             padding-bottom: 0;
//             border: none
//         }
//         .main-footer__offices>div {
//             top: 0;
//             max-height: 100%
//         }
//         .main-footer__offices .main-footer__navigation-title {
//             font-weight: 700;
//             font-size: 1rem
//         }
//     }
    
//     .main-footer__navigation-title {
//         padding: 1.25rem 0;
//         font-weight: 700;
//         font-size: 1.125rem
//     }
    
//     .main-footer__navigation-title:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         right: 0;
//         bottom: 0;
//         width: .625rem;
//         height: 1rem;
//         margin: auto 0;
//         /* background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='18' fill='none' xmlns=' ??????://www.w3.org/2000/svg'%3E%3Cpath d='M10.504 8.928L2.004.412 0 2.42l6.495 6.508L0 15.436l2.004 2.008 8.5-8.516z' fill='%23fff'/%3E%3C/svg%3E"); */
//         background-position: 100%;
//         background-size: 100%;
//         background-repeat: no-repeat;
//         -webkit-transition: -webkit-transform .2s ease-in-out;
//         transition: -webkit-transform .2s ease-in-out;
//         transition: transform .2s ease-in-out;
//         transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out
//     }
    
//     .main-footer__navigation-title button {
//         padding-right: 1.25rem;
//         font-weight: inherit
//     }
    
//     .main-footer .single-row {
//         border-bottom: .25rem solid #fff
//     }
    
//     .main-footer .single-row.active .main-footer__navigation-title:before {
//         -webkit-transform: rotate(90deg);
//         transform: rotate(90deg)
//     }
    
//     .main-footer .single-row__content {
//         position: relative;
//         top: -1rem
//     }
    
//     .main-footer__navigation-wrapper {
//         min-width: 5.625rem;
//         border-bottom: .25rem solid #fff
//     }
    
//     .main-footer__navigation-wrapper.active .main-footer__navigation-title:before {
//         -webkit-transform: rotate(90deg);
//         transform: rotate(90deg)
//     }
    
//     .main-footer__navigation-wrapper>div {
//         position: relative;
//         top: -1rem
//     }
    
//     .main-footer__navigation-wrapper>div>ul {
//         overflow: hidden;
//         max-height: 0;
//         -webkit-transition: max-height .2s ease-in-out;
//         transition: max-height .2s ease-in-out
//     }
    
//     .main-footer__navigation-wrapper .main-footer__navigation-title {
//         margin-bottom: 0
//     }
    
//     @media (min-width:992px) {
//         .main-footer__navigation-title {
//             padding: 0;
//             font-weight: 600
//         }
//         .main-footer__navigation-title:before {
//             display: none
//         }
//         .main-footer__navigation-wrapper {
//             padding-bottom: 0;
//             border: none
//         }
//         .main-footer__navigation-wrapper>div {
//             top: 0
//         }
//         .main-footer__navigation-wrapper>div>ul {
//             top: 0;
//             max-height: 100%
//         }
//         .main-footer__navigation-wrapper:not(:first-child) {
//             padding-left: 4rem
//         }
//         .main-footer__navigation-wrapper .main-footer__navigation-title {
//             margin-bottom: .625rem !important
//         }
//     }
    
//     .main-footer__navigation {
//         list-style-type: none
//     }
    
//     .main-footer__navigation .nav-item {
//         display: block;
//         margin-top: 1rem
//     }
    
//     .main-tag {
//         overflow: hidden
//     }
    
//     .main-tag--no-hero {
//         padding-top: 5rem
//     }
    
//     @media (min-width:576px) {
//         .main-tag--no-hero {
//             padding-top: 5.9375rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .main-tag--no-hero {
//             padding-top: 6.875rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .main-tag--no-hero {
//             padding-top: 7.8125rem
//         }
//     }
    
//     .entry-content ol li a:not([class*=-button]):not([class*=__button]),
//     .entry-content p a:not([class*=-button]):not([class*=__button]),
//     .entry-content ul li a:not([class*=-button]):not([class*=__button]) {
//         padding-bottom: .125rem;
//         background-image: -webkit-linear-gradient(bottom, currentColor 1px, transparent 0);
//         background-image: linear-gradient(0deg, currentColor 1px, transparent 0);
//         background-size: 0 100%;
//         background-repeat: no-repeat;
//         text-decoration: none;
//         -webkit-transition: background-size .4s ease-in-out, opacity .4s ease-in-out;
//         transition: background-size .4s ease-in-out, opacity .4s ease-in-out;
//         background-position: 100%;
//         background-size: 100% 100%;
//         color: #141313
//     }
    
//     .entry-content ol li a:focus:not([class*=-button]):not([class*=__button]),
//     .entry-content ol li a:hover:not([class*=-button]):not([class*=__button]),
//     .entry-content p a:focus:not([class*=-button]):not([class*=__button]),
//     .entry-content p a:hover:not([class*=-button]):not([class*=__button]),
//     .entry-content ul li a:focus:not([class*=-button]):not([class*=__button]),
//     .entry-content ul li a:hover:not([class*=-button]):not([class*=__button]) {
//         background-size: 100% 100%;
//         background-size: 0 100%
//     }
    
//     .panel+.container>.entry-content>:first-of-type:not(.first-element-fix),
//     [class*=acf-block-]+.container>.entry-content>:first-of-type:not(.first-element-fix) {
//         margin-top: .75em
//     }
    
//     @media (min-width:576px) {
//         .panel+.container>.entry-content>:first-of-type:not(.first-element-fix),
//         [class*=acf-block-]+.container>.entry-content>:first-of-type:not(.first-element-fix) {
//             margin-top: .9375em
//         }
//     }
    
//     @media (min-width:768px) {
//         .panel+.container>.entry-content>:first-of-type:not(.first-element-fix),
//         [class*=acf-block-]+.container>.entry-content>:first-of-type:not(.first-element-fix) {
//             margin-top: 1.125em
//         }
//     }
    
//     @media (min-width:992px) {
//         .panel+.container>.entry-content>:first-of-type:not(.first-element-fix),
//         [class*=acf-block-]+.container>.entry-content>:first-of-type:not(.first-element-fix) {
//             margin-top: 1.3125em
//         }
//     }
    
//     .entry-content>h2,
//     .entry-content>h3,
//     .entry-content>h4 {
//         margin-top: 3rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content>h2,
//         .entry-content>h3,
//         .entry-content>h4 {
//             margin-top: 3.75rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>h2,
//         .entry-content>h3,
//         .entry-content>h4 {
//             margin-top: 4.5rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>h2,
//         .entry-content>h3,
//         .entry-content>h4 {
//             margin-top: 5.25rem
//         }
//     }
    
//     .entry-content h2 {
//         font-size: 1.5rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content h2 {
//             font-size: 1.82813rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content h2 {
//             font-size: 2.15625rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content h2 {
//             font-size: 2.48438rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .main-tag--no-hero {
//             padding-top: 8.75rem
//         }
//         .panel+.container>.entry-content>:first-of-type:not(.first-element-fix),
//         [class*=acf-block-]+.container>.entry-content>:first-of-type:not(.first-element-fix) {
//             margin-top: 1.5em
//         }
//         .entry-content>h2,
//         .entry-content>h3,
//         .entry-content>h4 {
//             margin-top: 6rem
//         }
//         .entry-content h2 {
//             font-size: 2.8125rem
//         }
//     }
    
//     .entry-content h3 {
//         font-size: 1.4375rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content h3 {
//             font-size: 1.64063rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content h3 {
//             font-size: 1.84375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content h3 {
//             font-size: 2.04688rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .entry-content h3 {
//             font-size: 2.25rem
//         }
//     }
    
//     .entry-content h4 {
//         font-size: 1.125rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content h4 {
//             font-size: 1.29688rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content h4 {
//             font-size: 1.46875rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content h4 {
//             font-size: 1.64063rem
//         }
//     }
    
//     .entry-content>p {
//         margin-top: .75rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content>p {
//             margin-top: .9375rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>p {
//             margin-top: 1.125rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>p {
//             margin-top: 1.3125rem
//         }
//     }
    
//     .entry-content>p>a[class*=-button] {
//         margin-top: .625rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content>p>a[class*=-button] {
//             margin-top: .78125rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>p>a[class*=-button] {
//             margin-top: .9375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>p>a[class*=-button] {
//             margin-top: 1.09375rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .entry-content h4 {
//             font-size: 1.8125rem
//         }
//         .entry-content>p {
//             margin-top: 1.5rem
//         }
//         .entry-content>p>a[class*=-button] {
//             margin-top: 1.25rem
//         }
//     }
    
//     .entry-content ol li a:not([class*=-button]):not([class*=__button])[href*= ??????],
//     .entry-content p a:not([class*=-button]):not([class*=__button])[href*= ??????],
//     .entry-content ul li a:not([class*=-button]):not([class*=__button])[href*= ??????] {
//         word-wrap: break-word;
//         word-break: break-word;
//         overflow-wrap: break-word;
//         -webkit-hyphens: auto;
//         -ms-hyphens: auto;
//         hyphens: auto
//     }
    
//     .entry-content ol li a[class*=-button],
//     .entry-content p a[class*=-button],
//     .entry-content ul li a[class*=-button] {
//         margin-top: .75em
//     }
    
//     @media (min-width:576px) {
//         .entry-content ol li a[class*=-button],
//         .entry-content p a[class*=-button],
//         .entry-content ul li a[class*=-button] {
//             margin-top: .9375em
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content ol li a[class*=-button],
//         .entry-content p a[class*=-button],
//         .entry-content ul li a[class*=-button] {
//             margin-top: 1.125em
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content ol li a[class*=-button],
//         .entry-content p a[class*=-button],
//         .entry-content ul li a[class*=-button] {
//             margin-top: 1.3125em
//         }
//     }
    
//     .entry-content>ul:not(.wp-block-gallery) {
//         list-style-type: none
//     }
    
//     .entry-content>ul:not(.wp-block-gallery) li {
//         position: relative;
//         padding-left: 1rem
//     }
    
//     .entry-content>ul:not(.wp-block-gallery) li:before {
//         content: "";
//         position: absolute;
//         left: 0;
//         width: .375rem;
//         height: .375rem;
//         border-radius: 50%;
//         background-color: currentColor;
//         top: .5rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content>ul:not(.wp-block-gallery) li:before {
//             top: .53125rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>ul:not(.wp-block-gallery) li:before {
//             top: .5625rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>ul:not(.wp-block-gallery) li:before {
//             top: .59375rem
//         }
//     }
    
//     .entry-content>ol:not(.wp-block-gallery) {
//         padding-left: 1.25rem;
//         list-style-type: decimal
//     }
    
//     .entry-content>ol:not(.wp-block-gallery),
//     .entry-content>ul:not(.wp-block-gallery) {
//         margin-right: 0;
//         margin-bottom: 0;
//         margin-left: 0;
//         list-style-position: outside;
//         margin-top: 1em
//     }
    
//     @media (min-width:576px) {
//         .entry-content>ol:not(.wp-block-gallery),
//         .entry-content>ul:not(.wp-block-gallery) {
//             margin-top: 1.25em
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>ol:not(.wp-block-gallery),
//         .entry-content>ul:not(.wp-block-gallery) {
//             margin-top: 1.5em
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>ol:not(.wp-block-gallery),
//         .entry-content>ul:not(.wp-block-gallery) {
//             margin-top: 1.75em
//         }
//     }
    
//     @media (min-width:1200px) {
//         .entry-content ol li a[class*=-button],
//         .entry-content p a[class*=-button],
//         .entry-content ul li a[class*=-button] {
//             margin-top: 1.5em
//         }
//         .entry-content>ul:not(.wp-block-gallery) li:before {
//             top: .625rem
//         }
//         .entry-content>ol:not(.wp-block-gallery),
//         .entry-content>ul:not(.wp-block-gallery) {
//             margin-top: 2em
//         }
//     }
    
//     .entry-content>ol:not(.wp-block-gallery) ol,
//     .entry-content>ol:not(.wp-block-gallery) ul,
//     .entry-content>ul:not(.wp-block-gallery) ol,
//     .entry-content>ul:not(.wp-block-gallery) ul {
//         margin-right: 0;
//         list-style-position: outside;
//         margin-top: .5em;
//         margin-left: .5em;
//         margin-bottom: .75em
//     }
    
//     @media (min-width:576px) {
//         .entry-content>ol:not(.wp-block-gallery) ol,
//         .entry-content>ol:not(.wp-block-gallery) ul,
//         .entry-content>ul:not(.wp-block-gallery) ol,
//         .entry-content>ul:not(.wp-block-gallery) ul {
//             margin-top: .625em;
//             margin-left: .625em;
//             margin-bottom: .9375em
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>ol:not(.wp-block-gallery) ol,
//         .entry-content>ol:not(.wp-block-gallery) ul,
//         .entry-content>ul:not(.wp-block-gallery) ol,
//         .entry-content>ul:not(.wp-block-gallery) ul {
//             margin-top: .75em;
//             margin-left: .75em;
//             margin-bottom: 1.125em
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>ol:not(.wp-block-gallery) ol,
//         .entry-content>ol:not(.wp-block-gallery) ul,
//         .entry-content>ul:not(.wp-block-gallery) ol,
//         .entry-content>ul:not(.wp-block-gallery) ul {
//             margin-top: .875em;
//             margin-left: .875em;
//             margin-bottom: 1.3125em
//         }
//     }
    
//     .entry-content>ol:not(.wp-block-gallery) ul,
//     .entry-content>ul:not(.wp-block-gallery) ul {
//         list-style-type: none
//     }
    
//     .entry-content>ol:not(.wp-block-gallery) ul li,
//     .entry-content>ul:not(.wp-block-gallery) ul li {
//         position: relative;
//         padding-left: 1rem
//     }
    
//     .entry-content>ol:not(.wp-block-gallery) ul li:before,
//     .entry-content>ul:not(.wp-block-gallery) ul li:before {
//         content: "";
//         position: absolute;
//         left: 0;
//         width: .375rem;
//         height: .375rem;
//         border-radius: 50%;
//         background-color: currentColor;
//         top: .5rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content>ol:not(.wp-block-gallery) ul li:before,
//         .entry-content>ul:not(.wp-block-gallery) ul li:before {
//             top: .53125rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>ol:not(.wp-block-gallery) ul li:before,
//         .entry-content>ul:not(.wp-block-gallery) ul li:before {
//             top: .5625rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>ol:not(.wp-block-gallery) ul li:before,
//         .entry-content>ul:not(.wp-block-gallery) ul li:before {
//             top: .59375rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .entry-content>ol:not(.wp-block-gallery) ol,
//         .entry-content>ol:not(.wp-block-gallery) ul,
//         .entry-content>ul:not(.wp-block-gallery) ol,
//         .entry-content>ul:not(.wp-block-gallery) ul {
//             margin-top: 1em;
//             margin-left: 1em;
//             margin-bottom: 1.5em
//         }
//         .entry-content>ol:not(.wp-block-gallery) ul li:before,
//         .entry-content>ul:not(.wp-block-gallery) ul li:before {
//             top: .625rem
//         }
//     }
    
//     .entry-content>ol:not(.wp-block-gallery) ol,
//     .entry-content>ul:not(.wp-block-gallery) ol {
//         list-style-type: lower-latin
//     }
    
//     .entry-content>ol:not(.wp-block-gallery) ol li,
//     .entry-content>ul:not(.wp-block-gallery) ol li {
//         padding-left: 0
//     }
    
//     .entry-content>ol:not(.wp-block-gallery) ol li:before,
//     .entry-content>ul:not(.wp-block-gallery) ol li:before {
//         display: none
//     }
    
//     .entry-content>ol:not(.wp-block-gallery) li,
//     .entry-content>ul:not(.wp-block-gallery) li {
//         margin-top: .5em
//     }
    
//     @media (min-width:576px) {
//         .entry-content>ol:not(.wp-block-gallery) li,
//         .entry-content>ul:not(.wp-block-gallery) li {
//             margin-top: .625em
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>ol:not(.wp-block-gallery) li,
//         .entry-content>ul:not(.wp-block-gallery) li {
//             margin-top: .75em
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>ol:not(.wp-block-gallery) li,
//         .entry-content>ul:not(.wp-block-gallery) li {
//             margin-top: .875em
//         }
//     }
    
//     .entry-content>ol:not(.wp-block-gallery) li:first-child,
//     .entry-content>ul:not(.wp-block-gallery) li:first-child {
//         margin-top: 0
//     }
    
//     .entry-content img,
//     .entry-content>*>img,
//     .entry-content>.wp-caption,
//     .entry-content>img {
//         display: block;
//         width: auto;
//         max-width: 100%;
//         height: auto;
//         margin-right: auto;
//         margin-left: auto;
//         margin-top: 1.5rem;
//         margin-bottom: .75rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content img,
//         .entry-content>*>img,
//         .entry-content>.wp-caption,
//         .entry-content>img {
//             margin-top: 1.875rem;
//             margin-bottom: .9375rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content img,
//         .entry-content>*>img,
//         .entry-content>.wp-caption,
//         .entry-content>img {
//             margin-top: 2.25rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content img,
//         .entry-content>*>img,
//         .entry-content>.wp-caption,
//         .entry-content>img {
//             margin-top: 2.625rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content img,
//         .entry-content>*>img,
//         .entry-content>.wp-caption,
//         .entry-content>img {
//             margin-bottom: 1.125rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content img,
//         .entry-content>*>img,
//         .entry-content>.wp-caption,
//         .entry-content>img {
//             margin-bottom: 1.3125rem
//         }
//     }
    
//     .entry-content img.add-margin-bottom,
//     .entry-content>*>img.add-margin-bottom,
//     .entry-content>.wp-caption.add-margin-bottom,
//     .entry-content>img.add-margin-bottom {
//         margin-bottom: 1.5rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content img.add-margin-bottom,
//         .entry-content>*>img.add-margin-bottom,
//         .entry-content>.wp-caption.add-margin-bottom,
//         .entry-content>img.add-margin-bottom {
//             margin-bottom: 1.875rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content img.add-margin-bottom,
//         .entry-content>*>img.add-margin-bottom,
//         .entry-content>.wp-caption.add-margin-bottom,
//         .entry-content>img.add-margin-bottom {
//             margin-bottom: 2.25rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content img.add-margin-bottom,
//         .entry-content>*>img.add-margin-bottom,
//         .entry-content>.wp-caption.add-margin-bottom,
//         .entry-content>img.add-margin-bottom {
//             margin-bottom: 2.625rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .entry-content>ol:not(.wp-block-gallery) li,
//         .entry-content>ul:not(.wp-block-gallery) li {
//             margin-top: 1em
//         }
//         .entry-content img,
//         .entry-content>*>img,
//         .entry-content>.wp-caption,
//         .entry-content>img {
//             margin-top: 3rem;
//             margin-bottom: 1.5rem
//         }
//         .entry-content img.add-margin-bottom,
//         .entry-content>*>img.add-margin-bottom,
//         .entry-content>.wp-caption.add-margin-bottom,
//         .entry-content>img.add-margin-bottom {
//             margin-bottom: 3rem
//         }
//     }
    
//     .entry-content>.wp-caption {
//         display: inline-block;
//         margin-bottom: 0
//     }
    
//     .entry-content>.wp-caption img {
//         margin: 0
//     }
    
//     .entry-content>iframe {
//         width: 100%;
//         margin-top: .75em;
//         height: 12.5rem
//     }
    
//     @media (min-width:576px) {
//         .entry-content>iframe {
//             margin-top: .9375em;
//             height: 14.96875rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>iframe {
//             margin-top: 1.125em;
//             height: 17.4375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>iframe {
//             margin-top: 1.3125em;
//             height: 19.90625rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .entry-content>iframe {
//             margin-top: 1.5em;
//             height: 22.375rem
//         }
//     }
    
//     .entry-content>pre {
//         display: block;
//         border-radius: .5rem;
//         background: #3a3a3a;
//         color: #fff;
//         white-space: pre-wrap;
//         word-wrap: break-word;
//         margin-top: .75em;
//         padding: .5em
//     }
    
//     @media (min-width:576px) {
//         .entry-content>pre {
//             margin-top: .9375em;
//             padding: .625em
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>pre {
//             margin-top: 1.125em;
//             padding: .75em
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>pre {
//             margin-top: 1.3125em;
//             padding: .875em
//         }
//     }
    
//     @media (min-width:1200px) {
//         .entry-content>pre {
//             margin-top: 1.5em;
//             padding: 1em
//         }
//     }
    
//     .entry-content>code {
//         padding-right: .25em;
//         padding-left: .25em;
//         border: 1px solid #d3d3e7;
//         background: #f4f4f9;
//         color: #ce375c;
//         font-style: italic
//     }
    
//     .entry-content .table-responsive table,
//     .entry-content>table {
//         margin-top: 1.5em
//     }
    
//     @media (min-width:576px) {
//         .entry-content .table-responsive table,
//         .entry-content>table {
//             margin-top: 1.875em
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content .table-responsive table,
//         .entry-content>table {
//             margin-top: 2.25em
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content .table-responsive table,
//         .entry-content>table {
//             margin-top: 2.625em
//         }
//     }
    
//     .entry-content .table-responsive table:not(.wp-block-table),
//     .entry-content>table:not(.wp-block-table) {
//         border: 1px solid silver
//     }
    
//     .entry-content .table-responsive table:not(.wp-block-table) tr,
//     .entry-content>table:not(.wp-block-table) tr {
//         border-bottom: 1px solid silver
//     }
    
//     .entry-content .table-responsive table:not(.wp-block-table) tr:last-child:not(:first-child),
//     .entry-content>table:not(.wp-block-table) tr:last-child:not(:first-child) {
//         border: 0
//     }
    
//     .entry-content .first-element-fix+*,
//     .entry-content .first-element-fix+.lead,
//     .entry-content .first-element-fix+p>a>img,
//     .entry-content .first-element-fix+p>img {
//         margin-top: 0 !important
//     }
    
//     .entry-content :last-child {
//         margin-bottom: 0
//     }
    
//     .crunch-button__with-arrow--small {
//         font-size: .875rem
//     }
    
//     .crunch-button {
//         font-weight: 600;
//         letter-spacing: 1px
//     }
    
//     .crunch-button__with-arrow {
//         position: relative;
//         margin-right: 1.5rem;
//         padding-bottom: .325rem;
//         background-image: -webkit-gradient(linear, left bottom, left top, color-stop(.25rem, currentColor), color-stop(.25rem, transparent));
//         background-image: -webkit-linear-gradient(bottom, currentColor .25rem, transparent 0);
//         background-image: linear-gradient(0deg, currentColor .25rem, transparent 0);
//         background-size: 100% 100%;
//         background-repeat: no-repeat;
//         -webkit-transition: padding-right .2s ease-in-out;
//         transition: padding-right .2s ease-in-out
//     }
    
//     .crunch-button__with-arrow:after {
//         content: "";
//         position: absolute;
//         right: -1.325rem;
//         width: .825rem;
//         height: .75rem;
//         background-position: 100%;
//         background-size: 2.625rem .75rem;
//         background-repeat: no-repeat;
//         -webkit-transition: width .2s ease-in-out, right .2s ease-in-out;
//         transition: width .2s ease-in-out, right .2s ease-in-out
//     }
    
//     .crunch-button__with-arrow:hover:after {
//         right: -2.15rem;
//         width: 1.65rem
//     }
    
//     .crunch-button__with-arrow--small:after {
//         top: .25rem
//     }
    
//     .crunch-button__with-arrow--primary-color {
//         color: #141313
//     }
    
//     .crunch-button__with-arrow--primary-color:after {
//         /* background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='87' height='25' fill='none' xmlns=' ??????://www.w3.org/2000/svg'%3E%3Cpath stroke='%23141313' stroke-width='4' d='M.949 12.643h82M73.585 23l10.416-10.5L73.585 2'/%3E%3C/svg%3E") */
//     }
    
//     .crunch-button__with-arrow--primary-color:focus,
//     .crunch-button__with-arrow--primary-color:hover {
//         color: #141313
//     }
    
//     .crunch-button__with-arrow--white-color {
//         color: #fff
//     }
    
//     .crunch-button__with-arrow--white-color:after {
//         /* background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='87' height='25' fill='none' xmlns=' ??????://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='4' d='M.949 12.643h82M73.585 23l10.416-10.5L73.585 2'/%3E%3C/svg%3E") */
//     }
    
//     .crunch-button__with-arrow--white-color:focus,
//     .crunch-button__with-arrow--white-color:hover {
//         color: #fff
//     }
    
//     .crunch-button__outline {
//         position: relative;
//         z-index: 1;
//         display: -webkit-inline-box;
//         display: -webkit-inline-flex;
//         display: inline-flex;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         -webkit-box-pack: center;
//         -webkit-justify-content: center;
//         justify-content: center;
//         overflow: hidden;
//         background-color: transparent;
//         line-height: 1.3;
//         text-align: center;
//         -webkit-transition: .6s !important;
//         transition: all .6s ease !important;
//         padding: 1rem 2.5rem
//     }
    
//     .crunch-button__outline:after,
//     .crunch-button__outline:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         right: 0
//     }
    
//     .crunch-button__outline:after {
//         bottom: 0;
//         left: 0;
//         width: 100%;
//         border: .25rem solid transparent
//     }
    
//     .crunch-button__outline:before {
//         z-index: -1;
//         display: block;
//         height: 100%;
//         -webkit-transition: .4s ease-in-out;
//         transition: all .4s ease-in-out;
//         width: 0
//     }
    
//     .crunch-button__outline:focus:before,
//     .crunch-button__outline:hover:before {
//         right: auto;
//         left: 0;
//         width: 100%
//     }
    
//     .crunch-button__outline--small {
//         font-size: .875rem
//     }
    
//     .crunch-button__outline--white-color {
//         color: #fff
//     }
    
//     .crunch-button__outline--white-color:after {
//         border-color: #fff
//     }
    
//     .crunch-button__outline--white-color:before {
//         background-color: #fff
//     }
    
//     .crunch-button__outline--primary-color,
//     .crunch-button__outline--white-color:focus,
//     .crunch-button__outline--white-color:hover {
//         color: #141313
//     }
    
//     .crunch-button__outline--primary-color:after {
//         border-color: #141313
//     }
    
//     .crunch-button__outline--primary-color:before {
//         background-color: #141313
//     }
    
//     .crunch-button__outline--primary-color:focus,
//     .crunch-button__outline--primary-color:hover {
//         color: #fff
//     }
    
//     .word-slider {
//         vertical-align: middle;
//         height: 2rem
//     }
    
//     @media (min-width:576px) {
//         .crunch-button__outline {
//             padding: 1rem 2.5rem
//         }
//         .word-slider {
//             height: 2.90625rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .crunch-button__outline {
//             padding: 1rem 2.5rem
//         }
//         .word-slider {
//             height: 3.8125rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .crunch-button__outline {
//             padding: 1rem 2.5rem
//         }
//         .word-slider {
//             height: 4.71875rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .entry-content .table-responsive table,
//         .entry-content>table {
//             margin-top: 3em
//         }
//         .crunch-button__outline {
//             padding: 1rem 2.5rem
//         }
//         .word-slider {
//             height: 5.625rem
//         }
//     }
    
//     .word-slider__words {
//         list-style: none
//     }
    
//     .word-slider__word {
//         color: #ffe607;
//         height: 2rem
//     }
    
//     @media (min-width:576px) {
//         .word-slider__word {
//             height: 2.90625rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .word-slider__word {
//             height: 3.8125rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .word-slider__word {
//             height: 4.71875rem
//         }
//     }
    
//     .word-slider__word--style-1 {
//         background-color: #ee67d8
//     }
    
//     .word-slider__word--style-2 {
//         background-color: #e9301c
//     }
    
//     .word-slider__word--style-4 {
//         background-color: #0f35f7
//     }
    
//     .word-slider--animation {
//         position: relative;
//         -webkit-animation: 20s infinite marquee-y;
//         animation: 20s infinite marquee-y;
//         -webkit-animation-delay: 2s;
//         animation-delay: 2s
//     }
    
//     @-webkit-keyframes marquee-y {
//         0% {
//             top: 0
//         }
//         12.5% {
//             top: -100%
//         }
//         25% {
//             top: -200%
//         }
//         37.5% {
//             top: -300%
//         }
//         50% {
//             top: -400%
//         }
//         62.5% {
//             top: -300%
//         }
//         75% {
//             top: -200%
//         }
//         87.5% {
//             top: -100%
//         }
//         to {
//             top: 0
//         }
//     }
    
//     @keyframes marquee-y {
//         0% {
//             top: 0
//         }
//         12.5% {
//             top: -100%
//         }
//         25% {
//             top: -200%
//         }
//         37.5% {
//             top: -300%
//         }
//         50% {
//             top: -400%
//         }
//         62.5% {
//             top: -300%
//         }
//         75% {
//             top: -200%
//         }
//         87.5% {
//             top: -100%
//         }
//         to {
//             top: 0
//         }
//     }
    
//     .homepage-hero-section {
//         padding-bottom: 29vw;
//         padding-top: 3rem
//     }
    
//     @media (min-width:96.875rem) {
//         .homepage-hero-section {
//             padding-bottom: 13rem !important
//         }
//     }
    
//     @media (min-width:576px) {
//         .homepage-hero-section {
//             padding-top: 3.6875rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .homepage-hero-section {
//             padding-top: 4.375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .homepage-hero-section {
//             padding-top: 5.0625rem;
//             padding-bottom: 10.875rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .word-slider__word {
//             height: 5.625rem
//         }
//         .homepage-hero-section {
//             padding-top: 5.75rem;
//             padding-bottom: 8.5rem
//         }
//     }
    
//     .homepage-hero-section__content {
//         max-width: 42.125rem
//     }
    
//     .homepage-hero-section__content p {
//         margin-top: 1rem;
//         color: #bebebe
//     }
    
//     .homepage-hero-section__content p strong {
//         color: #fff;
//         font-weight: 600
//     }
    
//     .homepage-hero-section__animation {
//         bottom: 0;
//         left: 0;
//         height: 29vw
//     }
    
//     @-webkit-keyframes rotate360 {
//         0% {
//             -webkit-transform: rotate(0);
//             transform: rotate(0)
//         }
//         to {
//             -webkit-transform: rotate(1turn);
//             transform: rotate(1turn)
//         }
//     }
    
//     @keyframes rotate360 {
//         0% {
//             -webkit-transform: rotate(0);
//             transform: rotate(0)
//         }
//         to {
//             -webkit-transform: rotate(1turn);
//             transform: rotate(1turn)
//         }
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.gfield_description {
//         font-size: .8125rem;
//         margin-top: .25rem;
//         padding: 0;
//         font-weight: 400
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input),
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield label.gfield_label {
//         font-size: .875rem
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::-webkit-input-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea::-webkit-input-placeholder {
//         font-size: 1rem
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input):-moz-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input):-ms-input-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::-moz-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::-webkit-input-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea:-moz-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea:-ms-input-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea::-moz-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea::-webkit-input-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea::placeholder {
//         font-size: 1rem
//     }
    
//     .gform_wrapper.newsletter_wrapper .crunch-button {
//         color: #fff
//     }
    
//     .gform_wrapper.newsletter_wrapper .crunch-button:after {
//         border-color: #fff
//     }
    
//     .gform_wrapper.newsletter_wrapper .crunch-button:before {
//         background-color: #fff
//     }
    
//     .gform_wrapper.newsletter_wrapper .crunch-button:focus,
//     .gform_wrapper.newsletter_wrapper .crunch-button:hover {
//         color: #141313
//     }
    
//     .gform_wrapper {
//         overflow: visible !important;
//         margin: 0 !important
//     }
    
//     .gform_wrapper.newsletter_wrapper form {
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-orient: horizontal;
//         -webkit-box-direction: normal;
//         -webkit-flex-flow: row;
//         flex-flow: row;
//         -webkit-box-align: start;
//         -webkit-align-items: flex-start;
//         align-items: flex-start;
//         -webkit-box-pack: center;
//         -webkit-justify-content: center;
//         justify-content: center
//     }
    
//     .gform_wrapper.newsletter_wrapper form .gform_ajax_spinner {
//         position: absolute;
//         right: 0;
//         bottom: -2.5rem;
//         left: 0;
//         margin: 0 auto !important;
//         border-color: #fff #fff #fff transparent
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_body {
//         width: -webkit-calc(100% - 9rem);
//         width: calc(100% - 9rem)
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_body ul.gform_fields li.gfield.hidden_label {
//         margin-top: 0 !important
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input) {
//         overflow: hidden;
//         height: 3.125rem;
//         padding: 0 1rem !important;
//         border: .25rem solid #fff;
//         border-right: none;
//         color: #fff;
//         font-size: 1.125rem !important;
//         line-height: 1.125rem !important;
//         text-overflow: ellipsis;
//         white-space: nowrap
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::-webkit-input-placeholder {
//         color: silver
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::-moz-placeholder {
//         color: silver
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input):-ms-input-placeholder {
//         color: silver
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::-ms-input-placeholder {
//         color: silver
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::placeholder {
//         color: silver
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input):focus {
//         border-color: #fff
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_footer {
//         width: 9rem;
//         margin-top: 0 !important
//     }
    
//     .gform_wrapper.newsletter_wrapper form div.gform_footer .crunch-button {
//         height: 3.125rem
//     }
    
//     .gform_wrapper.gform_validation_error .gform_footer {
//         margin-top: 1rem !important
//     }
    
//     @media (min-width:576px) {
//         .homepage-hero-section__content p {
//             margin-top: 0
//         }
//         .gform_wrapper.gform_validation_error .gform_footer {
//             margin-top: 1.25rem !important
//         }
//     }
    
//     @media (min-width:768px) {
//         .gform_wrapper.gform_validation_error .gform_footer {
//             margin-top: 1.5rem !important
//         }
//     }
    
//     @media (min-width:992px) {
//         .gform_wrapper.gform_validation_error .gform_footer {
//             margin-top: 1.75rem !important
//         }
//     }
    
//     .gform_wrapper form {
//         display: block;
//         width: 100%;
//         max-width: 100%;
//         margin-top: 0
//     }
    
//     .gform_wrapper form .add_repeater_item,
//     .gform_wrapper form .gform_button,
//     .gform_wrapper form .remove_repeater_item,
//     .gform_wrapper form input[type=button] {
//         border: none
//     }
    
//     .gform_wrapper form .gform_ajax_spinner {
//         display: block;
//         width: 1.25rem;
//         height: 1.25rem;
//         margin: 1.5rem auto;
//         border: 3px solid #141313;
//         border-left-color: transparent;
//         border-radius: 50%;
//         -webkit-animation: 1s linear infinite rotate360;
//         animation: 1s linear infinite rotate360
//     }
    
//     .gform_wrapper form div.gform_body {
//         width: 100%
//     }
    
//     .gform_wrapper form div.gform_body div.gform_page div.gform_page_footer {
//         margin-top: 1rem !important
//     }
    
//     @media (min-width:576px) {
//         .gform_wrapper form .gform_ajax_spinner {
//             display: inline-block;
//             margin: 0 0 0 1rem
//         }
//         .gform_wrapper form div.gform_body div.gform_page div.gform_page_footer {
//             margin-top: 1.25rem !important
//         }
//     }
    
//     @media (min-width:768px) {
//         .gform_wrapper form div.gform_body div.gform_page div.gform_page_footer {
//             margin-top: 1.5rem !important
//         }
//     }
    
//     @media (min-width:992px) {
//         .gform_wrapper form div.gform_body div.gform_page div.gform_page_footer {
//             margin-top: 1.75rem !important
//         }
//     }
    
//     @media (min-width:1200px) {
//         .gform_wrapper form div.gform_body div.gform_page div.gform_page_footer,
//         .gform_wrapper.gform_validation_error .gform_footer {
//             margin-top: 2rem !important
//         }
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields {
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-flex-wrap: wrap;
//         flex-wrap: wrap;
//         -webkit-box-pack: justify;
//         -webkit-justify-content: space-between;
//         justify-content: space-between
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield {
//         width: 100%;
//         margin-top: 1.5rem;
//         padding: 0
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield:first-of-type {
//         margin-top: 0
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.gfield_description.validation_message {
//         color: #e9301c;
//         margin-top: .5rem
//     }
    
//     @media (min-width:576px) {
//         .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.gfield_description.validation_message {
//             margin-top: .5625rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.gfield_description.validation_message {
//             margin-top: .625rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.gfield_description.validation_message {
//             margin-top: .6875rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.gfield_description.validation_message {
//             margin-top: .75rem
//         }
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield.hidden_label {
//         margin-top: 1.25rem
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield.hidden_label div.ginput_container {
//         margin-top: 0 !important
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield select {
//         width: 100%;
//         height: 2.5rem;
//         margin: 0;
//         padding: 0 !important;
//         border: none;
//         border-bottom: 1px solid #141313;
//         background-position: 100%;
//         color: #706f6e
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield label.gfield_label {
//         color: #141313;
//         font-weight: 700;
//         letter-spacing: 1px;
//         text-transform: uppercase
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container {
//         margin-top: 0
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input),
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea {
//         width: 100%;
//         height: 2.25rem;
//         margin: 0;
//         padding: 0;
//         border: none;
//         border-bottom: 1px solid #141313;
//         border-radius: 0;
//         background-color: transparent;
//         color: #706f6e;
//         box-shadow: none;
//         -webkit-appearance: none;
//         -moz-appearance: none;
//         appearance: none;
//         -webkit-transition: border-color .2s ease-in-out;
//         transition: border-color .2s ease-in-out
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::-webkit-input-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea::-webkit-input-placeholder {
//         color: #000;
//         line-height: normal
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input):-moz-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input):-ms-input-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::-moz-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::-webkit-input-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input)::placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea:-moz-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea:-ms-input-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea::-moz-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea::-webkit-input-placeholder,
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea::placeholder {
//         color: #000;
//         line-height: normal
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea {
//         display: block;
//         min-height: 2.25rem;
//         padding-top: .25rem;
//         resize: vertical
//     }
    
//     @media (min-width:40.0625rem) {
//         .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container textarea {
//             margin-bottom: 0
//         }
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload {
//         position: relative;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-flex-wrap: wrap;
//         flex-wrap: wrap;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         text-align: left
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .gform_fileupload_multifile {
//         width: 100%
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .upload-btn-wrapper {
//         position: relative;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         border: 1px solid #dde3e5;
//         background-color: #fff;
//         -webkit-transition: border-color .2s ease-in-out;
//         transition: border-color .2s ease-in-out
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .upload-btn-wrapper--active {
//         border-color: #141313
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .upload-btn-wrapper input[type=file] {
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         margin: 0;
//         border: none;
//         background: 0 0;
//         opacity: 0;
//         cursor: pointer
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .upload-btn-wrapper .file-name-wrapper {
//         padding: .625rem 1rem
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .upload-btn-wrapper .file-name-wrapper__icon {
//         -webkit-box-flex: 0;
//         -webkit-flex: 0 0 auto;
//         flex: 0 0 auto;
//         margin-right: .75rem
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .upload-btn-wrapper__file-name {
//         color: silver;
//         word-wrap: break-word;
//         word-break: break-word;
//         overflow-wrap: break-word
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .upload-btn-wrapper__browse {
//         padding: .625rem 1rem;
//         background: #fff;
//         pointer-events: none
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .upload-btn-wrapper__browse:before {
//         content: "";
//         position: absolute;
//         top: 15%;
//         bottom: 15%;
//         left: 0;
//         width: 1px;
//         height: 70%;
//         background-color: #dde3e5
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .upload-btn-wrapper .ginput_preview {
//         margin-top: 0
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .ginput_preview {
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         margin-top: .5rem
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .ginput_preview .gform_delete {
//         margin-right: .25rem;
//         -webkit-transition: opacity .2s ease-in-out;
//         transition: opacity .2s ease-in-out
//     }
    
//     .gform_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container_fileupload .ginput_preview .gform_delete:hover {
//         opacity: .75
//     }
    
//     .gform_wrapper form .gform_footer {
//         margin-top: 2.5rem;
//         padding: 0
//     }
    
//     div.chosen-container .chosen-drop,
//     div.chosen-container .chosen-single>span {
//         font-size: .875rem
//     }
    
//     .gform_wrapper ul.gform_fields li.gfield select {
//         font-size: 1rem;
//         width: 100%;
//         border: 1px solid silver;
//         border-radius: 0;
//         background: #fff;
//         background-position: right 1rem center;
//         background-size: 1rem .625rem;
//         background-repeat: no-repeat;
//         color: silver;
//         line-height: 1.3;
//         -webkit-appearance: none;
//         -moz-appearance: none;
//         appearance: none;
//         padding: .5625rem 1.875rem .5625rem .9375rem !important
//     }
    
//     @media (min-width:576px) {
//         .gform_wrapper ul.gform_fields li.gfield select {
//             padding: .60938rem 2.03125rem .60938rem 1.01563rem !important
//         }
//     }
    
//     @media (min-width:768px) {
//         .gform_wrapper ul.gform_fields li.gfield select {
//             padding: .65625rem 2.1875rem .65625rem 1.09375rem !important
//         }
//     }
    
//     @media (min-width:992px) {
//         .gform_wrapper ul.gform_fields li.gfield select {
//             padding: .70313rem 2.34375rem .70313rem 1.17188rem !important
//         }
//     }
    
//     .gform_wrapper ul.gform_fields li.gfield select:focus {
//         outline: 0
//     }
    
//     div.chosen-container {
//         width: 100% !important;
//         margin-bottom: 0
//     }
    
//     div.chosen-container.chosen-container-active.chosen-with-drop .chosen-single {
//         border-color: silver;
//         background: #fff;
//         border: none
//     }
    
//     div.chosen-container.chosen-container-active.chosen-with-drop .chosen-single:after {
//         -webkit-transform: translateY(-50%) rotate(180deg);
//         transform: translateY(-50%) rotate(180deg)
//     }
    
//     div.chosen-container .chosen-drop,
//     div.chosen-container .chosen-single {
//         border-radius: 0;
//         box-shadow: none
//     }
    
//     div.chosen-container .chosen-single {
//         position: relative;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         -webkit-box-pack: start;
//         -webkit-justify-content: flex-start;
//         justify-content: flex-start;
//         width: 100%;
//         height: 2.5rem;
//         padding: 0 1.25rem 0 0;
//         border: none;
//         border-bottom: 1px solid #141313;
//         background: 0 0;
//         color: #706f6e;
//         -webkit-transition: border-color .2s ease-in-out;
//         transition: border-color .2s ease-in-out
//     }
    
//     div.chosen-container .chosen-single>span {
//         margin-bottom: 0;
//         line-height: 1.3
//     }
    
//     div.chosen-container .chosen-single>div {
//         display: none
//     }
    
//     div.chosen-container .chosen-single:after {
//         content: "";
//         position: absolute;
//         top: 50%;
//         right: 0;
//         display: block;
//         width: 1rem;
//         height: .625rem;
//         -webkit-transform: translateY(-50%);
//         transform: translateY(-50%);
//         -webkit-transition: -webkit-transform .2s ease-in-out;
//         transition: -webkit-transform .2s ease-in-out;
//         transition: transform .2s ease-in-out;
//         transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out
//     }
    
//     div.chosen-container .chosen-drop {
//         border: 1px solid #141313;
//         background: #fff
//     }
    
//     div.chosen-container .chosen-drop .chosen-search {
//         display: none
//     }
    
//     div.chosen-container .chosen-drop .chosen-results {
//         margin: 0;
//         padding: .5rem 0
//     }
    
//     div.chosen-container .chosen-drop .chosen-results li {
//         padding-top: .375rem;
//         padding-bottom: .375rem;
//         color: #706f6e;
//         -webkit-transition: color .2s ease-in-out;
//         transition: color .2s ease-in-out;
//         padding-left: .9375rem;
//         padding-right: .9375rem
//     }
    
//     @media (min-width:576px) {
//         div.chosen-container .chosen-drop .chosen-results li {
//             padding-left: 1.01563rem;
//             padding-right: 1.01563rem
//         }
//     }
    
//     @media (min-width:768px) {
//         div.chosen-container .chosen-drop .chosen-results li {
//             padding-left: 1.09375rem;
//             padding-right: 1.09375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         div.chosen-container .chosen-drop .chosen-results li {
//             padding-left: 1.17188rem;
//             padding-right: 1.17188rem
//         }
//     }
    
//     div.chosen-container .chosen-drop .chosen-results li.highlighted,
//     div.chosen-container .chosen-drop .chosen-results li.result-selected {
//         background: 0 0
//     }
    
//     div.chosen-container .chosen-drop .chosen-results li.highlighted {
//         color: #141313
//     }
    
//     div.chosen-container .chosen-drop .chosen-results li.result-selected {
//         color: #141313;
//         font-weight: 600
//     }
    
//     .newsletter__title {
//         width: 55rem;
//         max-width: 100%;
//         font-size: 1.625rem
//     }
    
//     @media (min-width:576px) {
//         .newsletter__title {
//             font-size: 1.92188rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .newsletter__title {
//             font-size: 2.21875rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .newsletter__title {
//             font-size: 2.51563rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .gform_wrapper ul.gform_fields li.gfield select {
//             padding: .75rem 2.5rem .75rem 1.25rem !important
//         }
//         div.chosen-container .chosen-drop .chosen-results li {
//             padding-left: 1.25rem;
//             padding-right: 1.25rem
//         }
//         .newsletter__title {
//             font-size: 2.8125rem
//         }
//     }
    
//     .newsletter__content {
//         width: 27.5rem;
//         max-width: 100%
//     }
    
//     .newsletter__form-wrapper {
//         width: 33.75rem;
//         max-width: 100%
//     }
    
//     [data-aos][data-aos][data-aos-duration="100"],
//     body[data-aos-duration="100"] [data-aos] {
//         -webkit-transition-duration: .1s;
//         transition-duration: .1s
//     }
    
//     [data-aos][data-aos][data-aos-delay="100"],
//     body[data-aos-delay="100"] [data-aos] {
//         -webkit-transition-delay: 0s;
//         transition-delay: 0s
//     }
    
//     [data-aos][data-aos][data-aos-delay="100"].aos-animate,
//     body[data-aos-delay="100"] [data-aos].aos-animate {
//         -webkit-transition-delay: .1s;
//         transition-delay: .1s
//     }
    
//     [data-aos][data-aos][data-aos-duration="200"],
//     body[data-aos-duration="200"] [data-aos] {
//         -webkit-transition-duration: .2s;
//         transition-duration: .2s
//     }
    
//     [data-aos][data-aos][data-aos-delay="200"],
//     body[data-aos-delay="200"] [data-aos] {
//         -webkit-transition-delay: 0s;
//         transition-delay: 0s
//     }
    
//     [data-aos][data-aos][data-aos-delay="200"].aos-animate,
//     body[data-aos-delay="200"] [data-aos].aos-animate {
//         -webkit-transition-delay: .2s;
//         transition-delay: .2s
//     }
    
//     [data-aos][data-aos][data-aos-duration="400"],
//     body[data-aos-duration="400"] [data-aos] {
//         -webkit-transition-duration: .4s;
//         transition-duration: .4s
//     }
    
//     [data-aos][data-aos][data-aos-delay="400"],
//     body[data-aos-delay="400"] [data-aos] {
//         -webkit-transition-delay: 0s;
//         transition-delay: 0s
//     }
    
//     [data-aos][data-aos][data-aos-delay="400"].aos-animate,
//     body[data-aos-delay="400"] [data-aos].aos-animate {
//         -webkit-transition-delay: .4s;
//         transition-delay: .4s
//     }
    
//     [data-aos][data-aos][data-aos-duration="500"],
//     body[data-aos-duration="500"] [data-aos] {
//         -webkit-transition-duration: .5s;
//         transition-duration: .5s
//     }
    
//     [data-aos][data-aos][data-aos-delay="500"],
//     body[data-aos-delay="500"] [data-aos] {
//         -webkit-transition-delay: 0s;
//         transition-delay: 0s
//     }
    
//     [data-aos][data-aos][data-aos-delay="500"].aos-animate,
//     body[data-aos-delay="500"] [data-aos].aos-animate {
//         -webkit-transition-delay: .5s;
//         transition-delay: .5s
//     }
    
//     [data-aos][data-aos][data-aos-duration="700"],
//     body[data-aos-duration="700"] [data-aos] {
//         -webkit-transition-duration: .7s;
//         transition-duration: .7s
//     }
    
//     [data-aos][data-aos][data-aos-delay="700"],
//     body[data-aos-delay="700"] [data-aos] {
//         -webkit-transition-delay: 0s;
//         transition-delay: 0s
//     }
    
//     [data-aos][data-aos][data-aos-delay="700"].aos-animate,
//     body[data-aos-delay="700"] [data-aos].aos-animate {
//         -webkit-transition-delay: .7s;
//         transition-delay: .7s
//     }
    
//     [data-aos][data-aos][data-aos-duration="900"],
//     body[data-aos-duration="900"] [data-aos] {
//         -webkit-transition-duration: .9s;
//         transition-duration: .9s
//     }
    
//     [data-aos][data-aos][data-aos-delay="900"],
//     body[data-aos-delay="900"] [data-aos] {
//         -webkit-transition-delay: 0s;
//         transition-delay: 0s
//     }
    
//     [data-aos][data-aos][data-aos-delay="900"].aos-animate,
//     body[data-aos-delay="900"] [data-aos].aos-animate {
//         -webkit-transition-delay: .9s;
//         transition-delay: .9s
//     }
    
//     [data-aos][data-aos][data-aos-duration="1200"],
//     body[data-aos-duration="1200"] [data-aos] {
//         -webkit-transition-duration: 1.2s;
//         transition-duration: 1.2s
//     }
    
//     [data-aos][data-aos][data-aos-delay="1200"],
//     body[data-aos-delay="1200"] [data-aos] {
//         -webkit-transition-delay: 0s;
//         transition-delay: 0s
//     }
    
//     [data-aos][data-aos][data-aos-delay="1200"].aos-animate,
//     body[data-aos-delay="1200"] [data-aos].aos-animate {
//         -webkit-transition-delay: 1.2s;
//         transition-delay: 1.2s
//     }
    
//     [data-aos] {
//         pointer-events: none
//     }
    
//     [data-aos].aos-animate {
//         pointer-events: auto
//     }
    
//     @media screen {
//         html:not(.no-js) [data-aos^=fade][data-aos^=fade] {
//             opacity: 0;
//             -webkit-transition-property: opacity, -webkit-transform;
//             transition-property: opacity, -webkit-transform;
//             transition-property: opacity, transform;
//             transition-property: opacity, transform, -webkit-transform
//         }
//         html:not(.no-js) [data-aos^=fade][data-aos^=fade].aos-animate {
//             opacity: 1;
//             -webkit-transform: none;
//             transform: none
//         }
//         html:not(.no-js) [data-aos^=zoom][data-aos^=zoom] {
//             opacity: 0;
//             -webkit-transition-property: opacity, -webkit-transform;
//             transition-property: opacity, -webkit-transform;
//             transition-property: opacity, transform;
//             transition-property: opacity, transform, -webkit-transform
//         }
//         html:not(.no-js) [data-aos^=zoom][data-aos^=zoom].aos-animate {
//             opacity: 1;
//             -webkit-transform: translateZ(0) scale(1);
//             transform: translateZ(0) scale(1)
//         }
//         html:not(.no-js) [data-aos^=slide][data-aos^=slide] {
//             -webkit-transition-property: -webkit-transform;
//             transition-property: -webkit-transform;
//             transition-property: transform;
//             transition-property: transform, -webkit-transform;
//             visibility: hidden
//         }
//         html:not(.no-js) [data-aos^=slide][data-aos^=slide].aos-animate {
//             visibility: visible;
//             -webkit-transform: translateZ(0);
//             transform: translateZ(0)
//         }
//     }
    
//     .glightbox-container {
//         width: 100%;
//         height: 100%;
//         position: fixed;
//         top: 0;
//         left: 0;
//         z-index: 999999 !important;
//         touch-action: none;
//         -webkit-text-size-adjust: 100%;
//         -webkit-backface-visibility: hidden;
//         outline: 0;
//         overflow: hidden
//     }
    
//     .glightbox-container.inactive {
//         display: none
//     }
    
//     .glightbox-container .gcontainer {
//         position: relative;
//         width: 100%;
//         height: 100%;
//         z-index: 9999;
//         overflow: hidden
//     }
    
//     .glightbox-container .gslider {
//         -webkit-transition: -webkit-transform .4s;
//         transition: -webkit-transform .4s ease;
//         transition: transform .4s ease;
//         transition: transform .4s ease, -webkit-transform .4s ease;
//         height: 100%;
//         left: 0;
//         top: 0;
//         position: relative;
//         overflow: hidden;
//         display: -webkit-box !important;
//         display: -webkit-flex !important;
//         display: flex !important;
//         -webkit-transform: translateZ(0);
//         transform: translateZ(0)
//     }
    
//     .glightbox-container .gslide,
//     .glightbox-container .gslider {
//         width: 100%;
//         -webkit-box-pack: center;
//         -webkit-justify-content: center;
//         justify-content: center;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center
//     }
    
//     .glightbox-container .gslide {
//         position: absolute;
//         opacity: 1;
//         -webkit-user-select: none;
//         -moz-user-select: none;
//         -ms-user-select: none;
//         user-select: none;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         opacity: 0
//     }
    
//     .glightbox-container .gslide.current {
//         opacity: 1;
//         z-index: 99999;
//         position: relative
//     }
    
//     .glightbox-container .gslide.prev {
//         opacity: 1;
//         z-index: 9999
//     }
    
//     .glightbox-container .gslide-inner-content {
//         width: 100%
//     }
    
//     .glightbox-container .ginner-container {
//         position: relative;
//         width: 100%;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-pack: center;
//         -webkit-justify-content: center;
//         justify-content: center;
//         -webkit-box-orient: vertical;
//         -webkit-box-direction: normal;
//         -webkit-flex-direction: column;
//         flex-direction: column;
//         max-width: 100%;
//         margin: auto;
//         height: 100vh
//     }
    
//     .glightbox-container .ginner-container.gvideo-container {
//         width: 100%
//     }
    
//     .gslide iframe,
//     .gslide video {
//         outline: 0 !important;
//         border: none;
//         min-height: 165px;
//         -webkit-overflow-scrolling: touch;
//         overflow-scrolling: touch;
//         touch-action: auto
//     }
    
//     .gslide-image {
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center
//     }
    
//     .gslide-image img {
//         max-height: 100vh;
//         display: block;
//         max-width: 100%;
//         padding: 0;
//         float: none;
//         outline: 0;
//         border: none;
//         -webkit-user-select: none;
//         -moz-user-select: none;
//         -ms-user-select: none;
//         user-select: none;
//         max-width: 100vw;
//         width: auto;
//         height: auto;
//         -o-object-fit: cover;
//         object-fit: cover;
//         touch-action: none;
//         margin: auto;
//         min-width: 200px
//     }
    
//     .gslide-image img.zoomable {
//         position: relative
//     }
    
//     .gslide-image img.dragging {
//         cursor: -webkit-grabbing !important;
//         cursor: grabbing !important;
//         -webkit-transition: none;
//         transition: none
//     }
    
//     .gslide-inline {
//         background: #fff;
//         text-align: left;
//         max-height: -webkit-calc(100vh - 40px);
//         max-height: calc(100vh - 40px);
//         overflow: auto;
//         max-width: 100%
//     }
    
//     .gslide-inline .ginlined-content {
//         padding: 20px;
//         width: 100%
//     }
    
//     .ginlined-content {
//         overflow: auto;
//         display: block !important;
//         opacity: 1
//     }
    
//     .gslide-media {
//         display: block;
//         display: -webkit-inline-box;
//         display: -webkit-inline-flex;
//         display: inline-flex;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         width: auto
//     }
    
//     .zoomed .gslide-media {
//         box-shadow: none !important
//     }
    
//     .gslide-description {
//         position: relative
//     }
    
//     .gslide-description.description-bottom,
//     .gslide-description.description-top {
//         margin: 0 auto;
//         width: 100%
//     }
    
//     .gslide-description p {
//         margin-bottom: 12px
//     }
    
//     .gslide-description p::last-child {
//         margin-bottom: 0
//     }
    
//     .zoomed .gslide-description {
//         display: none
//     }
    
//     .glightbox-mobile .glightbox-container .gslide-description {
//         height: auto !important;
//         width: 100%;
//         background: 0 0;
//         position: absolute;
//         bottom: 15px;
//         max-width: 100vw !important;
//         -webkit-box-ordinal-group: 3 !important;
//         -webkit-order: 2 !important;
//         order: 2 !important;
//         max-height: 78vh;
//         overflow: auto !important;
//         background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, .75)));
//         background: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, .75));
//         background: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, .75));
//         -webkit-transition: opacity .3s linear;
//         transition: opacity .3s linear;
//         padding: 19px 11px 50px
//     }
    
//     .glightbox-mobile .glightbox-container .gslide-title {
//         color: #fff;
//         font-size: 1em
//     }
    
//     .glightbox-mobile .glightbox-container .gslide-desc {
//         color: #a1a1a1
//     }
    
//     .glightbox-mobile .glightbox-container .gslide-desc a {
//         color: #fff;
//         font-weight: 700
//     }
    
//     .glightbox-mobile .glightbox-container .gslide-desc * {
//         color: inherit
//     }
    
//     .glightbox-mobile .glightbox-container .gslide-desc string {
//         color: #fff
//     }
    
//     .glightbox-mobile .glightbox-container .gslide-desc .desc-more {
//         color: #fff;
//         opacity: .4
//     }
    
//     .gdesc-open .gslide-media {
//         -webkit-transition: opacity .5s;
//         transition: opacity .5s ease;
//         opacity: .4
//     }
    
//     .gdesc-open .gdesc-inner {
//         padding-bottom: 30px
//     }
    
//     .gdesc-closed .gslide-media {
//         -webkit-transition: opacity .5s;
//         transition: opacity .5s ease;
//         opacity: 1
//     }
    
//     .greset {
//         -webkit-transition: .3s;
//         transition: all .3s ease
//     }
    
//     .gabsolute {
//         position: absolute
//     }
    
//     .glightbox-desc {
//         display: none !important
//     }
    
//     .glightbox-open {
//         overflow: hidden
//     }
    
//     .gloader {
//         height: 25px;
//         width: 25px;
//         -webkit-animation: .8s linear infinite lightboxLoader;
//         animation: .8s linear infinite lightboxLoader;
//         border: 2px solid #fff;
//         border-right-color: transparent;
//         border-radius: 50%;
//         position: absolute;
//         display: block;
//         z-index: 9999;
//         left: 0;
//         right: 0;
//         margin: 0 auto;
//         top: 47%
//     }
    
//     .goverlay {
//         width: 100%;
//         height: 100%;
//         position: fixed;
//         top: 0;
//         left: 0;
//         will-change: opacity
//     }
    
//     .glightbox-mobile .goverlay,
//     .goverlay {
//         background: #000
//     }
    
//     .gclose,
//     .gnext,
//     .gprev {
//         background-repeat: no-repeat;
//         z-index: 99999;
//         cursor: pointer;
//         width: 26px;
//         height: 44px;
//         display: block;
//         background-position: 0 0;
//         border: none
//     }
    
//     .gclose svg,
//     .gnext svg,
//     .gprev svg {
//         display: block;
//         width: 100%;
//         height: auto
//     }
    
//     .gclose.disabled,
//     .gnext.disabled,
//     .gprev.disabled {
//         opacity: .1
//     }
    
//     .glightbox-closing .gclose,
//     .glightbox-closing .gnext,
//     .glightbox-closing .gprev {
//         opacity: 0 !important
//     }
    
//     @-webkit-keyframes lightboxLoader {
//         0% {
//             -webkit-transform: rotate(0);
//             transform: rotate(0)
//         }
//         to {
//             -webkit-transform: rotate(1turn);
//             transform: rotate(1turn)
//         }
//     }
    
//     @keyframes lightboxLoader {
//         0% {
//             -webkit-transform: rotate(0);
//             transform: rotate(0)
//         }
//         to {
//             -webkit-transform: rotate(1turn);
//             transform: rotate(1turn)
//         }
//     }
    
//     @media (min-width:769px) {
//         .glightbox-container .ginner-container {
//             width: auto;
//             height: auto;
//             -webkit-box-orient: horizontal;
//             -webkit-box-direction: normal;
//             -webkit-flex-direction: row;
//             flex-direction: row
//         }
//         .gslide-image img {
//             max-height: 97vh;
//             max-width: -webkit-calc(100% - 20px);
//             max-width: calc(100% - 20px);
//             max-width: 100%
//         }
//         .gslide-image img.zoomable {
//             cursor: -webkit-zoom-in;
//             cursor: zoom-in
//         }
//         .zoomed .gslide-image img.zoomable {
//             cursor: -webkit-grab;
//             cursor: grab
//         }
//         .gslide-inline {
//             max-height: 95vh
//         }
//         .glightbox-open {
//             height: auto
//         }
//         .goverlay {
//             background: rgba(0, 0, 0, .92)
//         }
//     }
    
//     @media screen and (max-height:420px) {
//         .goverlay {
//             background: #000
//         }
//     }
    
//     :root {
//         --mb-button-size: 60px;
//         --mb-bar-width: 0.6;
//         --mb-bar-height: 4px;
//         --mb-bar-spacing: 10px;
//         --mb-animate-timeout: .4s;
//         --mm-line-height: 20px;
//         --mm-listitem-size: 44px;
//         --mm-navbar-size: 44px;
//         --mm-offset-top: 0;
//         --mm-offset-right: 0;
//         --mm-offset-bottom: 0;
//         --mm-offset-left: 0;
//         --mm-color-border: rgba(0, 0, 0, .1);
//         --mm-color-button: rgba(0, 0, 0, .3);
//         --mm-color-text: rgba(0, 0, 0, .75);
//         --mm-color-text-dimmed: rgba(0, 0, 0, .3);
//         --mm-color-background: #f3f3f3;
//         --mm-color-background-highlight: rgba(0, 0, 0, .05);
//         --mm-color-background-emphasis: hsla(0, 0%, 100%, 0.4);
//         --mm-shadow: 0 0 10px rgba(0, 0, 0, .3)
//     }
    
//     .mburger {
//         background: 0 0;
//         border: none;
//         border-radius: 0;
//         color: inherit;
//         display: inline-block;
//         position: relative;
//         box-sizing: border-box;
//         height: var(--mb-button-size);
//         padding: 0 0 0 var(--mb-button-size);
//         margin: 0;
//         line-height: var(--mb-button-size);
//         vertical-align: middle;
//         -webkit-appearance: none;
//         -moz-appearance: none;
//         appearance: none;
//         outline: 0;
//         cursor: pointer
//     }
    
//     .mburger b {
//         display: block;
//         position: absolute;
//         left: -webkit-calc(var(--mb-button-size)*(.5 - var(--mb-bar-width)/ 2));
//         left: calc(var(--mb-button-size)*(.5 - var(--mb-bar-width)/ 2));
//         width: -webkit-calc(var(--mb-button-size)*var(--mb-bar-width));
//         width: calc(var(--mb-button-size)*var(--mb-bar-width));
//         height: var(--mb-bar-height);
//         border-radius: -webkit-calc(var(--mb-bar-height)/2);
//         border-radius: calc(var(--mb-bar-height)/2);
//         background: currentColor;
//         color: inherit;
//         opacity: 1
//     }
    
//     .mburger b:first-of-type {
//         bottom: -webkit-calc(50% + var(--mb-bar-spacing));
//         bottom: calc(50% + var(--mb-bar-spacing));
//         -webkit-transition: bottom .2s, width .2s, -webkit-transform .2s;
//         transition: bottom .2s ease, width .2s ease, -webkit-transform .2s ease;
//         transition: bottom .2s ease, transform .2s ease, width .2s ease;
//         transition: bottom .2s ease, transform .2s ease, width .2s ease, -webkit-transform .2s ease
//     }
    
//     .mburger b:nth-of-type(2) {
//         top: -webkit-calc(50% - var(--mb-bar-height)/ 2);
//         top: calc(50% - var(--mb-bar-height)/ 2);
//         -webkit-transition: opacity .2s;
//         transition: opacity .2s ease
//     }
    
//     .mburger b:nth-of-type(3) {
//         top: -webkit-calc(50% + var(--mb-bar-spacing));
//         top: calc(50% + var(--mb-bar-spacing));
//         -webkit-transition: top .2s, width .2s, -webkit-transform .2s;
//         transition: top .2s ease, width .2s ease, -webkit-transform .2s ease;
//         transition: top .2s ease, transform .2s ease, width .2s ease;
//         transition: top .2s ease, transform .2s ease, width .2s ease, -webkit-transform .2s ease
//     }
    
//     .mm-wrapper_opened .mburger b:first-of-type {
//         bottom: -webkit-calc(50% - var(--mb-bar-height)/ 2);
//         bottom: calc(50% - var(--mb-bar-height)/ 2);
//         -webkit-transform: rotate(45deg);
//         transform: rotate(45deg)
//     }
    
//     .mm-wrapper_opened .mburger b:nth-of-type(2) {
//         opacity: 0
//     }
    
//     .mm-wrapper_opened .mburger b:nth-of-type(3) {
//         top: -webkit-calc(50% - var(--mb-bar-height)/ 2);
//         top: calc(50% - var(--mb-bar-height)/ 2);
//         -webkit-transform: rotate(-45deg);
//         transform: rotate(-45deg)
//     }
    
//     .mburger--spin b:first-of-type {
//         -webkit-transition-delay: .2s, 0s;
//         transition-delay: .2s, 0s
//     }
    
//     .mburger--spin b:nth-of-type(2) {
//         -webkit-transition-duration: 0s;
//         transition-duration: 0s;
//         -webkit-transition-delay: .2s;
//         transition-delay: .2s
//     }
    
//     .mburger--spin b:nth-of-type(3) {
//         -webkit-transition-delay: .2s, 0s;
//         transition-delay: .2s, 0s
//     }
    
//     .mm-wrapper_opened .mburger--spin b:first-of-type {
//         -webkit-transform: rotate(135deg);
//         transform: rotate(135deg);
//         -webkit-transition-delay: -webkit-calc(var(--mb-animate-timeout)), -webkit-calc(var(--mb-animate-timeout) + .2s);
//         transition-delay: calc(var(--mb-animate-timeout)), calc(var(--mb-animate-timeout) + .2s)
//     }
    
//     .mm-wrapper_opened .mburger--spin b:nth-of-type(2) {
//         -webkit-transition-delay: -webkit-calc(var(--mb-animate-timeout));
//         transition-delay: calc(var(--mb-animate-timeout))
//     }
    
//     .mm-wrapper_opened .mburger--spin b:nth-of-type(3) {
//         -webkit-transform: rotate(225deg);
//         transform: rotate(225deg);
//         -webkit-transition-delay: -webkit-calc(var(--mb-animate-timeout)), -webkit-calc(var(--mb-animate-timeout) + .2s);
//         transition-delay: calc(var(--mb-animate-timeout)), calc(var(--mb-animate-timeout) + .2s)
//     }
    
//     .mm-hidden {
//         display: none !important
//     }
    
//     .mm-wrapper {
//         overflow-x: hidden;
//         position: relative
//     }
    
//     .mm-menu {
//         top: 0;
//         right: 0;
//         bottom: 0;
//         left: 0;
//         background: #f3f3f3;
//         border-color: rgba(0, 0, 0, .1);
//         color: rgba(0, 0, 0, .75);
//         line-height: 20px;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-orient: vertical;
//         -webkit-box-direction: normal;
//         -webkit-flex-direction: column;
//         flex-direction: column;
//         padding: 0;
//         margin: 0;
//         box-sizing: border-box;
//         position: absolute;
//         top: var(--mm-offset-top);
//         right: var(--mm-offset-right);
//         bottom: var(--mm-offset-bottom);
//         left: var(--mm-offset-left);
//         z-index: 0;
//         -ms-scroll-chaining: chained;
//         overscroll-behavior: auto;
//         background: var(--mm-color-background);
//         border-color: var(--mm-color-border);
//         color: var(--mm-color-text);
//         line-height: var(--mm-line-height);
//         -webkit-tap-highlight-color: var(--mm-color-background-emphasis);
//         -webkit-font-smoothing: antialiased;
//         -moz-osx-font-smoothing: grayscale
//     }
    
//     .mm-menu a,
//     .mm-menu a:active,
//     .mm-menu a:hover,
//     .mm-menu a:link,
//     .mm-menu a:visited {
//         text-decoration: none;
//         color: inherit
//     }
    
//     [dir=rtl] .mm-menu {
//         direction: rtl
//     }
    
//     .mm-panel {
//         background: #f3f3f3;
//         border-color: rgba(0, 0, 0, .1);
//         color: rgba(0, 0, 0, .75);
//         z-index: 0;
//         box-sizing: border-box;
//         width: 100%;
//         -webkit-overflow-scrolling: touch;
//         overflow: hidden;
//         overflow-y: auto;
//         color: var(--mm-color-text);
//         border-color: var(--mm-color-border);
//         background: var(--mm-color-background);
//         -webkit-transform: translate3d(100%, 0, 0);
//         transform: translate3d(100%, 0, 0);
//         -webkit-transition: -webkit-transform .4s;
//         transition: -webkit-transform .4s ease;
//         transition: transform .4s ease;
//         transition: transform .4s ease, -webkit-transform .4s ease
//     }
    
//     .mm-panel:after {
//         height: 44px;
//         content: "";
//         display: block;
//         height: var(--mm-listitem-size)
//     }
    
//     .mm-panel:not(.mm-hidden) {
//         display: block
//     }
    
//     .mm-panel_opened {
//         z-index: 1;
//         -webkit-transform: translateZ(0);
//         transform: translateZ(0)
//     }
    
//     .mm-panel_opened-parent {
//         -webkit-transform: translate3d(-30%, 0, 0);
//         transform: translate3d(-30%, 0, 0)
//     }
    
//     .mm-panel_highest {
//         z-index: 2
//     }
    
//     .mm-panel_noanimation {
//         -webkit-transition: none !important;
//         transition: none !important
//     }
    
//     .mm-panel_noanimation.mm-panel_opened-parent {
//         -webkit-transform: translateZ(0);
//         transform: translateZ(0)
//     }
    
//     .mm-panels>.mm-panel {
//         position: absolute;
//         left: 0;
//         right: 0;
//         top: 0;
//         bottom: 0
//     }
    
//     .mm-panel__content {
//         padding: 20px 20px 0
//     }
    
//     .mm-panels {
//         background: #f3f3f3;
//         border-color: rgba(0, 0, 0, .1);
//         color: rgba(0, 0, 0, .75);
//         position: relative;
//         height: 100%;
//         -webkit-box-flex: 1;
//         -webkit-flex-grow: 1;
//         flex-grow: 1;
//         overflow: hidden;
//         background: var(--mm-color-background);
//         border-color: var(--mm-color-border);
//         color: var(--mm-color-text)
//     }
    
//     [dir=rtl] .mm-panel:not(.mm-panel_opened) {
//         -webkit-transform: translate3d(-100%, 0, 0);
//         transform: translate3d(-100%, 0, 0)
//     }
    
//     [dir=rtl] .mm-panel.mm-panel_opened-parent {
//         -webkit-transform: translate3d(30%, 0, 0);
//         transform: translate3d(30%, 0, 0)
//     }
    
//     .mm-listitem_vertical>.mm-panel {
//         display: none;
//         width: 100%;
//         padding: 10px 0 10px 10px;
//         -webkit-transform: none !important;
//         transform: none !important
//     }
    
//     .mm-listitem_vertical>.mm-panel:after,
//     .mm-listitem_vertical>.mm-panel:before {
//         content: none;
//         display: none
//     }
    
//     .mm-listitem_opened>.mm-panel {
//         display: block
//     }
    
//     .mm-listitem_vertical>.mm-listitem__btn {
//         height: 44px;
//         height: var(--mm-listitem-size);
//         bottom: auto
//     }
    
//     .mm-listitem_vertical .mm-listitem:last-child:after {
//         border-color: transparent
//     }
    
//     .mm-listitem_opened>.mm-listitem__btn:after {
//         -webkit-transform: rotate(225deg);
//         transform: rotate(225deg);
//         right: 19px
//     }
    
//     .mm-btn {
//         -webkit-box-flex: 0;
//         -webkit-flex-grow: 0;
//         flex-grow: 0;
//         -webkit-flex-shrink: 0;
//         flex-shrink: 0;
//         position: relative;
//         box-sizing: border-box;
//         width: 50px;
//         padding: 0
//     }
    
//     .mm-btn:after,
//     .mm-btn:before {
//         border: 2px solid rgba(0, 0, 0, .3);
//         border: 2px solid var(--mm-color-button)
//     }
    
//     .mm-btn_next:after,
//     .mm-btn_prev:before {
//         content: "";
//         border-bottom: none;
//         border-right: none;
//         box-sizing: content-box;
//         display: block;
//         width: 8px;
//         height: 8px;
//         margin: auto;
//         position: absolute;
//         top: 0;
//         bottom: 0
//     }
    
//     .mm-btn_prev:before {
//         -webkit-transform: rotate(-45deg);
//         transform: rotate(-45deg);
//         left: 23px;
//         right: auto
//     }
    
//     .mm-btn_next:after {
//         -webkit-transform: rotate(135deg);
//         transform: rotate(135deg);
//         right: 23px;
//         left: auto
//     }
    
//     .mm-btn_close:after,
//     .mm-btn_close:before {
//         content: "";
//         box-sizing: content-box;
//         display: block;
//         width: 5px;
//         height: 5px;
//         margin: auto;
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         -webkit-transform: rotate(-45deg);
//         transform: rotate(-45deg)
//     }
    
//     .mm-btn_close:before {
//         border-right: none;
//         border-bottom: none;
//         right: 18px
//     }
    
//     .mm-btn_close:after {
//         border-left: none;
//         border-top: none;
//         right: 25px
//     }
    
//     [dir=rtl] .mm-btn_next:after {
//         -webkit-transform: rotate(-45deg);
//         transform: rotate(-45deg);
//         left: 23px;
//         right: auto
//     }
    
//     [dir=rtl] .mm-btn_prev:before {
//         -webkit-transform: rotate(135deg);
//         transform: rotate(135deg);
//         right: 23px;
//         left: auto
//     }
    
//     [dir=rtl] .mm-btn_close:after,
//     [dir=rtl] .mm-btn_close:before {
//         right: auto
//     }
    
//     [dir=rtl] .mm-btn_close:before {
//         left: 25px
//     }
    
//     [dir=rtl] .mm-btn_close:after {
//         left: 18px
//     }
    
//     .mm-navbar {
//         min-height: 44px;
//         border-bottom: 1px solid rgba(0, 0, 0, .1);
//         background: #f3f3f3;
//         color: rgba(0, 0, 0, .3);
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         min-height: var(--mm-navbar-size);
//         border-bottom: 1px solid var(--mm-color-border);
//         background: var(--mm-color-background);
//         color: var(--mm-color-text-dimmed);
//         text-align: center;
//         opacity: 1;
//         -webkit-transition: opacity .4s;
//         transition: opacity .4s ease
//     }
    
//     .mm-navbar>* {
//         min-height: 44px;
//         -webkit-box-flex: 1;
//         -webkit-flex-grow: 1;
//         flex-grow: 1;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-box-align: center;
//         -webkit-align-items: center;
//         align-items: center;
//         -webkit-box-pack: center;
//         -webkit-justify-content: center;
//         justify-content: center;
//         box-sizing: border-box
//     }
    
//     @supports ((position:-webkit-sticky) or (position:sticky)) {
//         .mm-navbar_sticky {
//             position: -webkit-sticky;
//             position: sticky;
//             top: 0;
//             z-index: 1
//         }
//     }
    
//     .mm-navbar__btn {
//         -webkit-box-flex: 0;
//         -webkit-flex-grow: 0;
//         flex-grow: 0
//     }
    
//     .mm-navbar__title {
//         -webkit-box-flex: 1;
//         -webkit-flex: 1 1 50%;
//         flex: 1 1 50%;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         padding-left: 20px;
//         padding-right: 20px;
//         overflow: hidden
//     }
    
//     .mm-navbar__title:not(:last-child) {
//         padding-right: 0
//     }
    
//     .mm-navbar__title>span {
//         text-overflow: ellipsis;
//         white-space: nowrap;
//         overflow: hidden
//     }
    
//     .mm-navbar__btn:not(.mm-hidden)+.mm-navbar__title {
//         padding-left: 0
//     }
    
//     .mm-navbar__btn:not(.mm-hidden)+.mm-navbar__title:last-child {
//         padding-right: 50px
//     }
    
//     [dir=rtl] .mm-navbar {
//         -webkit-box-orient: horizontal;
//         -webkit-box-direction: reverse;
//         -webkit-flex-direction: row-reverse;
//         flex-direction: row-reverse
//     }
    
//     .mm-listview {
//         display: block
//     }
    
//     .mm-listitem,
//     .mm-listview {
//         list-style: none;
//         padding: 0;
//         margin: 0
//     }
    
//     .mm-listitem {
//         color: rgba(0, 0, 0, .75);
//         border-color: rgba(0, 0, 0, .1);
//         color: var(--mm-color-text);
//         border-color: var(--mm-color-border);
//         display: block;
//         position: relative;
//         display: -webkit-box;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-flex-wrap: wrap;
//         flex-wrap: wrap
//     }
    
//     .mm-listitem:after {
//         content: "";
//         border-color: inherit;
//         border-bottom-width: 1px;
//         border-bottom-style: solid;
//         display: block;
//         position: absolute;
//         left: 20px;
//         right: 0;
//         bottom: 0
//     }
    
//     .mm-listitem a,
//     .mm-listitem a:hover {
//         text-decoration: none
//     }
    
//     .mm-listitem__btn,
//     .mm-listitem__text {
//         padding: 12px;
//         display: block;
//         padding: calc(var(--mm-listitem-size)/ 2 - var(--mm-line-height)/ 2);
//         padding-left: 0;
//         padding-right: 0;
//         color: inherit
//     }
    
//     .mm-listitem__text {
//         text-overflow: ellipsis;
//         white-space: nowrap;
//         overflow: hidden;
//         padding-left: 20px;
//         padding-right: 10px;
//         -webkit-box-flex: 1;
//         -webkit-flex-grow: 1;
//         flex-grow: 1;
//         -webkit-flex-basis: 10%;
//         flex-basis: 10%
//     }
    
//     .mm-listitem__btn {
//         background: rgba(3, 2, 1, 0);
//         border-color: inherit;
//         width: auto;
//         padding-right: 50px;
//         position: relative
//     }
    
//     .mm-listitem__btn:not(.mm-listitem__text) {
//         border-left-width: 1px;
//         border-left-style: solid
//     }
    
//     .mm-listitem_selected>.mm-listitem__text {
//         background: hsla(0, 0%, 100%, .4);
//         background: var(--mm-color-background-emphasis)
//     }
    
//     .mm-listitem_opened>.mm-listitem__btn,
//     .mm-listitem_opened>.mm-panel {
//         background: rgba(0, 0, 0, .05);
//         background: var(--mm-color-background-highlight)
//     }
    
//     [dir=rtl] .mm-listitem:after {
//         left: 0;
//         right: 20px
//     }
    
//     [dir=rtl] .mm-listitem__text {
//         padding-left: 10px;
//         padding-right: 20px
//     }
    
//     [dir=rtl] .mm-listitem__btn {
//         padding-left: 50px;
//         border-left-width: 0;
//         border-left-style: none
//     }
    
//     [dir=rtl] .mm-listitem__btn:not(.mm-listitem__text) {
//         padding-right: 0;
//         border-right-width: 1px;
//         border-right-style: solid
//     }
    
//     .mm-page {
//         box-sizing: border-box;
//         position: relative
//     }
    
//     .mm-slideout {
//         -webkit-transition: -webkit-transform .4s;
//         transition: -webkit-transform .4s ease;
//         transition: transform .4s ease;
//         transition: transform .4s ease, -webkit-transform .4s ease;
//         z-index: 1
//     }
    
//     .mm-wrapper_opened {
//         overflow-x: hidden;
//         position: relative
//     }
    
//     .mm-wrapper_opened .mm-page {
//         min-height: 100vh
//     }
    
//     .mm-wrapper_background .mm-page {
//         background: inherit
//     }
    
//     .mm-menu_offcanvas {
//         position: fixed;
//         right: auto;
//         z-index: 0;
//         width: 80%;
//         min-width: 240px;
//         max-width: 440px
//     }
    
//     .mm-menu_offcanvas:not(.mm-menu_opened) {
//         display: none
//     }
    
//     .mm-wrapper_opening .mm-menu_offcanvas.mm-menu_opened~.mm-slideout {
//         -webkit-transform: translate3d(80vw, 0, 0);
//         transform: translate3d(80vw, 0, 0)
//     }
    
//     @media (max-width:300px) {
//         .mm-wrapper_opening .mm-menu_offcanvas.mm-menu_opened~.mm-slideout {
//             -webkit-transform: translate3d(240px, 0, 0);
//             transform: translate3d(240px, 0, 0)
//         }
//     }
    
//     @media (min-width:550px) {
//         .mm-wrapper_opening .mm-menu_offcanvas.mm-menu_opened~.mm-slideout {
//             -webkit-transform: translate3d(440px, 0, 0);
//             transform: translate3d(440px, 0, 0)
//         }
//     }
    
//     .mm-wrapper__blocker {
//         background: rgba(3, 2, 1, 0);
//         overflow: hidden;
//         display: none;
//         position: fixed;
//         top: 0;
//         right: 0;
//         bottom: 0;
//         left: 0;
//         z-index: 2
//     }
    
//     .mm-wrapper_blocking,
//     .mm-wrapper_blocking body {
//         overflow: hidden
//     }
    
//     .mm-wrapper_blocking .mm-wrapper__blocker {
//         display: block
//     }
    
//     .mm-sronly {
//         border: 0 !important;
//         clip: rect(1px, 1px, 1px, 1px) !important;
//         -webkit-clip-path: inset(50%) !important;
//         clip-path: inset(50%) !important;
//         white-space: nowrap !important;
//         width: 1px !important;
//         min-width: 1px !important;
//         height: 1px !important;
//         min-height: 1px !important;
//         padding: 0 !important;
//         overflow: hidden !important;
//         position: absolute !important
//     }
    
//     .mm-menu_fx-menu-slide {
//         -webkit-transition: -webkit-transform .4s;
//         transition: -webkit-transform .4s ease;
//         transition: transform .4s ease;
//         transition: transform .4s ease, -webkit-transform .4s ease
//     }
    
//     .mm-wrapper_opened .mm-menu_fx-menu-slide {
//         -webkit-transform: translate3d(-30%, 0, 0);
//         transform: translate3d(-30%, 0, 0)
//     }
    
//     .mm-wrapper_opening .mm-menu_fx-menu-slide {
//         -webkit-transform: translateZ(0);
//         transform: translateZ(0)
//     }
    
//     .mm-wrapper_opened .mm-menu_fx-menu-slide.mm-menu_position-right {
//         -webkit-transform: translate3d(30%, 0, 0);
//         transform: translate3d(30%, 0, 0)
//     }
    
//     .mm-wrapper_opening .mm-menu_fx-menu-slide.mm-menu_position-right {
//         -webkit-transform: translateZ(0);
//         transform: translateZ(0)
//     }
    
//     .mm-menu_position-right {
//         left: auto;
//         right: 0
//     }
    
//     .mm-wrapper_opening .mm-menu_position-right.mm-menu_opened~.mm-slideout {
//         -webkit-transform: translate3d(-80vw, 0, 0);
//         transform: translate3d(-80vw, 0, 0)
//     }
    
//     @media (max-width:300px) {
//         .mm-wrapper_opening .mm-menu_position-right.mm-menu_opened~.mm-slideout {
//             -webkit-transform: translate3d(-240px, 0, 0);
//             transform: translate3d(-240px, 0, 0)
//         }
//     }
    
//     @media (min-width:550px) {
//         .mm-wrapper_opening .mm-menu_position-right.mm-menu_opened~.mm-slideout {
//             -webkit-transform: translate3d(-440px, 0, 0);
//             transform: translate3d(-440px, 0, 0)
//         }
//     }
    
//     .tns-outer {
//         padding: 0 !important
//     }
    
//     .tns-outer [hidden] {
//         display: none !important
//     }
    
//     .tns-outer [aria-controls],
//     .tns-outer [data-action] {
//         cursor: pointer
//     }
    
//     .tns-slider {
//         -webkit-transition: none;
//         transition: all 0s
//     }
    
//     .tns-slider>.tns-item {
//         box-sizing: border-box
//     }
    
//     .tns-no-calc {
//         position: relative;
//         left: 0
//     }
    
//     .tns-autowidth {
//         display: inline-block
//     }
    
//     .tns-lazy-img {
//         -webkit-transition: opacity .6s;
//         transition: opacity .6s;
//         opacity: .6
//     }
    
//     .tns-lazy-img.tns-complete {
//         opacity: 1
//     }
    
//     .tns-ah {
//         -webkit-transition: height;
//         transition: height 0s
//     }
    
//     .tns-ovh {
//         overflow: hidden
//     }
    
//     .tns-visually-hidden {
//         position: absolute;
//         left: -10000em
//     }
    
//     .tns-transparent {
//         opacity: 0;
//         visibility: hidden
//     }
    
//     .tns-fadeIn {
//         opacity: 1;
//         z-index: 0
//     }
    
//     .tns-fadeOut,
//     .tns-normal {
//         opacity: 0;
//         z-index: -1
//     }
    
//     .tns-vpfix {
//         white-space: nowrap
//     }
    
//     .tns-vpfix>div,
//     .tns-vpfix>li {
//         display: inline-block
//     }
    
//     .tns-t-subp2 {
//         margin: 0 auto;
//         width: 310px;
//         position: relative;
//         height: 10px;
//         overflow: hidden
//     }
    
//     .tns-t-ct {
//         width: 2333.33333%;
//         position: absolute;
//         right: 0
//     }
    
//     .tns-t-ct:after {
//         content: "";
//         display: table;
//         clear: both
//     }
    
//     .tns-t-ct>div {
//         width: 1.42857%;
//         height: 10px;
//         float: left
//     }
    
//     .chosen-container {
//         position: relative;
//         display: inline-block;
//         vertical-align: middle;
//         font-size: 13px;
//         -webkit-user-select: none;
//         -moz-user-select: none;
//         -ms-user-select: none;
//         user-select: none
//     }
    
//     .chosen-container * {
//         box-sizing: border-box
//     }
    
//     .chosen-container .chosen-drop {
//         position: absolute;
//         top: 100%;
//         z-index: 1010;
//         width: 100%;
//         border: 1px solid #aaa;
//         border-top: 0;
//         background: #fff;
//         box-shadow: 0 4px 5px rgba(0, 0, 0, .15);
//         clip: rect(0, 0, 0, 0);
//         -webkit-clip-path: inset(100% 100%);
//         clip-path: inset(100% 100%)
//     }
    
//     .chosen-container.chosen-with-drop .chosen-drop {
//         clip: auto;
//         -webkit-clip-path: none;
//         clip-path: none
//     }
    
//     .chosen-container a {
//         cursor: pointer
//     }
    
//     .chosen-container .chosen-single .group-name,
//     .chosen-container .search-choice .group-name {
//         margin-right: 4px;
//         overflow: hidden;
//         white-space: nowrap;
//         text-overflow: ellipsis;
//         font-weight: 400;
//         color: #999
//     }
    
//     .chosen-container .chosen-single .group-name:after,
//     .chosen-container .search-choice .group-name:after {
//         content: ":";
//         padding-left: 2px;
//         vertical-align: top
//     }
    
//     .chosen-container .chosen-results {
//         color: #444;
//         position: relative;
//         overflow-x: hidden;
//         overflow-y: auto;
//         margin: 0 4px 4px 0;
//         padding: 0 0 0 4px;
//         max-height: 240px;
//         -webkit-overflow-scrolling: touch
//     }
    
//     .chosen-container .chosen-results li {
//         display: none;
//         margin: 0;
//         padding: 5px 6px;
//         list-style: none;
//         line-height: 15px;
//         word-wrap: break-word;
//         -webkit-touch-callout: none
//     }
    
//     .chosen-container .chosen-results li.active-result {
//         display: list-item;
//         cursor: pointer
//     }
    
//     .chosen-container .chosen-results li.disabled-result {
//         display: list-item;
//         color: #ccc;
//         cursor: default
//     }
    
//     .chosen-container .chosen-results li.highlighted {
//         background-color: #3875d7;
//         background-image: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #3875d7), color-stop(90%, #2a62bc));
//         background-image: -webkit-linear-gradient(#3875d7 20%, #2a62bc 90%);
//         background-image: linear-gradient(#3875d7 20%, #2a62bc 90%);
//         color: #fff
//     }
    
//     .chosen-container .chosen-results li.no-results {
//         color: #777;
//         display: list-item;
//         background: #f4f4f4
//     }
    
//     .chosen-container .chosen-results li.group-result {
//         display: list-item;
//         font-weight: 700;
//         cursor: default
//     }
    
//     .chosen-container .chosen-results li.group-option {
//         padding-left: 15px
//     }
    
//     .chosen-container .chosen-results li em {
//         font-style: normal;
//         text-decoration: underline
//     }
    
//     .chosen-container-active .chosen-single {
//         border: 1px solid #5897fb;
//         box-shadow: 0 0 5px rgba(0, 0, 0, .3)
//     }
    
//     .chosen-container-active.chosen-with-drop .chosen-single {
//         border: 1px solid #aaa;
//         border-bottom-right-radius: 0;
//         border-bottom-left-radius: 0;
//         background-image: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #eee), color-stop(80%, #fff));
//         background-image: -webkit-linear-gradient(#eee 20%, #fff 80%);
//         background-image: linear-gradient(#eee 20%, #fff 80%);
//         box-shadow: inset 0 1px 0 #fff
//     }
    
//     .chosen-container-active.chosen-with-drop .chosen-single div {
//         border-left: none;
//         background: 0 0
//     }
    
//     .chosen-container-active.chosen-with-drop .chosen-single div b {
//         background-position: -18px 2px
//     }
    
//     .chosen-container-active .chosen-choices {
//         border: 1px solid #5897fb;
//         box-shadow: 0 0 5px rgba(0, 0, 0, .3)
//     }
    
//     .chosen-container-active .chosen-choices li.search-field input[type=text] {
//         color: #222 !important
//     }
    
//     .chosen-disabled {
//         opacity: .5 !important;
//         cursor: default
//     }
    
//     .chosen-disabled .chosen-choices .search-choice .search-choice-close,
//     .chosen-disabled .chosen-single {
//         cursor: default
//     }
    
//     .chosen-rtl {
//         text-align: right
//     }
    
//     .chosen-rtl .chosen-single {
//         overflow: visible;
//         padding: 0 8px 0 0
//     }
    
//     .chosen-rtl .chosen-single span {
//         margin-right: 0;
//         margin-left: 26px;
//         direction: rtl
//     }
    
//     .chosen-rtl .chosen-single-with-deselect span {
//         margin-left: 38px
//     }
    
//     .chosen-rtl .chosen-single div {
//         right: auto;
//         left: 3px
//     }
    
//     .chosen-rtl .chosen-single abbr {
//         right: auto;
//         left: 26px
//     }
    
//     .chosen-rtl .chosen-choices li {
//         float: right
//     }
    
//     .chosen-rtl .chosen-choices li.search-field input[type=text] {
//         direction: rtl
//     }
    
//     .chosen-rtl .chosen-choices li.search-choice {
//         margin: 3px 5px 3px 0;
//         padding: 3px 5px 3px 19px
//     }
    
//     .chosen-rtl .chosen-choices li.search-choice .search-choice-close {
//         right: auto;
//         left: 4px
//     }
    
//     .chosen-rtl .chosen-results li.group-option {
//         padding-right: 15px;
//         padding-left: 0
//     }
    
//     .chosen-rtl.chosen-container-active.chosen-with-drop .chosen-single div {
//         border-right: none
//     }
    
//     .chosen-rtl .chosen-search input[type=text] {
//         padding: 4px 5px 4px 20px;
//         direction: rtl
//     }
    
//     @media only screen and (-webkit-min-device-pixel-ratio:1.5),
//     only screen and (min-resolution:1.5dppx),
//     only screen and (min-resolution:144dpi) {
//         .chosen-rtl .chosen-search input[type=text] {
//             background-size: 52px 37px !important;
//             background-repeat: no-repeat !important
//         }
//     }
    
//     #cookie-notice,
//     #cookie-notice * {
//         -webkit-box-sizing: border-box;
//         -moz-box-sizing: border-box;
//         box-sizing: border-box
//     }
    
//     #cookie-notice.cn-animated {
//         -webkit-animation-duration: .5s !important;
//         animation-duration: .5s !important;
//         -webkit-animation-fill-mode: both;
//         animation-fill-mode: both
//     }
    
//     #cookie-notice.cn-animated.cn-effect-none {
//         -webkit-animation-duration: 1ms !important;
//         animation-duration: 1ms !important
//     }
    
//     #cookie-notice .cookie-notice-container {
//         padding: 0;
//         display: block
//     }
    
//     .cn-position-bottom {
//         bottom: 0
//     }
    
//     .cookie-notice-container {
//         padding: 15px 30px;
//         text-align: center;
//         width: 100%;
//         z-index: 2
//     }
    
//     .cn-close-icon {
//         position: absolute;
//         right: 15px;
//         top: 50%;
//         margin-top: -10px;
//         width: 15px;
//         height: 15px;
//         opacity: .5;
//         padding: 10px;
//         outline: 0;
//         cursor: pointer
//     }
    
//     .cn-close-icon:hover {
//         opacity: 1
//     }
    
//     .cn-close-icon:after,
//     .cn-close-icon:before {
//         position: absolute;
//         content: ' ';
//         height: 15px;
//         width: 2px;
//         top: 3px;
//         background-color: grey
//     }
    
//     .cn-close-icon:before {
//         transform: rotate(45deg)
//     }
    
//     .cn-close-icon:after {
//         transform: rotate(-45deg)
//     }
    
//     #cookie-notice .cn-revoke-cookie {
//         margin: 0
//     }
    
//     #cookie-notice .cn-button {
//         margin: 0 0 0 10px;
//         display: inline-block
//     }
    
//     #cookie-notice .cn-button:not(.cn-button-custom) {
//         font-family: -apple-system, BlinkMacSystemFont, Arial, Roboto, "Helvetica Neue", sans-serif;
//         font-weight: 400;
//         font-size: 13px;
//         letter-spacing: .25px;
//         line-height: 20px;
//         margin: 0 0 0 10px;
//         text-align: center;
//         text-transform: none;
//         display: inline-block;
//         cursor: pointer;
//         touch-action: manipulation;
//         white-space: nowrap;
//         outline: 0;
//         box-shadow: none;
//         text-shadow: none;
//         border: none;
//         -webkit-border-radius: 3px;
//         -moz-border-radius: 3px;
//         border-radius: 3px;
//         text-decoration: none;
//         padding: 8.5px 10px;
//         line-height: 1;
//         color: inherit
//     }
    
//     .cn-text-container {
//         margin: 0 0 6px
//     }
    
//     .cn-buttons-container,
//     .cn-text-container {
//         display: inline-block
//     }
    
//     #cookie-notice.cookie-notice-visible.cn-effect-none,
//     #cookie-notice.cookie-revoke-visible.cn-effect-none {
//         -webkit-animation-name: fadeIn;
//         animation-name: fadeIn
//     }
    
//     #cookie-notice.cn-effect-none {
//         -webkit-animation-name: fadeOut;
//         animation-name: fadeOut
//     }
    
//     @-webkit-keyframes fadeIn {
//         from {
//             opacity: 0
//         }
//         to {
//             opacity: 1
//         }
//     }
    
//     @keyframes fadeIn {
//         from {
//             opacity: 0
//         }
//         to {
//             opacity: 1
//         }
//     }
    
//     @-webkit-keyframes fadeOut {
//         from {
//             opacity: 1
//         }
//         to {
//             opacity: 0
//         }
//     }
    
//     @keyframes fadeOut {
//         from {
//             opacity: 1
//         }
//         to {
//             opacity: 0
//         }
//     }
    
//     @media all and (max-width:900px) {
//         .cookie-notice-container #cn-notice-buttons,
//         .cookie-notice-container #cn-notice-text {
//             display: block
//         }
//         #cookie-notice .cn-button {
//             margin: 0 5px 5px
//         }
//     }
    
//     @media all and (max-width:480px) {
//         .cookie-notice-container {
//             padding: 15px 25px
//         }
//     }
    
//     .home .acf-block-logos__logo {
//         max-height: initial
//     }
    
//     .gform_fields {
//         list-style-type: none
//     }
    
//     .newsletter__form-wrapper .gfield_label {
//         display: none
//     }
    
//     @media (max-width:640px) {
//         .gform_wrapper.newsletter_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input) {
//             border: .25rem solid #fff
//         }
//         .gform_wrapper.newsletter_wrapper form {
//             flex-direction: column
//         }
//         .gform_wrapper.newsletter_wrapper form div.gform_body {
//             width: 100%;
//             margin-bottom: 10px
//         }
//         .gform_wrapper.newsletter_wrapper form div.gform_footer {
//             margin: 0 auto
//         }
//     }
    
//     .entry-content>ul:not(.wp-block-gallery) li:first-child {
//         margin-top: .5em
//     }
    
//     @media (min-width:576px) {
//         .entry-content>ul:not(.wp-block-gallery) li:first-child {
//             margin-top: .625em
//         }
//     }
    
//     @media (min-width:768px) {
//         .entry-content>ul:not(.wp-block-gallery) li:first-child {
//             margin-top: .75em
//         }
//     }
    
//     @media (min-width:992px) {
//         .entry-content>ul:not(.wp-block-gallery) li:first-child {
//             margin-top: .875em
//         }
//     }
    
//     div#subpanel {
//         max-height: none;
//         padding: 0;
//         color: #fff !important
//     }
    
//     .gform_anchor:focus-visible {
//         outline: 0
//     }
    
//     .field_sublabel_below .ginput_complex {
//         align-items: flex-start
//     }
    
//     .acf-block-logos__border {
//         border: .25rem solid transparent
//     }
    
//     .acf-block-logos__border--white {
//         border-color: #fff
//     }
    
//     .acf-block-logos__logo--with-styles img {
//         width: var(--image-mobile-width)
//     }
    
//     .acf-block-call-to-action__image-wrapper {
//         max-width: 16rem
//     }
    
//     .acf-block-call-to-action__title {
//         line-height: 1.14
//     }
    
//     @media (min-width:992px) {
//         .acf-block-logos__logo--with-styles img {
//             width: var(--image-width)
//         }
//         .acf-block-call-to-action__image-wrapper {
//             max-width: 100% !important
//         }
//         .acf-block-call-to-action__content--small {
//             max-width: 29rem
//         }
//         .acf-block-call-to-action__text {
//             max-width: 28rem
//         }
//     }
    
//     .acf-block-call-to-action__text--gray strong {
//         color: #fff
//     }
    
//     .acf-block-call-to-action p {
//         margin-top: 1rem
//     }
    
//     .acf-block-call-to-action .crunch-button {
//         min-width: 13.625rem;
//         max-width: 100%;
//         margin-top: 4rem !important
//     }
    
//     .acf-block-call-to-action-small__image-wrapper {
//         max-width: 16rem
//     }
    
//     @media (max-width:991.98px) {
//         .acf-block-call-to-action-small__image-wrapper,
//         .acf-block-call-to-action__image-wrapper {
//             width: 80% !important
//         }
//         .acf-block-testimonials__content br {
//             display: none
//         }
//     }
    
//     .acf-block-call-to-action-small__text--gray strong {
//         color: #fff
//     }
    
//     .acf-block-call-to-action-small p {
//         margin-top: 1rem
//     }
    
//     .acf-block-testimonials--white .acf-block-testimonials__title:before {
//     }
    
//     .acf-block-testimonials--white .acf-block-testimonials__testimonial {
//         border-color: #141313
//     }
    
//     .acf-block-testimonials--white .tns-controls button {
//     }
    
//     @media (min-width:768px) {
//         .acf-block-testimonials__wrapper {
//             width: 720px;
//             margin: 0 auto
//         }
//     }
    
//     @media (min-width:992px) {
//         .acf-block-call-to-action-small__image-wrapper {
//             max-width: 100% !important
//         }
//         .acf-block-testimonials__wrapper {
//             width: 100%;
//             margin-left: -.5rem;
//             padding-left: calc(50vw - 480px - 1.625rem)
//         }
//     }
    
//     .acf-block-testimonials__title {
//         font-size: 1.4375rem
//     }
    
//     @media (min-width:576px) {
//         .acf-block-testimonials__title {
//             font-size: 1.53125rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .acf-block-testimonials__title {
//             font-size: 1.625rem
//         }
//         .acf-block-testimonials__testimonial:not(:last-child) {
//             border-right: .25rem solid
//         }
//     }
    
//     @media (min-width:992px) {
//         .acf-block-testimonials__title {
//             font-size: 1.71875rem
//         }
//     }
    
//     .acf-block-testimonials__title:before {
//         content: "";
//         position: relative;
//         top: -.5rem;
//         display: inline-block;
//         width: 1.1875rem;
//         height: .5625rem;
//         margin-right: .5rem;
//         background-position: 0;
//         background-size: 100%;
//         background-repeat: no-repeat
//     }
    
//     .acf-block-testimonials__testimonial {
//         cursor: pointer
//     }
    
//     @media (min-width:992px) {
//         .acf-block-testimonials__title:before {
//             top: -.25rem;
//             width: 1.5rem;
//             height: .6875rem;
//             margin-right: .625rem
//         }
//         .acf-block-testimonials__testimonial {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 -webkit-calc(480px + 0.125rem);
//             flex: 0 0 calc(480px + 0.125rem);
//             max-width: -webkit-calc(480px + .125rem);
//             max-width: calc(480px + .125rem)
//         }
//     }
    
//     @media (min-width:1200px) {
//         .entry-content>ul:not(.wp-block-gallery) li:first-child {
//             margin-top: 1em
//         }
//         .acf-block-testimonials__wrapper {
//             padding-left: calc(50vw - 570px - 1rem)
//         }
//         .acf-block-testimonials__title {
//             font-size: 1.8125rem
//         }
//         .acf-block-testimonials__testimonial {
//             -webkit-box-flex: 0;
//             -webkit-flex: 0 0 -webkit-calc(570px + 0.125rem);
//             flex: 0 0 calc(570px + 0.125rem);
//             max-width: -webkit-calc(570px + .125rem);
//             max-width: calc(570px + .125rem)
//         }
//     }
    
//     .acf-block-testimonials__testimonial .crunch-button__with-arrow--small:after {
//         top: auto;
//         bottom: .25rem
//     }
    
//     .acf-block-testimonials__logo {
//         max-width: 10rem;
//         height: 4.875rem
//     }
    
//     .acf-block-testimonials__person {
//         width: 4rem;
//         height: 4rem
//     }
    
//     .acf-block-testimonials .tns-controls {
//         position: relative;
//         top: -1.5rem;
//         text-align: center
//     }
    
//     @media (min-width:992px) {
//         .acf-block-testimonials__logo {
//             max-width: 100%
//         }
//         .acf-block-testimonials .tns-controls {
//             top: -8rem;
//             width: -webkit-calc(960px + .25rem);
//             width: calc(960px + .25rem);
//             text-align: right
//         }
//     }
    
//     .acf-block-testimonials .tns-controls button {
//         position: relative;
//         width: 3.3125rem;
//         height: 1.5625rem;
//         border: none;
//         background-color: transparent;
//         background-position: 50%;
//         background-size: 100%;
//         outline: 0;
//         -webkit-transition: background-image .2s ease-in-out, opacity .2s ease-in-out;
//         transition: background-image .2s ease-in-out, opacity .2s ease-in-out
//     }
    
//     .acf-block-testimonials .tns-controls button:hover {
//         opacity: .8
//     }
    
//     .acf-block-testimonials .tns-controls button:first-child {
//         margin-right: 1.5rem;
//         -webkit-transform: rotate(180deg);
//         transform: rotate(180deg)
//     }
    
//     .acf-block-testimonials .tns-controls button:disabled {
//     }
    
//     .acf-block-testimonials .tns-controls button:disabled:hover {
//         opacity: 1
//     }
    
//     .acf-block-partners__logo-wrapper {
//         padding-bottom: 4rem
//     }
    
//     @media (min-width:576px) {
//         .acf-block-partners__logo-wrapper {
//             padding-bottom: 4.75rem
//         }
//     }
    
//     @media (min-width:768px) {
//         .acf-block-partners__logo-wrapper {
//             padding-bottom: 5.5rem
//         }
//         .acf-block-services-list__item {
//             margin-right: 3.375rem
//         }
//     }
    
//     @media (min-width:992px) {
//         .acf-block-partners__logo-wrapper {
//             padding-bottom: 6.25rem
//         }
//     }
    
//     .acf-block-partners__logo--with-styles img {
//         width: var(--image-mobile-width)
//     }
    
//     .acf-block-services-list--black-background .acf-block-services-list__item:before {
//         border-color: #fff
//     }
    
//     .acf-block-services-list--black-background .acf-block-services-list__item:after {
//         background-color: #fff
//     }
    
//     .acf-block-services-list--black-background .acf-block-services-list__circle {
//         background-color: #0f35f7
//     }
    
//     @media (min-width:992px) {
//         .acf-block-partners__logo--with-styles img {
//             width: var(--image-width)
//         }
//         .acf-block-services-list__item {
//             min-height: 16.625rem;
//             margin-right: 5.0625rem
//         }
//     }
    
//     @media (min-width:1200px) {
//         .acf-block-testimonials .tns-controls {
//             width: -webkit-calc(1140px + .25rem);
//             width: calc(1140px + .25rem)
//         }
//         .acf-block-partners__logo-wrapper {
//             padding-bottom: 7rem
//         }
//         .acf-block-services-list__item {
//             margin-right: 6.75rem
//         }
//     }
    
//     .acf-block-services-list__item:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 1rem;
//         height: 1rem;
//         border: .25rem solid transparent;
//         border-radius: 50%
//     }
    
//     .acf-block-services-list__item:after {
//         content: "";
//         position: absolute;
//         top: .375rem;
//         left: 1.5rem;
//         width: -webkit-calc(100% - 1.5rem);
//         width: calc(100% - 1.5rem);
//         height: .25rem
//     }
    
//     @media (min-width:1200px) {
//         .acf-block-services-list__item:after {
//             width: 26.25rem
//         }
//     }
    
//     .acf-block-services-list__item:hover .acf-block-services-list__circle {
//         opacity: 1
//     }
    
//     .acf-block-services-list__item-title {
//         font-weight: 600
//     }
    
//     @media (min-width:992px) {
//         .acf-block-services-list__item-title {
//             font-weight: 700
//         }
//     }
    
//     .acf-block-services-list__circle {
//         right: 0;
//         left: 0;
//         width: 12.5rem;
//         height: 12.5rem;
//         border-radius: 50%;
//         opacity: 0;
//         -webkit-transition: opacity .2s ease-in-out;
//         transition: opacity .2s ease-in-out
//     }
    
//     .acf-block-services-list__circle--small {
//         top: 2rem
//     }
    
//     .acf-block-call-to-action-with-background--with-styles {
//         background-color: var(--background-color)
//     }
    
//     @media (max-width:991.98px) {
//         .acf-block-testimonials__content strong {
//             font-weight: 400
//         }
//         .acf-block-call-to-action-with-background br {
//             display: none
//         }
//     }
    
//     .gform_legacy_markup_wrapper {
//         margin-bottom: 16px;
//         margin-top: 16px;
//         max-width: 100%
//     }
    
//     .gform_legacy_markup_wrapper form {
//         margin: 0 auto;
//         max-width: 100%;
//         text-align: left
//     }
    
//     .gform_legacy_markup_wrapper *,
//     .gform_legacy_markup_wrapper :after,
//     .gform_legacy_markup_wrapper :before {
//         box-sizing: border-box !important
//     }
    
//     .gform_legacy_markup_wrapper h1,
//     .gform_legacy_markup_wrapper h2,
//     .gform_legacy_markup_wrapper h3 {
//         background: 0 0;
//         border: none;
//         font-weight: 400
//     }
    
//     .gform_legacy_markup_wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]) {
//         font-family: inherit;
//         font-size: inherit;
//         letter-spacing: normal;
//         padding: 5px 4px
//     }
    
//     .gform_legacy_markup_wrapper input[type=image] {
//         border: none !important;
//         padding: 0 !important;
//         width: auto !important
//     }
    
//     .gform_legacy_markup_wrapper textarea {
//         font-family: inherit;
//         font-size: inherit;
//         letter-spacing: normal;
//         line-height: 1.5;
//         padding: 6px 8px;
//         resize: none
//     }
    
//     .gform_legacy_markup_wrapper select {
//         line-height: 1.5;
//         font-family: inherit;
//         font-size: inherit;
//         letter-spacing: normal
//     }
    
//     .gform_legacy_markup_wrapper ul.gform_fields {
//         display: block;
//         list-style-type: none;
//         margin: 0 !important
//     }
    
//     .gform_legacy_markup_wrapper ul {
//         text-indent: 0
//     }
    
//     .gform_legacy_markup_wrapper form li,
//     .gform_legacy_markup_wrapper li {
//         list-style-image: none !important;
//         list-style-type: none !important;
//         list-style: none !important;
//         margin-left: 0 !important;
//         overflow: visible
//     }
    
//     .gform_legacy_markup_wrapper ul li.gfield {
//         clear: both
//     }
    
//     .gform_legacy_markup_wrapper ul.gfield_checkbox li,
//     .gform_legacy_markup_wrapper ul.gfield_radio li {
//         overflow: hidden
//     }
    
//     .gform_legacy_markup_wrapper ul li:after,
//     .gform_legacy_markup_wrapper ul li:before,
//     .gform_legacy_markup_wrapper ul.gform_fields {
//         margin: 0;
//         overflow: visible;
//         padding: 0
//     }
    
//     .gform_legacy_markup_wrapper select option {
//         display: block;
//         padding: 2px
//     }
    
//     .gform_legacy_markup_wrapper .inline {
//         display: inline !important
//     }
    
//     .gform_legacy_markup_wrapper .ginput_complex.ginput_container {
//         overflow: visible;
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper label.gfield_label,
//     .gform_legacy_markup_wrapper legend.gfield_label {
//         font-size: inherit;
//         font-weight: 700
//     }
    
//     .gform_legacy_markup_wrapper .top_label .gfield_label,
//     .gform_legacy_markup_wrapper legend.gfield_label {
//         clear: both;
//         display: -moz-inline-stack;
//         display: inline-block;
//         line-height: 1.3
//     }
    
//     .gform_legacy_markup_wrapper .ginput_complex input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=image]):not([type=file]),
//     .gform_legacy_markup_wrapper .ginput_complex select {
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper .field_sublabel_below .ginput_complex.ginput_container label {
//         display: block;
//         font-size: .813em;
//         letter-spacing: .5pt;
//         white-space: nowrap;
//         margin: 1px 0 9px 1px
//     }
    
//     .gform_legacy_markup_wrapper ul.gfield_checkbox li label,
//     .gform_legacy_markup_wrapper ul.gfield_radio li label {
//         cursor: pointer;
//         display: -moz-inline-stack;
//         display: inline-block;
//         letter-spacing: inherit;
//         vertical-align: middle
//     }
    
//     body .gform_legacy_markup_wrapper .top_label div.ginput_container {
//         margin-top: 8px
//     }
    
//     .gform_legacy_markup_wrapper .hidden_label .gfield_label {
//         clip: rect(1px, 1px, 1px, 1px);
//         height: 1px;
//         overflow: hidden;
//         position: absolute !important;
//         width: 1px
//     }
    
//     .gform_legacy_markup_wrapper li.hidden_label input {
//         margin-top: 12px
//     }
    
//     .gform_legacy_markup_wrapper .screen-reader-text {
//         clip: rect(1px, 1px, 1px, 1px);
//         word-wrap: normal !important;
//         border: 0;
//         -webkit-clip-path: inset(50%);
//         clip-path: inset(50%);
//         height: 1px;
//         margin: -1px;
//         overflow: hidden;
//         padding: 0;
//         position: absolute;
//         width: 1px
//     }
    
//     .gform_legacy_markup_wrapper input.medium,
//     .gform_legacy_markup_wrapper select.medium {
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper textarea.medium {
//         height: 120px;
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper ul.gfield_checkbox,
//     .gform_legacy_markup_wrapper ul.gfield_radio {
//         margin: 6px 0;
//         padding: 0
//     }
    
//     .gform_legacy_markup_wrapper .gfield_checkbox li label,
//     .gform_legacy_markup_wrapper .gfield_radio li label {
//         display: -moz-inline-stack;
//         display: inline-block;
//         font-size: .875em;
//         line-height: 1.5;
//         max-width: 85%;
//         padding: 0;
//         vertical-align: middle;
//         white-space: normal;
//         width: auto
//     }
    
//     .gform_legacy_markup_wrapper .gfield_checkbox li label {
//         margin: 0
//     }
    
//     .gform_legacy_markup_wrapper .gfield_radio li label {
//         margin: 2px 0 0 4px
//     }
    
//     .gform_legacy_markup_wrapper .gfield_checkbox li input,
//     .gform_legacy_markup_wrapper .gfield_checkbox li input[type=checkbox],
//     .gform_legacy_markup_wrapper .gfield_radio li input[type=radio] {
//         display: -moz-inline-stack;
//         display: inline-block;
//         margin-left: 1px;
//         vertical-align: middle
//     }
    
//     .gform_legacy_markup_wrapper .gfield_description {
//         clear: both;
//         font-family: inherit;
//         font-size: .813em;
//         letter-spacing: normal;
//         line-height: inherit;
//         padding: 0 16px 0 0;
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper .field_description_below .gfield_description {
//         padding-top: 16px
//     }
    
//     .gform_legacy_markup_wrapper .gform_validation_errors {
//         border: 1px solid #790000;
//         border-radius: 5px;
//         box-shadow: 0 0 0 #ff6d6d;
//         margin-bottom: .5rem;
//         margin-top: .5rem;
//         padding: 1.0625rem 1.375rem;
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper .gform_validation_errors>h2 {
//         color: #790000;
//         font-size: 16px;
//         font-weight: 700;
//         margin: 0 0 .9375rem
//     }
    
//     .gform_legacy_markup_wrapper .gform_validation_errors>h2:before {
//         background-color: transparent;
//         background-position: 50%;
//         background-repeat: no-repeat;
//         content: "";
//         display: inline-block;
//         height: 22px;
//         margin: 0 .2rem 0 -.5rem;
//         vertical-align: sub;
//         width: 22px
//     }
    
//     .gform_legacy_markup_wrapper .gform_validation_errors>ol {
//         -webkit-padding-before: 0;
//         -webkit-padding-start: 0;
//         -webkit-margin-before: 0;
//         list-style-type: none !important;
//         margin-block-start: 0;
//         margin: 0;
//         padding-block-start: 0;
//         padding-inline-start: 0
//     }
    
//     .gform_legacy_markup_wrapper .gform_validation_errors>ol a {
//         color: #790000;
//         font-size: 1rem
//     }
    
//     .gform_legacy_markup_wrapper .gform_validation_errors>ol li {
//         font-size: 1rem;
//         list-style-type: none !important;
//         margin: 0 0 .9375rem
//     }
    
//     .gform_legacy_markup_wrapper .gform_validation_errors>ol li:last-of-type {
//         margin-bottom: 0
//     }
    
//     .gform_legacy_markup_wrapper div#error {
//         margin-bottom: 25px
//     }
    
//     .gform_legacy_markup_wrapper li.gfield fieldset {
//         display: block;
//         margin: 0;
//         padding: 0;
//         position: relative;
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper li.gfield fieldset>* {
//         width: auto
//     }
    
//     .gform_legacy_markup_wrapper li.gfield fieldset legend.gfield_label {
//         line-height: 32px;
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper .validation_message {
//         color: #790000;
//         font-weight: 700;
//         letter-spacing: normal
//     }
    
//     .gform_legacy_markup_wrapper .gform_footer {
//         clear: both;
//         margin: 16px 0 0;
//         padding: 16px 0 10px;
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper .gform_footer input.button,
//     .gform_legacy_markup_wrapper .gform_footer input[type=submit],
//     .gform_legacy_markup_wrapper .gform_page_footer input.button,
//     .gform_legacy_markup_wrapper .gform_page_footer input[type=submit] {
//         font-size: 1em;
//         margin: 0 0 16px;
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper .gform_footer input[type=image] {
//         background: 0 0 !important;
//         border: none !important;
//         display: block;
//         margin: 0 auto 16px !important;
//         max-width: 100%;
//         padding: 0;
//         width: auto !important
//     }
    
//     .gform_legacy_markup_wrapper .gfield_checkbox li,
//     .gform_legacy_markup_wrapper .gfield_radio li {
//         position: relative;
//         line-height: 1.2;
//         margin: 0 0 16px
//     }
    
//     .gchoice_select_all,
//     .gform_legacy_markup_wrapper ul.gfield_checkbox li input[type=checkbox]:checked+label,
//     .gform_legacy_markup_wrapper ul.gfield_radio li input[type=radio]:checked+label {
//         font-weight: 700
//     }
    
//     .gform_legacy_markup_wrapper .gform_hidden,
//     .gform_legacy_markup_wrapper input.gform_hidden,
//     .gform_legacy_markup_wrapper input[type=hidden] {
//         display: none !important;
//         max-height: 1px !important;
//         overflow: hidden
//     }
    
//     .gform_legacy_markup_wrapper ul.gfield_checkbox li,
//     .gform_legacy_markup_wrapper ul.gfield_radio li {
//         padding: 0 !important
//     }
    
//     .gform_legacy_markup_wrapper ul.gfield_radio li input+input {
//         margin-left: 4px
//     }
    
//     .gform_legacy_markup_wrapper ul.gfield_radio li input[value=gf_other_choice] {
//         margin-right: 6px;
//         margin-top: 4px
//     }
    
//     .gform_legacy_markup_wrapper .gfield_description+.gform_legacy_markup_wrapper .gfield_description.validation_message {
//         margin-top: 6px
//     }
    
//     .gform_legacy_markup_wrapper .gform_ajax_spinner {
//         padding-left: 10px
//     }
    
//     .gform_legacy_markup_wrapper .gform_validation_container,
//     body .gform_legacy_markup_wrapper .gform_body ul.gform_fields li.gfield.gform_validation_container,
//     body .gform_legacy_markup_wrapper li.gform_validation_container,
//     body .gform_legacy_markup_wrapper ul.gform_fields li.gfield.gform_validation_container {
//         display: none !important;
//         left: -9000px;
//         position: absolute !important
//     }
    
//     .gform_legacy_markup_wrapper span.ginput_total {
//         color: #060;
//         font-size: inherit
//     }
    
//     .gform_legacy_markup_wrapper .top_label span.ginput_total {
//         margin: 8px 0
//     }
    
//     .gform_legacy_markup_wrapper .gform_page_footer {
//         border-top: 1px dotted #ccc;
//         clear: both;
//         margin: 14px 0;
//         padding: 16px 0 0;
//         width: 100%
//     }
    
//     .gform_legacy_markup_wrapper .gfield_repeater_buttons {
//         padding-top: 15px
//     }
    
//     .gform_legacy_markup_wrapper .gfield_icon_disabled {
//         cursor: default !important;
//         -moz-opacity: .6;
//         -khtml-opacity: .6;
//         opacity: .6
//     }
    
//     .gform_legacy_markup_wrapper .gform_card_icon_container {
//         display: flex;
//         height: 32px;
//         margin: 8px 0 6px
//     }
    
//     .gform_legacy_markup_wrapper .gform_card_icon_container div.gform_card_icon {
//         background-repeat: no-repeat;
//         height: 32px;
//         margin-right: 4px;
//         text-indent: -9000px;
//         width: 40px
//     }
    
//     .gform_legacy_markup_wrapper .gform_card_icon_container div.gform_card_icon.gform_card_icon_selected {
//         position: relative
//     }
    
//     .gform_legacy_markup_wrapper .gform_card_icon_container div.gform_card_icon.gform_card_icon_selected:after {
//         bottom: 4px;
//         content: "";
//         display: block;
//         height: 10px;
//         position: absolute;
//         right: -2px;
//         width: 13px
//     }
    
//     .gform_legacy_markup_wrapper span.gform_drop_instructions {
//         display: block;
//         margin-bottom: 8px
//     }
    
//     .gform_legacy_markup_wrapper .gform_delete {
//         cursor: pointer;
//         vertical-align: middle
//     }
    
//     body .gform_legacy_markup_wrapper img.ui-datepicker-trigger {
//         display: -moz-inline-stack;
//         display: inline-block;
//         height: 16px !important;
//         width: 17px !important
//     }
    
//     body .gform_legacy_markup_wrapper img.add_list_item,
//     body .gform_legacy_markup_wrapper img.delete_list_item {
//         display: -moz-inline-stack;
//         display: inline-block;
//         margin-top: -2px
//     }
    
//     .gform_legacy_markup_wrapper li.gfield ul.gfield_radio li input[type=radio]+input[type=text] {
//         width: 45.25%
//     }
    
//     body .gform_legacy_markup_wrapper ul li.gfield {
//         margin-top: 16px;
//         padding-top: 0
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container {
//         display: inline-block;
//         font-size: 13px;
//         position: relative;
//         -webkit-user-select: none;
//         -moz-user-select: none;
//         user-select: none;
//         vertical-align: middle
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container * {
//         box-sizing: border-box
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-drop {
//         background: #fff;
//         border: 1px solid #aaa;
//         border-top: 0;
//         box-shadow: 0 4px 5px rgba(0, 0, 0, .15);
//         display: none;
//         position: absolute;
//         top: 100%;
//         width: 100%;
//         z-index: 1010
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container.chosen-with-drop .chosen-drop {
//         display: block
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container a {
//         cursor: pointer
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-single .group-name,
//     .gform_legacy_markup_wrapper .chosen-container .search-choice .group-name {
//         color: #999;
//         font-weight: 400;
//         margin-right: 4px;
//         overflow: hidden;
//         text-overflow: ellipsis;
//         white-space: nowrap
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-single .group-name:after,
//     .gform_legacy_markup_wrapper .chosen-container .search-choice .group-name:after {
//         content: ":";
//         padding-left: 2px;
//         vertical-align: top
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-results {
//         -webkit-overflow-scrolling: touch;
//         color: #444;
//         margin: 0 4px 4px 0;
//         max-height: 240px;
//         overflow-x: hidden;
//         overflow-y: auto;
//         padding: 0 0 0 4px;
//         position: relative
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-results li {
//         word-wrap: break-word;
//         -webkit-touch-callout: none;
//         display: none;
//         line-height: 15px;
//         list-style: none;
//         margin: 0;
//         padding: 5px 6px
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-results li.active-result {
//         cursor: pointer;
//         display: list-item
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-results li.disabled-result {
//         color: #ccc;
//         cursor: default;
//         display: list-item
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-results li.highlighted {
//         background-color: #3875d7;
//         background-image: linear-gradient(#3875d7 20%, #2a62bc 90%);
//         color: #fff
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-results li.no-results {
//         background: #f4f4f4;
//         color: #777;
//         display: list-item
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-results li.group-result {
//         cursor: default;
//         display: list-item;
//         font-weight: 700
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-results li.group-option {
//         padding-left: 15px
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container .chosen-results li em {
//         font-style: normal;
//         text-decoration: underline
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container-active .chosen-single {
//         border: 1px solid #5897fb;
//         box-shadow: 0 0 5px rgba(0, 0, 0, .3)
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container-active.chosen-with-drop .chosen-single {
//         background-image: linear-gradient(#eee 20%, #fff 80%);
//         border: 1px solid #aaa;
//         border-bottom-left-radius: 0;
//         border-bottom-right-radius: 0;
//         box-shadow: inset 0 1px 0 #fff
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container-active.chosen-with-drop .chosen-single div {
//         background: 0 0;
//         border-left: none
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container-active.chosen-with-drop .chosen-single div b {
//         background-position: -18px 2px
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container-active .chosen-choices {
//         border: 1px solid #5897fb;
//         box-shadow: 0 0 5px rgba(0, 0, 0, .3)
//     }
    
//     .gform_legacy_markup_wrapper .chosen-container-active .chosen-choices li.search-field input[type=text] {
//         color: #222 !important
//     }
    
//     .gform_legacy_markup_wrapper .chosen-disabled {
//         cursor: default;
//         opacity: .5 !important
//     }
    
//     .gform_legacy_markup_wrapper .chosen-disabled .chosen-choices .search-choice .search-choice-close,
//     .gform_legacy_markup_wrapper .chosen-disabled .chosen-single {
//         cursor: default
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl {
//         text-align: right
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-single {
//         overflow: visible;
//         padding: 0 8px 0 0
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-single span {
//         direction: rtl;
//         margin-left: 26px;
//         margin-right: 0
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-single-with-deselect span {
//         margin-left: 38px
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-single div {
//         left: 3px;
//         right: auto
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-single abbr {
//         left: 26px;
//         right: auto
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-choices li {
//         float: right
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-choices li.search-field input[type=text] {
//         direction: rtl
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-choices li.search-choice {
//         margin: 3px 5px 3px 0;
//         padding: 3px 5px 3px 19px
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-choices li.search-choice .search-choice-close {
//         left: 4px;
//         right: auto
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-results li.group-option {
//         padding-left: 0;
//         padding-right: 15px
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl.chosen-container-active.chosen-with-drop .chosen-single div {
//         border-right: none
//     }
    
//     .gform_legacy_markup_wrapper .chosen-rtl .chosen-search input[type=text] {
//         direction: rtl;
//         padding: 4px 5px 4px 20px
//     }
    
//     @media only screen and (-webkit-min-device-pixel-ratio:1.5),
//     only screen and (min-resolution:1.5dppx),
//     only screen and (min-resolution:144dpi) {
//         .gform_legacy_markup_wrapper .chosen-rtl .chosen-search input[type=text] {
//             background-repeat: no-repeat !important;
//             background-size: 52px 37px !important
//         }
//     }
    
//     body .gform_legacy_markup_wrapper .chosen-container a.chosen-single {
//         border-radius: inherit
//     }
    
//     body .gform_legacy_markup_wrapper ul.chosen-results li {
//         line-height: inherit
//     }
    
//     @media only screen and (max-width:641px) {
//         .gform_legacy_markup_wrapper input:not([type=radio]):not([type=checkbox]):not([type=image]):not([type=file]) {
//             line-height: 2;
//             min-height: 2rem
//         }
//         .gform_legacy_markup_wrapper textarea {
//             line-height: 1.5
//         }
//         .gform_legacy_markup_wrapper .ginput_container span:not(.ginput_price) {
//             display: block;
//             margin-bottom: 8px
//         }
//         .gform_legacy_markup_wrapper li.field_sublabel_below .ginput_complex {
//             margin-top: 12px !important
//         }
//         .gform_legacy_markup_wrapper ul.gfield_checkbox li label,
//         .gform_legacy_markup_wrapper ul.gfield_radio li label {
//             cursor: pointer;
//             width: 85%
//         }
//     }
    
//     @media only screen and (min-width:641px) {
//         .gform_legacy_markup_wrapper .gform_body {
//             width: 100%
//         }
//         .gform_legacy_markup_wrapper .gfield_checkbox li,
//         .gform_legacy_markup_wrapper .gfield_radio li {
//             line-height: 1.3;
//             margin: 0 0 8px
//         }
//         .gform_legacy_markup_wrapper ul.gform_fields:not(.top_label) .gfield_label {
//             float: left;
//             margin-bottom: 16px;
//             padding-right: 16px;
//             width: 29%
//         }
//         .gform_legacy_markup_wrapper ul.gform_fields:not(.top_label) ul.gfield_checkbox,
//         .gform_legacy_markup_wrapper ul.gform_fields:not(.top_label) ul.gfield_radio {
//             overflow: hidden
//         }
//         .gform_legacy_markup_wrapper .top_label input.medium,
//         .gform_legacy_markup_wrapper .top_label select.medium {
//             width: calc(50% - 8px)
//         }
//         .gform_legacy_markup_wrapper.gform_validation_error .top_label input.medium,
//         .gform_legacy_markup_wrapper.gform_validation_error .top_label select.medium {
//             width: 50%
//         }
//         .gform_legacy_markup_wrapper .top_label input.medium.datepicker {
//             width: auto
//         }
//         .gform_legacy_markup_wrapper textarea.medium {
//             height: 160px;
//             width: 100%
//         }
//         .gform_legacy_markup_wrapper .gform_footer input.button,
//         .gform_legacy_markup_wrapper .gform_footer input[type=image],
//         .gform_legacy_markup_wrapper .gform_footer input[type=submit] {
//             display: -moz-inline-stack;
//             display: inline-block
//         }
//         .gform_legacy_markup_wrapper .gform_footer input[type=image] {
//             vertical-align: middle
//         }
//         .gform_legacy_markup_wrapper .gform_footer input.button,
//         .gform_legacy_markup_wrapper .gform_footer input[type=submit],
//         .gform_legacy_markup_wrapper .gform_page_footer input.button,
//         .gform_legacy_markup_wrapper .gform_page_footer input[type=submit] {
//             font-size: 1em;
//             margin: 0 16px 0 0;
//             width: auto
//         }
//         .gform_legacy_markup_wrapper ul.gform_fields li.gfield {
//             padding-right: 16px
//         }
//         .gform_legacy_markup_wrapper .gform_footer:not(.top_label) {
//             margin-left: 29%;
//             padding: 16px 0 10px;
//             width: 70%
//         }
//         .gform_legacy_markup_wrapper .top_label .ginput_complex.ginput_container.ginput_container_email {
//             width: calc(100% + 15px)
//         }
//         .gform_legacy_markup_wrapper ul.gform_fields:not(.top_label) div.ginput_complex.ginput_container.ginput_container_email {
//             margin-left: 29%;
//             width: calc(70% + 16px)
//         }
//         html:not([dir=rtl]) .gform_legacy_markup_wrapper ul.gform_fields:not(.top_label) .gfield_description,
//         html:not([dir=rtl]) .gform_legacy_markup_wrapper ul.gform_fields:not(.top_label) .ginput_container:not(.ginput_container_time):not(.ginput_container_date) {
//             margin-left: 29%;
//             width: 70%
//         }
//         .gform_legacy_markup_wrapper ul.gform_fields:not(.top_label) .ginput_container.ginput_recaptcha {
//             margin-left: 29% !important
//         }
//         .gform_legacy_markup_wrapper .gform_page_footer .button.gform_button {
//             margin-right: 10px
//         }
//         .gform_wrapper .top_label li ul.gfield_checkbox,
//         .gform_wrapper .top_label li ul.gfield_radio {
//             width: calc(100% + 16px)
//         }
//         .gform_wrapper ul.gform_fields:not(.top_label) li ul.gfield_checkbox,
//         .gform_wrapper ul.gform_fields:not(.top_label) li ul.gfield_radio {
//             width: calc(70% + 16px)
//         }
//     }
    
//     .gform_legacy_markup_wrapper .gfield_repeater_cell>.gfield_repeater_wrapper {
//         background-color: rgba(1, 1, 1, .02);
//         border-bottom: 1px solid #eee;
//         border-left: 8px solid rgba(54, 86, 102, .1);
//         border-radius: 8px;
//         padding: 10px 20px;
//         border-left: 8px solid #f1f1f1;
//         box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06), 0 2px 1px -1px rgba(0, 0, 0, .06), 0 1px 5px 0 rgba(0, 0, 0, .06)
//     }
    
//     .gform_legacy_markup_wrapper .gfield_repeater_wrapper input {
//         border: 1px solid #c5c6c5;
//         border-radius: 4px
//     }
    
//     .gform_legacy_markup_wrapper .gfield_repeater_wrapper .gfield_repeater_wrapper {
//         margin-top: 10px
//     }
    
//     .gform_legacy_markup_wrapper .gfield_repeater_buttons button.gfield_icon_disabled {
//         cursor: default;
//         -moz-opacity: .3;
//         -khtml-opacity: .3;
//         opacity: .3
//     }
    
//     .gform_legacy_markup_wrapper .gfield_repeater_buttons button.gfield_icon_disabled:hover {
//         background: hsla(0, 0%, 95%, .5);
//         border: 1px solid hsla(0, 0%, 46%, .4);
//         color: #757575
//     }
    
//     .gform_legacy_markup_wrapper .gfield_repeater_buttons button:hover {
//         background: #fafafa;
//         border: 1px solid #757575;
//         color: #374750
//     }
    
//     .gform_legacy_markup_wrapper .gfield_repeater_cell label {
//         color: #9b9a9a;
//         font-size: 14px;
//         font-weight: 400;
//         padding-top: 8px
//     }
    
//     .gform_legacy_markup_wrapper div .gfield_repeater_cell {
//         margin-top: 5px
//     }
    
//     .gform_legacy_markup_wrapper .gfield_repeater_items .gfield_repeater_cell:not(:first-child) {
//         padding-top: 5px
//     }
    
//     .gform_legacy_markup_wrapper.gf_browser_chrome select {
//         padding: 2px 0 2px 3px
//     }
    
//     .gform_legacy_markup_wrapper.gf_browser_chrome ul li:after,
//     .gform_legacy_markup_wrapper.gf_browser_chrome ul li:before {
//         content: none
//     }
    
//     .gform_legacy_markup_wrapper.gf_browser_chrome .ginput_complex select {
//         line-height: 1.5em;
//         margin-bottom: 5px;
//         margin-top: 2px;
//         text-indent: 2px
//     }
    
//     .gform_legacy_markup_wrapper.gf_browser_chrome .gfield_checkbox li input,
//     .gform_legacy_markup_wrapper.gf_browser_chrome .gfield_checkbox li input[type=checkbox],
//     .gform_legacy_markup_wrapper.gf_browser_chrome .gfield_radio li input[type=radio] {
//         margin-top: 6px
//     }
    
//     .gform_legacy_markup_wrapper.gf_browser_chrome ul.gform_fields li.gfield input[type=radio],
//     .gform_legacy_markup_wrapper.gf_browser_chrome ul.gform_fields li.gfield select {
//         margin-left: 1px
//     }
    
//     .gform_legacy_markup_wrapper.gf_browser_chrome select[multiple=multiple] {
//         height: auto !important
//     }
    
//     .gform_legacy_markup_wrapper.gf_browser_chrome input.button.gform_button_select_files {
//         padding: 6px 12px !important
//     }
    
    
    
//      <style> 
//     #wptime-plugin-preloader{
//         display:none !important;
//     }
    
    
    
    
//     .home .acf-block-logos__logo {
//         max-height: initial;
//     }
    
//     .page-id-21370 .acf-block-logos .c-mt-lg-8 {
//         margin-top: 6rem;
//         max-width: 12%;
//     }
    
//     @media only screen and (max-width: 640px) {
//         .page-id-21370 .acf-block-logos .c-mt-lg-8 {
//             margin-top: 3rem;
//             max-width: 22%;
//         }
//         .page-id-21370 .acf-block-logos__logo img {
//             max-width: 50px;
//         }
//         .page-id-21370 .acf-block-list-in-columns .col-lg-4:last-child {
//             margin-top: 30px;
//         }
//     }
    
//     .page-id-21370 .acf-block-list-in-columns {
//         text-align: center;
//     }
    
//     @media (min-width: 1200px) {
//         .page-id-119 .acf-block-brand-transparent__name {
//             font-size: 9rem;
//         }
//     }
    
//     @media (min-width: 992px) {
//         .page-id-119 .acf-block-brand-transparent__name {
//             font-size: 8rem;
//         }
//     }
    
//     @media (min-width: 768px) {
//         .page-id-119 .acf-block-brand-transparent__name {
//             font-size: 5rem;
//         }
//     }
    
//     @media (min-width: 1200px) {
//         .page-id-22447 .acf-block-brand-transparent__name {
//             font-size: 9rem;
//         }
//     }
    
//     @media (min-width: 992px) {
//         .page-id-22447 .acf-block-brand-transparent__name {
//             font-size: 8rem;
//         }
//     }
    
//     @media (min-width: 768px) {
//         .page-id-22447 .acf-block-brand-transparent__name {
//             font-size: 5rem;
//         }
//     }
    
//     @media (min-width: 1200px) {
//         .page-id-1552 .acf-block-brand-transparent__name {
//             font-size: 9rem;
//         }
//     }
    
//     @media (min-width: 992px) {
//         .page-id-1552 .acf-block-brand-transparent__name {
//             font-size: 8rem;
//         }
//     }
    
//     @media (min-width: 768px) {
//         .page-id-1552 .acf-block-brand-transparent__name {
//             font-size: 5rem;
//         }
//     }
    
//     @media (min-width: 768px) {
//         .page-id-24155 .wp-container-15>* {
//             margin-right: 19rem;
//         }
//         .page-id-24155 .wp-container-6>* {
//             margin-right: 19rem;
//         }
//     }
    
//     @media (min-width: 768px) {
//         .mr-10-tt {
//             margin-right: 10rem;
//         }
//         .mr-3-tt {
//             margin-right: 3rem;
//         }
//     }
    
//     @media (min-width: 768px) {
//         .mr-19-tt {
//             margin-right: 19rem;
//         }
//     }
    
//     .gform_fields {
//         list-style-type: none;
//     }
    
//     .newsletter__form-wrapper .gfield_label {
//         display: none;
//     }
    
//     @media (max-width: 640px) {
//         .gform_wrapper.newsletter_wrapper form div.gform_body ul.gform_fields li.gfield div.ginput_container input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]):not(.chosen-focus-input):not(.chosen-search-input) {
//             border: .25rem solid #fff;
//         }
//         .gform_wrapper.newsletter_wrapper form {
//             flex-direction: column;
//         }
//         .gform_wrapper.newsletter_wrapper form div.gform_body {
//             width: 100%;
//             margin-bottom: 10px;
//         }
//         .gform_wrapper.newsletter_wrapper form div.gform_footer {
//             margin: 0 auto;
//         }
//     }
    
//     .page-id-18477 .entry-content>ol:not(.wp-block-gallery) li:first-child,
//     .entry-content>ul:not(.wp-block-gallery) li:first-child,
//     .wp-bootstrap-blocks-container>ol:not(.wp-block-gallery) li:first-child,
//     .wp-bootstrap-blocks-container>ul:not(.wp-block-gallery) li:first-child,
//     .wp-bootstrap-blocks-row [class*=col-]>ol:not(.wp-block-gallery) li:first-child,
//     .wp-bootstrap-blocks-row [class*=col-]>ul:not(.wp-block-gallery) li:first-child {
//         margin-top: .5em;
//     }
    
//     @media (min-width: 576px) {
//         .page-id-18477 .entry-content>ol:not(.wp-block-gallery) li:first-child,
//         .entry-content>ul:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-container>ol:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-container>ul:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-row [class*=col-]>ol:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-row [class*=col-]>ul:not(.wp-block-gallery) li:first-child {
//             margin-top: 0.625em;
//         }
//     }
    
//     @media (min-width: 768px) {
//         .page-id-18477 .entry-content>ol:not(.wp-block-gallery) li:first-child,
//         .entry-content>ul:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-container>ol:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-container>ul:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-row [class*=col-]>ol:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-row [class*=col-]>ul:not(.wp-block-gallery) li:first-child {
//             margin-top: 0.75em;
//         }
//     }
    
//     @media (min-width: 992px) {
//         .page-id-18477 .entry-content>ol:not(.wp-block-gallery) li:first-child,
//         .entry-content>ul:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-container>ol:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-container>ul:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-row [class*=col-]>ol:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-row [class*=col-]>ul:not(.wp-block-gallery) li:first-child {
//             margin-top: 0.875em;
//         }
//     }
    
//     @media (min-width: 1200px) {
//         .page-id-18477 .entry-content>ol:not(.wp-block-gallery) li:first-child,
//         .entry-content>ul:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-container>ol:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-container>ul:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-row [class*=col-]>ol:not(.wp-block-gallery) li:first-child,
//         .wp-bootstrap-blocks-row [class*=col-]>ul:not(.wp-block-gallery) li:first-child {
//             margin-top: 1em;
//         }
//     }
    
//     div#subpanel {
//         max-height: none;
//         padding: 0;
//         color: #fff !important;
//     }
    
//     @media (max-width: 991.98px) {
//         .page-id-23347 .acf-block-call-to-action .crunch-button {
//             margin-top: 60px !important;
//         }
//         .acf-block-call-to-action__image-wrapper1 {
//             width: 100% !important;
//         }
//     }
    
//     @media (max-width: 991.98px) {
//         .none-mobile {
//             display: none !important;
//         }
//         .m-pa-le {
//             padding-left: 16px !important;
//         }
//     }
    
//     @media (min-width: 991.98px) {
//         .none-desktop {
//             display: none !important;
//         }
//     }
    
//     .b-width {
//         max-width: 200px;
//     }
    
//     #b-width {
//         max-width: 200px;
//     }
    
//     /* Googlefont Poppins CDN Link */
//     @import url(' https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
//     *{
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//       font-family: 'Poppins', sans-serif;
//     }
//     body{
//       min-height: 100vh;
//     }
//     nav{
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       /* height: 100%; */
//       height: 100px;
//       background: #141313;
//       box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
//       z-index: 99;
//       display: flex;
//         align-items: center;
//     }
    
//     nav .navbar{
//       height: 100%;
//       max-width: 1250px;
//       width: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       margin: auto;
//       /* background: red; */
//       padding: 0 50px;
//     }
//     .navbar .logo a{
//       font-size: 30px;
//       color: #fff;
//       text-decoration: none;
//       font-weight: 600;
//     }
//     nav .navbar .nav-links {
//         line-height: 70px;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//     }
//     nav .navbar .links{
//       display: flex;
//     }
//     nav .navbar .links li {
//         position: relative;
//         display: flex;
//         align-items: center;
//         justify-content: space-evenly;
//         list-style: none;
//         /* padding: 0 14px; */
//     }
    
//     nav .navbar .links li a{
//       height: 100%;
//       text-decoration: none;
//       white-space: nowrap;
//       color: #fff;
//       font-size: 15px;
//       font-weight: 500;
//     }
//     .links li:hover .htmlcss-arrow,
//     .links li:hover .js-arrow{
//       transform: rotate(180deg);
//       }
    
//     nav .navbar .links li .arrow{
//       /* background: red; */
//       height: 100%;
//       /* width: 22px; */
//       line-height: 70px;
//       text-align: center;
//       display: inline-block;
//       color: #fff;
//       transition: all 0.3s ease;
//     }
//     nav .navbar .links li .sub-menu{
//       position: absolute;
//       top: 70px;
//       left: 0;
//       line-height: 40px;
//       background: #141313;
//       box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
//       border-radius: 0 0 4px 4px;
//       display: none;
//       z-index: 2;
//     }
//     nav .navbar .links li:hover .htmlCss-sub-menu,
//     nav .navbar .links li:hover .js-sub-menu{
//       display: block;
//     }
//     /* .navbar .links li .sub-menu li{
//       padding: 0 22px;
//       border-bottom: 1px solid rgba(255,255,255,0.1);
//     } */
    
//     .navbar .links li .sub-menu li {
//         padding: 0 22px;
//         /* border-bottom: 1px solid rgba(255,255,255,0.1); */
//         display: flex;
//         justify-content: start;
//         width: fit-content;
//     }
//     .navbar .links li .sub-menu a{
//       color: #fff;
//       font-size: 15px;
//       font-weight: 500;
//     }
//     .navbar .links li .sub-menu .more-arrow{
//       line-height: 40px;
//     }
//     .navbar .links li .htmlCss-more-sub-menu{
//       /* line-height: 40px; */
//     }
//     .navbar .links li .sub-menu .more-sub-menu{
//       position: absolute;
//       top: 0;
//       left: 100%;
//       border-radius: 0 4px 4px 4px;
//       z-index: 1;
//       display: none;
//     }
//     .links li .sub-menu .more:hover .more-sub-menu{
//       display: block;
//     }
//     .navbar .search-box{
//       position: relative;
//        height: 40px;
//       width: 40px;
//     }
//     .navbar .search-box i{
//       position: absolute;
//       height: 100%;
//       width: 100%;
//       line-height: 40px;
//       text-align: center;
//       font-size: 22px;
//       color: #fff;
//       font-weight: 600;
//       cursor: pointer;
//       transition: all 0.3s ease;
//     }
//     .navbar .search-box .input-box{
//       position: absolute;
//       right: calc(100% - 40px);
//       top: 80px;
//       height: 60px;
//       width: 300px;
//       background: #141313;
//       border-radius: 6px;
//       opacity: 0;
//       pointer-events: none;
//       transition: all 0.4s ease;
//     }
//     .navbar.showInput .search-box .input-box{
//       top: 65px;
//       opacity: 1;
//       pointer-events: auto;
//       background: #141313;
//     }
//     .search-box .input-box::before{
//       content: '';
//       position: absolute;
//       height: 20px;
//       width: 20px;
//       background: #141313;
//       right: 10px;
//       top: -6px;
//       transform: rotate(45deg);
//     }
//     .search-box .input-box input{
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       border-radius: 4px;
//       transform: translate(-50%, -50%);
//       height: 35px;
//       width: 280px;
//       outline: none;
//       padding: 0 15px;
//       font-size: 16px;
//       border: none;
//     }
//     .navbar .nav-links .sidebar-logo{
//       display: none;
//     }
//     .navbar .bx-menu{
//       display: none;
//     }
//     .crunch-button{
//         cursor: pointer;
//     }
    
    
//     @media (max-width:920px) {
//       nav .navbar{
//         max-width: 100%;
//         /* padding: 0 25px; */
//         /* height: 1vh !important; */
//       }
    
      
//       nav .navbar .logo a{
//         font-size: 27px;
//       }
//       nav .navbar .links li{
//         padding: 0 10px;
//         white-space: nowrap;
//       }
//       nav .navbar .links li a{
//         font-size: 15px;
//       }
//     }
//     @media (max-width:1024px){
//       nav{
//         position: fixed;
//         height: 8vh;
//       }
//       .navbar .bx-menu{
//         display: block;
//         cursor: pointer;
//       }
//       .bx-x{
//         cursor: pointer;
//       }
//       nav .navbar .nav-links{
//         position: fixed;
//         top: 0;
//         left: -100%;
//         display: block;
//         /* max-width: 270px; */
//         width:100vw;
//         background:  #141313;
//         line-height: 40px;
//         padding: 20px;
//         box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
//         transition: all 0.5s ease;
//         z-index: 1000;
//       }
//       .navbar .nav-links .sidebar-logo{
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//       }
//       .sidebar-logo .logo-name{
//         font-size: 25px;
//         color: #fff;
//       }
//         .sidebar-logo  i,
//         .navbar .bx-menu{
//           font-size: 25px;
//           color: #fff;
//           width: 5vw;
//         }
//       nav .navbar .links{
//         display: block;
//         margin-top: 20px;
//       }
//       nav .navbar .links li .arrow{
//         line-height: 40px;
//         width: 12px;
//     margin-left: 10px;
//       }
//     nav .navbar .links li{
//         display: block;
//       }
//     nav .navbar .links li .sub-menu{
//       position: relative;
//       top: 0;
//       box-shadow: none;
//       display: none;
//     }
//     nav .navbar .links li .sub-menu li{
//       border-bottom: none;
    
//     }
//     .navbar .links li .sub-menu .more-sub-menu{
//       display: none;
//       position: relative;
//       left: 0;
//     }
//     .navbar .links li .sub-menu .more-sub-menu li{
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//     }
//     .links li:hover .htmlcss-arrow,
//     .links li:hover .js-arrow{
//       transform: rotate(0deg);
//       }
//       .navbar .links li .sub-menu .more-sub-menu{
//         display: none;
//       }
//       .navbar .links li .sub-menu .more span{
//         /* background: red; */
//         display: flex;
//         align-items: center;
//         /* justify-content: space-between; */
//       }
    
//       .links li .sub-menu .more:hover .more-sub-menu{
//         display: none;
//       }
//       nav .navbar .links li:hover .htmlCss-sub-menu,
//       nav .navbar .links li:hover .js-sub-menu{
//         display: none;
//       }
//     .navbar .nav-links.show1 .links .htmlCss-sub-menu,
//       .navbar .nav-links.show3 .links .js-sub-menu,
//       .navbar .nav-links.show2 .links .more .more-sub-menu{
//           display: block;
//         }
//         .navbar .nav-links.show1 .links .htmlcss-arrow,
//         .navbar .nav-links.show3 .links .js-arrow{
//             transform: rotate(180deg);
//     }
//         .navbar .nav-links.show2 .links .more-arrow{
//           transform: rotate(90deg);
//         }
//     }
//     @media (max-width:370px){
//       nav .navbar .nav-links{
//       max-width: 100%;
//     } 
//     }
    
//     `
// }

// stylesetter()

