import { Container, Box, Form } from "./styles";
import QRCode from "qrcode";
import { useState } from "react";
import { Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainBox() {
  const [url, setUrl] = useState("");
  const [qrcode, setqrcode] = useState("");

  function geraQrCode(typedUrl) {
    QRCode.toDataURL(typedUrl)
      .then((url) => {
        console.log(url);
        setqrcode(url)
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Container>
        <Box>
          <Form
            onSubmit={function (e) {
              e.preventDefault();
              {
                geraQrCode(url);
              }
            }}
          >
            <h1> QRCode Generator</h1>
            <FormControl 
            type="text"
            value={url}
              onChange={(e) => setUrl(e.target.value)}/>
            <Button variant="primary" type='submit'> Generate </Button>
            <img src={qrcode} />
            
          </Form>
        </Box>
      </Container>
    </>
  );
}

export default MainBox;
