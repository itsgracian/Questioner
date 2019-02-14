const Auth=`
<style type="text/css">
/*google font*/
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
*,body{
  margin: 0;
  padding: 0;
}
body{
  font-family: "Comfortaa",cursive;
}
a{
  text-decoration: none;
}
.header{
  position: fixed;
  width: 4%;
  top: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
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
.m h5{
  text-align:center;
  color: #1d7be8;
  font-weight:normal;
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
@media (min-width: 768px) and (max-width: 1024px) {
  .header{
    width: 7%!important;
  }
  .authentication-form{
    width: 50%!important;
  }
  .showcase{
    background: linear-gradient(rgba(51, 12, 241, 0.94),rgba(23, 20, 199, 0.42)),url('../images/bk.jpg');
  }
}
.header li{
  float: none;
  margin-top: 20px;
  padding: 10px;
}
.svgIco{
  width: 35px;
}
.showcase{
  width: 100%;
  background: #fff;
  background-size: cover;
  min-height: 100vh;
  background-size: cover;
  padding-bottom: 40px;
}
.auth{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.authentication-form{
  width:27%;
  background-color:#fcfcfc5e;
  border-radius: 5px;
  height: auto;
  margin-top: 70px;
  border:1px solid #ddd;
  padding-bottom: 40px;
  margin-bottom: 10px;
}
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
  flex-direction: column;
}
.logo img{
  width: 30px;
}
.logo h5{
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
}
.form{
  padding: 20px;
  padding-left: 30px;
  padding-right: 50px;
}
.form-group{
  position: relative;
  margin-bottom: 1rem;
}
.form-group img{
  width: 12px;
  position: absolute;
  left: 0;
  margin-top: 25px;
}
.form-group label{
  font-size: 13px;
  display: none;
}
.form-group input{
  height: 60px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-family: "Comfortaa",cursive;
  outline: none;
  box-shadow: none;
  padding-left: 20px;
  background: none;
}
.loginBtn{
  margin-top: 50px;
}
.loginBtn a{
  display: inline-block;
  padding-top: 15px;
  color: #1d7be8;
  font-weight: bold;
  font-size: 12px;
}
.loginBtn input{
    background: linear-gradient(260deg,#337eb9,#384499);
    color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    text-transform: capitalize;
    padding: 0px;
    width: auto;
    padding-left: 30px;
    padding-right: 30px;
    height: 50px;
    float: right;
}
.loginBtn p{
  margin-bottom: 1rem;
  text-transform: capitalize;
}
.changedBtn{
  background: #fff!important;
  color: #333333ad!important;
  font-weight: bold;
  border:2px solid #ddd!important;
}
::placeholder {
  color: #333333b3;
  font-weight: bold;
  opacity: 1;
  font-size: 11px;
}

:-ms-input-placeholder {
  color: #333333b3;
  font-weight: bold;
  font-size: 11px;
}

::-ms-input-placeholder {
  color: #333333b3;
  font-weight: bold;
  font-size: 11px;
}
.registerShow{
  height: auto!important;
}
.auth-menu{
  width:27%;
}
.auth-menu li{
  list-style-type: none;
}
.auth-menu a{
  text-transform: capitalize;
  font-size: 13px;
  color: #333;
}
.textMuted{
  color: #dc0044a3;
  text-transform: capitalize;
  font-size: 10px;
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
.groups{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10%;
  grid-row-gap: 10%;
}
.registerForm{
  width: 32%!important;
  margin-top:20px;
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

@media (min-width: 320px) and (max-width: 480px) {
  .showcase{
    background: #fff;
  }
  .authentication-form{
    width: 90%;
  }
  .header{
    display: none;
  }
  .registerForm{
    width: 90%!important;
  }
  .groups{
    grid-template-columns: 1fr;
    grid-gap: 0%;
  }
}
</style>
`;

export default Auth;
