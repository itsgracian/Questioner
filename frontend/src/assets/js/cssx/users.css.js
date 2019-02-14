const Users=`
<style type="text/css">
/*google font*/
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
*,body{
  margin: 0;
  padding: 0;
}
body{
  font-family: "comfortaa",cursive;
  background: #f8f8f845;
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
.textMuted{
  color:#dc0044a3;
}
.savedMsg{
  display: inline-block;
  margin-left: 40px;
  color: blue;
  font-weight: normal;
}
.askMsg{
  display:inline-block;
  color:blue;
  font-weight:normal;
  padding-top:5px;
  text-transform:capitalize;
}
.loadData{
  position: fixed;
  width: 100%;
  top: 0;
  height: 4px;
  background: #fff;
  -webkit-animation: loading 1s linear infinite;
  z-index:20;
  display: none;
}
.activity{
  border: none;
  background: none;
  cursor:pointer;
}
.numbers{
    font-size: 12px;
    color: #333;
    padding-right: 5px;
    font-weight: bold;
}
.qNames{
  font-weight: bold;
  font-size: 12px;
  color: #000;
}
@-webkit-keyframes loading {
  0%{
    width:0%;
    background:#ff1212;
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
    background: #fff;
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
    background: #fff;
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
    background: #fff;
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

.left-side{
  position: fixed;
  width: 20%;
  bottom: 0;
  top: 0;
  border-right: 1px solid #ddd;
  background: #fff;
}
.top-h{
  background:linear-gradient(90deg,#e052a0,#f15c41);
  padding: 10px;
  font-size: 13px;
  color: #fff;
  position: relative;
  height: 70px;
  padding-right: 20px;
  padding-left: 20px;
}
.top-name{
  position: absolute;
  margin-top: 13px;
  font-size: 15px;
}
.top-avatar{
  width: 50px;
  height: 50px;
  position: relative;
  top: 0;
  right: 0;
  float: right;
  border-radius: 100%;
}
.top-avatar img{
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.top-menu{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 50px;
}
.top-menu li{
  padding: 20px;
  text-align: center;
}
.top-menu a{
  font-size: 13px;
  color: #333;
}
.menuIcon{
  width: 50px;
  height: 50px;
  margin: auto;
  margin-bottom: 10px;
}
.menuIcon img{
  width: 100%;
  height: 100%;
}
/**/
.right-side{
  margin-left: 20%;
  position: relative;
  margin-bottom: 70px;
}
.header{
  padding: 20px;
  clear: both;
  margin-bottom: 10px;
  height: 50px;
  width: auto;
  background: none;
  padding-top: 30px;
  position: relative;
}
.header-m{
  position: absolute;
}
.profile-hover{
  float: right;
  top: 0;
}
.menuBar{
  display: none;
}
.header-m li a{
  color: #333;
  text-transform: capitalize;
  font-size: 13px;
  font-weight: bold;
}
.pro li{
  float: left;
  padding: 5px;
  padding-left: 20px;
}
.av img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: -15px;
}
.notification{
  width: 20px;
}
/**/

.title{
  min-height: 40px;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
}
.view-title{
  border-bottom: none!important;
  margin-bottom: 5px!important;
  padding-bottom:0!important;
}
.view-title h5{
  text-transform:capitalize;
}
.title p{
  color: #080505ad;
  font-size: 12px;
}
.location{
  width: 15px;
  padding-right: 5px;
}

#view{
  background: linear-gradient(90deg,#e052a0,#f15c41)!important;
}
#ask{
  background: #1aa1da!important;
}
.date{
  padding-left: 10px;
  font-size: 10px;
}
/*css works on view.html*/
.container{
  padding: 10px;
  padding-left: 0px;
  padding-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.more-about,.meetQ{
  width: 50%;
  background: #fff;
  min-height: 500px;
  border-radius: 4px;
  color: #333;
}
.meetQ{
  min-height: 150px!important;
}
.bImg{
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
}
.bImg img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.asked-question{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.askedOne{
  width: 50px;
}
.totalQuestions{
  margin-top: 0px!important;
  margin-bottom: 10px;
}
.meet-link{
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.linkFixed{
  position: relative;
}
.ft-link,.morecomment{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background:linear-gradient(90deg,#e052a0,#f15c41);
  padding: 10px;
  margin-top: 40px;
}
.goback{
  background: linear-gradient(90deg,#888adc,#3cacce)!important;
}
.ft-link img{
  width: 40px;
  padding-left: 4px;
}
.morecomment{
  width: 35px!important;
  height: 35px!important;
}
.morecomment img{
  width: 35px;
}
#createq{
  background: linear-gradient(260deg,#337eb9,#384499);
}
.crt{
  display: none;
}
.q{
  padding: 15px;
  font-size: 14px;
  color: #333333e0;
  padding-top:4px;
  margin-bottom:5px;
}
.q p{
  font-size:12px;
  color:#000;
}
.add-comment{
  width: 100%;
  padding-top: 5px;
  margin-top: 5px;
  position: relative;
  margin-bottom: 20px;
}
.clickLike{
  border: none;
  background: none;
  outline: none;
  box-shadow: none;
  display:inline-block;
  margin-left: 40px;
  cursor: pointer;
}
.clickLike:first-child{
  margin-left: 0px;
}
.likeOrTalk,.talkSome{
  width: 15px;
}
.talkSome{
  padding-left: 20px;
}
.totalVotes{
  display: flex;
}
.numberVotes{
  font-weight: bold;
  font-size: 10px;
  padding-top: 3px;
  color: #333;
}
.numberVotes:last-child{
  margin-left:10px;
}
.post-comment{
  border-top:1px solid #fcfcfc;
  padding-top: 4px;
}
.textArea,.textAreaView{
  width: 89%;
  border: none;
  outline: none;
  box-shadow: none;
  padding: 5px;
  font-weight: normal;
  font-size: 12px;
  display: inline-block;
  padding-top: 7px;
  font-family: "comfortaa",cursive;
  height: 30px!important;
  resize: vertical;
}
.askInput input{
  padding: 10px;
  width: 97%;
  border: none;
  padding-left: 5px;
  font-family: "comfortaa",cursive;
  border-bottom: 1px solid #fcfcfc;
  outline: none;
  font-size: 12px;
  height:40px;
}
.askMeetup{
  padding: 10px;
  margin-top: 20px;
  margin-bottom:40px;
}
.askMeetup h1{
  font-size: 1rem;
  margin-bottom: 10px;
}
.textAreaView{
  width: 97%!important;
  height: 50px!important;
  padding: 10px!important;
  padding-left: 3px!important;
}
.postCom{
  border: none;
  position: absolute;
  background: linear-gradient(90deg,#e052a0,#f15c41);
  padding: 4px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  padding-bottom: 2px;
  height: 42px;
  margin-left: 5px;
}
.postCom img{
  width: 20px;
}
#viewMoreComment{
  background: linear-gradient(260deg,#282358,#08090c)!important;
}
.saveQ{
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  background: #e5577f;
  color: #fff;
  font-weight: bold;
  border-radius: 2px;
  height: 50px;
  text-transform: capitalize;
  font-size: 14px;
  font-family: "comfortaa",cursive;
  clear: both;
  display: inline-block;
  margin-top: 10px;
}
.onView{
  justify-content: flex-start!important;
}
.allcommentDisp{
  margin-top: 10px;
  margin-bottom: 30px;
}
.coment-section{
  font-size: 11px;
  margin-bottom: 10px;
  color: #262626;
}
.coment-section h5{
  display: inline-block;
  padding-right: 15px;
  font-size: 12px;
  color:#000;
}
.account-profile{
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding: 40px;
  padding-left: 20px;
  padding-right: 20px;
  grid-gap: 40px;
}
.editAccount{
  padding-left: 20px;
  padding-right: 20px;
  clear: both;
  margin-top: 40px;
  font-family: "comfortaa",cursive;
}
.profile-back{
  position: relative;
  width: 100%;
  height: 300px;
}
.profile-back img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.profile-overlay{
  position: absolute;
  top: 0;
  left: 0;
  background: #28243cd1;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  border-radius: 4px;
}
.profile-info{
  position: absolute;
  top: 0;
  z-index: 10;
  padding: 40px;
}
.profile-image{
  width: 70px;
  border: 2px solid #ddd;
  height: 70px;
  border-radius: 50%;
  margin-top: 30px;
  margin-bottom: 10px;
}
.profile-image img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.profile-names{
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
  color: #fff;
  padding-right: 20px;
  padding-bottom: 4px;
}
.profile-username{
  color: #fff;
}
.other-proInfo{
  min-height: 300px;
  background: #fff;
  box-shadow: 0 5px 15px #ddddddb0;
  border-radius: 4px;
}
.otherproHeader{
  padding: 30px;
  border-bottom: 1px solid #f5f5f9;
  text-transform: capitalize;
}
.otherproHeader h3{
  color: #333;
  font-size: 12px;
  font-weight: normal;
}
.moreInfo{
  padding: 30px;
  font-size: 13px;
}
.moreInfo li{
  padding-top: 10px;
}
.close{
  display: none;
}
.closeAccountBtn{
  margin-top: 20px;
  padding: 10px;
  background:linear-gradient(260deg,#337eb9,#384499);
  border: none;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  font-family: "comfortaa",cursive;
  font-weight: bold;
  text-transform: capitalize;
}
.accountClose{
  background:#b31b9d!important;
}
.editForm{
  width: 100%;
  margin-bottom: 1rem;
}
.editForm label{
  margin-bottom: 5px;
}
.editForm input{
  width: 100%;
  height: 40px;
  padding: 5px;
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  border-radius: 4px;
  font-family: "comfortaa",cursive;
}
.files{
  display: none;
}
.imagText{
  border-bottom: 1px solid #ddd;
  border-radius: 4px;
  position: relative;
  margin-top: 10px;
  height: 15px;
}
.browseBtn{
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -25px;
  padding: 12px;
  border: none;
  font-family: "comfortaa",cursive;
  text-transform: capitalize;
  cursor: pointer;
}
.msgError{
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  z-index: 50;
  background:#e55a88;
  color: #fff;
  transform: translateY(100%);
  transition: 0.6s linear transform;
}
.dispErrors{
  width: 35%;
  margin: auto;
}
.errorHide{
  position: fixed;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  margin: 10px;
  margin-top: -30px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
}
.errorHide p{
  padding-top: 5px;
}
.image-upload{
  width: 100%;
  border-bottom: 1px solid #ddd;
  border-radius: 4px;
}
.image-upload img{
  width: 120px;
  height: 120px;
  border-radius: 2px;
  padding: 4px;
}
/*for admin*/
.admin-greeting{
  clear: both;
  padding: 20px;
  position: relative;
}
.createLink{
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 30px;
  margin-right: 40px;
}
.createLink a{
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 3px;
}
.createLink a:hover{
  background:#e1e1f55c;
}
.createLink a img{
  display: inline-block;
  width: 12px;
}
.createLink a p{
  display: inline-block;
  text-transform: capitalize;
  font-size: 13px;
  color: #333333bf;
  font-weight: bold;
}
.admin-avatar{
  width: 100px;
  height: 100px;
  display: inline-block;
}
.admin-avatar img{
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.admin-name{
  display: inline-block;
  position: absolute;
  margin-top: 30px;
  margin-left: 40px;
}
.lts{
  padding: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 15px;
}
.lts li{
  float: left;
  margin-left: 30px;
}
.ltsImg{
  width: 20px;
  height: 20px;
  position: absolute;
}
.lts a{
  font-size: 14px;
  text-transform: capitalize;
  color: #333;
}
.lts h5{
  padding-left: 30px;
  padding-top: 5px;
}
.lts-tbl{
  padding: 20px;
  padding-top: 0px;
  padding-left: 40px;
  padding-right: 40px;
  clear: both;
}
.responsive-table{
  border-top: 2px solid #ddd;
  box-shadow: 0 5px 15px #ddddddb0;
  padding-bottom: 20px;
}
.table{
  font-weight: normal;
  width: 100%;
  position: relative;
}
.table th, .table td{
  padding: 20px;
  font-size: 13px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}
.mt-imgIco{
  width: 30px;
}
.mt-img{
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 3px;
}
.page-name{
  position: relative;
  margin-top: 30px;
  margin-left: 20px;
}
.action{
  border-left: 1px solid #ddd;
}
.openAction{
  width: 37px;
  height: 37px;
  margin-left: 5px;
  float: left;
  border-radius: 100%;
  margin-top: 5px;
}
.openAction img{
  width: 25px;
  padding-top: 2px;
  padding-left: 3px;
}
.viewMeetUp{
  background: blue;
}
.viewQ{
  background: linear-gradient(90deg,#e052a0,#f15c41);
}
.deleteMeetup{
  background: #ff0088;
}
.delImg{
  width: 25px!important;
  padding-left: 0px!important;
  padding-top: 5px!important;
}
.comBtn{
  display: none;
}
/*media query*/
@media screen and (max-width:768px) {
  .left-side{
    transform: translateX(-100%);
    transition: 0.3s transform linear;
    z-index: 100;
  }
  .close{
    position: fixed;
    background: #e85572;
    width: 40px;
    height: 40px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    border-radius: 50%;
    right: 0;
    margin-right: -45px;
    margin-top: 5px;
    cursor: pointer;
    top: 0;
  }
  .close p{
    padding-top: 10px;
  }
  .top-h{
    padding-left: 10px;
  }
  .top-avatar{
    display: none;
  }
  .top-menu{
    padding-top:0px;
  }
  .top-menu a{
    font-size: 10px;
  }
  .top-name{
    font-size:12px;
  }
  .menuIcon{
    width: 25px;
    height: 25px;
  }
  .right-side{
    margin-left: 0%;
  }
  .menuBar{
    display: block;
    left: 0;
  }
  .menuBar img{
    width: 40px;
  }
  .header-m{
    position: absolute;
    top: 0;
    margin-top: 12px;
  }
  .header-m li{
    float: left;
    margin-left: 0px;
  }
  .header-m li:last-child{
    padding-top: 10px;
    padding-left: 20px;
  }
  .header{
    height: auto;
    border-bottom: none;
    box-shadow: none;
  }
  .new{
    grid-template-columns: 1fr;
  }
  .card-meetup{
    width: 100%;
  }
  .meetup{
    padding-top: 20px;
    margin-top: 0px;
    clear: both;
  }
  .meetupImage{
    height: auto;
  }
  /*view.html*/
  .container{
    padding: 0px;
    clear: both;
  }
  .more-about,.meetQ{
    width: 100%;
    padding: 0px;
    margin-bottom: 4px;
  }
  .meetQ{
    padding-bottom: 0px!important;
    padding: 5px!important;
  }
  .bImg{
    height: auto;
  }
  .meet-link{
    width: auto;
    display: block;
  }
  .linkFixed,.notFixed{
     display: none;
  }
  .asked-question{
    margin-top: 30px;
  }
  .crt{
    display: flex;
  }
  .q{
    padding-top: 0px!important;
    font-size: 12px;
  }
  .textArea{
    width: 80%;
  }
  .account-profile{
    grid-template-columns: 1fr;
    background: #fff;
    margin-top: 40px;
    padding: 0px;
    padding-left: 0px;
    padding-right: 0px;
    grid-gap: 0px;
  }
  .profile-back{
    height: auto;
  }
  .profile-image{
    margin-top: 0px;
  }
  .profile-overlay,.profile-back img,.other-proInfo{
    border-radius: 0px;
  }
  .editAccount{
    padding-left: 0px;
    padding-right: 0px;
  }
  .dispErrors{
    width: 90%;
  }
  .errorHide{
    top: 0;
    margin-top: 4px;
  }
  /*for admin*/
  .admin-name{
    margin-top: 25px;
    margin-left: 14px;
  }
  .admin-name h2{
    font-size: 1.3rem;
  }
  .lts{
    padding: 10px;
    margin-bottom: 20px;
  }
  .lts li{
    margin-left: 20px;
  }
  .lts h5{
    padding-left: 30px;
    padding-top: 5px;
    font-size: 14px;
  }
  .lts-tbl{
    padding-left: 20px;
    padding-right: 20px;
    clear: both;
  }
  .responsive-table{
    overflow-x: auto;
  }
  .page-name{
    margin-left: 0px;
  }
  .page-name h2{
    font-size: 13px;
  }
  .createLink{
    margin-bottom: 20px;
    margin-right: 20px;
  }
  .createLink a{
    padding: 10px;
  }
  .openAction{
    border-radius: 3px;
  }
  .comBtn{
    position: absolute;
    right: 0;
    border: 1px solid #f8f8f8;
    padding: 10px;
    top: 0;
    border-radius: 30px;
    color: #333;
    display:block;
  }

}
</style>
`;

export default Users;
