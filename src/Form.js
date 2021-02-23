import React from 'react'
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core'
import "./Form.css"

function Form() {
    return (
        <div className="form">
            <FormControl>
  <InputLabel htmlFor="my-mortgage-input">Mortgage Amount</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                <Button color="primary" variant="contained">Calculate</Button>
</FormControl>
        </div>
    )
}

export default Form
