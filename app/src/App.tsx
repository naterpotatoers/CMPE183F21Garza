import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import Web3 from "web3";

const defaultValues = {
  vin: "",
  odometer: "",
  serviceReport: "",
};

const App = () => {
  const [account, setAccount] = useState({});
  const [formValues, setFormValues] = useState(defaultValues);
  const [list, setList] = useState([
    { vin: "45a2423kj342", odometer: 10042, serviceReport: "Oil Change" },
    { vin: "45a2423kj342", odometer: 15002, serviceReport: "Oil Change" },
    { vin: "45a2423kj342", odometer: 20000, serviceReport: "Oil Change" },
    { vin: "45a2423kj342", odometer: 26155, serviceReport: "Oil Change" },
  ]);

  async function loadBlockchain() {
    const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();
    const account = (await web3.eth.getAccounts())[0];
    setAccount(accounts);
    console.log(account);
  }

  useEffect(() => {
    loadBlockchain();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <h1>Vehicle Record</h1>
      {/* <p>Account: {account}</p> */}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            id="vin-input"
            name="vin"
            label="VIN"
            type="text"
            value={formValues.vin}
            onChange={handleInputChange}
            inputProps={{ "data-testid": "vin-input" }}
          />
          <TextField
            id="odometer-input"
            name="odometer"
            label="Odometer"
            type="number"
            value={formValues.odometer}
            onChange={handleInputChange}
            inputProps={{ "data-testid": "odometer-input" }}
          />
          <TextField
            id="serviceReport-input"
            name="serviceReport"
            label="Service Type"
            type="text"
            value={formValues.serviceReport}
            onChange={handleInputChange}
            inputProps={{ "data-testid": "serviceReport-input" }}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>

      <List>
        <hr />
        <ListItem>
          <ListItemText>VIN</ListItemText>
          <ListItemText>Odometer</ListItemText>
          <ListItemText>Service Record</ListItemText>
        </ListItem>
        <hr />
        {list.map((item, b) => (
          <ListItem disablePadding key={b}>
            <ListItemText>{item.vin}</ListItemText>
            <ListItemText>{item.odometer}</ListItemText>
            <ListItemText>{item.serviceReport}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default App;
