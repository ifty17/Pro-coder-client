import React from 'react';
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import jslogo from '../../assects/jslogo.png'

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
    return (
      <Document>
        <Page style={styles.body}>
          <Text style={styles.header} fixed> 
            JavaScript
          </Text>
          <Image style={styles.image} src={jslogo} />
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            libero illum iste a temporibus, delectus rerum dolore quam!
            Molestias consequuntur non nihil inventore a voluptates, odio, iusto
            eligendi magnam dolor, vel quas modi reprehenderit.
          </Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Page>
      </Document>
    );
};

export default PDFFile;