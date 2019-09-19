import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });



class Editor extends Component {



    render() {
        return (
            <PDFViewer>
                <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section #1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </Page>
                </Document>
            </PDFViewer>
        )
    }

}

export default Editor;