import React, { Component } from 'react';
import { Page, Text, View, Document, Link, StyleSheet, PDFViewer, Image, Font } from '@react-pdf/renderer';
import DocumentGenerator from './DocumentGenerator';



class PDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: "adsfasd asdfas"
    }

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(event) {
    this.setState({text: event.target.value})
  }


    render() {
        return (
          <div>
              <div className="row d-flex justify-content-center">
                <PDFViewer width="80%" height="1200">
                  <DocumentGenerator text={this.state.text} />
                </PDFViewer>
              </div>
                <div className="row">
                  <form>
                    <div className="form-group">
                      <textarea className="form-control" id="document-text" rows="20" value={this.state.text} onChange={this.handleChangeText}></textarea>
                    </div>
                  </form>
                </div>
              </div>
        )
    }
}



export default PDF;