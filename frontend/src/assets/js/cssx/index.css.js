const IndexCss=`
<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
@import url('https://fonts.googleapis.com/css?family=Lobster');
*,body{
  margin: 0;
  padding: 0;
}
body{
  font-family: "comfortaa",cursive;
  background: #f8f8f845;
  transform-style: preserve-3d;
  overflow-y: scroll;
  overflow-x: hidden;
}
a{
  text-decoration: none;
}
ul{
  list-style-type: none;
}
h5{
  font-size: 14px;
}
.header{
  position: fixed;
  width: 4%;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
}
.header li{
  float: none;
  margin-top: 40px;
  padding: 10px;
}
.svgIco{
  width: 35px;
}
.home,.know,.footer,.NotFound{
  position: relative;
  width: 100%;
  top: 0;
  bottom: 0;
  background: linear-gradient(rgba(51, 12, 241, 0.94),rgba(23, 20, 199, 0.42)),url('/src/assets/images/bk.jpg');
  background-size: cover;
  color: #fff;
  min-height: 100vh;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.NotFound{
  background:#f7f7f759!important;
}
.know{
  background: linear-gradient(rgba(12, 241, 209, 0.94),rgb(20, 75, 199)),url('/src/assets/images/bk.jpg')!important;
}
.footer{
  background: linear-gradient(#413979,rgba(23, 20, 199, 0.98)),url('/src/assets/images/bk.jpg')!important;
}
.inside{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo{
  margin-top: 100px;
  font-family: 'Lobster', cursive;
  margin-bottom: 50px;
  color: #fff;

}
.logo h1{
  font-size: 2.5rem;
}
.intro,.knowText,.on404Error{
  width: 50%;
  text-align: center;
  color: #fff;
}
.knowText{
  width: 40%!important;
}
.intro h2, .knowText h2{
  margin-top: 16px;
  margin-bottom: 15px;
  font-size: 40px;
  line-height: 48px;
  padding: 0;
}
.buttons{
  margin-top: 20px;

}
.buttons button{
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  height: 55px;
  font-family: "comfortaa",cursive;
  text-transform: capitalize;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  outline: none;
  margin: 10px;
  font-weight: bold;
}
.signInBtn{
  width: 150px;
  background: linear-gradient(90deg,#e052a0,#f15c41);
}
.signUpBtn{
  background: linear-gradient(260deg,#337eb9,#384499);
}
.texting{
  font-weight: normal;
}
.creatorImg{
  margin-bottom: 50px;
}
.creatorImg img{
  border-radius: 100%;
  width: 90px;
  height: 90px;
  -webkit-animation:image 2s ease-in-out;
  -moz-animation:image 2s ease-in-out;
  -o-animation:image 2s ease-in-out;
   animation:image 2s ease-in-out;
  -webkit-animation-iteration-count:infinite;
  -moz-animation-iteration-count:infinite;
  -o-animation-iteration-count:infinite;
  animation-iteration-count:infinite;

}
@-webkit-keyframes image{
  50%{
    -webkit-transform:rotateY(5deg) translateY(13px);
  }
}
@-moz-keyframes image{
  50%{
    -webkit-transform:rotateY(5deg) translateY(13px);
  }
}
@-o-keyframes image{
  50%{
    -webkit-transform:rotateY(5deg) translateY(13px);
  }
}
@keyframes image{
  50%{
    -webkit-transform:rotateY(5deg) translateY(13px);
  }
}

.bye{
  margin-top: 10px;
}

@media screen and (max-width:768px) {
  .header{
    width: 15%;
  }
  .buttons{
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .buttons button{
    width: 200px;
  }
  .logo{
    margin-bottom: 30px;
  }
  .intro h2{
    font-size: 36px;
  }
}
/*tablet*/
@media (min-width: 768px) and (max-width: 1024px) {
  .header{
    width: 7%!important;
  }
  .authentication-form{
    width: 50%!important;
  }
  .showcase{
    background: linear-gradient(rgba(51, 12, 241, 0.94),rgba(23, 20, 199, 0.42)),url('/src/assets/images/bk.jpg');
  }
  .home, .know, .footer{
    min-height: 60vh;
  }
  .header li{
    margin: auto;
    margin-top: 30px;
  }
  .on404Error{
    width:50%;
  }
}
/*landscape tablet*/
@media (min-width: 481px) and (max-width: 767px) {
  .header li{
    margin: none!important;
    padding: 30px!important;
  }
}
</style>
`;

export default IndexCss;
