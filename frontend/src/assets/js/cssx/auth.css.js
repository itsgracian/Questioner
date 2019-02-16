const Auth=`
<style type="text/css">
/*google font*/
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
/*google font*/
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
*,body{
  margin: 0;
  padding: 0;
}
body{
  font-family: "Comfortaa",cursive;
  background:#f8f8f83d;
}
a{
  text-decoration: none;
}
ul{
  list-style-type: none;
}
.authentication{
  position: relative;
  width: 100%;
  top: 0;
  bottom: 0;
  background: #f8f8f845;
  min-height: 100vh;
}
.auth-page{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  margin-top: 80px;
  font-family: 'Lobster', cursive;
  margin-bottom: 30px;
  color: #fff;
}
.logo h1 {
  font-size: 2.5rem;
  color: #333;
}
.title{
  margin-bottom: 20px;
}
.auth-form{
  position: relative;
  width: 26%;
}
.register{
  width: 33%!important;
}
form{
  width: 100%;
  position: relative;
}
.form-group {
  position: relative;
  margin-bottom: 1rem;
}
.form-group img{
  width: 12px;
  position: absolute;
  left: 0;
  margin-top: 18px;
}
.form-input{
  height: 50px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-family: "Comfortaa",cursive;
  outline: none;
  box-shadow: none;
  padding-left: 20px;
  background: none;
}
.divide{
  width: 45%;
  display: inline-block;
}
.divide:last-child{
  margin-left: 20px;
}
.signInBtn,.signUpBtn{
  width: 100%;
  padding: 15px;
  height: 55px;
  font-family: "comfortaa",cursive;
  text-transform: capitalize;
  border: none;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  background: linear-gradient(90deg,#e052a0,#f15c41);
  margin-top: 10px;
}
.signUpBtn{
  width: 80%;
  background: linear-gradient(90deg,#6e52e0,#f141ab);
}
.other-links{
  display: flex;
  align-items: center;
  justify-content: center;
}
.other-links li{
  float: left;
}
.other-links li:last-child{
  margin-left: 30px;
}
.other-links a{
  padding-top: 15px;
  color: #1d7be8;
  font-weight: bold;
  font-size: 12px;
}
.m{
  margin-top: 15px;
}
.m h5{
  font-weight: normal;
  color: #1d7be8;
}
.textMuted{
  color: #dc0044a3;
  text-transform: capitalize;
  font-size: 8px;
  padding-top: 5px;
  font-weight: bold;
}
.loadData{
  position: fixed;
  width: 100%;
  top: 0;
  height: 3px;
  background: #fff;
  -webkit-animation: loading 3s ease-in-out infinite;
  display: none;
}
@-webkit-keyframes loading {
  0%{
    width:0%;
    background: linear-gradient(260deg,#337eb9,#384499);
  }
   50%{
     width: 50%;
     background: linear-gradient(90deg,#e052a0,#f15c41);
   }
   70%{
     width: 70%;
     background: linear-gradient(260deg,#337eb9,#384499);
   }
   100%{
     width: 100%;
    background: linear-gradient(90deg,#e052a0,#f15c41);
   }
}
@-moz-keyframes loading {
  0%{
    width:0%;
    background: linear-gradient(260deg,#337eb9,#384499);
  }
   50%{
     width: 50%;
     background: linear-gradient(90deg,#e052a0,#f15c41);
   }
   70%{
     width: 70%;
     background: linear-gradient(260deg,#337eb9,#384499);
   }
   100%{
     width: 100%;
    background: linear-gradient(90deg,#e052a0,#f15c41);
   }
}
@-o-keyframes loading {
  0%{
    width:0%;
    background: linear-gradient(260deg,#337eb9,#384499);
  }
   50%{
     width: 50%;
     background: linear-gradient(90deg,#e052a0,#f15c41);
   }
   70%{
     width: 70%;
     background: linear-gradient(260deg,#337eb9,#384499);
   }
   100%{
     width: 100%;
    background: linear-gradient(90deg,#e052a0,#f15c41);
   }
}
@keyframes loading {
  0%{
    width:0%;
    background: linear-gradient(260deg,#337eb9,#384499);
  }
   50%{
     width: 50%;
     background: linear-gradient(90deg,#e052a0,#f15c41);
   }
   70%{
     width: 70%;
     background: linear-gradient(260deg,#337eb9,#384499);
   }
   100%{
     width: 100%;
    background: linear-gradient(90deg,#e052a0,#f15c41);
   }
}
.success{
  position: absolute;
  z-index: 100;
  padding: 30px;
  right: 0;
  margin-right: 100px;
  width: 17%;
  transform: translateY(-100%);
 -webkit-transform:translateY(-100%);
-webkit-transition: 0.5s transform linear;
}
.trans{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:100px;
}
.trans .image{
  width:70px;
  margin-bottom:20px;
  -webkit-animation:image 2s ease-in-out;
  -moz-animation:image 2s ease-in-out;
  -o-animation:image 2s ease-in-out;
   animation:image 2s ease-in-out;
  -webkit-animation-iteration-count:infinite;
  -moz-animation-iteration-count:infinite;
  -o-animation-iteration-count:infinite;
  animation-iteration-count:infinite;
}
.trans .image img{
  width:100%;
}
/**/
@media screen and (max-width: 768px) {
  .auth-form{
    width:80%;
  }
  .register{
    width: 90%!important;
  }
  .signUpBtn{
    width: 100%;
  }
  .messageReg{
    width: 50%;
    background: #fff;
  }
  .success{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #ffffff9c;
    margin-right: 0px;
    padding: 0;
  }
  .m{
    width: 60%;
    margin:auto;
  }
  .m h5{
    text-align:center;
  }
}

</style>
`;

export default Auth;
