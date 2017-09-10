var type = 'Concept A';
var   question = 'What is your country name ?';
var  answer = 'india';
var image = "img/country.jpg";
var headerheading = "Concept A";
      var Navbar2 = React.createClass({
        getInitialState : function(){
            return {
              concept1 : true,
              concept2 : false
            }

        },
        concept1 : function(){
          this.setState({concept1 : true , concept2 : false});
          headerheading = "Concept A";
          type = "Concept A";
          question = "What is your country name ?";
          answer = "india";
          image = "img/country.jpg";
          document.getElementById('showmessage2').style.display = "none"
          document.getElementById('showmessage').style.display = "none"

          document.getElementById("mySidenav").style.width = "0px";

        },
        concept2 : function(){
          this.setState({concept1 : false , concept2 : true});
          headerheading = "Concept B";
          type = "Concept B";
          question = "What is your city name ?"
          answer = "bangalore";
          image = "img/city.jpeg";

          document.getElementById('showmessage2').style.display = "none"
          document.getElementById('showmessage').style.display = "none"

          document.getElementById("mySidenav").style.width = "0px";
        },
        opennav : function(){
          document.getElementById("mySidenav").style.width = "250px";
        },
        closenav: function(){
          document.getElementById("mySidenav").style.width = "0px";
        },
        render: function(){
          return (
                        <div>
                        <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                          <div className="navbar-header">
                            <a className="navbar-brand" onClick={this.opennav}>&#9776;</a>
                          </div>
                          <ul className="nav navbar-nav">
                            <li className="active"><a>{headerheading}</a></li>

                          </ul>
                        </div>
                      </nav>
                        <div id="mySidenav" className="sidenav">
                                <a  className="closebtn" onClick={this.closenav}>Menu <span className = "cross">&times;</span></a>
                                <a onClick={this.concept1}>Concept A</a>
                                <a onClick={this.concept2}>Concept B</a>
                        </div>
                        <div className = "maincontainer">
                            <Question questionname={question} questionanswer = {answer} />
                        </div>
                      </div>
              );
        }

      });


      var Question = React.createClass({
                submit : function(){
                        if(this.refs.answer.value == this.props.questionanswer){
                          alert("Correct Answer");
                          document.getElementById('showmessage').style.display = "inline"
                          document.getElementById('showmessage2').style.display = "none"

                        }
                        else{
                          alert("Wrong Answer");
                          document.getElementById('showmessage2').style.display = "inline"
                          document.getElementById('showmessage').style.display = "none"


                        }

                },

                render: function(){
                  return (
                    <div className="panel panel-default">
                                <div className="panel-body">
                                  <div>
                                    <img src={image} className="img-rounded image" alt="Cinque Terre"></img>
                                  </div>
                                          <div className="panel panel-default questioncontainer">
                                              <div className="panel-body question"><b>{question}</b></div>
                                          </div>
                                          <div className="form-group">
                                          <label >Answer: <div id="showmessage" className="message">
                                          <a className="label label-success">Correct Answer</a>
                                          </div>
                                          <div id="showmessage2" className="message">
                                          <a className="label label-danger">Wrong Answer</a>
                                          </div>
                                          </label>
                                              <input type="text" className="form-control" ref = "answer"/>
                                          </div>


                                          <div>
                                          <a  className="btn btn-primary btn-primary">
                                              <span className="glyphicon glyphicon-share"></span> Share
                                          </a>
                                          </div>
                                </div>
                                <div className="panel-footer">
                                <center><button className="btn btn-block btn-primary " onClick={this.submit} >
                                Submit
                                </button></center>

                                </div>
                          </div>
                        );
                }

      });

    ReactDOM.render(
      <Navbar2 />,
        document.getElementById('navbar')
      );
