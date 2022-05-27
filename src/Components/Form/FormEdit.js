import React, { useState } from "react";
// import { ACCESS_TOKEN } from "../../config/variable.config";
import {
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import axios from "axios";
export const ACCESS_TOKEN = 'ACCESS_TOKEN'

const skills = ["داستان", "آشپزی", "آموزشی"];

export default function FormEdit(props) {
  let product = props.product;
  const [value, setValue] = useState();


  const handleChange = (e) => {
    if (e.target.name !== "thumbnail") {
      setValue({ ...value, [e.target.name]: e.target.value });
    } else {
      let files = e.target.files[0];
      console.log("thumbnail", e.target.files);
      setValue({ ...value, [e.target.name]: files });
    }
  };
  console.log(value);
  function submit() {
    let token = localStorage.getItem(ACCESS_TOKEN);
    const formData = new FormData();
    Object.entries(value).map((entry) => {
      console.log(entry);
      formData.append(entry[0], entry[1]);
    });
    const res = axios
      .post("http://localhost:3002/upload", formData, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <Grid container sx={{ width: 600 }}>
      <Grid item xs={12} md={8}>
        <form>
          <TextField
            label="تصویر کالا"
            name="thumbnail"
            type="file"
            onChange={(e) => handleChange(e)}
            margin="normal"
            fullWidth
          />

          <br />
          <TextField
            label=" نام کالا"
            name="name"
            type="text"
            value={product.name}
            onChange={(e) => handleChange(e)}
            margin="normal"
            fullWidth
          />
          <br />
          <FormControl fullWidth>
            <InputLabel htmlFor="categoryLbl">دسته بندی کالا</InputLabel>
            <Select name="category" 
            value={skills[product.category -1 ]}
            fullWidth onChange={(e) => handleChange(e)}>
              {skills.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            label="توضیحات"
            name="description"
            multiline
            rows="4"
            value={product.description}
            onChange={(e) => handleChange(e)}
            margin="normal"
            fullWidth
          />
          <br />
          <Button color="primary" variant="contained" onClick={submit}>
            ذخیره
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
